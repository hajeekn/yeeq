---
title: 从零搭建Hexo博客 3部分
sticky: 1
tags: 搭建Hexo系列
abbrlink: 91fe0fc4
date: 2020-06-01 21:29:55
description:
---
没想到吧，3部分又来啦
本次介绍:
1.如何部署到Coding Pages
GitHub网上一大堆，这里不再赘述
2.网站加速(Neat插件)
3.SEO友好(abbrlink)

# 部署到代码托管平台
代码托管平台有很多
例如:Gitee、Coding、GitHub等等
他们都提供了Pages功能供用户搭建个人网站、企业网站
那么本教程就以Coding Pages企业版为例

首先安装插件:
```
npm install hexo-deployer-git --save
```

安装好后打开Hexo根目录的_config.yml文件夹
滑到最下方
会看见
```
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: ''
```

这个配置
在这里我们改成
```
deploy:
  type: 'git'
  repo:
         coding: 仓库SSH地址,分支
         github: 仓库SSH地址,分支 #如果需要多仓库就配置此项
```

这个仓库SSH哪里找?
打开
[Coding官网](https://coding.net)
如果你没团队就点击免费注册
接着按照那个来就行
注册完后进入你的团队(好像会自动进去)
![https://cdn.jsdelivr.net/gh/Open-super/ImgHosting//SuperImg/20200601/1.PNG]()
点击全部项目
![https://cdn.jsdelivr.net/gh/Open-super/ImgHosting//SuperImg/20200601/2.png]()
创建项目
项目模板选择DevOps 项目
接着填写一大堆的东西
<img src="https://cdn.jsdelivr.net/gh/Open-super/ImgHosting//SuperImg/20200601/3.png"/>
接着选择完成创建
创建完成后在公告下面会有个
你用户名/仓库名的东西
下面有个HTTPS
HTTPS旁边有个小三角
点一下选择SSH
接着右边会发生变化
那就是SSH地址
例如:
git@e.coding.net:企业版用户名/仓库名.git
接着我们需要选择持续集成-静态网站
这时候可能提示你需要实名认证
这个不会泄露
随便找个或者自己弄个就好了
实名完成后点击立即发布静态网站
网站名称自填
接下来在跳转的页面里选择设置
{% note info %}
睡觉去了，明天还要上课，明天下午再写后续
{% endnote %}
<img src="https://cdn.jsdelivr.net/gh/Open-super/ImgHosting//SuperImg/20200601/5.png"/>
记下xxxxxx.coding-pages.com
打开你的域名解析
这边以slqwq.cn为例
<img src="https://cdn.jsdelivr.net/gh/Open-super/ImgHosting//SuperImg/20200601/6.png"/>
添加一个如上图的解析记录
主机记录随便
要实现slqwq.cn这样的顶级访问主机记录就为@
要实现www.slqwq.cn也一样主机记录改为www
因此要什么前缀主机记录就改什么
这里不多讲
<img src="https://cdn.jsdelivr.net/gh/Open-super/ImgHosting//SuperImg/20200601/7.png"/>
这边的绑定新域名写你添加记录后的域名
填写完成后点击绑定
接下来在已绑定的域名里面就会出现你绑定的域名
右边的证书状态指的是SSL
当你的SSL成功申请后应该是正常
下面的强制HTTPS为可选
当你要部署到Coding上时就输入hexo clean && hexo d -g

# 网站提速
网站提速分为:
1.CDN加速
2.网页缩小

CDN的全称是Content Delivery Network，即内容分发网络。CDN是构建在现有网络基础之上的智能虚拟网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。CDN的关键技术主要有内容存储和分发技术。
CDN可有可无
我来介绍几个CDN厂商:
Tencent Cloud CDN(国内知名厂商的CDN，安全有保障，超稳定，提供多节点，付费，非中国内地节点免备案!)
Alibaba Cloud CDN(国内知名厂商的CDN，安全有保障，超稳定，含全球(不包含内地)、国内节点，付费，国内节点需备案!)
Nodecache CDN(速度理想、包含中国内地、港澳台、全球加速节点，付费，全球节点和港澳台免备案!)
Vercel(Zeit)(CDN节点几乎全球，包含香港超快节点，免费，免备案!)
Fast.io(使用CloudFlare高级版本节点，速度快，稍不稳定，免费，免备案!)
CloudFlare(老派、稳定、国内速度不理想)
Baidu Cloud Speed(与CloudFlare合作，稳定，免费、需备案!)
Baidu Cloud CDN(百度云的CDN，与百度云加速并非同一线路，需备案!)
Upyun CDN(知名CDN，加入又拍云联盟计划免费，需备案!)

这边我们使用网页缩小，CDN加速的话自己去挑选吧。
这边提供两种方式:
1.Hexo-Neat (本教程使用)
2.Hexo-Gulp (配置麻烦)

第一步
安装:
```
npm install hexo-neat --save
or
cnpm install hexo-neat --save
```

安装好后就可以hexo s看看效果了
目前处于本地
速度肯定很快
现在你就可以hexo d -g来部署到Coding看看效果了

# SEO优化
Hexo自带的格式对SEO非常不友好，所以我们可以用hexo-abbrlink来对SEO友好
首先安装插件:
```
npm install hexo-abbrlink --save
```

安装完后在站点_config.yml的permalink: :year/:month/:day/:title/下方添加如下代码
```
# abbrlink config
abbrlink:
  alg: crc32  # 算法：crc16(default) and crc32
  rep: hex    # 进制：dec(default) and hex
```

然后把permalink: :year/:month/:day/:title/改为:
```
permalink: posts/:abbrlink/
```

然后你就可以来试一试啦
本系列可能不会继续更新
且看且珍惜






