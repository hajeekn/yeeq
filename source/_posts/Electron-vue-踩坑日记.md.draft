---
title: Electron-vue 踩坑日记
sticky: 1
tags:
  - electron
categories:
  - electron
abbrlink: a91d31f8
date: 2022-12-31 11:48:28
description:
cover:
---

记录一下构建 `Electron` 应用程序的步骤和坑

# 搭建环境

为了方便,我用了 `electron-vue` 

> 可别以为这东西有多好,它是 Vue 2.x 和 Webpack 4 的产物,一堆坑

首先安装 `vue-cli`

> vue-cli 有 2.x 和 3.x 两种,两个是不同的包
>
> 根据我的使用,新版的 cli 基本上兼容 Vue 2.x 项目
>
> 而且新版 cli 有 ui(在 Vue 2.x 上功能不完全)

```bash
$ npm install @vue/cli --global
```

你也可以安装旧版 `cli`

```bash
$ npm install vue-cli --glboal
```

然后初始化项目

对于旧版 `cli`,你可以直接初始化

```bash
$ vue init simulatedgreg/electron-vue my-project
```

但是对于新版的 `cli` 你需要额外安装`vue-init`

```bash
$ npm install -g @vue/cli-init
$ vue init simulatedgreg/electron-vue my-project
```

详细请看 [创建一个项目 | Vue CLI (vuejs.org)](https://cli.vuejs.org/zh/guide/creating-a-project.html#拉取-2-x-模板-旧版本)

然后安装依赖并开发

```bash
$ cd my-project
$ yarn install
$ yarn dev
```

# 坑

第一个坑 `Window is not defined`

![image-20221231120220738](https://i0.hdslb.com/bfs/album/f51eaa5b970edaf9954bd16dfcb3fc86679dbe84.png)

这个我搜文档搜了挺久

修复方法: 使用 `isomorphic-style-loader`

```bash
$ npm install isomorphic-style-loader --save
```

