---
title: 使用 Travis CI 持续集成工具自动化部署 Hexo
sticky: 1
abbrlink: 9ed5997f
date: 2020-08-19 16:02:36
tags:
description:
categories:
cover: https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/20819Cover.png
photos: https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/20819Cover.png
copyright_author_href: https://blog.slqwq.cn
author: Hajeekn
---

众所周知，Hexo 是一款免费开源的静态博客生成工具，使用它可以快速生成一个博客。但随着文章之类的东西增加，生成的速度也会逐渐变慢，如果你配置不够，那搞不好就要几小时才能生成，并且还有一个好处:

即走即编辑，就算你是手机也可以在线编辑文件，免去配置环境。

所以今天我教大家如何使用持续集成工具----Travis CI 来部署 Hexo

# 创建仓库

我们首先打开[GitHub](https://github.com/)

选择![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200819161129222.png#alt=image-20200819161129222#align=left&display=inline&height=51&margin=%5Bobject%20Object%5D&originHeight=51&originWidth=128&status=done&style=none&width=128)

![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200819161148025.png#alt=image-20200819161148025#align=left&display=inline&height=879&margin=%5Bobject%20Object%5D&originHeight=879&originWidth=1600&status=done&style=none&width=1600)

仓库名称可以随意

但是一定要选择 Private，不然你的博客源码就会被别人看到，到时候使用 Token 提交的各位小伙伴的仓库就不保喽

创建完成后复制你的仓库克隆地址

在 Hexo 根目录下打开终端

输入

```bash
git add travis 复制的仓库克隆地址
```

# 创建 Travis CI 配置

接着去创建一个文件:".travis.yml"

里面输入

```yaml
language: node_js
node_js: stable

sudo: required

# Travis-CI Caching
cache:
  directories:
    - node_modules

# S: Build Lifecycle
install:
  - npm install

script:
  - hexo clean && hexo g
  - cd ./public
  - git init
  - git config user.name "NAME"
  - git config user.email "EMAIL"
  - git add .
  - git commit -m "Update"
  - git push --force --quiet "XXX" master:master
  - git push --force --quiet "XXX" master:master

# after_script:

branches:
  only:
    - master
```

其中 NAME 改为 git 用户名 EMAIL 改为邮箱 XXX 改为 GitHub/Coding 的部署地址(Token)(下文会讲到)

# 配置 GitHub Token

写完之后去[GitHub](https://github.com/settings/tokens)创建一个 Token

权限直接全选

然后把你 Hexo 配置 GitHub 的 SSH/HTTPS 部署地址改为

```
https://你的token@github.com/用户名/仓库.git
```

# 配置 Coding Token(有就使用，没有就不使用)

进入 Coding 企业

![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/20200819172348.png#alt=image-20200819172330736#align=left&display=inline&height=432&margin=%5Bobject%20Object%5D&originHeight=432&originWidth=296&status=done&style=none&width=296)

右上角找到个人账户设置

进入访问令牌设置

新建令牌

权限依然全选

选择完后将你 Hexo 的 codingSSH/HTTPS 部署地址改为

```
https://username:password@e.coding.net/用户名/仓库名.git
```

# 注册 Travis

首先我们要打开[Travis 官网](https://travis-ci.com/)

然后注册一个账户

注册完成后会跳转到仪表盘

我们点击那个小加号

找到从跳转的页面找到我们刚才创建的仓库

可以看到没有构建接下来我们

在终端内输入

```bash
git add --all
git commit -m "这里随便"
git push -u travis master -f
```

提交完成后就刷新看看你的 Travis 吧
