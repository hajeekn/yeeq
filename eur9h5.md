---
title: Floccus 食用教程
sticky: 1
tags: [书签同步]
description: 书签还在傻傻的导入导出?快来试试 Floccus
categories: [书签同步]
cover:
photos:
abbrlink: eur9h5la
date: 2021-04-18 10:49:42
copyright_author_href: https://blog.slqwq.cn
author: Hajeekn
---

本文章首发于[语雀](https://www.yuque.com/ladjeek/ygg4q6)!
通过各种高科技功能同步到[Hajeekn 的博客](https://blog.slqwq.cn)
{% note purple 'far fa-hand-scissors' flat %}
演示过程基于 Twinkstar(星愿)浏览器,其他浏览器可能大致步骤一样
{% endnote %}

# 什么是 Floccus

Floccus 是一个在 GitHub 上的开源项目，该项目的官方简介如下
{% note blue no-icon %}
Sync your bookmarks across browsers via Nextcloud, WebDAV or a local file (and thus any file sync solution).
{% endnote %}
简单的说它就是一个支持 Google Chrome 和 Mozilla Firefox 跨平台同步的一个插件，依赖于 WebDAV、nextcloud、本地文件等

# 下载并安装 Floccus 插件

{% btn 'https://chrome.google.com/webstore/detail/floccus/fnaicdffflnofjppbagibeoednhnbjhg',Chrome 网上应用店,far fa-hand-point-right,orange larger %}
{% btn 'https://addons.mozilla.org/en-US/firefox/addon/floccus',Firefox 应用程式,far fa-hand-point-right,orange larger %}
{% btn 'https://github.com/marcelklehr/floccus/releases/',GitHub Release 下载,far fa-hand-point-right,orange larger %}

# 配置坚果云

坚果云支持 WebDAV,并且在国内,速度快,所以我们就选用了坚果云
{% btn 'https://jianguoyun.com/',坚果云官网,far fa-hand-point-right,blue larger %}
![](https://cdn.nlark.com/yuque/0/2021/png/12488964/1618715005283-b7177acd-b9df-4944-98cf-3300bb5852c7.png#clientId=ub7b6890d-a77c-4&from=paste&height=416&id=ub6f124b8&margin=%5Bobject%20Object%5D&originHeight=832&originWidth=1892&originalType=binary&size=453598&status=done&style=none&taskId=u281f9883-1a8a-4cde-a9b4-7aa5901cc9a&width=946)
如果你有账号点击登录
如果你没有账号点击注册
我有账号就直接登录了
![](https://cdn.nlark.com/yuque/0/2021/png/12488964/1618715053686-61e82c8f-55a8-4eab-bf0f-7fb26304b4ae.png#clientId=ub7b6890d-a77c-4&from=paste&height=434&id=u47e5d876&margin=%5Bobject%20Object%5D&originHeight=867&originWidth=1920&originalType=binary&size=118308&status=done&style=none&taskId=u5dde7d28-f41c-4ba5-ae0a-87630de0953&width=960)
进入后可以看见这些东西
sync 刚开始是没有的
接下来我们可以创建一个文件夹用于存放书签文件
这边命名为 sync,你也更改
在坚果云刚刚创建的文件夹中创建一个名为 bookmarks.xbel 的文件,文件内放入这些内容:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE xbel PUBLIC "+//IDN python.org//DTD XML Bookmark Exchange Language 1.0//EN//XML" "http://pyxml.sourceforge.net/topics/dtds/xbel.dtd">
<xbel version="1.0">
</xbel>

```

然后保存就可以了
接下来进入账号信息
安全选项
![](https://cdn.nlark.com/yuque/0/2021/png/12488964/1618715264758-87aea430-8870-45fe-9913-cad3d0d3d44b.png#clientId=ub7b6890d-a77c-4&from=paste&height=371&id=ub1eca642&margin=%5Bobject%20Object%5D&originHeight=741&originWidth=1627&originalType=binary&size=100495&status=done&style=none&taskId=u928bf8b5-b52a-412e-ad3a-8b704bc32f8&width=813.5) 点击添加第三方应用
点击生成密码

# 配置 Floccus 插件

打开 Floocus 选择新建账户
![](https://cdn.nlark.com/yuque/0/2021/png/12488964/1618716477649-7f62e615-ae1b-4b4b-ba68-e9a20720ad4c.png#clientId=ub7b6890d-a77c-4&from=paste&height=295&id=u2197c51b&margin=%5Bobject%20Object%5D&originHeight=589&originWidth=975&originalType=binary&size=53403&status=done&style=none&taskId=ub7053c12-eb72-4fc7-a0a1-b52dacab720&width=487.5)
WEBDAV URL 写： https://dav.jianguoyun.com/dav/
用户名写示例里面的
![](https://cdn.nlark.com/yuque/0/2021/png/12488964/1618716522014-b579dd15-99e7-4a70-bf69-74906eeaffe2.png#clientId=ub7b6890d-a77c-4&from=paste&height=144&id=uc5e5cb15&margin=%5Bobject%20Object%5D&originHeight=288&originWidth=718&originalType=binary&size=17383&status=done&style=none&taskId=u2736370c-5ae5-4d74-bf74-6b5cf08e07a&width=359)
密码写你的用户密码
书签路径写自己新建的文件夹/bookmarks.xbel
接下来点击保存即可
