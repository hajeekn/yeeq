---
title: 使用 Notion 构建自己的博客
sticky: 1
tags: [Notion]
description:
categories:
cover: https://www.notion.so/image/https%3A%2F%2Fwww.notion.so%2Fimages%2Fpage-cover%2Fmet_bruegel_1565.jpg?table=block&id=af2e1767-5899-4b77-bb0b-c936f960ca6d&cache=v2
abbrlink: pgczmw
date: 2022-03-12 07:49:46
copyright_author_href: https://blog.slqwq.cn
author: Hajeekn
---

本文章首发于[Hajeekn の狂人日记](https://slqwq.cn/)!
通过各种高科技功能同步到[Hajeekn 的博客](https://blog.slqwq.cn)
本篇文章使用 Notion 编写

# 🎶 Notion Build Blog!

**Notion**   **Blog**

👋 我是 Hajeekn,这是我用 Notion 发布的第一篇文章

这篇文章讲述了我是如何使用 `**Notion + Vercel + Next.js**`搭建”狂人日记”

# Notion 简介

Notion 是一款非常干净、具有设计感、能使人专注使用的笔记应用

![](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f43a8bb9-bc7e-43f9-a47f-4722fa3c41ef/Untitled.png#crop=0&crop=0&crop=1&crop=1&id=L8F26&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

## Notion 功能介绍(略)

1. 它有着部分 Markdown 语法支持
1. 它支持常见的 Code / Toggle List 等标签

进入笔记页面,输入一串文字,然后将它们全选

![](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3098f68b-3270-4a14-b56d-702236488a79/Untitled.png#crop=0&crop=0&crop=1&crop=1&id=fBBW6&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

你会看到小方框工具栏

点击 Text 可以设置文本样式

![](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/252345f7-e6a4-453c-b671-547af042d237/Untitled.png#crop=0&crop=0&crop=1&crop=1&id=CyDtA&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

点击 Link 可以将文字超链接

![](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/20c53fef-10f0-4f5d-8b70-b02f28554a82/Untitled.png#crop=0&crop=0&crop=1&crop=1&id=UIbYa&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

点击 B 可以加粗文字(或者快捷键 `Ctrl` + `B`)

点击 _i_ 可以让文字变成斜体(或者快捷键 `Ctrl` + `i`)

点击 U 可以让文字出现下划线(或者快捷键 `Ctrl` + `u`)

······更多功能请自己探索

# 开始部署

进入[**该仓库**](https://github.com/transitive-bullshit/nextjs-notion-starter-kit)

![](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ba1b03f7-5e86-4c94-96dc-2d0e924a6398/Untitled.png#crop=0&crop=0&crop=1&crop=1&id=lO8AQ&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

选择 Fork

接着进入 site.config.js

![](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a67d7a4c-75ec-48f6-8b38-3095a08dbf6c/Untitled.png#crop=0&crop=0&crop=1&crop=1&id=B2xOJ&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

将红框部分都修改为自己的

进入笔记页面(全局笔记页面)

选择 Share

![](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5677b32f-a9e6-4b1f-8540-240a11f99e18/Untitled.png#crop=0&crop=0&crop=1&crop=1&id=uA6O3&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

复制链接

会复制类似这样的链接

[https://hajeekn.notion.site/Hajeekn-6b0c2e2b7da3416cbbd1481b17d6a98b](https://www.notion.so/Hajeekn-6b0c2e2b7da3416cbbd1481b17d6a98b)

去掉前面的网站,只要`**Hajeekn-6b0c2e2b7da3416cbbd1481b17d6a98b**`

将他粘贴到 PageId 处

然后修改其他内容

domain 处写你的 Notion Page 页面

点击 Share

选择 Copy Link

将拷贝的链接粘贴进去就行了

然后进入 `**Vercel**`

选择 New Project

![](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/83b7485e-803b-41fb-9fea-8941071e3fe9/Untitled.png#crop=0&crop=0&crop=1&crop=1&id=AbjxB&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

选择你刚 Fork 的仓库

![](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/aa844e97-13cf-4966-95a6-afafa68a7730/Untitled.png#crop=0&crop=0&crop=1&crop=1&id=BFYYs&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

一切配置完成之后就点击 Deploy 吧

之后你就可以看到你的博客了
