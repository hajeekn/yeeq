---
title: 使用好的CDN让你的网站获得更快的加载速度
sticky: 1
abbrlink: 62a00332
date: 2020-06-19 17:51:42
tags:
description:
cover: https://files.alexhchu.com/2020/06/17/f5c4897955eed.png
---

<a href="https://www.upyun.com/tech/article/551/%E6%9C%89%E5%A5%96%E5%BE%81%E6%96%87%EF%BD%9C%E5%8F%88%E6%8B%8D%E4%BA%91%E5%8E%9F%E5%88%9B%E6%8A%80%E6%9C%AF%E5%BE%81%E6%96%87%E5%A4%A7%E8%B5%9B%EF%BC%8CFILCO%E9%94%AE%E7%9B%98%E3%80%81%E5%B0%8F%E7%B1%B3%E6%89%8B%E7%8E%AF%E3%80%81%E4%BB%A3%E9%87%91%E5%88%B8%E7%AD%89%E4%BD%A0%E6%9D%A5%E6%8B%BF.html" target="_blank" rel="noopener">本文参加又拍云技术征文活动!</a>

Cover来自<a href="https://www.impdx.vip/" target="_blank" rel="noopener">impdx</a>

大家好，本文章我来教大家如何使用好的CDN让你的网站获得更快的速度

# 了解什么是CDN

CDN的全称是Content Delivery Network，即[内容分发网络](https://baike.baidu.com/item/内容分发网络/4034265)。CDN是构建在现有网络基础之上的智能虚拟网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。CDN的关键技术主要有内容存储和分发技术。

简单来说就是将你原站的服务分发给CDN的各个机器，然后当你访问套上CDN的网站时将你301到最近的服务

# CDN的作用

CDN主要用来:

1.下载

2.音视频点播

3.加速网站

4.存储文件

# 如何使用

本期教程使用又拍云

废话不多说，进入正题



# 注册账号

第一步当然是注册账号啦

进入<a href="https://www.upyun.com/" target="_blank" rel="noopener">又拍云官网</a>



![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/12T.png)

###### 点击右上角的注册有礼

在接下来的页面里面会出现两个选项

1.申请个人账号

2.申请企业账号

对于我们当然是选个人帐号啦

然后注册你们应该都懂，这边就不多说啦

# 配置CDN

注册好了当然要配置CDN拉

在这之前，我们需要实名~

我们需要进入[实名页面](https://console.upyun.com/account/profile/)

接下来点击实名认证

然后上传自己的手持身份证照

或者使用支付宝实名

等待又小拍审核通过后就能开始配置拉

点击云产品-CDN

看到右上角大大的创建服务了吗

点他，点他，点他~

接下来你会被传送到创建CDN服务页面

根据他的介绍来填写

注意:加速域名需备案哦

创建完成后看到你的加速域名后面有个拒绝了嘛，看到了就是你没备案哦

这时候CDN已经搞♂好了

接下来就访问看看吧

如果出现handshake failed错误就是因为你的原站使用了强制HTTPS而CDN没配置HTTPS

这个亚子去又拍云申请一个免费的SSL就行了



