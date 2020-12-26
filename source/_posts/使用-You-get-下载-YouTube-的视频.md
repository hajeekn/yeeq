---
title: 使用 You-get 下载 YouTube 的视频
sticky: 1
tags:
  - Python
  - Terminal
description:
  - Python
categories:
  - Python
abbrlink: b6b199d4
date: 2020-12-26 10:01:28
cover:
- https://rmt.dogedoge.com/fetch/hajeekn/storage/20201226201945.png
---

{% note warning simple %}
注:本篇涉及到Python和Terminal!
{% endnote %}

现在大部分视频网站都使用HTML5播放器

这也使原来可以轻易下载视频的方法失效

因为我们使用F12查看后发现地址变成了blob

![image-20201226100904088](https://rmt.dogedoge.com/fetch/hajeekn/storage/20201226200056.png)

这是我们很难进行下载，下载后获取的文件大部分都为m3u8，根本无法进行解析，于是本文章将教大家使用GitHub开源项目:[You-get](https://github.com/soimort/you-get)下载视频

(本篇使用YouTube示例)

# INSTALL PYTHON

首先进入[Python](https://www.python.org/downloads/)官网下载Python最新版

(本篇写于:2020/12/26最新版本为Python 3.9.1)

![image-20201226191211672](https://rmt.dogedoge.com/fetch/hajeekn/storage/20201226200053.png)

点击此按钮进行下载

下载后执行下载的文件就可以开始安装了

安装完成后就可进入下一步

# 更换PIP源

官方默认pip源较慢，于是我们可以将他更改为国内pip源

进入C:\Users\%username%

在目录下创建一个名为pip的文件夹

pip文件夹内部新建pip.ini

文件内写入以下代码

``` ini
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
```

接着以管理员身份打开终端

执行

``` python
pip install you-get
```

安装you-get包

安装完后使用

``` bash
you-get
```

查看是否安装成功

安装成功后就可进入下一步

# 下载视频测试

这里我们去YouTube上找一个视频

这里以4K为例

我们在终端执行以下指令

``` bash
you-get https://www.youtube.com/watch?v=zBKei6Ji_WI
```

不过可能会半天出不来，这是因为you-get(python)无法直接被网页代理软件进行代理(如:SSR/V2Ray/SS/Torjan)

如报错图

![image-20201226193157126](https://rmt.dogedoge.com/fetch/hajeekn/storage/20201226200045.png)

这时候就要使用Proxy options(高级参数)

我们对指令进行一下修改

修改后如下:

``` bash
you-get https://www.youtube.com/watch?v=zBKei6Ji_WI -x 127.0.0.1:10809
```

![image-20201226193240675](https://rmt.dogedoge.com/fetch/hajeekn/storage/20201226200022.png)

成功开始下载

# 附文

<a href="https://slqwq.lanzous.com/i6sqSjqqyej" target="_blank" rel="noopener" class="button button-glow button-border button-rounded button-primary one-pan-link-mark" data-pjax-state=""><span class="one-pan-tip one-pan-tip-mark one-pan-tip-success">点这里下载Python(蓝奏云)</span></a>