---
title: 从零搭建Hexo博客 2部分
sticky: 1
abbrlink: '37890470'
date: 2020-05-28 16:58:20
tags: 搭建Hexo系列
description:
---
你们期待的2部分
他来啦
2部分介绍的是安装主题及插件
如果要看如何安装Hexo和环境配置请到1部分

# 安装主题
Hexo装好后默认是
<img src="https://cdn.jsdelivr.net/gh/Open-super/ImgHosting//SuperImg/2020528/1.PNG"/>
这是Hexo的默认
还挺丑的
所以我来说说咋安装主题(各大文档都有)
主题的话可以去
```
https://hexo.io/themes/
```

这里查看
在这里说不定能选到你心仪的主题哦~
这边以Butterfly来演示
首先查看主题文档(报错一般都可以解决)
Butterfly的主题文档是:
https://docs.jerryc.me/
首先需要克隆主题
这边Butterfly贴心的提供了开发版和正式版
这边我们用正式版做演示
安装方式:
```
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly
```

# 配置主题
安装好后不慌
还有东西要做
1.修改Hexo根目录的_config.yml的theme: 项改为
theme: Butterfly
2.安装pug和stylus渲染器
```
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

或者使用

```
yarn add hexo-renderer-pug hexo-renderer-stylus
```

来安装

# 安装插件

接下来是照抄环节:
平滑升級
為了主題的平滑升級, Butterfly 使用了 data files特性。

推薦把主題默認的配置文件_config.yml複製到 Hexo 工作目錄下的source/_data/butterfly.yml，如果source/_data的目錄不存在那就創建一個。

注意，如果你創建了butterfly.yml, 它將會替換主題默認配置文件_config.yml裏的配置項 (不是合併而是替換), 之後你就只需要通過git pull的方式就可以平滑地升級 theme-butterfly了。

<p id="div-border-left-red">这个问题也是对最新版本中修改_config.yml文件没效果的解释</p>

主题配置完成后的效果:

<img src="https://cdn.jsdelivr.net/gh/Open-super/ImgHosting//SuperImg/2020528/2.PNG"/>

关于主题的自定义配置这里不多BB
可以参考主题文档一步步的完成

接下来就是安装插件了(
我推荐的插件:
hexo-neat #压缩插件
hexo-abbrlink #链接缩短插件
hexo-external-link #外链跳转插件

文章水完了，溜了溜了。









