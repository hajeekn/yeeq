---
title: 物理机安装 Windows 11
sticky: 1
tags: [Windows, Windows11]
description: 最近Windows 11发布了,我趁机白嫖了个预览版镜像在虚拟机里面装着玩玩,之后便给实体机也装上了
categories: [Windows, Windows11]
cover: https://cdn.jsdelivr.net/gh/ladjeek-actions/lookcovers@main/QM/blogcovers/20210710214057.png
photos: https://cdn.jsdelivr.net/gh/ladjeek-actions/lookcovers@main/QM/blogcovers/20210710214057.png
abbrlink: alioalnh
date: 2021-07-10 20:55:32
copyright_author_href: https://blog.slqwq.cn
author: Hajeekn
---

本文章首发于[语雀](https://www.yuque.com/ladjeek/ygg4q6)!
通过各种高科技功能同步到[Hajeekn 的博客](https://blog.slqwq.cn)
最近 Windows 11 发布了,我趁机白嫖了个预览版镜像在虚拟机里面装着玩玩,之后便给实体机也装上了
本文章说说如何安装 Windows 11 和对于笔记本如何优化动效

# 安装 Windows 11

## 获取 Windows 11 预览版镜像

天翼云：[https://cloud.189.cn/t/bYbEzq7vAVra](https://cloud.189.cn/t/bYbEzq7vAVra) 访问码：q2rt
迅雷：[https://pan.xunlei.com/s/VMdJtc5D8h_Yau9M19fH6mNiA1](https://pan.xunlei.com/s/VMdJtc5D8h_Yau9M19fH6mNiA1) 提取码：p5f9
UUP（arm64_zh cn）：[https://pan.baidu.com/s/129jQDRLGqn2dMq7tEifRFg](https://pan.baidu.com/s/129jQDRLGqn2dMq7tEifRFg) 提取码: uyq8
UUP（amd64_zh cn）：[https://pan.baidu.com/s/14x2a2VhopRAS3ZOYhkBQBA](https://pan.baidu.com/s/14x2a2VhopRAS3ZOYhkBQBA) 提取码:8wy5
通过这些地址获取预览版镜像

## 安装 Windows 11

下载之后解压镜像
双击运行 setup.exe 进行安装
如果提示你的电脑不能访问,那么下载一个 Windows 10 镜像内部的 appraiserres.dll 文件替换掉 Windows 11 内置的 appraiserres.dll 即可
之后应该会跳出类似这样的界面
![](https://rmt.ladydaily.com/fetch/hajeekn/storage/202204171113381.png#crop=0&crop=0&crop=1&crop=1&id=GXn4G&originHeight=236&originWidth=328&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
如果你下载了一个自带中文语言包的镜像,那么你看到的就是中文的安装界面
按照步骤安装完成后应该会跳出 OOBE
在这个界面选择 China
然后点击 Yes
然后会提示选择键盘布局,如果你下载了包含中文包的镜像那么这里可以选择中文输入法
之后你要配置账户,我用的是 Microsoft 365 E5 的组织账号
之后按照步骤提示配置完成后就可以啦
安装完成后界面大概是这样
![](https://rmt.ladydaily.com/fetch/hajeekn/storage/202204171113560.png#crop=0&crop=0&crop=1&crop=1&id=gLgjv&originHeight=527&originWidth=937&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

## 优化动效(笔记本)

之后进入设置
点击任务栏的 Windows 徽标
选择设置
找到 Windows Update
进入 Windows 预览体验计划
把选择预览体验成员设置里面的通道改为 Dev
然后点击打开 Windows 更新
找到英特尔 Display 更新,把这个补丁安装了
之后你的 Windows 11 会非常流畅,然后点击任务栏的搜索(放大镜)搜索查看"高级系统设置"
找到性能-设置
点击调为最佳外观
然后确定
然后再搜索控制面板
进入控制面板\硬件和声音\电源选项
创建电源计划
选择高性能
点击下一页
然后切换计划到高性能就可以了

# 使用情况反馈

√ 动效多样
√ UI 好看(果里果气)
√ 原生支持 Android APP(WSA 子系统)
