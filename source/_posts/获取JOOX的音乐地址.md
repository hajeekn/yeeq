---
title: 获取JOOX的音乐地址
sticky: 1
tags:
  - 干货
description:
  - 干货
categories:
  - 干货
cover: 'https://cdn.jsdelivr.net/gh/glahajeekn/imcdn@main/images/COD.png'
abbrlink: ebef73e2
date: 2020-11-27 20:00:46
---

Joox相信很多人都熟悉，它是腾讯音乐的国外版本，可以免费听大部分国内要VIP的歌(包括单独付费的歌曲)

今天我来教大家如何获取他的音乐地址

# 进入官网

首先我们进入官网:

[点击进入](https://joox.com)

![image-20201127201847101](https://cdn.jsdelivr.net/gh/glahajeekn/imcdn@main/images/image-20201127201847101.png)

看到的应该是这样的场景，如果右上角没出现Log in就请参照[CCKNBC大佬的教程](https://blog.ccknbc.cc/posts/how-to-enjoy-joox-music-service-in-mainland-china/)配置

# 搜索歌曲

在Search Songs处搜索歌曲，这里以周杰伦的Mojiti为例

![image-20201127202346331](https://cdn.jsdelivr.net/gh/glahajeekn/imcdn@main/images/image-20201127202346331.png)

 在此页面的时候按下F12

# F12

切换到Network

![image-20201128074959557](https://cdn.jsdelivr.net/gh/glahajeekn/imcdn@main/images/image-20201128074959557.png)

看好这里

点击Play的时候看有没有新的请求

![image-20201128075025464](https://cdn.jsdelivr.net/gh/glahajeekn/imcdn@main/images/image-20201128075025464.png)

一般都会请求失败，因为API被墙了

# 取得API地址

我们把鼠标移到这两个新增的请求上面

找到以 https://api-jooxtt.sanook.com 开头的地址，将他复制下来

![image-20201128075148198](https://cdn.jsdelivr.net/gh/glahajeekn/imcdn@main/images/image-20201128075148198.png)

在新窗口打开

接着只需要找到play_url_list将他打开即可

# End

本文结束