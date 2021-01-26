---
title: 使用Cloud Studio在云端写作✍
sticky: 5
tags: [Hexo, 云端, 高效写作]
description: 什么?你外出时还带一台电脑，太low了啊
categories: [Hexo, 云端写作]
cover: https://rmt.dogedoge.com/fetch/hajeekn/storage/20210118112009.png
photos: https://rmt.dogedoge.com/fetch/hajeekn/storage/20210118112009.png
abbrlink: 2ir0l12g
date: 2021-01-21 20:00:46
copyright_author_href: https://blog.slqwq.cn
author: Hajeekn
id: 26
---

本文章首发于[语雀](https://www.yuque.com/ladjeek/ygg4q6/af1bhg)!
通过各种高科技功能同步到[Hajeekn 的博客](https://blog.slqwq.cn)

Hey，这篇文章我们会为你介绍一个写作的新方法------Cloud Studio 云写作

# 初始化 Cloud Studio

想要在 Cloud Studio 云写作，首先你要上传源码到仓库。
你可以上传到 GitLab、GitHub、Coding 等代码托管商
首先我们打开 Cloud Studio
地址为你的项目名.cloudstudio.net/dashboard/workspace
进入后选择新建工作空间
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1611222120773-c5d20529-7f4b-477b-b735-8f7f7392f462.png#align=left&display=inline&height=102&margin=%5Bobject%20Object%5D&name=image.png&originHeight=203&originWidth=539&size=7574&status=done&style=none&width=269.5)
工作空间名可以随便填
运行环选择 Node.js
代码来源可以选择空

# 同步仓库

现在进入工作空间后我们选择上栏的终端
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1611367024807-7eb3eb25-f171-4f47-8e6e-4c62afc4ee53.png#align=left&display=inline&height=25&margin=%5Bobject%20Object%5D&name=image.png&originHeight=49&originWidth=1237&size=11027&status=done&style=none&width=618.5)
新建终端
然后在下面就会出现类似这样的东西
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1611367057784-c877204a-5f37-4e8a-9cee-fc4aec40e5fb.png#align=left&display=inline&height=144&margin=%5Bobject%20Object%5D&name=image.png&originHeight=288&originWidth=1604&size=17780&status=done&style=none&width=802)
这就是我们的终端了，现在你要把你博客上传到 GitHub 之类的代码托管网站上，方便我们同步。
在你的终端内输入

````
git clone 你的仓库地址 .
```bash
git clone 你的仓库地址 .
````

![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1611367729992-72d4fbfb-e208-414e-bc71-bc6753f34fe7.png#align=left&display=inline&height=357&margin=%5Bobject%20Object%5D&name=image.png&originHeight=714&originWidth=375&size=44304&status=done&style=none&width=187.5)
克隆完后在右边就会出现你的文件，这时候你就可以像本地一样正常写文章了哦
（其实笔者还是认为 GitHub Actions 自动部署好一点)

# Thanks For You

## ©2020-Now year 本篇文章由 SL 发布到语雀，通过百度云函数及 Webhook 同步到 SL 的博客~未经允许，可以转载
