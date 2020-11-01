---
title: VideoPlayer
sticky: 1
date: 2020-09-20 11:58:24
comments: false
aside: false
---
{% raw %}

<script>$(document).ready(function () {
    if(location.href.indexOf("#reloaded")==-1){
        location.href=location.href+"#reloaded";
        location.reload();
    }
    })</script>
<center><p><strong>本页面仅作为视频播放器，此页面的所有资源均未去水印，所有内容归作者版权所有，播放器采用 DPlayer.js</strong><br><strong>视频采用m3u8格式，采用Jsdelivr加速</strong></p></center>
<marquee> <font size="5"> <font color="#0000FF">当</font> <font color="#FF0000">前</font> <font color="#FF7F00">正</font> <font color="#34A853">播</font> <font color="#9B30FF">放</font> <font color="#00C5CD">[</font> <font color="#D02090">T</font> <font color="#00688B">S</font> <font color="#34A853">K</font> <font color="#9B30FF">]</font> <font color="#00C5CD">的</font> <font color="#D02090">视</font> <font color="#0000FF">频</font> <font color="#00688B">!</font> <font color="#34A853">!</font> <font color="#00C5CD">!</font></font></marquee>

<center><strong><p>
    视频地址:https://www.bilibili.com/video/BV1hK411T7ba
    </p></strong></center>
<script src="https://cdn.jsdelivr.net/gh/MoePlayer/DPlayer/dist/DPlayer.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/jquery"></script>

<script src="https://cdn.jsdelivr.net/npm/hls.js"></script>

<div id="dplayer" class="dplayer-video dplayer dplayer-no-danmaku dplayer-paused"></div>

<script>
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
</script>

{% endraw %}