---
title: 友链们的朋友圈
sticky: 1
date: 2021-02-10 12:10:38
comments: false
aside: false
---
{% raw %}
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Rock-Candy-Tea/hexo-friendcircle-demo@main/css/akilar-SAO.css">
<div id="fcircleContainer"></div>
<script>
  var fdata = {
    apiurl: 'https://circle-3.api.slqwq.cn/api',
    initnumber: 20,
    stepnumber: 10,
    error_img: '/image/404.gif'
  }
  localStorage.setItem("fdatalist",JSON.stringify(fdata))
</script>
<script defer src="https://cdn.jsdelivr.net/gh/Rock-Candy-Tea/hexo-friendcircle-demo@main/js/fetch.js"></script>
<script async src="https://cdn.jsdelivr.net/gh/Rock-Candy-Tea/hexo-friendcircle-demo@main/js/fcircle.js" charset="utf-8"></script>
{% endraw %}