---
title: Waline评论系统部署日志
sticky: 1
tags: [评论, 部署日志]
description: SL部署Waline评论系统时的日志，希望你也能用上这款评论系统
categories: [评论, 部署日志]
cover: https://rmt.dogedoge.com/fetch/hajeekn/storage/20210222111238.png
photos: https://rmt.dogedoge.com/fetch/hajeekn/storage/20210222111238.png
abbrlink: rbblakpo
date: 2021-02-21 19:46:58
copyright_author_href: https://blog.slqwq.cn
author: Hajeekn
id: 33
---

本文章首发于[语雀](https://www.yuque.com/ladjeek/ygg4q6)!
通过各种高科技功能同步到[Hajeekn 的博客](https://blog.slqwq.cn)
**本文基于**[@CCKNBC](https://blog.ccknbc.cc/posts/waline-commens-system-deployment-logs/)**的日志**[@Waline 官方文档](https://waline.js.org/)和博主自己部署时的实际情况编写
如果需要最详细的配置请前往 [@Waline 官方文档](https://waline.js.org/)

---

# 评论系统特性

- 快速
- **真**·安全
- Markdown 语法支持
- 轻量易用
- 免费部署
- 多种部署方式和存储服务支持，每列选择一项多达 48 种部署方式任君选择

|                | Waline         |              |
| -------------- | -------------- | ------------ |
| **客户端脚本** | **服务端部署** | **数据存储** |
| @waline/client | Vercel         | LeanCloud    |
| MiniValine     | CloudBase      | CloudBase    |
|                | Docker         | MongoDB      |
|                | 独立部署       | MySQL        |
|                |                | SQLite       |
|                |                | PostgreSQL   |
|                |                | Github       |

## Todo

- [x] 微信通知
- [x] QQ 通知
- [x] Telegram 通知
- [x] Akismet
- [x] 文章统计
- [x] 多语言同步
- [x] 自定义语言支持
- [x] 登录支持
- [x] 评论管理
- [x] 评论删除
- [x] 其它数据库支持
- [x] 基于 IP 的发布评论频率限制
- [x] 基于关键词的评论过滤限制
- [x] IP 黑名单
- [x] 重复内容检测
- [x] CloudBase 腾讯云开发部署支持
- [x] 社交登录
- [ ] AWS, GCP, Azure 部署支持
- [ ] 置顶评论
- [ ] 评论赞踩

如果您要获得来自 Waline 群友或公子大佬的支持,可以在[Github Discussions](https://github.com/lizheming/waline/discussions) 中发布问题获取支持。当然你也可以加入 Waline 的 [Telegram](https://t.me/walinejs) 小组或者是加入我们的 [Waline 用户交流 QQ 群](https://qm.qq.com/cgi-bin/qm/qr?k=rPZvq_EBfwQa6QZX7sToVlhH49c6ed0R&jump_from=webapi)获取更多的支持。

# 上手

博主采用 Butterfly 主题,已经内置 Waline 评论系统

## Vercel + LeanCloud

**博主就使用了这种方式**~~(毕竟能白嫖谁还要花钱啊?~~
博主推荐使用[LeanCloud 国际版本](https://leancloud.app),如果您使用的是[LeanCloud 中国版本](https://leancloud.cn),除了本文介绍的环境变量,还需要绑定 LeanCloud 域名
配置方式: 设置 > 域名绑定 > API 访问域名 绑定新域名 > 输入需要绑定的已备案域名点击 确定。之后按照页面上的提示去 DNS 上做正确的 CNAME 解析即可。
[ ](https://vercel.com/import/project?template=https://github.com/lizheming/waline/tree/master/example)![](https://cdn.nlark.com/yuque/0/2021/svg/12488964/1613908946082-2b97a876-6dcf-437c-8b06-d1be78602a82.svg#crop=0&crop=0&crop=1&crop=1&height=32&id=SkrZu&originHeight=32&originWidth=92&originalType=binary&ratio=1&rotation=0&showTitle=false&size=0&status=done&style=none&title=&width=92)
点击上面的 Deploy 按钮就可以快速跳转到 Vercel 部署辣
如果你没有 Vercel 账号,可能提示你需要注册一个,这里不要用 QQ 邮箱因为他们会认为 QQ 邮箱是一个垃圾邮箱
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1613909023497-ab411446-d589-4927-8df2-4886c39402b6.png#crop=0&crop=0&crop=1&crop=1&height=438&id=VrVvx&margin=%5Bobject%20Object%5D&name=image.png&originHeight=875&originWidth=1896&originalType=binary&ratio=1&rotation=0&showTitle=false&size=99588&status=done&style=none&title=&width=948)
PROJECT NAME 可以随便填写一个
这就是项目名称,不过为了之后好辩别,还是写一个方便记住的吧
输入了你的项目名称后点击 Continue 进入下一步
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1613909193383-cb9ecd5e-0053-454c-97d0-320afffb7643.png#crop=0&crop=0&crop=1&crop=1&height=437&id=j89Py&margin=%5Bobject%20Object%5D&name=image.png&originHeight=874&originWidth=1898&originalType=binary&ratio=1&rotation=0&showTitle=false&size=128274&status=done&style=none&title=&width=949)
不过可能会提示你要选择一个
随便来一个就是(前提是你有对应的账号,否则老老实实选择 GitHub
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1613909252053-9fc1fa53-acbb-4943-ace2-4da719cf31e7.png#crop=0&crop=0&crop=1&crop=1&height=433&id=fIWob&margin=%5Bobject%20Object%5D&name=image.png&originHeight=865&originWidth=1891&originalType=binary&ratio=1&rotation=0&showTitle=false&size=153178&status=done&style=none&title=&width=945.5)
进入下一步后会让你填写创建的 Git 仓库名称
点击你的用户名可以显示出你账号绑定的 GitHub 账号
这样就可以自定义创建的账号
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1613909328118-b9dfb65e-332b-42af-bb24-90d8eb349b3a.png#crop=0&crop=0&crop=1&crop=1&height=105&id=u6dtZ&margin=%5Bobject%20Object%5D&name=image.png&originHeight=210&originWidth=911&originalType=binary&ratio=1&rotation=0&showTitle=false&size=17563&status=done&style=none&title=&width=455.5)
下方 👇 的 Create private Git Repository 如果勾选上创建的时候就会创建一个私有仓库
然后再次点击 Continue 进行下一步
然后就会出现这个页面
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1613909407484-c0b00d5d-f2c7-49a7-9009-309deda773ea.png#crop=0&crop=0&crop=1&crop=1&height=432&id=e46Qq&margin=%5Bobject%20Object%5D&name=image.png&originHeight=863&originWidth=1895&originalType=binary&ratio=1&rotation=0&showTitle=false&size=109164&status=done&style=none&title=&width=947.5)
不管他,下滑
找到 Environment Variables 配置环境变量
默认需要的环境变量如下:

- LEAN_ID
- LEAN_KEY
- LEAN_MASTER_KEY

它们的值分别对应上一步在 LeanCloud 中获得的 APPID APPKEY MasterKey
获取方法:
进入 LeanCloud
这边用国际版演示
进入选择 [Console](https://console.leancloud.app/)
如果没有创建一个应用
**注意 ⚠: 如果您之前用了 Valine 评论系统 就不用创建了,因为 Waline 评论数据与 Valine 评论数据可以共用**
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1613909677182-c35bb1a1-54ea-45d6-81bc-30dea4281bc2.png#crop=0&crop=0&crop=1&crop=1&height=213&id=vGRQH&margin=%5Bobject%20Object%5D&name=image.png&originHeight=426&originWidth=305&originalType=binary&ratio=1&rotation=0&showTitle=false&size=12887&status=done&style=none&title=&width=152.5)
进入应用设置后选择 设置 -> 应用 Keys
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1613909849497-15dd6d3d-8a8c-47bc-8f23-52812d4659e8.png#crop=0&crop=0&crop=1&crop=1&height=256&id=OhNdC&margin=%5Bobject%20Object%5D&name=image.png&originHeight=512&originWidth=915&originalType=binary&ratio=1&rotation=0&showTitle=false&size=39747&status=done&style=none&title=&width=457.5)
复制并保存 Credentials 的所有配置
你看不到我的是因为我遮掉了
顺便教各位在拍摄截图时怎么遮掉重要内容
F12 找到重要内容的文字标签
这里是 code
然后加上
color: 网页背景颜色; 和
background: 网页背景颜色;
这样就行辣
我们获取到了 APPID APPKEY MasterKey
创建变量填写就 OK
这里的变量需要一个一个填
你填完一个点击 ADD 然后就会填的数据就会在下方,但是上面的输入框会没有文字,这点就很棒(๑•̀ㅂ•́)و✧
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1613910013751-e00121dd-7dfe-4e56-b1ee-40691c9fcc4b.png#crop=0&crop=0&crop=1&crop=1&height=188&id=hhguh&margin=%5Bobject%20Object%5D&name=image.png&originHeight=376&originWidth=948&originalType=binary&ratio=1&rotation=0&showTitle=false&size=24926&status=done&style=none&title=&width=474)
设置都完成后就可以点击 Deploy 了
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1613910102015-2562fb37-76d0-4a93-b7bb-a2911baf4e4c.png#crop=0&crop=0&crop=1&crop=1&height=331&id=Q0Qts&margin=%5Bobject%20Object%5D&name=image.png&originHeight=662&originWidth=1873&originalType=binary&ratio=1&rotation=0&showTitle=false&size=117647&status=done&style=none&title=&width=936.5)
在这里稍等一会儿就可以部署完成
部署完成后 Vercel 会放烟花 🎇 庆祝一下
然后在接下来的页面点击 Visit
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1613910224658-f33ff25b-db0b-4dcd-8c35-5b0a7c75bb98.png#crop=0&crop=0&crop=1&crop=1&height=47&id=Hm4vB&margin=%5Bobject%20Object%5D&name=image.png&originHeight=93&originWidth=213&originalType=binary&ratio=1&rotation=0&showTitle=false&size=2440&status=done&style=none&title=&width=106.5)
就可以打开部署好的示例网页
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1613910331384-6fa0648d-519e-42b6-b5b0-4f4c005c9e29.png#crop=0&crop=0&crop=1&crop=1&height=437&id=PGrvH&margin=%5Bobject%20Object%5D&name=image.png&originHeight=873&originWidth=1887&originalType=binary&ratio=1&rotation=0&showTitle=false&size=75171&status=done&style=none&title=&width=943.5)
然后你需要注册一个账号
在 Vercel 分配的域名后面加上/ui/register
如下
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1613910413806-e7da23e0-e79c-4045-bc60-a7e306206916.png#crop=0&crop=0&crop=1&crop=1&height=19&id=bSx0U&margin=%5Bobject%20Object%5D&name=image.png&originHeight=37&originWidth=436&originalType=binary&ratio=1&rotation=0&showTitle=false&size=3756&status=done&style=none&title=&width=218)
第一个注册的会成为管理员哦~
如果你想要自定义管理员头衔
可以在客户端脚本中用`langMode.admin`配置哦
例如:

```javascript
function waline() {
  const Waline = require("@waline/client");
  new Waline({
    el: "#waline-comment",
    serverURL: "https://logwaline.vercel.app",
    path: window.location.pathname,
    visitor: true,
    lang: location.pathname.startsWith("/en/") ? "en" : "zh-CN",
    langMode: {
      admin: location.pathname.startsWith("/en/") ? "Administrator" : "Hajeekn",
    },
  });
}
```

按这样来说,你还可以配置访客的角标(头衔)
具体去看看[Waline 文档](https://waline.js.org/)或者[@CCKNBC](https://blog.ccknbc.cc/)
当然如果你和我一样用的是 Butterfly
那么可以找到 Waline 配置项
在`option`配置项下面加入
    langMode:
     admin: Hajeekn
即可
示例:

```yaml
option:
  pageSize: 10
  requiredFields: mail
  # anonymous: false
  placeholder: 社交登录可助您快速录入信息，可匿名评论，但您的评论必须经人工审核通过后才会显示，并可收到相关回复邮件通知，因此邮箱为必填项
  # avatarCDN: https://sdn.geekzu.org/avatar/
  #https://valinecdn.bili33.top/
  langMode:
    admin: Hajeekn
```

当然 Waline 现在也可以更改邮件模板
只需要在环境变量内写入就行
但是环境变量限制大小,推荐按照[issues/106](https://github.com/lizheming/waline/issues/106)配置
当然如果你的评论不是很多，并且之前配置过 Valine-Admin，那么你仍然可以使用 LeanCloud 来做异步发送通知，关闭默认的通知配置，或者使用 js 推送

## 表情包配置(Butterfly)

这部分和 Valine 没多大差别,格式也可以直接复制粘贴 Valine 的
只需要把名字改为 waline.json
具体可以查看[主题文档](https://butterfly.js.org/posts/ceeb73f/#%E8%A9%95%E8%AB%96)

# CloudBase 云开发部署

可以去看看[@CCKNBC](https://blog.ccknbc.cc/posts/waline-commens-system-deployment-logs/#CloudBase-%E4%BA%91%E5%BC%80%E5%8F%91%E9%83%A8%E7%BD%B2)(CC)大佬写的

# 升级

## Vercel

这里照搬[@CCKNBC](https://blog.ccknbc.cc/posts/waline-commens-system-deployment-logs/#CloudBase-%E4%BA%91%E5%BC%80%E5%8F%91%E9%83%A8%E7%BD%B2)の
所需要的工具

- [Renovate](https://github.com/marketplace/renovate)
- [Mergify](https://github.com/marketplace/mergify)

当然前提是公开仓库
安装完成后你就可以删除你现有的名为 Waline 的仓库，再 fork [CCKNBC 的仓库](https://github.com/ccknbc-actions/waline)，然后去你的 Vercel 解绑之前的仓库，再绑定你 fork 的仓库，最后点一下重新部署即可
但是如果你没用 tcb 就把 .github/workflows/Update Waline TCB.yml   里的文件删掉，因为涉及到自动部署更新云开发，还有环境变量问题，如果没设定会导致报错
**_这部分照搬了 CC 的文章熬_**

## Tencent CloudBase

和上面一样
Fork [CCKNBC 的仓库](https://github.com/ccknbc-actions/waline) 然后新建几个变量
进入你的仓库/settings/secrets/actions

| 变量名                                         | 变量解释                                                                   |
| ---------------------------------------------- | -------------------------------------------------------------------------- |
| SECRETID                                       | API 访问密钥 ID，可[点击这里](https://console.cloud.tencent.com/cam/capi)  |
| 新建/查看                                      |
| SECRETKEY                                      | API 访问密钥 KEY，可[点击这里](https://console.cloud.tencent.com/cam/capi) |
| 新建/查看                                      |
| TCBFUNNAME（没什么好加密的，就叫 waline 算了） | 你想要新建/已有函数的名称，比如 `Waline`                                   |
| TCBENVID                                       | 环境 ID，可[点击这里](https://console.cloud.tencent.com/tcb/env/overview)  |

或[这里](https://console.cloud.tencent.com/tcb/env/index)
查看，地址栏后也会显示，反正就是很多地方都在上面点一下就能看到 |

---

我的博客即将同步至腾讯云+社区，邀请大家一同入驻：[https://cloud.tencent.com/developer/support-plan?invite_code=3gll8aqhc2kgg](https://cloud.tencent.com/developer/support-plan?invite_code=3gll8aqhc2kgg)
