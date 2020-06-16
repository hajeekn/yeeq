---
title: 从零开始搭建Hexo博客 1部分
sticky: 1
tags: 搭建Hexo系列
abbrlink: 7a1e39fd
date: 2020-05-26 21:28:18
description:
---
# 第一步
打开<a href="https://git-scm.com/">Git官网</a><br>
<img src="https://cdn.slblog.ga/pic/post/2020526/1.png">
点击Downloads
<img src="https://cdn.slblog.ga/pic/post/2020526/2.png"><br>
选择适合的版本
接下来就是安装git啦~
这步相信你们都会，就不多说啦~
{% checkbox green checked, 我确定我已经安装Git %}
{% checkbox red checked, 并且未安装导致的错误由自己承担 %}

# 第二步
打开<a href="https://nodejs.org/">Node.js官网</a><br>
打开后选择下载LTS版本<br>
否则会报错的哦
接下来又是安装
{% checkbox green checked, 我确定我已经安装Node.js %}
{% checkbox red checked, 并且未安装导致的错误由自己承担 %}

# 第三步
在电脑上新建一个文件夹<br>
名字随意<br>
进入创建的那个文件夹<br>
右键选择Git Bash Here<br>
在打开的窗口输入:<br>
```
npm install hexo-cli -g
等待安装完成
出现终端后
输入:
hexo init
```

命令解析:
npm install hexo-cli -g用来全局安装Hexo
hexo init用来初始化Hexo
到了这步，Hexo就安装完成啦。
关于主题配置、插件安装等为 从零开始搭建Hexo博客 2部分的内容
敬请期待吧~


