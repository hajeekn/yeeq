---
title: 使用 You-get 下载 YouTube 的视频
sticky: 1
tags: [Python, Terminal]
description: [Python]
categories: [Python]
abbrlink: b6b199d4
date: 2020-12-26 10:01:28
cover: https://rmt.dogedoge.com/fetch/hajeekn/storage/20201226201945.png
photos: https://rmt.dogedoge.com/fetch/hajeekn/storage/20201226201945.png
copyright_author_href: https://blog.slqwq.cn
author: Hajeekn
---

{% note warning simple %}

注:本篇涉及到 Python 和 Terminal!

{% endnote %}

现在大部分视频网站都使用 HTML5 播放器

这也使原来可以轻易下载视频的方法失效

因为我们使用 F12 查看后发现地址变成了 blob

![](https://rmt.dogedoge.com/fetch/hajeekn/storage/20201226200056.png#alt=image-20201226100904088#align=left&display=inline&height=217&margin=%5Bobject%20Object%5D&originHeight=217&originWidth=293&status=done&style=none&width=293)

这是我们很难进行下载，下载后获取的文件大部分都为 m3u8，根本无法进行解析，于是本文章将教大家使用 GitHub 开源项目:[You-get](https://github.com/soimort/you-get)下载视频

(本篇使用 YouTube 示例)

# INSTALL PYTHON

首先进入[Python](https://www.python.org/downloads/)官网下载 Python 最新版

(本篇写于:2020/12/26 最新版本为 Python 3.9.1)

![](https://rmt.dogedoge.com/fetch/hajeekn/storage/20201226200053.png#alt=image-20201226191211672#align=left&display=inline&height=108&margin=%5Bobject%20Object%5D&originHeight=108&originWidth=392&status=done&style=none&width=392)

点击此按钮进行下载

下载后执行下载的文件就可以开始安装了

安装完成后就可进入下一步

# 更换 PIP 源

官方默认 pip 源较慢，于是我们可以将他更改为国内 pip 源

进入 C:\Users%username%

在目录下创建一个名为 pip 的文件夹

pip 文件夹内部新建 pip.ini

文件内写入以下代码

```ini
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
```

接着以管理员身份打开终端

执行

```python
pip install you-get
```

安装 you-get 包

安装完后使用

```bash
you-get
```

查看是否安装成功

安装成功后就可进入下一步

# 下载视频测试

这里我们去 YouTube 上找一个视频

这里以 4K 为例

我们在终端执行以下指令

```bash
you-get https://www.youtube.com/watch?v=zBKei6Ji_WI
```

不过可能会半天出不来，这是因为 you-get(python)无法直接被网页代理软件进行代理(如:SSR/V2Ray/SS/Torjan)

如报错图

![](https://rmt.dogedoge.com/fetch/hajeekn/storage/20201226200045.png#alt=image-20201226193157126#align=left&display=inline&height=246&margin=%5Bobject%20Object%5D&originHeight=246&originWidth=885&status=done&style=none&width=885)

这时候就要使用 Proxy options(高级参数)

我们对指令进行一下修改

修改后如下:

```bash
you-get https://www.youtube.com/watch?v=zBKei6Ji_WI -x 127.0.0.1:10809
```

![](https://rmt.dogedoge.com/fetch/hajeekn/storage/20201226200022.png#alt=image-20201226193240675#align=left&display=inline&height=646&margin=%5Bobject%20Object%5D&originHeight=646&originWidth=1470&status=done&style=none&width=1470)

成功开始下载

# 附文

[点这里下载 Python(蓝奏云)](https://slqwq.lanzous.com/i6sqSjqqyej)
