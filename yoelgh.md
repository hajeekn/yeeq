---
title: Windows Subsystem for Android™ 安装教程
sticky: 1
tags: [Windows]
description:
categories: [Windows]
cover:
photos:
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
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1635505776895-660e60a9-84b9-434a-9dff-a82eabbe627e.png#clientId=ufc97edf3-f248-4&from=paste&height=510&id=u66675629&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1020&originWidth=1920&originalType=binary&ratio=1&size=121766&status=done&style=none&taskId=u220047e3-30d6-44ee-b609-75ac2c4d3e9&width=960)
所以我们需要对它进行抓包
[https://store.rg-adguard.net/](https://store.rg-adguard.net/)
进入这个网站
将商店地址填写进去
保证填写后的配置如下
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1635505882387-128b6d64-e728-406b-abed-9785088f93c1.png#clientId=ufc97edf3-f248-4&from=paste&height=446&id=u94a7dcaa&margin=%5Bobject%20Object%5D&name=image.png&originHeight=892&originWidth=1920&originalType=binary&ratio=1&size=765110&status=done&style=none&taskId=u1d15c5d0-8b69-49d0-b350-5380606eac8&width=960)
这边注意通道选择 **Slow(Windows Insider Slow) **
配置好后点击旁边的"√"
稍等一会儿列表就出来了
出来之后划到最下方,找到 1.21GB 的包,点击它下载下来
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1635506023755-6e69d9c9-8c10-4874-809e-73200636dcb3.png#clientId=ufc97edf3-f248-4&from=paste&height=9&id=u525d1347&margin=%5Bobject%20Object%5D&name=image.png&originHeight=23&originWidth=1839&originalType=binary&ratio=1&size=27514&status=done&style=shadow&taskId=u181be951-f27a-4d07-bfbd-62bc5819a8e&width=747)
下载可以使用多线程软件加快速度
下载好后你会得到一个 msixbundle
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1635506482357-0ba909bd-77a8-4d48-abef-22796a3c9fec.png#clientId=ufc97edf3-f248-4&from=paste&height=102&id=u0cbde5ed&margin=%5Bobject%20Object%5D&name=image.png&originHeight=203&originWidth=131&originalType=binary&ratio=1&size=12108&status=done&style=none&taskId=ub89211f8-8cbb-47a3-bb39-1964756ba56&width=65.5)
这个包不能直接安装,直接安装会报错
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1635506531550-0a56b811-5520-46e2-aeee-9a99d236da61.png#clientId=ufc97edf3-f248-4&from=paste&height=306&id=ue363b855&margin=%5Bobject%20Object%5D&name=image.png&originHeight=612&originWidth=812&originalType=binary&ratio=1&size=35146&status=done&style=none&taskId=uc8a957c0-3f70-49d7-b52f-899c38db16c&width=406)
我们需要使用 Powershell 安装
**用管理员打开 Powershell**
用这个指令安装**​**

```powershell
add-appxpackage "文件地址"
```

对于 Windows 11
你获取文件地址可以右键文件选择获取文件地址
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1635506714286-27270fec-bf33-4bd5-ba0a-b95b5ab75f4d.png#clientId=ufc97edf3-f248-4&from=paste&height=151&id=u1f295aaa&margin=%5Bobject%20Object%5D&name=image.png&originHeight=302&originWidth=299&originalType=binary&ratio=1&size=57505&status=done&style=none&taskId=u1ebbe170-ecad-427c-867f-3daa9fa9fbe&width=149.5)

![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1635506634591-e8537d30-6743-4e76-bcb9-1bad585c7ef9.png#clientId=ufc97edf3-f248-4&from=paste&height=294&id=ucd4276a1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=587&originWidth=1204&originalType=binary&ratio=1&size=29223&status=done&style=none&taskId=uac251d10-ab02-40d7-ab3e-2d3a3701235&width=602)
安装好后任务栏会出现 Windows Subsystem for Android™
这时已经安装完成了

# 配置 Windows Subsystem for Android™

## 配置 ADB

打开 Windows Subsystem for Android™
将子系统资源调整为持续
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1635506807503-d120cccb-b388-432f-9f53-bb6a11214dcb.png#clientId=ufc97edf3-f248-4&from=paste&height=97&id=uae1c6dfb&margin=%5Bobject%20Object%5D&name=image.png&originHeight=194&originWidth=1178&originalType=binary&ratio=1&size=16825&status=done&style=none&taskId=u7418d8ef-8bb4-428e-9407-f57f8da3729&width=589)
接着打开开发者模式
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1635506826428-3daf0009-6103-439d-abda-bb32936bcefd.png#clientId=ufc97edf3-f248-4&from=paste&height=49&id=u9f48a8d3&margin=%5Bobject%20Object%5D&name=image.png&originHeight=98&originWidth=1206&originalType=binary&ratio=1&size=11952&status=done&style=none&taskId=ud341b660-f7b8-45f4-b989-63f87027633&width=603)
然后我们需要安装 ADB
[SDK Platorm Tools](https://developer.android.google.cn/studio/releases/platform-tools)
进入后依照系统版本选择 ADB
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1635506927840-79c320ce-12ee-47e9-85cd-17a0dea80361.png#clientId=ufc97edf3-f248-4&from=paste&height=445&id=uf7196db7&margin=%5Bobject%20Object%5D&name=image.png&originHeight=889&originWidth=1920&originalType=binary&ratio=1&size=182177&status=done&style=none&taskId=u3e63e341-1c53-4ae5-83de-a233e6df66c&width=960)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1635506941278-761b2cea-2ef6-4083-a602-daff5361c33f.png#clientId=ufc97edf3-f248-4&from=paste&height=111&id=u384a9007&margin=%5Bobject%20Object%5D&name=image.png&originHeight=222&originWidth=679&originalType=binary&ratio=1&size=21590&status=done&style=none&taskId=uadc90496-861e-460d-ad2a-4073801eb89&width=339.5)
将下载好的 ADB 解压到一个你不会动到的地方
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1635507008304-2e61ae6b-c5d5-4587-b036-9754e30c2fb8.png#clientId=ufc97edf3-f248-4&from=paste&height=339&id=u7b6578b4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=678&originWidth=1008&originalType=binary&ratio=1&size=126122&status=done&style=none&taskId=u0b16bce4-0544-4f86-8f4c-3ace98c2b23&width=504)
我放在了系统盘根目录
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1635507039922-8bb51df3-87e9-4bf2-8ed9-1ffff75340a1.png#clientId=ufc97edf3-f248-4&from=paste&height=403&id=uf0eb0ddd&margin=%5Bobject%20Object%5D&name=image.png&originHeight=806&originWidth=1362&originalType=binary&ratio=1&size=109219&status=done&style=none&taskId=u98e3189e-6dee-46df-a677-f7b8c6f54c0&width=681)
接着打开高级系统设置
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1635507079890-23f697e7-264e-461d-bb3a-51434405b716.png#clientId=ufc97edf3-f248-4&from=paste&height=351&id=ua3325c08&margin=%5Bobject%20Object%5D&name=image.png&originHeight=702&originWidth=613&originalType=binary&ratio=1&size=37104&status=done&style=none&taskId=ubc8793aa-9c21-4af9-ba8d-99de9873080&width=306.5)
选择环境变量
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1635507099308-a5f4a140-1c31-4b13-b374-989ae1c34b74.png#clientId=ufc97edf3-f248-4&from=paste&height=161&id=ue3697da0&margin=%5Bobject%20Object%5D&name=image.png&originHeight=322&originWidth=776&originalType=binary&ratio=1&size=21991&status=done&style=none&taskId=u46e8dc70-0c22-4e35-a46f-475a4f71cea&width=388)
在系统变量内新建一个变量叫做 "adb"
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1635507128850-78a27c0d-fe26-49d3-a6cb-a308ef6cd726.png#clientId=ufc97edf3-f248-4&from=paste&height=109&id=ud8b9b060&margin=%5Bobject%20Object%5D&name=image.png&originHeight=217&originWidth=839&originalType=binary&ratio=1&size=13722&status=done&style=none&taskId=ua1e17e35-14fd-465d-860e-b0f1bebcdf3&width=419.5)
变量值写你放 adb 的文件夹
比如我的是 C:\adb 这里就写 C:\adb
接着双击用户变量的 Path![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1635507188178-e9d871a6-4ae4-4560-8c2c-b452f7a9a625.png#clientId=ufc97edf3-f248-4&from=paste&height=11&id=u6719bf68&margin=%5Bobject%20Object%5D&name=image.png&originHeight=22&originWidth=695&originalType=binary&ratio=1&size=3240&status=done&style=none&taskId=uba5676bd-94a2-4a2d-8cad-efd35fa698d&width=347.5)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1635507198609-057b63be-1224-4b9d-93a2-f5a9e736da8b.png#clientId=ufc97edf3-f248-4&from=paste&height=332&id=u7b8ba97d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=664&originWidth=677&originalType=binary&ratio=1&size=54603&status=done&style=none&taskId=u93de7ec6-da9e-41ed-b26f-234e083e69c&width=338.5)
在这里新建一个
值写 %adb%

## 驱动安装

在极少数情况下,会出现与驱动有关的错误,这可能就是你没有安装 adb 驱动
(资源 by: [晨中网络科技](https://jamcz.com/)
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
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1635507540071-58c0a946-ce95-4907-8a08-92d69ccb4dc9.png#clientId=ufc97edf3-f248-4&from=paste&height=351&id=u2aa461c9&margin=%5Bobject%20Object%5D&name=image.png&originHeight=702&originWidth=613&originalType=binary&ratio=1&size=36995&status=done&style=none&taskId=u80120873-a754-495a-9b12-afe242da142&width=306.5)
进入高级选项卡,点击虚拟内存下的更改
将自动管理所有驱动器的分页文件大小取消
选择一个空间够的盘,选择自定义大小,根据需要调整
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1635507660821-44d009d3-380a-4392-82bd-62c46f1c0a18.png#clientId=ufc97edf3-f248-4&from=paste&height=347&id=u6bab8d6e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=694&originWidth=508&originalType=binary&ratio=1&size=42925&status=done&style=none&taskId=u20d919d8-1d75-4509-af56-dbc8950ec5c&width=254)
注意 GB 和 MB 之间的进率是 1024
1GB = 1024MB
1024GB = 1024\*1024MB
调整完后别忘了点击设置
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1635507744736-cf822627-899c-46e2-b05f-80bb0e664893.png#clientId=ufc97edf3-f248-4&from=paste&height=27&id=u018eea98&margin=%5Bobject%20Object%5D&name=image.png&originHeight=53&originWidth=138&originalType=binary&ratio=1&size=1068&status=done&style=none&taskId=u750aa10d-e39b-40b0-bb0d-90a75542711&width=69)
然后在点击确定

# 使用 Windows Subsystem for Android™

## 安装 APK

Windows Subsystem for Android™ 是支持安装第三方 APK 的,需要通过 ADB 来安装
在安装 APK 之前你需要点击"文件"
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1635508032332-5777081a-9ef8-4f21-9d82-77f637aeea5b.png#clientId=ufc97edf3-f248-4&from=paste&height=43&id=u1819c068&margin=%5Bobject%20Object%5D&name=image.png&originHeight=85&originWidth=1206&originalType=binary&ratio=1&size=6238&status=done&style=none&taskId=u0c210f4c-be0a-4693-9b02-ad659ba6017&width=603)启动一次 Windows Subsystem for Android™
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1635508053950-ef6199e4-e511-4c88-a34b-de46e07677c6.png#clientId=ufc97edf3-f248-4&from=paste&height=397&id=uf26beb38&margin=%5Bobject%20Object%5D&name=image.png&originHeight=794&originWidth=1350&originalType=binary&ratio=1&size=46996&status=done&style=none&taskId=u1ae0b8ea-716b-4bc3-8066-619a43b504d&width=675)出现这个界面后就可以关闭窗口了
打开开发者模式后会出现一行小字
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1635507870795-dde6b7fc-5021-46f7-be3f-4b2cc1efda89.png#clientId=ufc97edf3-f248-4&from=paste&id=udaf9ed2b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=20&originWidth=898&originalType=binary&ratio=1&size=4178&status=done&style=shadow&taskId=uaba174e8-9f20-4c70-b6eb-250b6e43d78)
于是我们可以通过 127.0.0.1:58526 连接 Windows Subsystem for Android™
打开终端
输入指令:

```powershell
adb connect 127.0.0.1:58526
```

其中地址要根据提示来改变
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1635508104383-422462a9-7604-4f5f-9b7c-f5a83e73701e.png#clientId=ufc97edf3-f248-4&from=paste&height=43&id=u9e7c4d0e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=86&originWidth=715&originalType=binary&ratio=1&size=43333&status=done&style=none&taskId=uf6fe825e-72be-4e02-a21e-b07016aa065&width=357.5)
当出现 "connected to 127.0.0.1:58526" 提示时就说明已经连接到 Windows Subsystem for Android™ 了
我们可以安装一个[酷安]以便下次安装不用指令
安装 apk 使用这个指令:

```powershell
adb install "文件地址"
```

## 使用

Windows Subsystem for Android™ 还挺流畅的(如下图)
看起来卡是 ScreenToGif 的问题
![动画.webp](https://cdn.nlark.com/yuque/0/2021/webp/12488964/1635509838584-18bff77c-7cf8-4c6a-b630-4ab3de0403c7.webp#clientId=ufc97edf3-f248-4&from=drop&id=ud6867a31&margin=%5Bobject%20Object%5D&name=%E5%8A%A8%E7%94%BB.webp&originHeight=948&originWidth=750&originalType=binary&ratio=1&size=3854810&status=done&style=none&taskId=u57b727eb-3c91-47d0-876e-204100bd367)
