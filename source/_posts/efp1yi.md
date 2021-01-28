---
title: Hexo-Butterfly主题魔改
sticky: 1
tags: [Hexo, 主题魔改]
description: 想魔改自己的主题却总是报错?这篇文章我会将我的主题魔改贡献出来。
categories: [Hexo, 主题魔改]
cover:
photos:
abbrlink: bbr35lia
date: 2021-01-26 20:00:46
copyright_author_href: https://blog.slqwq.cn
author: Hajeekn
id: 27
---

本文章首发于[语雀](https://www.yuque.com/ladjeek/ygg4q6)!
通过各种高科技功能同步到[Hajeekn 的博客](https://blog.slqwq.cn)
{% note green 'fab fa-internet-explorer' simple %}
本文章大部分功能涉及到魔改,如果您无法掌握 pug、stylus 等文件的缩进格式，可以直接前往我的博客源码拿取。
{% endnote %}
{% btn 'https://github.com/ladjeek-actions/blogsour',这里是我的博客源码哦~,far fa-hand-point-right,orange larger %}
{% note warning simple %}
由于每个人的博客目录都不相同，这里博客目录使用%brt%代替
{% endnote %}

# 通过 wowjs 给博客添加好看的样式

## 基础样式篇

这个模块将会教大家如果给博客中添加浮动的样式

- 1.创建 JS

前往`%brt%\themes\butterfly\source\js\`
新建一个 js,名称为`wow-init.js`
其 JS 内部写入如下内容

```javascript
wow = new WOW({
  boxClass: "wow",
  // 用户滚动时显示隐藏框的类名称(可以自行配置)
  animateClass: "animate__animated",
  // 触发 CSS 动画的类名称（动画库默认为"animate.css"库）(可以自行配置)
  offset: 0,
  // 定义浏览器视口底部与隐藏框顶部之间的距离。
  // 当用户滚动并到达此距离时，将显示隐藏的框。
  // 可以自行配置
  live: true,
  // 在页面上检查新的 wow.js元素。
});
wow.init();
```

如果您觉得不想出现注释，也可以删掉注释。

- 2.前往`%brt%\themes\butterfly\layout\includes\third-party\`目录,新建一个名为`wow-js.pug`的文件

其文件内部写入如下代码:

```python
.pjax-reload
  if theme.wowjs.animateitem
    each item in theme.wowjs.animateitem
      script(async).
        var arr = document.getElementsByClassName('!{item.class}');
        for(var i = 0;i<arr.length;i++){
            arr[i].classList.add('wow');
            arr[i].classList.add('!{item.style}');
            arr[i].setAttribute('data-wow-duration', '!{item.duration}');
            arr[i].setAttribute('data-wow-delay', '!{item.delay}');
            arr[i].setAttribute('data-wow-offset', '!{item.offset}');
            arr[i].setAttribute('data-wow-iteration', '!{item.iteration}');
          }
script(defer src=url_for(theme.CDN.wowjs))
script(defer src=url_for(theme.CDN.wowjs_init))
```

- 3.修改`%brt%\themes\butterfly\layout\includes\head.pug`的内容

在 //- font 的配置下
//- global config 的配置上的空白部分写入以下代码(请直接复制粘贴,避免出现缩进错误 ❌)

```
//- animate_css
if theme.wowjs.enable
  link(rel='stylesheet' href=url_for(theme.CDN.animate_css) media="print" onload="this.media='all'")
```

- 4.修改`%brt&\themes\butterfly\layout\includes\additional-js.pug`文件内部的内容

在 if theme.pjax.enable 配置大项的 baidu-push 小项下写入一下代码(请直接复制粘贴,避免出现缩进错误 ❌)
V3.4.0 以下(不包括 3.4.0):
将其中的

```javascript
$('script[data-pjax]').each(function () {
```

删除,并修改为:

```javascript
$("script[data-pjax], .pjax-reload script").each(function () {
  $(this).parent().append($(this).remove());
});
```

V3.4.0 以上(包括 3.4.0):
找到

```javascript
document.querySelectorAll('script[data-pjax]').forEach(item => {
```

删除它,并写入以下代码(请直接复制粘贴,避免缩进错误 ❌)

```javascript
document
  .querySelectorAll("script[data-pjax], .pjax-reload script")
  .forEach((item) => {
    const newScript = document.createElement("script");
    const content = item.text || item.textContent || item.innerHTML || "";
    Array.from(item.attributes).forEach((attr) =>
      newScript.setAttribute(attr.name, attr.value)
    );
    newScript.appendChild(document.createTextNode(content));
    item.parentNode.replaceChild(newScript, item);
  });
```

- 5.修改`%brt\%config%\_config.butterfly.yml`(请将%config%替换为你主题配置文件的位置,如果在根目录请无视)

找到 CDN 配置项
在

```yaml
utils: /js/utils.js
```

的配置项下添加 wowjs、wowjs-init、animate 的库(请直接复制粘贴以下代码,避免格式缩进导致的错误 ❌)

```yaml
wowjs: https://cdn.jsdelivr.net/gh/graingert/wow@1.3.0/dist/wow.min.js
wowjs_init: /js/wow_init.js
animate_css: https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css
```

- 6.修改`%brt\%config%\_config.butterfly.yml`(请将%config%替换为你主题配置文件的位置,如果在根目录请无视)

在该配置文件内部添加 wow 的开关，其中 class 和 style 配置为必填项

```yaml
wowjs:
  enable: true #控制动画开关。true是打开，false是关闭
  animateitem:
    - class: recent-post-item #必填项，需要添加动画的元素的class
      style: animate__zoomIn #必填项，需要添加的动画
      duration: 3s #选填项，动画持续时间，单位可以是ms也可以是s。例如3s，700ms。
      delay: 1s #选填项，动画开始的延迟时间，单位可以是ms也可以是s。例如3s，700ms。
      offset: 100 #选填项，开始动画的距离（相对浏览器底部）
      iteration: 2 #选填项，动画重复的次数
    - class: CoolButton
      style: animate__zoomIn
```

运行`hexo clean && hexo g`后方可看到效果,更多 animate 动画样式可查看[animate 官方文档](https://animate.style/)

## 浮动样式篇

{% note info simple %}
浮动样式篇参考[Aklilar](https://akilar.top/)大佬的文章[给博客元素添加浮动特效](https://akilar.top/posts/9e3bccc6)
{% endnote %}

- 1.前往`%brt%\themes\butterfly\source\js\`目录,新建一个名为`floatpanel.js`的文件

在内部写入以下代码:

```javascript
var ANGLE = 45; //控制浮动角度，数值越大，浮动幅度越大。

var panel = document.getElementsByClassName("wowpanels");
for (var i = 0; i < panel.length; i++) {
  floatable(panel[i]);
}
function floatable(content) {
  content.addEventListener("mouseout", (e) => {
    content.style.transform = `perspective(300px)
								   rotateX(0deg)
								   rotateY(0deg)
								   rotateZ(0deg)`;
  });
  content.addEventListener("mousemove", (e) => {
    var w = content.clientWidth;
    var h = content.clientHeight;
    var y = ((e.offsetX - w * 0.5) / w) * ANGLE;
    var x = ((1 - (e.offsetY - h * 0.5)) / h) * ANGLE;

    content.style.transform = `perspective(300px)
								   rotateX(${x}deg)
								   rotateY(${y}deg)`;
  });
}
```

- 2.修改`%brt\%config%\_config.butterfly.yml`(请将%config%替换为你主题配置文件的位置,如果在根目录请无视)

在 inject 大项的 bottom 小项中添加 script 引入项:

```yaml
- <script async data-pjax src="/js/floatpanel.js"></script>
```

- 3.给你想要特效的类元素添加 wowpanels 属性,修改 floatpanel.js 的代码如下:

```yaml
// 新增的内容
var arr = document.getElementsByClassName('element-class');
//把element-class替换成你想要添加特效的元素的类名
for(var i = 0;i<arr.length;i++){
arr[i].classList.add('wowpanels');
}
// 原来的内容
var ANGLE = 45; //控制浮动角度，数值越大，浮动幅度越大。
var panel= document.getElementsByClassName('wowpanels');
for(var i = 0;i<panel.length;i++){
floatable(panel[i]);
}
function floatable (content) {
content.addEventListener('mouseout', e => {
content.style.transform = `perspective(300px)
rotateX(0deg)
rotateY(0deg)
rotateZ(0deg)`;
});
content.addEventListener('mousemove', e => {
var w = content.clientWidth;
var h = content.clientHeight;
var y = (e.offsetX - w * 0.5) / w * ANGLE;
var x = (1 - (e.offsetY - h * 0.5)) / h * ANGLE;

content.style.transform = `perspective(300px)
rotateX(${x}deg)
rotateY(${y}deg)`;
});
}
```

_**当你完成了基础样式篇时,其实你可以直接将浮动效果看成一个动画样式**_
在之前的配置下直接添加以下配置项:

```yaml
- class: #你想要更改的class类名
  style: wowpanels
```

添加完成后 wowjs 的配置项应该与下面的截图类似
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1611663209876-8bc916b7-8a68-4ff4-9fad-d3b65be99d6f.png#align=left&display=inline&height=331&margin=%5Bobject%20Object%5D&name=image.png&originHeight=662&originWidth=950&size=154327&status=done&style=none&width=475)
如果报错,请检查你的配置缩进是否正确 ✔,这里博主推荐使用微软爸爸出品的 VSC 编辑对于缩进格式邀请很强的文件格式
以下代码供您用来参考:

```yaml
# wowjs
wowjs:
  enable: true #控制动画开关。true是打开，false是关闭
  animateitem:
    - class: recent-post-item #必填项，需要添加动画的元素的class
      style: animate__zoomIn #必填项，需要添加的动画
      duration: 3s #选填项，动画持续时间，单位可以是ms也可以是s。例如3s，700ms。
      delay: 0.5s #选填项，动画开始的延迟时间，单位可以是ms也可以是s。例如3s，700ms。
      offset: 100 #选填项，开始动画的距离（相对浏览器底部）
      iteration: 1 #选填项，动画重复的次数
    - class: card-widget #必填项，需要添加动画的元素的class
      style: animate__zoomInUp #必填项，需要添加的动画
      duration: 3s #选填项，动画持续时间，单位可以是ms也可以是s。例如3s，700ms。
      delay: 0.5s #选填项，动画开始的延迟时间，单位可以是ms也可以是s。例如3s，700ms。
      offset: 100 #选填项，开始动画的距离（相对浏览器底部）
      iteration: 1 #选填项，动画重复的次数
    - class: layout hide-aside #必填项，需要添加动画的元素的class
      style: animate__flipInY #必填项，需要添加的动画
      duration: 3s #选填项，动画持续时间，单位可以是ms也可以是s。例如3s，700ms。
      delay: 0.5s #选填项，动画开始的延迟时间，单位可以是ms也可以是s。例如3s，700ms。
      offset: 100 #选填项，开始动画的距离（相对浏览器底部）
      iteration: 1 #选填项，动画重复的次数
    - class: CoolButton
      style: wowpanels
```

# 添加 BiliBili 同款的动态 Banner

{% note warning simple %}
由于每个人的博客目录都不相同，这里博客目录使用%brt%代替
{% endnote %}

<div class="btns"><a href="https://slqwq.lanzous.com/i94DIkvxz6f" title="下载Bilibili的Banner" one-link-mark="yes" data-pjax-state=""><i class="far fa-hand-point-right"></i>下载Bilibili的Banner</a></div>

- 1.前往`%brt%\themes\butterfly\layout\includes\header\`新建一个名为`bilibili-banner.pug`的文件

在其内部写入

```javascript
if (!is_home())
  - var banner_style = (typeof(page.bilibili_banner) != "undefined" && page.bilibili_banner!=null) ? page.bilibili_banner : theme.bilibili_banner.style
  if (banner_style === 'autumn')
    #autumnBanner
      div
        img(src='/bilibiliBanner/autumn/bilibili-autumn-1.png')
      div
        img(src='/bilibiliBanner/autumn/bilibili-autumn-2.png')
      div
        img(src='/bilibiliBanner/autumn/bilibili-autumn-3.png')
      div
        img(src='/bilibiliBanner/autumn/bilibili-autumn-4.png')
      div
        img(src='/bilibiliBanner/autumn/bilibili-autumn-5.png')
      div
        img(src='/bilibiliBanner/autumn/bilibili-autumn-6.png')
  else if (banner_style === 'winter')
    #winterBanner
      .view
        img.morning(src='/bilibiliBanner/winter/bilibili-winter-view-1.png' alt='')
        img.afternoon(src='/bilibiliBanner/winter/bilibili-winter-view-2.png' alt='')
        video.evening(autoplay='' loop='' muted='')
          source(src='/bilibiliBanner/winter/bilibili-winter-view-3.webm' type='video/webm')
        img.window-cover(src='/bilibiliBanner/winter/bilibili-winter-view-3-snow.png' alt='')
      .tree
        img.morning(src='/bilibiliBanner/winter/bilibili-winter-tree-1.png' alt='')
        img.afternoon(src='/bilibiliBanner/winter/bilibili-winter-tree-2.png' alt='')
        img.evening(src='/bilibiliBanner/winter/bilibili-winter-tree-3.png' alt='')
  script(async data-pjax src=url_for(theme.CDN.bilibili_banner))
```

- 2.前往`%brt%\themes\butterfly\source\css\`新建一个名为`bilibiliBanner.css`的文件

在其内部写入以下代码:

```css
/* autumnBanner */
@media screen and (max-width: 1000px) {
  #autumnBanner {
    display: none !important;
  }
}
#autumnBanner {
  height: 100%;
  position: relative;
  overflow: hidden;
  filter: brightness(70%);
}

#autumnBanner > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  --offset: 0px;
  --blur: 2px;
}

#autumnBanner > div > img {
  display: block;
  width: 110%;
  height: 100%;
  object-fit: cover;

  transform: translatex(var(--offset));
  filter: blur(var(--blur));
}

/* winterBanner */
@media screen and (max-width: 1000px) {
  #winterBanner {
    display: none !important;
  }
}

#winterBanner {
  height: 100%;
  position: relative;
  width: 100%;
  overflow: hidden;
  --percentage: 0.5;
}

