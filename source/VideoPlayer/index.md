---
title: VideoPlayer
sticky: 1
date: 2020-09-20 11:58:24
comments: false
aside: false
---
{% raw %}
<center><p><strong>本页面仅作为视频播放器，此页面的所有资源均未去水印，所有内容归作者版权所有，播放器采用 DPlayer.js</strong><br><strong>视频采用m3u8格式，采用Jsdelivr加速</strong></p></center>
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
          url: 'https://cdn.jsdelivr.net/gh/slblog-github/SRCDN/ts/playlist.m3u8',
          type: 'hls',
          defaultQuality: 0,
          pic: 'https://i2.hdslb.com/bfs/archive/aec94b20155a459a3d114cbf5a50eea5884188ed.jpg',
          thumbnails: 'thumbnails.jpg',
      },
  });
})
</script>

{% endraw %}