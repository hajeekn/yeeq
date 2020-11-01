---
title: 用Jsdelivr存储视频
sticky: 1
tags:
  - Jsdelivr
categories:
  - 干货
cover: https://cdn.jsdelivr.net/gh/glahajeekn/imcdn@main/201111054Cover.png
abbrlink: e2973985
date: 2020-11-01 10:35:57
description:
---

<link rel="stylesheet" type="text/css" href="/css/button-an.css">

众所周知，Jsdelivr是个免费、开源的CDN，你可以在上面存储小于20MB的文件

那么视频也可以?当然，但是Jsdelivr对于音视频的解码不太好，在PC上打开直接成为一段音轨。

不过我们可以采用M3U8的方式进行视频存储

接下来就开始教程

# 视频切片

申明一下，这不是简单的切片，这个切片利用了HLS技术:

{% note info modern %}

HLS 的工作原理是把整个流分成一个个小的基于 HTTP 的文件来下载，每次只下载一些。当媒体流正在播放时，客户端可以选择从许多不同的备用源中以不同的速率下载同样的资源，允许流媒体会话适应不同的数据速率。在开始一个流媒体会话时，客户端会下载一个包含元数据的 extended M3U (m3u8) playlist文件，用于寻找可用的媒体流。HLS 只请求基本的 HTTP 报文，与实时传输协议（RTP）不同，HLS 可以穿过任何允许 HTTP 数据通过的防火墙或者代理服务器。它也很容易使用内容分发网络来传输媒体流。

{% endnote %}

在我们的需求中，可以简单地把视频的地址理解为playlist的地址，而playlist就是我们单个视频片段的索引，把较大的视频给宅分就可以绕过存储单件大小限制，同时也符合jsdelivr丢资源的要求，这样就可以用GitHub+Jsdelivr做视频床了。

咋实现呢?

# 获取重要工具-ffmpeg

<a class="btn-beautify button--animated orange larger" href="https://ffmpeg.zeranoe.com/builds/" title="Butterfly" data-pjax-state=""><i class="far fa-hand-point-right fa-fw"></i> <span>Get ffmpeg</span></a>

下载后可以看到有三个exe

![image-20201101122004635](https://cdn.jsdelivr.net/gh/glahajeekn/imcdn@main/images/image-20201101122004635.png)

仅需脱出ffmpeg.exe即可

接着打开终端

输入

``` bash
./ffmpeg.exe
```

![image-20201101122241135](https://cdn.jsdelivr.net/gh/glahajeekn/imcdn@main/images/image-20201101122241135.png)

就会弹出ffmpeg的参数

说明你弄正确了，但你觉得太麻烦的话可以自行百度添加环境变量

# 开始切片

1. 视频转为ts格式，一对一，转换后大小没变化

``` bash
./ffmpeg.exe -y -i 视频.mp4 -vcodec copy -acodec copy -vbsf h264_mp4toannexb 视频.ts
```

![image-20201101123540046](https://cdn.jsdelivr.net/gh/glahajeekn/imcdn@main/images/image-20201101123540046.png)

2. 将ts进行分片，每5秒为一片

``` bash
./ffmpeg.exe -i 视频.ts -c copy -map 0 -f segment -segment_list playlist.m3u8 -segment_time 5 视频%03d.ts
```

![image-20201101123856094](https://cdn.jsdelivr.net/gh/glahajeekn/imcdn@main/images/image-20201101123856094.png)

分片完成后可以看到多了一些ts

之后我们删除你的原视频和原视频转换的ts

3. 使用DPlayer播放器解析

{% note warning modern %}

注:这不是单纯的分片，如果你不信就可以自己打开看看，是乱码。

{% endnote %}

当然直接试图访问m3u8也是不行的，我们需要用hls.js:

{% note info modern %}

hls.js 是一款基于 Media Source Extensions 开发的，用于实现 HTTP Live Streaming 开源JavaScript类库。它可以实现将MPEG-2 和 AAC/MP3码流变成自制的 MP4的分片。并且可以直接绑定在Video 上，实现播放。

{% endnote %}

我们使用DPlayer播放器，只用在DPlayer前引入hls.js就可以了

``` html

<div id="dplayer" class="dplayer-video dplayer dplayer-no-danmaku dplayer-paused"></div>

<script src="https://cdn.jsdelivr.net/npm/jquery"></script>
<script src="https://cdn.jsdelivr.net/npm/hls.js"></script>
<script src="https://cdn.jsdelivr.net/gh/MoePlayer/DPlayer@master/dist/DPlayer.min.js"></script>
```

引入后我们需要对他进行初始化

``` javascript
  $(function(){ 
    const dp = new DPlayer({
      container: document.getElementById('dplayer'),
      autoplay:!0,theme:"#42b983",loop:true,lang:"zh-cn",preload:"auto",volume:Number("0"),
      video: {
          url: 'https://cdn.jsdelivr.net/gh/glahajeekn/vdts@master/go/playlist.m3u8', //自己的m3u8地址
          type: 'hls',
          defaultQuality: 0,
          pic: 'https://i2.hdslb.com/bfs/archive/37785c661455874fe424a6731a9c6b82e31cef7a.jpg', //视频未播放前的封面
          thumbnails: 'thumbnails.jpg',
      },
  });
})
```

初始化完成后就可以用了

效果可以查看我的[VideoPlayer](/VideoPlayer)