#winterBanner .view,
#winterBanner .tree {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

#winterBanner img,
#winterBanner video {
  position: absolute;
  display: block;
  max-width: 120% !important;
  width: 120% !important;
  height: 100%;
  object-fit: cover;
  filter: brightness(70%);
}

#winterBanner .morning {
  z-index: 20;
  opacity: calc(1 - (var(--percentage) - 0.25) / 0.25);
}

#winterBanner .afternoon {
  z-index: 10;
  opacity: calc(1 - (var(--percentage) - 0.5) / 0.5);
}

#winterBanner .view {
  transform: translatex(calc(var(--percentage) * 100px));
}

#winterBanner .tree {
  transform: translatex(calc(var(--percentage) * 50px));
  filter: blur(3px);
}

#winterBanner .view,
#winterBanner .tree,
#winterBanner .morning,
#winterBanner .afternoon {
  transition: 0.2s all ease-in;
}

#winterBanner.moving .view,
#winterBanner.moving .tree,
#winterBanner.moving .morning,
#winterBanner.moving .afternoon {
  transition: none;
}

#winterBanner .window-cover {
  opacity: calc((var(--percentage) - 0.9) / 0.1);
}
```

- 3.前往`%brt%\themes\butterfly\source\js\`新建一个名为`bilibili-banner.js`的文件

在其内部写入以下代码

```javascript
//autumn_banner

