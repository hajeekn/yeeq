---
title: Cloudflare 的 Argo Tunnel 使用
sticky: 1
tags: [cloudflare]
description: "白嫖一个免费的内网穿透(bushi"
categories: [cloudflare]
cover:
photos:
abbrlink: fktz6u
date: 2021-08-06 18:38:20
copyright_author_href: https://blog.slqwq.cn
author: Hajeekn
---

本文章首发于[语雀](https://www.yuque.com/ladjeek/ygg4q6)!
通过各种高科技功能同步到[Hajeekn 的博客](https://blog.slqwq.cn)
Cloudflare 是一个知名的老牌 CDN 厂商了,相信很多人应该都知道,今天我在逛 Cloudflare の Docs 时发现了个 Argo Tunnel 试用了一下,还可以,并且免费,于是~~水~~写了一篇文章介绍给大家

# 安装 Argo Tunnel

本次以 Windows 11 演示
通过[GitHub](https://github.com/cloudflare/cloudflared/releases)下载适用于 Windows 的安装包
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1628246651880-b5e4827c-efa4-4157-b80f-2d5421bdea41.png#clientId=ub3757772-b494-4&from=paste&height=83&id=u39b95159&margin=%5Bobject%20Object%5D&name=image.png&originHeight=166&originWidth=1215&originalType=binary&ratio=1&size=20490&status=done&style=none&taskId=u9d1a74a4-085a-4072-b064-bf864c9429a&width=607.5)
这里包含了两种版本
386=i1386 也就是 32 位的 Windows 系统
amd64 也就是 64 位的 Windows 系统
我们下载.exe 可执行文件,msi 属于安装文件,也可以下载(但是我这里没安装成功)

# 配置 Argo Tunnel

下载好后把文件改名为 cloudflared.exe
然后把他复制到一个合适的目录,我这里是 D 盘
打开 Windows Terminal ,如果你没有也可以用 Powershell 和 cmd
通过 cd 进入到放置 cloudflared.exe 的文件夹
如果你是 Windows 11 系统,可以直接在目录右键,点击 Open in Windows Terminal
然后在终端输入

```bash
./cloudflared.exe --version
```

如果跳出版本号就成功了
接着你需要打开[Cloudflare Argo Tunnel 的授权页面](https://dash.cloudflare.com/argotunnel)
在里面点击你要授权 Argo Tunnel 的域名
接着会弹出来一个弹窗![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1628247054857-35afc7b1-e473-4211-bf69-f98d21fe75e4.png#clientId=ub3757772-b494-4&from=paste&height=110&id=ub5914682&margin=%5Bobject%20Object%5D&name=image.png&originHeight=219&originWidth=1050&originalType=binary&ratio=1&size=19285&status=done&style=none&taskId=u9dea5b35-bf8e-4aef-998d-edf79d74c81&width=525)
提示你点击授权,照着文字点就行
然后你的浏览器会自动下载一个叫 cert.pem 的文件
复制它
然后进入到你的用户文件夹,创建一个.cloudflared 文件夹
将文件粘贴进去
这样就完成了对 Argo Tunnel 的配置

# 创建 Argo 隧道

打开终端,输入以下指令

```
./cloudflared.exe tunnel create <你想要的隧道名称>
```

创建一个隧道
然后你需要配置域名方面
打开 Cloudflare 的 DNS 面板,如果你是第三方托管打开第三方 DNS 面板
新建一个 CNAME 记录
记录名随便
记录类型选择 CNAME
记录内容写 你刚才从终端创建隧道时的 ID.cfargotunnel.com
ID 怎么获取呢?
你创建隧道时的 xxxxx.json 去掉.json 就是你的隧道 ID
然后保存
如果你是第三方托管,你还要去你的域名管理商新建一样的记录,但是 CNAME 值写<记录名.域名.cdn.cloudflare.net>
之后你就可以连接 Argo 隧道了

# 连接 Argo 隧道

在终端里面输入以下指令

```bash
./cloudflared tunnel --config path/config.yaml run <刚刚的隧道名> --url <本地URL(可以带端口)>
```

其中你要填写隧道名和本地 URL
比如你想让 Argo 映射你的 Hexo,你就可以在本地先启动 Hexo 查看他的地址
Hexo 一般是 localhost:4000
其他项目就填进去就好了,记住不带 http 和 https 的协议头,也不带后缀 /
填写完成后回车,等它连接好
然后你打开你刚才创建的子域名,就会出现页面了
~~今天又水了一篇文章~~![@8(Y5HV)DT(%{5~@0M25)I4.gif](https://cdn.nlark.com/yuque/0/2021/gif/12488964/1628247726025-22597ed9-3fb3-4eb5-b690-37112eb445e2.gif#clientId=ub3757772-b494-4&from=drop&id=u9fb28481&margin=%5Bobject%20Object%5D&name=%408%28Y5HV%29DT%28%25%7B5~%400M25%29I4.gif&originHeight=43&originWidth=42&originalType=binary&ratio=1&size=3918&status=done&style=none&taskId=uab4ac732-772f-485d-b2ec-72f2d37c7c5)
