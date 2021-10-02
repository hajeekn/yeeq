---
title: 用Jsdelivr存储视频
sticky: 1
tags: [Jsdelivr]
categories: [干货]
cover: https://cdn.jsdelivr.net/gh/glahajeekn/imcdn@main/201111054Cover.png
photos: https://cdn.jsdelivr.net/gh/glahajeekn/imcdn@main/201111054Cover.png
abbrlink: e2973985
date: 2020-11-01 10:35:57
description:
copyright_author_href: https://blog.slqwq.cn
author: Hajeekn
---

众所周知，Jsdelivr 是个免费、开源的 CDN，你可以在上面存储小于 20MB 的文件

那么视频也可以?当然，但是 Jsdelivr 对于音视频的解码不太好，在 PC 上打开直接成为一段音轨。

不过我们可以采用 M3U8 的方式进行视频存储

接下来就开始教程

# 视频切片

申明一下，这不是简单的切片，这个切片利用了 HLS 技术:

{% note info modern %}

HLS 的工作原理是把整个流分成一个个小的基于 HTTP 的文件来下载，每次只下载一些。当媒体流正在播放时，客户端可以选择从许多不同的备用源中以不同的速率下载同样的资源，允许流媒体会话适应不同的数据速率。在开始一个流媒体会话时，客户端会下载一个包含元数据的 extended M3U (m3u8) playlist 文件，用于寻找可用的媒体流。HLS 只请求基本的 HTTP 报文，与实时传输协议（RTP）不同，HLS 可以穿过任何允许 HTTP 数据通过的防火墙或者代理服务器。它也很容易使用内容分发网络来传输媒体流。

{% endnote %}

在我们的需求中，可以简单地把视频的地址理解为 playlist 的地址，而 playlist 就是我们单个视频片段的索引，把较大的视频给宅分就可以绕过存储单件大小限制，同时也符合 jsdelivr 丢资源的要求，这样就可以用 GitHub+Jsdelivr 做视频床了。

咋实现呢?

# 获取重要工具-ffmpeg

[ Get ffmpeg](https://ffmpeg.zeranoe.com/builds/)

下载后可以看到有三个 exe

![](https://cdn.jsdelivr.net/gh/glahajeekn/imcdn@main/images/image-20201101122004635.png#alt=image-20201101122004635#align=left&display=inline&height=890&margin=%5Bobject%20Object%5D&originHeight=890&originWidth=1210&status=done&style=none&width=1210)

仅需脱出 ffmpeg.exe 即可

接着打开终端

输入

```bash
./ffmpeg.exe
```

![](https://cdn.jsdelivr.net/gh/glahajeekn/imcdn@main/images/image-20201101122241135.png#alt=image-20201101122241135#align=left&display=inline&height=1020&margin=%5Bobject%20Object%5D&originHeight=1020&originWidth=1920&status=done&style=none&width=1920)

就会弹出 ffmpeg 的参数

说明你弄正确了，但你觉得太麻烦的话可以自行百度添加环境变量

# 开始切片

1. 视频转为 ts 格式，一对一，转换后大小没变化

```bash
./ffmpeg.exe -y -i 视频.mp4 -vcodec copy -acodec copy -vbsf h264_mp4toannexb 视频.ts
```

![](https://cdn.jsdelivr.net/gh/glahajeekn/imcdn@main/images/image-20201101123540046.png#alt=image-20201101123540046#align=left&display=inline&height=383&margin=%5Bobject%20Object%5D&originHeight=383&originWidth=1200&status=done&style=none&width=1200)

2. 将 ts 进行分片，每 5 秒为一片

```bash
./ffmpeg.exe -i 视频.ts -c copy -map 0 -f segment -segment_list playlist.m3u8 -segment_time 5 视频%03d.ts
```

![](https://cdn.jsdelivr.net/gh/glahajeekn/imcdn@main/images/image-20201101123856094.png#alt=image-20201101123856094#align=left&display=inline&height=774&margin=%5Bobject%20Object%5D&originHeight=774&originWidth=1669&status=done&style=none&width=1669)

分片完成后可以看到多了一些 ts

之后我们删除你的原视频和原视频转换的 ts

3. 使用 DPlayer 播放器解析

{% note warning modern %}

注:这不是单纯的分片，如果你不信就可以自己打开看看，是乱码。

{% endnote %}

当然直接试图访问 m3u8 也是不行的，我们需要用 hls.js:

{% note info modern %}

hls.js 是一款基于 Media Source Extensions 开发的，用于实现 HTTP Live Streaming 开源 JavaScript 类库。它可以实现将 MPEG-2 和 AAC/MP3 码流变成自制的 MP4 的分片。并且可以直接绑定在 Video 上，实现播放。

{% endnote %}

我们使用 DPlayer 播放器，只用在 DPlayer 前引入 hls.js 就可以了

```html
<div
  id="dplayer"
  class="dplayer-video dplayer dplayer-no-danmaku dplayer-paused"
></div>

<script src="https://cdn.jsdelivr.net/npm/jquery"></script>
<script src="https://cdn.jsdelivr.net/npm/hls.js"></script>
<script src="https://cdn.jsdelivr.net/gh/MoePlayer/DPlayer@master/dist/DPlayer.min.js"></script>
```

引入后我们需要对他进行初始化

```javascript
$(function () {
  const dp = new DPlayer({
    container: document.getElementById("dplayer"),
    autoplay: !0,
    theme: "#42b983",
    loop: true,
    lang: "zh-cn",
    preload: "auto",
    volume: Number("0"),
    video: {
      url: "https://cdn.jsdelivr.net/gh/glahajeekn/vdts@master/go/playlist.m3u8", //自己的m3u8地址
      type: "hls",
      defaultQuality: 0,
      pic: "https://i2.hdslb.com/bfs/archive/37785c661455874fe424a6731a9c6b82e31cef7a.jpg", //视频未播放前的封面
      thumbnails: "thumbnails.jpg",
    },
  });
});
```

初始化完成后就可以用了

效果可以查看我的[VideoPlayer](/VideoPlayer)
