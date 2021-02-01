---
title: 如何在自己网站上添加pace.js进度条
sticky: 1
abbrlink: 2c805e6b
date: 2020-05-16 14:07:44
tags:
description: [PACE]
cover: https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/2516Cover.png
photos: https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/2516Cover.png
copyright_author_href: https://blog.slqwq.cn
author: Hajeekn
---

相信各位站长们不喜欢网站普普通通的加载方式，那么今天 SL 就带来如何给自己网站添加 pace.js 进度条的教程

首先进入https://github.hubspot.com/pace/

看到最上面蓝色的字(Star on GitHubDownload ZIP（v 版本号)

点击一下后面的 DownloadZIP

下载下来后可能是个压缩包

双击打开

打开后有个文件夹，如果没有返回上一个目录

将文件夹解压到你 Hexo 目录\themes\你主题\source\js 目录下

然后进入主题文件夹找到 layout 文件夹进入

进入之后找到\_partial

找到 head.XXX

双击打开

接下来在内部添加

```
&lt;script src="/js/pace-1.0.2/pace.min.js'>"&lt;/script&gt;
&lt;ink href="/js/pace-1.0.2/themes/blue/pace-theme-loading-bar.css" rel="stylesheet"&gt;
```

如果嫌弃样式不好看可以去https://github.hubspot.com/pace/docs/welcome/

找个自己喜欢的

记住名字，去你解压 PACE 的目录下找到 themes

进入后找到你喜欢的颜色

然后在颜色文件夹找到你喜欢的样式

复制名称

替换本博客的 pace-theme-loading-bar

后缀不用换
