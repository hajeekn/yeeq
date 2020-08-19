---
title: 使用Travis CI持续集成工具自动化部署Hexo
sticky: 1
date: 2020-08-19 16:02:36
tags:
description:
categories:
cover:
---

众所周知，Hexo是一款免费开源的静态博客生成工具，使用它可以快速生成一个博客。但随着文章之类的东西增加，生成的速度也会逐渐变慢，如果你配置不够，那搞不好就要几小时才能生成，并且还有一个好处:

即走即编辑，就算你是手机也可以在线编辑文件，免去配置环境。

所以今天我教大家如何使用持续集成工具----Travis CI来部署Hexo

# 创建仓库

我们首先打开[GitHub](https://github.com/)

选择![image-20200819161129222](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200819161129222.png)

![image-20200819161148025](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200819161148025.png)

仓库名称可以随意

但是一定要选择Private，不然你的博客源码就会被别人看到，到时候使用Token提交的各位小伙伴的仓库就不保喽

创建完成后复制你的仓库克隆地址

在Hexo根目录下打开终端

输入

```bash
git add travis 复制的仓库克隆地址
```

接着去创建一个文件:".travis.yml"

里面输入

``` yaml
language: node_js
node_js: stable

sudo: required

# Travis-CI Caching
cache:
  directories:
    - node_modules

# S: Build Lifecycle
install:
  - npm install hexo-cli -g
  - npm install

script:
  - hexo clean && hexo d -g

# after_script:

branches:
  only:
    - hexo
```





