---
title: 想写一个Button?看这里
sticky: 1
tags: [CSS, HTML]
categories: [干货]
cover: https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/20824Cover.png
photos: https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/20824Cover.png
abbrlink: 5b931a80
date: 2020-08-24 20:47:02
copyright_author_href: https://blog.slqwq.cn
author: Hajeekn
description:
---

想写一个 Button 但是不会 CSS 和动画效果?这期~~水货~~干货满满不知道什么是 Button?

这是 Button![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200824204912814.png#alt=#align=left&display=inline&height=74&margin=%5Bobject%20Object%5D&originHeight=74&originWidth=253&status=done&style=none&width=253)

这也算 Button![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200824205205073.png#alt=image-20200824205205073#align=left&display=inline&height=51&margin=%5Bobject%20Object%5D&originHeight=51&originWidth=253&status=done&style=none&width=253)

这边就拿[我的个人主页](https://slqwq.cn)的 ↗ Go Blog 为例子

首先我们在本地创建一个 HTML 和 CSS

类似这样![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200824205941692.png#alt=image-20200824205941692#align=left&display=inline&height=57&margin=%5Bobject%20Object%5D&originHeight=57&originWidth=108&status=done&style=none&width=108)

然后我们右键 HTML

打开后按照你写一个页面的格式

写一个简单的空壳页面

我这边是这样写的:

```html
<!DOCTYPE HTML>
<!-- Start --!>
<html>
<head>
<link rel="stylesheet" type="text/css" href="./bt.css">
</head>
<body>
<p>I'm Body</p>
</body>
</html>
```

写完后我们首先在 Body 部分写一个自定义样式的超链接

```html
<a
  class="btn"
  href="https://blog.slqwq.cn"
  target="_blank"
  rel="external nofollow noopener noreferrer"
  one-link-mark="yes"
  ><span>&nbsp;&nbsp; ↗&nbsp;Go Blog &nbsp;&nbsp;</span></a
>
```

然后我们打开 css

在里面写入:

```css
#btns .btn {
}
```

这样一个基本 CSS 框架就好了

然后我们就可以开始写 CSS 部分了

先写入

```css
padding: 0;
```

使填充为 0

再写入

```css
font-size: 100%;
```

使字体尺码为 100%

然后写入

```css
position: relative;
```

生成相对定位的元素，相对于其正常位置进行定位。

接着写入

```css
z-index: 1;
```

设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面

之后写入

```css
align-items: center;
```

定义 flex 子项在 flex 容器的当前行的侧轴(纵轴)方向上的对齐方式

最后写入

```css
border-radius: 50%;
```

给 div 元素添加方形的边框

这时候显示出来还是这种状态

![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200824211520197.png#alt=image-20200824211520197#align=left&display=inline&height=34&margin=%5Bobject%20Object%5D&originHeight=34&originWidth=181&status=done&style=none&width=181)

然后咱们再写入

```css
    border: 4px solid hsla(0,0%,100%,.7);
    0,0,0,.08), 0 3px 8px rgba(0,0,0,.06): ;
    border: none;
    box-shadow: 0 14px 38px #2196f300, 0 3px 8px #2196f300;
    background-color: #2196F3;
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
    margin: 0 30px;
    width: 54px;
    height: 54px;
    min-width: 54px;
    min-height: 54px;
    border-radius: 0px;
    line-height: 4.3rem;
    font-size: 20px;
    color: #eff;
```

定义背景颜色之类的

然后就成了这个亚子![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200824212140436.png#alt=image-20200824212140436#align=left&display=inline&height=39&margin=%5Bobject%20Object%5D&originHeight=39&originWidth=267&status=done&style=none&width=267)

这时候已经半成了

我们只需要再去掉下划线，调调大小之类的就行了，所以就写入

```css
text-decoration: none;
```

![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200824212559632.png#alt=image-20200824212559632#align=left&display=inline&height=67&margin=%5Bobject%20Object%5D&originHeight=67&originWidth=171&status=done&style=none&width=171)

这就是去掉下划线后的样子，然后我们需要添加鼠标移动效果

```css
.btn:hover {
  background-color: #ff7242;
  -webkit-transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66);
  -moz-transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66);
  -o-transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66);
  -ms-transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66);
  transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66);
  -webkit-transform: scaleX(1);
  -moz-transform: scaleX(1);
  -o-transform: scaleX(1);
  -ms-transform: scaleX(1);
  transform: scaleX(1);
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  -ms-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
}
```

然后就可以达到鼠标移上去变色的效果

接着咋们在修改亿点地方

最终成品

![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200824212841163.png#alt=image-20200824212841163#align=left&display=inline&height=80&margin=%5Bobject%20Object%5D&originHeight=80&originWidth=171&status=done&style=none&width=171)

文章水完了，溜了溜了
