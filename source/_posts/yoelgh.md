---
title: Windows Subsystem for Android™ 安装教程
sticky: 1
tags: [Windows]
description:
categories: [Windows]
cover: https://rmt.ladydaily.com/fetch/hajeekn/storage/202204171126912.png
photos: https://rmt.ladydaily.com/fetch/hajeekn/storage/202204171126912.png
abbrlink: yoelghal
date: 2021-10-29 19:05:11
copyright_author_href: https://blog.slqwq.cn
author: Hajeekn
---

本文章首发于[语雀](https://www.yuque.com/ladjeek/ygg4q6)!
通过各种高科技功能同步到[Hajeekn 的博客](https://blog.slqwq.cn)
微软的安卓子系统已经发布很久了,这篇文章教大家如何免美区免亚马逊安装 **Windows Subsystem for Android™**

# 获取并安装 Windows Subsystem for Android™ 包

[https://www.microsoft.com/en-us/p/windows-subsystem-for-android-with-amazon-appstore/9p3395vx91nr?activetab=pivot:overviewtab](https://www.microsoft.com/en-us/p/windows-subsystem-for-android-with-amazon-appstore/9p3395vx91nr?activetab=pivot:overviewtab)
这是 Windows Subsystem for Android™ 的微软应用商店地址,但是显然是不能在国区安装的
![](https://rmt.ladydaily.com/fetch/hajeekn/storage/202204171126089.png#crop=0&crop=0&crop=1&crop=1&id=DE8LP&originHeight=1020&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
所以我们需要对它进行抓包
[https://store.rg-adguard.net/](https://store.rg-adguard.net/)
进入这个网站
将商店地址填写进去
保证填写后的配置如下
![](https://rmt.ladydaily.com/fetch/hajeekn/storage/202204171127030.png#crop=0&crop=0&crop=1&crop=1&id=WLFHV&originHeight=435&originWidth=937&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
这边注意通道选择 **Slow(Windows Insider Slow) **
配置好后点击旁边的"√"
稍等一会儿列表就出来了
出来之后划到最下方,找到 1.21GB 的包,点击它下载下来
下载可以使用多线程软件加快速度
下载好后你会得到一个 msixbundle
![](https://rmt.ladydaily.com/fetch/hajeekn/storage/202204171127520.png#crop=0&crop=0&crop=1&crop=1&id=JHdoS&originHeight=203&originWidth=131&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
这个包不能直接安装,直接安装会报错
我们需要使用 Powershell 安装
**用管理员打开 Powershell**
用这个指令安装

```powershell
add-appxpackage "文件地址"
```

对于 Windows 11
你获取文件地址可以右键文件选择获取文件地址

![](https://rmt.ladydaily.com/fetch/hajeekn/storage/202204171127335.png#crop=0&crop=0&crop=1&crop=1&id=kE8Kt&originHeight=587&originWidth=1204&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
安装好后任务栏会出现 Windows Subsystem for Android™
这时已经安装完成了

# 配置 Windows Subsystem for Android™

## 配置 ADB

打开 Windows Subsystem for Android™
将子系统资源调整为持续
![](https://rmt.ladydaily.com/fetch/hajeekn/storage/202204171127092.png#crop=0&crop=0&crop=1&crop=1&id=KquZl&originHeight=194&originWidth=1178&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
接着打开开发者模式
![](https://rmt.ladydaily.com/fetch/hajeekn/storage/202204171128036.png#crop=0&crop=0&crop=1&crop=1&id=LgLDB&originHeight=98&originWidth=1206&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
然后我们需要安装 ADB
[SDK Platorm Tools](https://developer.android.google.cn/studio/releases/platform-tools)
进入后依照系统版本选择 ADB
![](https://rmt.ladydaily.com/fetch/hajeekn/storage/202204171129876.png#crop=0&crop=0&crop=1&crop=1&id=NdOYc&originHeight=434&originWidth=937&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
将下载好的 ADB 解压到一个你不会动到的地方
我放在了系统盘根目录
![](https://rmt.ladydaily.com/fetch/hajeekn/storage/202204171129765.png#crop=0&crop=0&crop=1&crop=1&id=FJSce&originHeight=806&originWidth=1362&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
接着打开高级系统设置
选择环境变量
在系统变量内新建一个变量叫做 "adb"
![](https://rmt.ladydaily.com/fetch/hajeekn/storage/202204171129310.png#crop=0&crop=0&crop=1&crop=1&id=qLPNl&originHeight=217&originWidth=839&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
变量值写你放 adb 的文件夹
比如我的是 C:\adb 这里就写 C:\adb
接着双击用户变量的 Path
![](https://rmt.ladydaily.com/fetch/hajeekn/storage/202204171129451.png#crop=0&crop=0&crop=1&crop=1&id=yto8B&originHeight=664&originWidth=677&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
在这里新建一个
值写 %adb%

## 驱动安装

在极少数情况下,会出现与驱动有关的错误,这可能就是你没有安装 adb 驱动
资源 by: [晨中网络科技](https://jamcz.com/)
进入 [https://cz-jam.lanzoui.com/iTbJrtpfa5e](https://cz-jam.lanzoui.com/iTbJrtpfa5e) (提取码 intr)
下载.7z 文件并解压
在里面根据系统型号选择程序
32 选择 x32
64 选择 x64
这时问题应该就解决了

## 调整内存(非必须)

微软官方给的推荐要求是内存为 16GB
我的机带内存是 8GB
所以就要通过虚拟内存来增加了
进入高级系统设置
选择性能设置
进入高级选项卡,点击虚拟内存下的更改
将自动管理所有驱动器的分页文件大小取消
选择一个空间够的盘,选择自定义大小,根据需要调整
![](https://rmt.ladydaily.com/fetch/hajeekn/storage/202204171129975.png#crop=0&crop=0&crop=1&crop=1&id=ca0Zf&originHeight=694&originWidth=508&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
注意 GB 和 MB 之间的进率是 1024
1GB = 1024MB
1024GB = 1024\*1024MB
调整完后别忘了点击设置
然后在点击确定

# 使用 Windows Subsystem for Android™

## 安装 APK

Windows Subsystem for Android™ 是支持安装第三方 APK 的,需要通过 ADB 来安装
在安装 APK 之前你需要点击"文件"
启动一次 Windows Subsystem for Android™
![](https://rmt.ladydaily.com/fetch/hajeekn/storage/202204171130047.png#crop=0&crop=0&crop=1&crop=1&id=OxIuv&originHeight=794&originWidth=1350&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)出现这个界面后就可以关闭窗口了
打开开发者模式后会出现一行小字
![](https://rmt.ladydaily.com/fetch/hajeekn/storage/202204171130483.png#crop=0&crop=0&crop=1&crop=1&id=uQanT&originHeight=20&originWidth=898&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
于是我们可以通过 127.0.0.1:58526 连接 Windows Subsystem for Android™
打开终端
输入指令:

```powershell
adb connect 127.0.0.1:58526
```

其中地址要根据提示来改变
当出现 "connected to 127.0.0.1:58526" 提示时就说明已经连接到 Windows Subsystem for Android™ 了
我们可以安装一个[酷安]以便下次安装不用指令
安装 apk 使用这个指令:

```powershell
adb install "文件地址"
```
