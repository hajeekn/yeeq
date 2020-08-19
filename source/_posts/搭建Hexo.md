---
title: 搭建Hexo
sticky: 1
cover: 'https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/20818Cover.png'
abbrlink: 731e29be
date: 2020-08-19 15:29:37
tags:
description:
categories:
---

本期教大家如何搭建Hexo

首先需要准备的东西如下:

1.电脑

2.手

3.脑袋

好了没了

# 安装Node.js

由于Hexo这款博客程序是基于Node.js所构建的，所以我们需要下载Node.js

打开[Node.js官网](https://nodejs.org/)

![image-20200818194143958](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200818194143958.png)

选择下载稳定版（LTS):12.18.3

下载并安装完成后验证是否安装好了的方法

打开终端

![image-20200818194315128](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200818194315128.png)

输入node -v和npm -v

如果出现版本号v....就说明安装成功

# 安装Git

使用Hexo呢Git也是必不可少的

打开[Git官网](https://git-scm.com/)

![image-20200818194509564](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200818194509564.png)

点击Donload 2.28.0 for Windows即可进行下载

但由于是使用GitHub的release进行下载所以速度较慢

国内用户可以使用:[淘宝镜像源](https://npm.taobao.org/mirrors/git-for-windows/)进行下载，最新版本需要翻到最底下进行下载

安装好后在桌面单击右键，如果右键菜单出现

Git Bash Here的字眼则代表安装成功

# 安装Hexo

新建一个文件夹，在里面右键

选择Git Bash Here打开Git终端

输入

```bash
npm install hexo-cli -g
```

安装Hexo-cli

安装好后输入

```bash
hexo init
```

来初始化Hexo，此步骤会从GitHub下载Hexo的主题、依赖文件所以时间会比较久，请耐心等待哦o(*￣▽￣*)ブ如果你有条件就科学上网吧~

当提示INFO  Start blogging with Hexo!时就安装完成了

查看安装的文件夹

发现有这些文件／文件夹：

- node_modules

- scaffolds
- source
- themes
- .gitignore
- _config.yml
- package.json
- package-lock.json

其中node_modules是你安装的插件存放位置，删掉了必须重新npm i

scaffolds是你博客的模板存储位置，page.md就是创建page时使用什么模板以此类推就行

source是用来存放博客资源的，一般都是随手扔文件进去就行

.gitignore目前用不到(除了使用GitHub actions等持续集成部署博客的)

_config.yml用来存放Hexo配置

package.json顾名思义，就是你安装的插件名称和版本都会被存储在里面

其中我们要用到的是themes、_config.yml

# 安装主题

首先我们去[Hexo官方主题网站](https://hexo.io/themes/)找一个好看的主题

这边用Butterfly为例

点击它的图片进去看看效果

![image-20200818200703690](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200818200703690.png)

个人觉得还行,目前我正在用,体验也非常好

这款主题的GitHub仓库为https://github.com/jerryc127/hexo-theme-butterfly

进入后在README.md中有2种安装方法

1.使用普通安装方法(git clone)

2.使用NPM安装(npm install hexo-theme-butterfly)

![image-20200818200903194](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200818200903194.png)

这边用GIT做演示

复制指令

![image-20200818201049614](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200818201049614.png)

在终端内部粘贴并回车

![image-20200818201210030](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200818201210030.png)

安装完成后根据GitHub仓库的README.md提示还需要安装pug&stylus渲染器

指令如下:

```bash
npm install hexo-renderer-pug hexo-renderer-stylus
```

安装依赖完成后我们打开_config.yml

找到theme:

把它改为Butterfly

保存文件,然后在终端执行

```bash
hexo s
```

打开Hexo的本地预览工具看看效果

默认的打开地址是:http://localhost4000

用户可通过hexo s -p <port>来指定访问端口

比如2000

1080

8081等

# 更改名称

Hexo安装完成后默认的名称为Hexo，那么如何更改呢

首先打开_config.yml

找到"# Site"

更改title subtitle description keywords author

title更改为您的博客名字

subtitle更改为你的介绍

keywords更改为你想要的关键字

author更改为你自己的名字

# 部署到服务器

一切准备完成后就可以部署了

这边演示Coding部署

双部署也一样

首先打开[Coding官网](https://coding.net)

如果没有账号就点击免费注册

注册完成进入你的企业

选择创建项目

项目模板使用DevOps

名称可以随意

例如:👴的博客等

这边用👴的博客示范

![image-20200818203235594](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200818203235594.png)

启用README.md初始化可以随意

公开源代码可以自选

配置完后点击完成创建

接下来进入持续部署-静态网站

进行实名认证

认证完成后点击立即发布静态网站

网站名称依旧随便填写

其他配置不要动

点击完成创建

这时候出现这个页面

![image-20200818203511281](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200818203511281.png)

选择设置

下滑找到自定义域名

![image-20200818203536672](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200818203536672.png)

复制用以代替xxxx.coding-pages.com作为网站的访问地址的xxxx.coding-pages.com

然后打开DNS解析商

这边使用dns.la

新建一个解析

解析设置:

![image-20200818203708597](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200818203708597.png)

其中主机记录可以自行设置

比如www

test

cna等

如果要直接用域名访问主机记录留空

做好解析之后回到Coding页面

添加刚才的域名

这边使用test.slqwq.cn做示范

![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200818203831234.png)

这时候会出现这样的样子

这是在生成证书

证书状态变为正常后推荐打开强制HTTPS

这些做完后打开_config.yml找到deploy配置

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

安装Hexo-Deployer-Git

安装完后就可以使用

```bash
hexo clean && hexo d -g
```

部署了

# End

结束了~

感谢您的观看

更多进阶功能可前往[Hexo文档](https://hexo.io/zh-cn/docs/)和[Butterfly主题文档](https://demo.jerryc.me)查看