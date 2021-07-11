---

title: 物理机安装及体验Windows 11
sticky: 1
tags: [Windows,Windows11]
description:
categories: [Windows,Windows11]
cover: https://cdn.jsdelivr.net/gh/ladjeek-actions/lookcovers@main/QM/blogcovers/20210710214057.png
photos: https://cdn.jsdelivr.net/gh/ladjeek-actions/lookcovers@main/QM/blogcovers/20210710214057.png
abbrlink:alioalnh
date: 2021-07-10 20:55:32
copyright_author_href: https://blog.slqwq.cn
author: Hajeekn

---

本文章首发于[语雀](https://www.yuque.com/ladjeek/ygg4q6)!
通过各种高科技功能同步到[Hajeekn 的博客](https://blog.slqwq.cn)
最近 Windows 11 发布了,我趁机白嫖了个预览版镜像在虚拟机里面装着玩玩,之后便给实体机也装上了
本文章说说如何安装 Windows 11 和我的使用情况

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
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1625922699030-ecf44c62-0317-459b-82fe-e1f1bfae55b9.png#clientId=ua3e8a313-4129-4&from=paste&height=190&id=u2d81a6e4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=379&originWidth=526&originalType=binary&ratio=1&size=398491&status=done&style=none&taskId=u51ce5105-015b-42c0-a5bf-9119b360679&width=263)
如果你下载了一个自带中文语言包的镜像,那么你看到的就是中文的安装界面
按照步骤安装完成后应该会跳出 OOBE
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1625922915120-955c3037-4757-4a3d-8798-78ff846b83be.png#clientId=ua3e8a313-4129-4&from=paste&height=235&id=u30bad4d7&margin=%5Bobject%20Object%5D&name=image.png&originHeight=470&originWidth=808&originalType=binary&ratio=1&size=397177&status=done&style=none&taskId=u8b5e4123-57b4-4279-a6b0-ee27c9b4145&width=404)
在这个界面选择 China
然后点击 Yes
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1625922950897-e5efff3a-805e-442a-9f12-a0090787810c.png#clientId=ua3e8a313-4129-4&from=paste&height=204&id=ub07f39b6&margin=%5Bobject%20Object%5D&name=image.png&originHeight=408&originWidth=839&originalType=binary&ratio=1&size=428380&status=done&style=none&taskId=ud1300846-3227-4808-a719-3bcae6d20aa&width=419.5)
然后会提示选择键盘布局,如果你下载了包含中文包的镜像那么这里可以选择中文输入法
之后你要配置账户,我用的是 Microsoft 365 E5 的组织账号
之后按照步骤提示配置完成后就可以啦
安装完成后界面大概是这样
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1625923221194-db3cb531-85f5-4f4d-acae-d8e016cc548f.png#clientId=ua3e8a313-4129-4&from=paste&height=540&id=ud9836e9a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1080&originWidth=1920&originalType=binary&ratio=1&size=1396710&status=done&style=none&taskId=udc756efe-5219-4479-8a47-83872098824&width=960)

## 优化动效(笔记本)

之后进入设置
点击任务栏的 Windows 徽标
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1625923250902-d1505d7a-adc0-45b3-b255-568afc7939ff.png#clientId=ua3e8a313-4129-4&from=paste&height=203&id=u6ef355b7&margin=%5Bobject%20Object%5D&name=image.png&originHeight=406&originWidth=741&originalType=binary&ratio=1&size=367632&status=done&style=none&taskId=u193d170c-48b0-44c1-961d-9c7e1e221f7&width=370.5)
选择设置
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1625923268976-47496344-f08c-4149-bf94-ae3c810cef43.png#clientId=ua3e8a313-4129-4&from=paste&height=511&id=u8e7c3ccc&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1021&originWidth=1920&originalType=binary&ratio=1&size=278165&status=done&style=none&taskId=u86a0deec-bbb3-4b23-938f-c189eaed530&width=960)
找到 Windows Update
进入 Windows 预览体验计划
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1625923316513-76c63bc5-7da3-45bc-a4b8-f13b9d22570e.png#clientId=ua3e8a313-4129-4&from=paste&height=511&id=u97fc7f03&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1021&originWidth=1920&originalType=binary&ratio=1&size=279242&status=done&style=none&taskId=ub4f8b80a-e977-4d51-a27f-d6658cabb47&width=960)
把选择预览体验成员设置里面的通道改为 Dev
然后点击打开 Windows 更新
找到英特尔 Display 更新,把这个补丁安装了
之后你的 Windows 11 会非常流畅,然后点击任务栏的搜索(放大镜)搜索查看"高级系统设置"
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1625923640335-3a829cb6-2b42-4eeb-a688-a265ca6fb04e.png#clientId=ua3e8a313-4129-4&from=paste&height=79&id=u505dee2b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=158&originWidth=596&originalType=binary&ratio=1&size=7684&status=done&style=none&taskId=ub9881a4b-607e-41d3-9be9-656f6d44bfc&width=298)找到性能-设置
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1625923655599-78916eef-5434-4d60-b4b6-2e4172848865.png#clientId=ua3e8a313-4129-4&from=paste&height=403&id=ua1207d7d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=805&originWidth=539&originalType=binary&ratio=1&size=54643&status=done&style=none&taskId=u044aefa0-8e0a-4d00-9580-d0adcd0b2e7&width=269.5)点击调整为最佳外观
然后确定
然后再搜索控制面板
进入控制面板\硬件和声音\电源选项
创建电源计划
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1625923741670-96db5f46-c531-4669-934f-abe43891f55f.png#clientId=ua3e8a313-4129-4&from=paste&height=247&id=u4db2b23f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=493&originWidth=898&originalType=binary&ratio=1&size=24935&status=done&style=none&taskId=ud5a700a1-f563-45a3-9d02-08fe0bd993b&width=449)选择高性能
点击下一页
然后切换计划到高性能就可以了

# 使用情况反馈

√ 动效多样
√ UI 好看(果里果气)
√ 原生支持 Android APP
​