var autumnBanner = document.querySelector("#autumnBanner");
if (autumnBanner) {
  var images = document.querySelectorAll("#autumnBanner > div > img");
  autumnBanner.addEventListener("mousemove", (e) => {
    let percentage = e.clientX / window.outerWidth;
    let offset = 10 * percentage;
    let blur = 20;

    for (let [index, image] of images.entries()) {
      offset *= 1.3;

      let blurValue = Math.pow(index / images.length - percentage, 2) * blur;

      image.style.setProperty("--offset", `${offset}px`);
      image.style.setProperty("--blur", `${blurValue}px`);
    }
  });
}
//winter_banner

var winterBanner = document.querySelector("#winterBanner");
if (winterBanner) {
  var startingPoint;
  winterBanner.addEventListener("mouseenter", (e) => {
    startingPoint = e.clientX;
    winterBanner.classList.add("moving");
  });

  winterBanner.addEventListener("mouseout", (e) => {
    winterBanner.classList.remove("moving");
    winterBanner.style.setProperty("--percentage", 0.5);
  });

  winterBanner.addEventListener("mousemove", (e) => {
    let percentage = (e.clientX - startingPoint) / window.outerWidth + 0.5;

    winterBanner.style.setProperty("--percentage", percentage);
  });
}
```

- 4.在主题的 source 文件夹下新建`bilibiliBanner`文件夹,将我所提供的资源解压,直接放入进去(里面一定只有两个目录)
- 5.进入`%brt%\themes\butterfly\layout\includes\header\`文件夹,找到`index.pug`在内部注入 bilibili_banner 组件

在 include ./nav.pug 配置下 if is_post()配置上添加以下配置(请直接复制粘贴,避免代码缩进导致的错误 ❌)

```javascript
    - var bilibili_banner = (typeof(page.bilibili_banner) != "undefined" && page.bilibili_banner!=null) ? page.bilibili_banner : theme.bilibili_banner.enable
    if (bilibili_banner)
      include ./bilibili-banner.pug
