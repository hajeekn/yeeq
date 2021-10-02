---
title: 将你的网站部署到 Cloudflare 加快访问速度
sticky: 1
tags: [cloudflare]
description: "deploy"
categories: [cloudflare]
cover: https://cdn.nlark.com/yuque/0/2021/png/12488964/1628427116690-1ff97a2f-c8f8-467f-9b3b-70c41ad2ae6c.png?x-oss-process=image%2Fresize%2Cw_900
photos: https://cdn.nlark.com/yuque/0/2021/png/12488964/1628427116690-1ff97a2f-c8f8-467f-9b3b-70c41ad2ae6c.png?x-oss-process=image%2Fresize%2Cw_900
abbrlink: lyr15g
date: 2021-08-08 20:33:400
copyright_author_href: https://blog.slqwq.cn
author: Hajeekn
---

本文章首发于[语雀](https://www.yuque.com/ladjeek/ygg4q6)!
通过各种高科技功能同步到[Hajeekn 的博客](https://blog.slqwq.cn)
上篇我们介绍了 Cloudflare Argo Tunnel 的玩法
本篇讲述如何部署网站到 Cloudflare 加快速度

# 配置 Cloudflare Pages

本文章基于 Cloudflare Pages,如果没有请用 GitHub + Cloudflare CDN
首先打开你的 Cloudflare 账户 Pages 页面
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1628426154180-3a95add4-4de9-4580-95a9-5ecdfc60a521.png#clientId=ub284ec99-3348-4&from=paste&height=62&id=u692cf950&margin=%5Bobject%20Object%5D&name=image.png&originHeight=124&originWidth=927&originalType=binary&ratio=1&size=4616&status=done&style=none&taskId=uefdb519c-9677-4122-b4ce-c1fb44768d9&width=463.5)
选择新建项目
授权应用完成后选择储存库
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1628426208876-bedb09f2-b342-49e2-bdc8-cd09b266e58b.png#clientId=ub284ec99-3348-4&from=paste&height=396&id=u3865e1c5&margin=%5Bobject%20Object%5D&name=image.png&originHeight=792&originWidth=1179&originalType=binary&ratio=1&size=103771&status=done&style=none&taskId=ucac8d0fb-dab3-4ef7-a000-ff63a3508f7&width=589.5)
为了减少部署时间,推荐使用编译仓库(也就是 Hexo 生成 HTML 的仓库)
选择后无脑下一步
之后 Cloudflare Pages 就会开始部署你的 Hexo 了

# 自定义域名

打开 Cloudflare Partner 平台和你的 DNS 解析商
这里用辣椒和 DNS.LA 演示
新建一条解析(两边都是)
记录名写你博客的子域名,一般都是 blog
你的 DNS 解析商的 CNAME 海外写 blog.xxx.xx.cdn.cloudflare.net
默认和国内选择几个好用的自选 Cloudflare CDN 节点就行
辣椒的记录名也写 blog
记录类型选 CNAME
Cloudflare Pages 部署完成后会分给你一个
xxxx.pages.dev
把他复制填写进记录值然后保存就行
接着打开你的 Cloudflare Pages 页面
选择刚部署好的项目
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1628426565448-9a84d634-5e97-46de-97b3-6d5d5dea4250.png#clientId=ub284ec99-3348-4&from=paste&height=245&id=ueab74119&margin=%5Bobject%20Object%5D&name=image.png&originHeight=490&originWidth=1518&originalType=binary&ratio=1&size=36420&status=done&style=none&taskId=u22e25dcf-7499-4601-957d-7841db7c4a6&width=759)
进入自定义域
点击添加,自定义域就写 记录值.域名
然后等待 SSL 的启用就行了

# 配置缓存

打开 Cloudflare 的缓存配置页面
点击配置
**Always Online 设置为 true**
**缓存级别 设置为标准**
**浏览器缓存 TTL 设置成 4 小时**
然后打开规则
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1628426779862-bbbe36e2-9a5e-4a32-a939-686b4fcb45f7.png#clientId=ub284ec99-3348-4&from=paste&height=138&id=u97800010&margin=%5Bobject%20Object%5D&name=image.png&originHeight=275&originWidth=1346&originalType=binary&ratio=1&size=36570&status=done&style=none&taskId=ub7caadad-99bf-4a8b-8fd5-458a5d81cac&width=673)
创建页面规则
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1628426814222-c1af5d65-f8a6-4344-8d47-22f99954eb0c.png#clientId=ub284ec99-3348-4&from=paste&height=295&id=ub27ecd9f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=589&originWidth=1392&originalType=binary&ratio=1&size=50588&status=done&style=none&taskId=uf3a068ba-8288-4ef8-adfc-62874b1e63c&width=696)
这样写就行
记得把博客记录名.域名替换成你自己的
比如我的是 blog.slqwq.cn
就写 blog.slqwq.cn
~~今天又水了一篇文章,真棒(๑•̀ㅂ•́)و✧~~
