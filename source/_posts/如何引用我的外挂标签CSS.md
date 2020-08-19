---
title: More-Beautiful-Div-Framework
sticky: 1
tags: Hexo
abbrlink: 7d8b55fe
date: 2020-06-14 12:32:18
description: 都2020年了，还在用老土的CSS框架?
cover: https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/2614Cover.png
---
<link rel="stylesheet" href="/css/font-awesome-animation.min.css">
注:本CSS基于WordPress niRvana主题制作
Butterfly引用方法
旧版本:\themes\Butterfly的_config.yml
新版本:\source\_data\butterfly.yml
打开后
找到inject:
 head:处
添加

```
      - <link rel="stylesheet" href="https://unpkg.com/more-beautiful-div-framework/more-beautiful-div-framework.min.css">
      - <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css">
      - <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/More-Beautiful-Div-Framework/More-Beautiful-Div-Framework-CDN/yl-if.css">
```

网页引用方法:

网页head处添加

```
<link rel="stylesheet" href="https://unpkg.com/more-beautiful-div-framework/more-beautiful-div-framework.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/More-Beautiful-Div-Framework/More-Beautiful-Div-Framework-CDN/yl-if.css">
```



文章内引用方法:

```
<div class="tip lite"><p>文字</p><p></p></div>
<div class="tip ban"><p>文字</p><p></p></div>
<div class="tip home"><p>文字</p><p></p></div>
<div class="tip impo"><p>魔改标签4</p><p></p></div>
<div class="tip ref"><p>魔改标签5</p><p></p></div>
<div class="tip set"><p>魔改标签6</p><p></p></div>
<div class="tip key"><p>魔改标签7</p><p></p></div>
<div class="tip bell"><p>魔改标签8</p><p></p></div>
<div class="tip qq"><p>魔改标签9</p><p></p></div>
```

例子:



<div class="tip lite faa-bounce animated"><p>魔改标签1</p><p></p></div>
<div class="tip ban faa-bounce animated"><p>魔改标签2</p><p></p></div>
<div class="tip home faa-bounce animated"><p>魔改标签3</p><p></p></div>
<div class="tip impo faa-bounce animated"><p>魔改标签4</p><p></p></div>
<div class="tip ref faa-bounce animated"><p>魔改标签5</p><p></p></div>
<div class="tip set faa-bounce animated"><p>魔改标签6</p><p></p></div>
<div class="tip key faa-bounce animated"><p>魔改标签7</p><p></p></div>
<div class="tip bell faa-bounce animated"><p>魔改标签8</p><p></p></div>
<div class="tip qq faa-bounce animated"><p>魔改标签9</p><p></p></div>

目前此拓展会持续更新

# 依赖

依赖如下:

FontAwesome 5 / 4(除QQ样式以外的其他样式依赖项)

iconfont(QQ样式的依赖项)

# 更新日志:
2020/8/36

18:30 版本号V1.9

更换部分标签引用名称

2020/6/22

14:05 版本号V1.8

将QQ样式的图标替换为iconfont图标

2020/6/17
20:29 版本号V1.7(跳过1.6)
添加压缩过的css(more-beautiful-div-framework.min.css)
提供jsdelivr的CSS地址
兼容V5
添加QQ样式

17:52 版本号V1.5
取消pool.css依赖
将jsdelivr地址换为unpkg地址

2020/6/15
14:55 版本号V1.4
添加socd样式

2020/6/14
18:20 版本号V1.3
添加ref、ffa、key样式

14:45 版本号V1.2
添加important样式

12:30 版本号V1.1
添加Home样式

12:00 版本号V1.0
添加Wtgo、ban2种样式

10:00
开启此项目