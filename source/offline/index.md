---
title: 建立连接时出现了一些错误
sticky: 1
date: 2022-02-07 11:53:47
comments: false
aside: false
---
{% raw %}
<center><h1 style="color:red;">Oops! 你似乎离线了</h1></center>
<center><h2 style="color:red;">由于我们无法从任何服务器上获取网页内容,所以您可能离线了</h2></center>
<center><p>如果你能看到这个页面,很大可能是从Service Worker跳转过来的</p></center>
<center><p>请检查你的本地网络,是否屏蔽了本站或者网络出错</p></center>
<center><h3 style="color:red;">当前连接状态: </h3><div id="statusing">undefined</div></center>
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
Check('https://blog.slqwq.cn/favicon.ico')
</script>
{% endraw %}