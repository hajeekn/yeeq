---
title: 友情链接
sticky: 1
date: 2020-05-17 15:43:50
type: "link"
comments: false
aside: false
---
<script>$(document).ready(function () {
    if(location.href.indexOf("#reloaded")==-1){
        location.href=location.href+"#reloaded";
        location.reload();
    }
})</script><div id='myfriend'></div><script>  var obj = {
    // 容器选择器
    el: '#friend1',
    // gitee主人id
    owner: 'slqwq',
    // gitee仓库
    repo: 'Friends',
    // 排序方式
    direction_sort: 'asc',
    // 按标签排序
    sort_container: ['乐特大佬', 'NOts大佬', 'Gitee友链'],
    // 标签描述
    labelDescr: {
      乐特大佬: "<span style='color:red;'>这可是乐特大佬专属的位置哦!!</span>",
      Nots大佬: "<span style='color:red;'>这可是Nots大佬专属的位置哦!!</span>",
      Gitee友链: "<span style='color:red;'>这些都是我的友链啦~</span>",
    }
  }
  try {
    btf.isJqueryLoad(function () {
      $('.flink').prepend("<div id='friend1'></div>")
      new Friend(obj)
    })
  } catch (error) {
    window.onload = function () {
      btf.isJqueryLoad(function () {
        $('.flink').prepend("<div id='friend1'></div>")
        new Friend(obj)
      })
    }
  }</script>






# 申请友链

{% folding cyan open, 申请须知 %}

{% checkbox green checked, 已使用HTTPS %}

{% checkbox green checked, 无广告 %}

{% checkbox green checked, 转载文章需留原文 %}

{% checkbox green checked, 您的网站是学习/博客/日记的 %}

{% checkbox red checked, 如果您长时间没有更新文章/网站无法访问/取消本站链接本站将直接移除您的友链 %}

{% tabs 个人信息 %}
<!-- tab -->
```
name: SL's Blog
link: https://blog.slqwq.cn
avatar: https://cdn.slblog.ga/pic/logo.png
descr: 梦中做梦,做了个白日梦
```
<!-- endtab -->
{%  endtabs %}

申请方法:

前往[Gitee](https://gitee.com/slqwq/Friends)添加Issues，当管理员审核通过后方可显示

但在这之前，请先确保您已添加本站友链！

详细申请方法已记载到仓库的README.md，按照MD指示方可完成

{% endfolding %}



{% folding red cyan open, 过期的友链们 %}

{% timenode 萌城·博客 %}

名称:萌城·博客 地址:https://men******qwq.com/

{% endtimenode %}

过期的友链请尽快找我重新申请

{% endfolding %}