```

- 6.修改`%brt\%config%\_config.butterfly.yml`(请将%config%替换为你主题配置文件的位置,如果在根目录请无视)

找到 CDN 配置,在 utils: /js/utils.js 配置的后面添加以下配置

```yaml
bilibili_banner: /js/bilibili-banner.js
```

- _**添加  \*\***`css`\***\*  配置项。此处使用了异步加载，同时做了媒体选择，对手机是不会生效的。因为手机的  \*\***`banner`\***\*  高度会导致适配效果很差。**_

我们找到 inject 配置大项的 head 小项,在其内部添加以下配置:

```yaml
- <link rel="stylesheet" href="/css/bilibiliBanner.css"  media="defer" onload="this.media='screen'">
```

- 7.添加控制开关

在 butterfly 主题配置中添加以下配置:

```yaml
# banner样式
bilibili_banner:
  enable: true # 开关banner
  style: winter # autumn 秋季样式 ；winter 冬季样式
```

- 除了在主题配置文件通过配置  `bilibili_banner:`  的默认项，还可以在每个页面的  `markdown`  文件中通过  `front-matter`  控制单页配置。提供了**三个选项**：
- `false` ：  关闭该页面的动态 `banner` 显示
- `autumn` ：  开启该页面的动态 `banner`，并设置主题为秋季
- `winter` ：  开启该页面的动态 `banner`，并设置主题为冬季
  页面配置项优先级高于主题配置

# 悬停左上角时在网站顶部中间位置会出现描述

- 1.进入`%brt%\themes\butterfly\layout\includes\header\`修改名为`nav.pug`的文件

找到

```javascript
span#blog_name
a#site-name(href=url_for('/')) #[=config.title]
```

将它们删除,并替换为以下代码(请直接复制粘贴,避免缩进错误 ❌):

```javascript
  - var pagedescr = (typeof(page.description) != "undefined" && page.description!=null) ? page.description : '欢迎您来到了Hajeekn的小木屋呢,不过看起来有点漏水🐕'
    if is_post()
      span#blog_name
        a#site-name(onclick='btf.scrollToDest(0,500)' data-title=pagedescr) #[=config.title]
    else if is_page()
      span#blog_name
        a#site-name(href=url_for('/') data-title=pagedescr) #[=page.title]
    else
      span#blog_name
        a#site-name(href=url_for('/') data-title=pagedescr) #[=config.title]
