---
title: 如何引用我的外挂标签CSS
sticky: 1
tags: Hexo
abbrlink: 7d8b55fe
date: 2020-06-14 12:32:18
description:
---
在ButterflyQQ群里的人都知道我对小康的外挂标签进行了拓展
现在我来教大家如何引用
首先打开主题配置
旧版本:\themes\Butterfly的_config.yml
新版本:\source\_data\butterfly.yml
打开后
找到inject:
  head:处
添加
```
      - <link rel="stylesheet" href="https://unpkg.com/more-beautiful-div-framework/more-beautiful-div-framework.min.css">
```

文章内引用方法:
```
<div class="tip wtgo"><p>文字</p><p></p></div>
<div class="tip ban"><p>文字</p><p></p></div>
<div class="tip home"><p>文字</p><p></p></div>
<div class="tip important"><p>魔改标签4</p><p></p></div>
<div class="tip ref"><p>魔改标签5</p><p></p></div>
<div class="tip ffa"><p>魔改标签6</p><p></p></div>
<div class="tip key"><p>魔改标签7</p><p></p></div>
<div class="tip socd"><p>魔改标签8</p><p></p></div>
<div class="tip qq"><p>魔改标签9</p><p></p></div>
```

例子:
<div class="tip wtgo faa-spin animated-hover"><p>魔改标签1</p><p></p></div>
<div class="tip ban faa-bounce animated"><p>魔改标签2</p><p></p></div>
<div class="tip home faa-spin animated-hover"><p>魔改标签3</p><p></p></div>
<div class="tip important faa-bounce animated"><p>魔改标签4</p><p></p></div>
<div class="tip ref faa-spin animated-hover"><p>魔改标签5</p><p></p></div>
<div class="tip ffa faa-bounce animated"><p>魔改标签6</p><p></p></div>
<div class="tip key faa-spin animated-hover"><p>魔改标签7</p><p></p></div>
<div class="tip socd faa-bounce animated"><p>魔改标签8</p><p></p></div>
<div class="tip qq faa-spin animated-hover"><p>魔改标签9</p><p></p></div>

目前此拓展会持续更新

# 依赖

依赖如下:

FontAwesome 5 / 4(除QQ样式以外的其他样式依赖项)

iconfont(QQ样式的依赖项)

# 更新日志:
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