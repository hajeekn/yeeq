---
title: 短链接的解决方案
sticky: 1
tags: [link]
description:
categories: [link]
cover: https://cdn.nlark.com/yuque/0/2022/png/12488964/1643988467491-c496438a-8c53-409c-b6a7-5bbc10e87ede.png?x-oss-process=image%2Fresize%2Cw_944%2Climit_0
photos: https://cdn.nlark.com/yuque/0/2022/png/12488964/1643988467491-c496438a-8c53-409c-b6a7-5bbc10e87ede.png?x-oss-process=image%2Fresize%2Cw_944%2Climit_0
abbrlink: zroitiai
date: 2022-02-03 16:40:42
copyright_author_href: https://blog.slqwq.cn
author: Hajeekn
---

本文章首发于[语雀](https://www.yuque.com/ladjeek/ygg4q6)!
通过各种高科技功能同步到[Hajeekn 的博客](https://blog.slqwq.cn)
方便跳转,所以有了短链接,这篇文章带来短链接的几个解决方案

# GitHub issues + HTML(Free)

示例: [Click Me](https://to.slqwq.cn/apg/1)

## 实现方法

进入 [Shortener](https://service-dali9563-1259647411.sh.apigw.tencentcs.com/?link=4ey4iy4iy4my2cy1hy1hy4iy49y1gy4ly4ay4ny4hy4ny1gy45y48y1hy47y4my41y1hy24&hex=24&xor=6) 的仓库
Fork 仓库
然后部署到各种平台
以 CloudFlare 为例子
进入 [CloudFlare Dashbord](https://service-dali9563-1259647411.sh.apigw.tencentcs.com/?link=a0la4la4la8la7l55l38l38la4l96l37la7l97la9la3la9l37l92l95l38l94la8l89l38l49&hex=11&xor=6)
选择 'Pages'
![image.png](https://cdn.nlark.com/yuque/0/2022/png/12488964/1643986403731-4208752d-816a-4a7b-9eeb-c1dcb3cc4502.png#clientId=u03ece9a7-85f4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=43&id=u0df42018&margin=%5Bobject%20Object%5D&name=image.png&originHeight=54&originWidth=324&originalType=binary&ratio=1&rotation=0&showTitle=false&size=2998&status=done&style=none&taskId=u0b63ec2c-fbdc-4e5f-893c-3a004c88c75&title=&width=259.2)
选择![image.png](https://cdn.nlark.com/yuque/0/2022/png/12488964/1643986424611-cd07d17b-5578-437a-9623-2928dad0f23f.png#clientId=u03ece9a7-85f4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=46&id=ua26ec178&margin=%5Bobject%20Object%5D&name=image.png&originHeight=58&originWidth=124&originalType=binary&ratio=1&rotation=0&showTitle=false&size=3478&status=done&style=none&taskId=uf5e5619e-f828-4a86-9d5b-dcdb647cec9&title=&width=99.2)
存储库选择 Fork 的仓库
![image.png](https://cdn.nlark.com/yuque/0/2022/png/12488964/1643986450782-f19e3e9f-48b3-457c-8710-25f8071e752e.png#clientId=u03ece9a7-85f4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=66&id=u84730f02&margin=%5Bobject%20Object%5D&name=image.png&originHeight=82&originWidth=446&originalType=binary&ratio=1&rotation=0&showTitle=false&size=9896&status=done&style=none&taskId=u9c65b98d-9c5d-4e8b-a4c3-1de145ca226&title=&width=356.8)
然后一直下一步,等到部署完成就可以访问了

### 添加 DNS

如果你不想要 'pages.dev' 长地址,可以自定义域名
进入刚才部署好的项目的管理页面
选择自定义域
![image.png](https://cdn.nlark.com/yuque/0/2022/png/12488964/1643986536854-08a70ac4-66c5-4e71-9b3b-cefb761b45ea.png#clientId=u03ece9a7-85f4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=712&id=uc4b3e61c&margin=%5Bobject%20Object%5D&name=image.png&originHeight=890&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=192540&status=done&style=none&taskId=u7f39fbd9-28f1-4a35-a2f4-3fd9d4874df&title=&width=1536)
添加你的域名
接着做好 CNAME 解析即可

### issues 配置

新建一个 GitHub 仓库
存放你的 issues 数据
创建好后进入 issues 选项
![image.png](https://cdn.nlark.com/yuque/0/2022/png/12488964/1643986664534-b8fb7dc6-d3f1-44b5-81d3-ba6c0c697623.png#clientId=u03ece9a7-85f4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=710&id=u67812a6f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=888&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=230156&status=done&style=none&taskId=u66781673-2b6e-4a7d-8ba2-fcb3010bfd5&title=&width=1536)
选择 New issue
标题就写想要定向的网站
内容可以记录下 ID
创建好后 issues 的 id 就是重定向的钥匙
你创建了第一个 issues
你的重定向地址就是
域名/1
记录下仓库名备用

### 请求配置

进入 Fork 的仓库
编辑 404.html
![image.png](https://cdn.nlark.com/yuque/0/2022/png/12488964/1643986876345-06a2f116-88b5-4035-9fe0-8b70fc595846.png#clientId=u03ece9a7-85f4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=78&id=u34e05bd2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=98&originWidth=619&originalType=binary&ratio=1&rotation=0&showTitle=false&size=40071&status=done&style=none&taskId=u750913a3-3ad2-4146-a0ba-7937b194d66&title=&width=495.2)
在此处把/repos/**\***/issues/的\*\*\*\*改为你的用户名/仓库
然后提交
等待 CloudFlare 部署完成即可
ChenYFan 666
ChenYFan yyds
​![Y)@S_VB[S8_V)B[JV1M3YDP.gif](https://cdn.nlark.com/yuque/0/2022/gif/12488964/1643988330577-4646b5f4-fac7-48f5-872b-87c97193bab6.gif#clientId=u03ece9a7-85f4-4&crop=0&crop=0&crop=1&crop=1&from=drop&id=u228a151d&margin=%5Bobject%20Object%5D&name=Y%29%40S_VB%5BS8_V%29B%5BJV1M3YDP.gif&originHeight=108&originWidth=148&originalType=binary&ratio=1&rotation=0&showTitle=false&size=99234&status=done&style=none&taskId=ude5a05d9-f8ea-4ddb-86b8-baa3d40fb54&title=)