```

- 2.因为  `hexo`  自带缓存的关系，如果我们用的是缓存式引入的话，`nav`  的刷新是惰性的，我们需要它根据文章和页面的切换实时变动。所以需要改动一下引入逻辑。打开`%brt%\themes\butterfly\layout\includes\header\index.pug`

找到

```javascript
!=partial('includes/header/nav', {}, {cache:theme.fragment_cache})
```

删除,并将它修改为以下代码(请直接复制粘贴,避免缩进错误 ❌):

```javascript
  include ./nav.pug
  if top_img !== false
    if is_post()
      include ./post-info.pug
```

(如果您添加了 BiliBili 动态 banner,请将它放置在在 if is_post()的前面 if top_img !== false 的后面,避免报错)

- 3.进入`%brt%\themes\butterfly\source\css\_layout\`新建\_custom.styl

在其内部输入以下代码(请直接复制粘贴,避免缩进错误 ❌):

```css
/*标题悬停显示文章描述*/
#site-name
  &:hover
    &:before
      position: fixed
      width:fit-content
      margin:auto
      left:0;
      right:0
      top:10%
      border-radius: 10px
      text-align: center
      z-index: 100
      content: attr(data-title)
      font-size: 20px
      color: #fff
      padding: 10px
      background-color: rgba(#49B1F5,0.9)
/* 夜间模式适配 */
[data-theme=dark]
  a#site-name
    &:hover
      &:before
        background-color: rgba(#121212,0.8)
/*标题超过隐藏并显示省略号*/
@media screen and (max-width: 768px)
  a#site-name
    -webkit-line-clamp 1
    word-break break-all
    display -webkit-box
    -webkit-box-orient vertical
    overflow hidden
```
