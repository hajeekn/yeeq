---
title: 使用Cloud Studio在云端编写文章

sticky: 1

tags:
  - Cloud Studio

description:
  - Hexo
  - Cloud Studio

categories:
  - Hexo
  - Cloud Studio

cover: "[https://rmt.dogedoge.com/fetch/hajeekn/storage/20210118112009.png](https://rmt.dogedoge.com/fetch/hajeekn/storage/20210118112009.png)"

abbrlink: e9fc7b

date: 2021-01-18 10:33:31
---

Hexo 是一款静态博客编写软件，它功能丰富、使用简便。把文件放在你的电脑内虽然安全，但是不易携带。这篇文章教大家如何将自己的博客放在云端，随时随地编写文章。

# 挑选供应商

可以供我们放在云端的供应商有许多，以下列举几个

- 1.GitHub
- 2.Vercel
- 3.Travis CI
- 4.Tencent Coding Cloud Studio

这次我们选用 Tencent Coding Cloud Studio(主要还是因为它在国内)

# 准备步骤

首先打开 Coding 官网

[Coding](https://coding.net)打开后请先登录

登陆完成后进入工作台

在侧栏的倒数第三项会看到 Cloud Studio![](https://rmt.dogedoge.com/fetch/hajeekn/storage/20210118104745.png#alt=image-20210118104745329)点击进入

会跳转到 OAuth 授权页，同意授权。

# 新建工作空间

同意后会跳转到 Cloud Studio 页面

选择创建工作空间

![](https://rmt.dogedoge.com/fetch/hajeekn/storage/20210118104907.png#alt=image-20210118104907782)

![](https://rmt.dogedoge.com/fetch/hajeekn/storage/20210118105019.png#alt=image-20210118105019271)

然后请安装图片上进行配置

如果您不想后续手动上传代码，可以新建一个 Coding 仓库，将代码上传上去。

# 空间配置

创建完成后进入空间

![](https://rmt.dogedoge.com/fetch/hajeekn/storage/20210118105330.png#alt=image-20210118105330351)

如果上一步你填写了代码来源，这一步在 REMOTEWORKING 中就会出现文件。

在 Cloud Studio 编写文章等操作与本地基本一致，只不过是系统环境有所不同。

点击上面的终端->新终端就可以调出终端

# Thanks For You

{% mermaid %}

pie

title 文章内容采集

"自写" : 100.00

{% endmermaid %}
