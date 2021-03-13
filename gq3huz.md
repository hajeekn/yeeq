---
title: 一款超好看(不好看)的H++说说主题
sticky: 1
tags: [CSS]
description: 由博主写的一款超好看(不好看)的HPP说说主题
categories: [CSS]
cover: https://rmt.dogedoge.com/fetch/hajeekn/storage/20210208202753.png
photos: https://rmt.dogedoge.com/fetch/hajeekn/storage/20210208202753.png
abbrlink: alilvpyl
date: 2021-02-08 18:00:41
copyright_author_href: https://blog.`slqwq.cn
author: Hajeekn
id: 29
---

本文章首发于[语雀](https://www.yuque.com/ladjeek/ygg4q6)!
通过各种高科技功能同步到[Hajeekn 的博客](https://blog.slqwq.cn)
事发起因:
在前几天入手了[CYF 大佬](https://blog.cyfan.top]写的HexoPlusPlus
于是今天给 Butterfly 提了 Pr,适配 HexoPlusPlus 的说说
突然,我在翻看文档时看到了这个![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1612778558561-4610a8c9-9e0c-411f-8f1f-877c6a822eab.png#align=left&display=inline&height=146&margin=%5Bobject%20Object%5D&name=image.png&originHeight=292&originWidth=1217&size=28590&status=done&style=none&width=608.5)
自定义主题
欸我就想着,我也可以写个啊,于是就有了这篇文章。
噗(/≧▽≦)/
{% note green 'fab fa-internet-explorer' simple %}
前排提示: 本 CSS 基于 HexoPlusPlus 制作,使用请先配置 HexoPlusPlus。
{% endnote %}

# 参考文档配置 HexoPlusPlus

{% btn 'https://hexoplusplus.js.org',Click me to HexoPlusPlus Docs,far fa-hand-point-right,orange larger %}

# 配置说说

在你的 Hexo 新建一个页面
里面填写以下内容

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@1.1.0/talk.css"
/>
<script src="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@1.1.0/talk_user.js"></script>
<div id="hpp_talk"></div>
<script>
  new hpp_talk({
    id: "hpp_talk", //容器id
    domain: "", //您的HexoPlusPlus域名，如blogadmin.cyfan.top
    limit: 10, //单次获取的最多条数
    start: 0, //从第几条开始
    themecss: "", //自定义说说主题，可选【仅1.1.0版本及以上使用】
  });
</script>
```

(如果你用的版本已经内置了 HPP 的说说,那就用自带的吧)
其中的 domain 换成你刚才部署的 HexoPlusPlus 的域名
在 themecss 处填入
https://cdn.jsdelivr.net/gh/ladjeek-actions/CDN@master/plugin/theme/hpp_user_talk/Fuitrt.css
更改后内容如下:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@1.1.0/talk.css"
/>
<script src="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@1.1.0/talk_user.js"></script>
<div id="hpp_talk"></div>
<script>
  new hpp_talk({
    id: "hpp_talk", //容器id
    domain: "", //您的HexoPlusPlus域名，如blogadmin.cyfan.top
    limit: 10, //单次获取的最多条数
    start: 0, //从第几条开始
    themecss:
      "https://cdn.jsdelivr.net/gh/ladjeek-actions/CDN@master/plugin/theme/hpp_user_talk/Fuitrt.css", //自定义说说主题，可选【仅1.1.0版本及以上使用】
  });
</script>
```

然后配置就完成了,可以 hexo s 看效果了
**请注意,使用\*\***Fuitrt 做为说说主题时需要为你的 Butterfly 主题配置一个背景,并且文章卡片不应为全白~\*\*

# Pofato 主题

这款主题与上面的安装方法一致
只需要把 themecss 改成以下配置

```html
themecss:
"https://cdn.jsdelivr.net/gh/ladjeek-actions/CDN@master/plugin/theme/hpp_user_talk/Pofato.css"
//自定义说说主题，可选【仅1.1.0版本及以上使用】
```

# 文章结束,没有什么好看的了
