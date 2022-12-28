---
title: 搭建 Hexo
sticky: 1
cover: https://i0.hdslb.com/bfs/album/39546ccc52c43f00101b16a481aa5f86c68445d5.png
abbrlink: 731e29be
date: 2020-08-19 15:29:37
tags:
description:
categories:
author: Hajeekn
---

本期教大家如何搭建 Hexo

首先需要准备的东西如下:

1.电脑

2.手

3.脑袋

好了没了

# 安装 Node.js

由于 Hexo 这款博客程序是基于 Node.js 所构建的，所以我们需要下载 Node.js

打开[Node.js 官网](https://nodejs.org/)

![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200818194143958.png#alt=image-20200818194143958#align=left&display=inline&height=268&margin=%5Bobject%20Object%5D&originHeight=268&originWidth=994&status=done&style=none&width=994)

选择下载稳定版（LTS):12.18.3

下载并安装完成后验证是否安装好了的方法

打开终端

![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200818194315128.png#alt=image-20200818194315128#align=left&display=inline&height=633&margin=%5Bobject%20Object%5D&originHeight=633&originWidth=1118&status=done&style=none&width=1118)

输入 node -v 和 npm -v

如果出现版本号 v....就说明安装成功

# 安装 Git

使用 Hexo 呢 Git 也是必不可少的

打开[Git 官网](https://git-scm.com/)

![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200818194509564.png#alt=image-20200818194509564#align=left&display=inline&height=269&margin=%5Bobject%20Object%5D&originHeight=269&originWidth=339&status=done&style=none&width=339)

点击 Donload 2.28.0 for Windows 即可进行下载

但由于是使用 GitHub 的 release 进行下载所以速度较慢

国内用户可以使用:[淘宝镜像源](https://npm.taobao.org/mirrors/git-for-windows/)进行下载，最新版本需要翻到最底下进行下载

安装好后在桌面单击右键，如果右键菜单出现

Git Bash Here 的字眼则代表安装成功

# 安装 Hexo

新建一个文件夹，在里面右键

选择 Git Bash Here 打开 Git 终端

输入

```bash
npm install hexo-cli -g
```

安装 Hexo-cli

安装好后输入

```bash
hexo init
```

来初始化 Hexo，此步骤会从 GitHub 下载 Hexo 的主题、依赖文件所以时间会比较久，请耐心等待哦 o(_￣ ▽ ￣_)ブ如果你有条件就科学上网吧~

当提示 INFO  Start blogging with Hexo!时就安装完成了

查看安装的文件夹

发现有这些文件／文件夹：

- node_modules
- scaffolds
- source
- themes
- .gitignore
- \_config.yml
- package.json
- package-lock.json

其中 node_modules 是你安装的插件存放位置，删掉了必须重新 npm i

scaffolds 是你博客的模板存储位置，page.md 就是创建 page 时使用什么模板以此类推就行

source 是用来存放博客资源的，一般都是随手扔文件进去就行

.gitignore 目前用不到(除了使用 GitHub actions 等持续集成部署博客的)

\_config.yml 用来存放 Hexo 配置

package.json 顾名思义，就是你安装的插件名称和版本都会被存储在里面

其中我们要用到的是 themes、\_config.yml

# 安装主题

首先我们去[Hexo 官方主题网站](https://hexo.io/themes/)找一个好看的主题

这边用 Butterfly 为例

点击它的图片进去看看效果

![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200818200703690.png#alt=image-20200818200703690#align=left&display=inline&height=4001&margin=%5Bobject%20Object%5D&originHeight=4001&originWidth=1598&status=done&style=none&width=1598)

个人觉得还行,目前我正在用,体验也非常好

这款主题的 GitHub 仓库为https://github.com/jerryc127/hexo-theme-butterfly

进入后在 README.md 中有 2 种安装方法

1.使用普通安装方法(git clone)

2.使用 NPM 安装(npm install hexo-theme-butterfly)

![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200818200903194.png#alt=image-20200818200903194#align=left&display=inline&height=331&margin=%5Bobject%20Object%5D&originHeight=331&originWidth=731&status=done&style=none&width=731)

这边用 GIT 做演示

复制指令

![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200818201049614.png#alt=image-20200818201049614#align=left&display=inline&height=42&margin=%5Bobject%20Object%5D&originHeight=42&originWidth=1093&status=done&style=none&width=1093)

在终端内部粘贴并回车

![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200818201210030.png#alt=image-20200818201210030#align=left&display=inline&height=144&margin=%5Bobject%20Object%5D&originHeight=144&originWidth=1106&status=done&style=none&width=1106)

安装完成后根据 GitHub 仓库的 README.md 提示还需要安装 pug&stylus 渲染器

指令如下:

```bash
npm install hexo-renderer-pug hexo-renderer-stylus
```

安装依赖完成后我们打开\_config.yml

找到 theme:

把它改为 Butterfly

保存文件,然后在终端执行

```bash
hexo s
```

打开 Hexo 的本地预览工具看看效果

默认的打开地址是:[http://localhost4000](http://localhost4000)

用户可通过 hexo s -p 来指定访问端口

比如 2000

1080

8081 等

# 更改名称

Hexo 安装完成后默认的名称为 Hexo，那么如何更改呢

首先打开\_config.yml

找到"# Site"

更改 title subtitle description keywords author

title 更改为您的博客名字

subtitle 更改为你的介绍

keywords 更改为你想要的关键字

author 更改为你自己的名字

# 部署到服务器

一切准备完成后就可以部署了

这边演示 Coding 部署

双部署也一样

首先打开[Coding 官网](https://coding.net)

如果没有账号就点击免费注册

注册完成进入你的企业

选择创建项目

项目模板使用 DevOps

名称可以随意

例如:👴 的博客等

这边用 👴 的博客示范

![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200818203235594.png#alt=image-20200818203235594#align=left&display=inline&height=751&margin=%5Bobject%20Object%5D&originHeight=751&originWidth=1586&status=done&style=none&width=1586)

启用 README.md 初始化可以随意

公开源代码可以自选

配置完后点击完成创建

接下来进入持续部署-静态网站

进行实名认证

认证完成后点击立即发布静态网站

网站名称依旧随便填写

其他配置不要动

点击完成创建

这时候出现这个页面

![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200818203511281.png#alt=image-20200818203511281#align=left&display=inline&height=757&margin=%5Bobject%20Object%5D&originHeight=757&originWidth=1598&status=done&style=none&width=1598)

选择设置

下滑找到自定义域名

![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200818203536672.png#alt=image-20200818203536672#align=left&display=inline&height=381&margin=%5Bobject%20Object%5D&originHeight=381&originWidth=1293&status=done&style=none&width=1293)

复制用以代替 xxxx.coding-pages.com 作为网站的访问地址的 xxxx.coding-pages.com

然后打开 DNS 解析商

这边使用 dns.la

新建一个解析

解析设置:

![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200818203708597.png#alt=image-20200818203708597#align=left&display=inline&height=41&margin=%5Bobject%20Object%5D&originHeight=41&originWidth=1066&status=done&style=none&width=1066)

其中主机记录可以自行设置

比如 www

test

cna 等

如果要直接用域名访问主机记录留空

做好解析之后回到 Coding 页面

添加刚才的域名

这边使用 test.slqwq.cn 做示范

![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200818203831234.png#alt=#align=left&display=inline&height=87&margin=%5Bobject%20Object%5D&originHeight=87&originWidth=1247&status=done&style=none&width=1247)

这时候会出现这样的样子

这是在生成证书

证书状态变为正常后推荐打开强制 HTTPS

这些做完后打开\_config.yml 找到 deploy 配置

里面这样填写

```yaml
deploy:
  type: git
  repo: https://e.coding.net/企业名/项目名/仓库名.git
  branch: master
```

填写完后在终端内输入

```bash
npm install hexo-deployer-git --save
```

安装 Hexo-Deployer-Git

安装完后就可以使用

```bash
hexo clean && hexo d -g
```

部署了

# End

结束了~

感谢您的观看

更多进阶功能可前往[Hexo 文档](https://hexo.io/zh-cn/docs/)和[Butterfly 主题文档](https://demo.jerryc.me)查看
