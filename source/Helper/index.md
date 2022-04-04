---
title: HajeeknのHelper
sticky: 1
date: 2022-02-07 19:16:16
aside: false
comments: false
---
{% raw %}
<script>
function Check(url) {
    var styleEnda = document.createElement('style');
    var styleEnd = document.createElement('style');
    var maining = new Image();
    var Dates = new Date().getTime();
    maining.src = url + "?time=" + Dates;
    var status = false;
    maining.onload = function() {
        status = true;
        console.log('检查成功,可以正常连接到服务器');
     };
     maining.onerror = function() {
       var timer = setTimeout(function() {
           if(!status) {
               status = false;
               console.log('检查成功,无法正常连接到服务器');
            }
       },1500);
     }
if (status = true) {
    document.getElementById('statusing').innerHTML="服务器通信正常";
    styleEnda.innerHTML="#statusing{color: green;}"
    document.head.appendChild(styleEnda);
} else {
    document.getElementById('statusing').innerHTML="服务器通信异常";
    styleEnd.innerHTML="#statusing{color: red;}"
    document.head.appendChild(styleEnd);
};
};
</script>
<center><p style="padding-left: 1.4rem;position: relative;margin: 1rem 0 .7rem;color: var(--text-highlight-color);font-weight: 700;display: block; font-size: 2em; margin-block-start: 0.67em; margin-block-end: 0.67em; margin-inline-start: 0px; margin-inline-end: 0px; font-weight: bold;">如果在浏览网页时莫名其妙出现 404 错误 | 无法访问</p></center>
<center><p style="display: block; font-size: 1.5em; margin-block-start: 0.83em; margin-block-end: 0.83em; margin-inline-start: 0px; margin-inline-end: 0px; font-weight: bold;">可以在此处管理用户端</p></center>
<center><p style="display: block; font-size: 1.17em; margin-block-start: 1em; margin-block-end: 1em; margin-inline-start: 0px; margin-inline-end: 0px; font-weight: bold;">页面开发中...</p></center>
<center><div  class="CoolButton wow wowpanels animate__animated" onclick="Check('https://blog.slqwq.cn/favicon.ico');"><a href="#">刷新状态</a></div></center>
<center><p style="color:red;display: block; font-size: 1.17em; margin-block-start: 1em; margin-block-end: 1em; margin-inline-start: 0px; margin-inline-end: 0px; font-weight: bold;">当前与服务器的连接状态(静态页面): <div id="statusing"></div></p></center>
{% endraw %}
