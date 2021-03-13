---
title: 获取JOOX的音乐地址
sticky: 1
tags: [干货]
description: 这是干货哦!!!
categories: [干货]
cover: https://cdn.jsdelivr.net/gh/glahajeekn/imcdn@main/images/COD.png
photos: https://cdn.jsdelivr.net/gh/glahajeekn/imcdn@main/images/COD.png
abbrlink: ebef73e2
copyright_author_href: https://blog.slqwq.cn
author: Hajeekn
date: 2020-11-27 20:00:46
---

Joox 相信很多人都熟悉，它是腾讯音乐的国外版本，可以免费听大部分国内要 VIP 的歌(包括单独付费的歌曲)

今天我来教大家如何获取他的音乐地址

# 进入官网

首先我们进入官网:

[点击进入](https://joox.com)

![](https://cdn.jsdelivr.net/gh/glahajeekn/imcdn@main/images/image-20201127201847101.png#alt=image-20201127201847101#align=left&display=inline&height=875&margin=%5Bobject%20Object%5D&originHeight=875&originWidth=1920&status=done&style=none&width=1920)

看到的应该是这样的场景，如果右上角没出现 Log in 就请参照[CCKNBC 大佬的教程](https://blog.ccknbc.cc/posts/how-to-enjoy-joox-music-service-in-mainland-china/)配置

# 搜索歌曲

在 Search Songs 处搜索歌曲，这里以周杰伦的 Mojiti 为例

![](https://cdn.jsdelivr.net/gh/glahajeekn/imcdn@main/images/image-20201127202346331.png#alt=image-20201127202346331#align=left&display=inline&height=866&margin=%5Bobject%20Object%5D&originHeight=866&originWidth=1919&status=done&style=none&width=1919)

在此页面的时候按下 F12

# F12

切换到 Network

![](https://cdn.jsdelivr.net/gh/glahajeekn/imcdn@main/images/image-20201128074959557.png#alt=image-20201128074959557#align=left&display=inline&height=138&margin=%5Bobject%20Object%5D&originHeight=138&originWidth=569&status=done&style=none&width=569)

看好这里

点击 Play 的时候看有没有新的请求

![](https://cdn.jsdelivr.net/gh/glahajeekn/imcdn@main/images/image-20201128075025464.png#alt=image-20201128075025464#align=left&display=inline&height=53&margin=%5Bobject%20Object%5D&originHeight=53&originWidth=280&status=done&style=none&width=280)

一般都会请求失败，因为 API 被墙了

# 取得 API 地址

我们把鼠标移到这两个新增的请求上面

找到以 [https://api-jooxtt.sanook.com](https://api-jooxtt.sanook.com) 开头的地址，将他复制下来

![](https://cdn.jsdelivr.net/gh/glahajeekn/imcdn@main/images/image-20201128075148198.png#alt=image-20201128075148198#align=left&display=inline&height=861&margin=%5Bobject%20Object%5D&originHeight=861&originWidth=1920&status=done&style=none&width=1920)

在新窗口打开

接着只需要找到 play_url_list 将他打开即可

# End

本文结束
