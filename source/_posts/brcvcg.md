---
title: Butterfly实现Aplayer+Meting不断歌

sticky: 1

cover: "[https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/2718Cover.png](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/2718Cover.png)"

tags:
  - Hexo
  - Aplayer
  - Meting

categories:
  - Pjax系列
  - 播放器
  - Javascript

abbrlink: d18e7002

date: 2020-07-18 15:19:10

description:
---

最近有人问我，我博客上的那个播放器是怎么弄的

放图:

![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200718152748692.png#alt=image-20200718152748692)

![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200718152758273.png#alt=image-20200718152758273)

其实要实现我博客的这个 Meting+Aplayer 很简单

首先你需要更新到 Butterfly 的 Pjax 分支

然后去 themes/Butterfly/source 里新建个 JS，名字随意

接着编辑这个文件

里面填写

```javascript
document.writeln(
  "<script src='https://cdn.jsdelivr.net/npm/pjax/pjax.min.js'></script>"
);
document.writeln("<script>var pjax = new Pjax({");
document.writeln("  selectors: [");
document.writeln("    'title',");
document.writeln("    'meta[name=description]',");
document.writeln("    '#config_change',");
document.writeln("    '#body-wrap',");
document.writeln("    '#rightside',");
document.writeln("    '.js-pjax'");
document.writeln("  ],");
document.writeln("  cacheBust: false,");
document.writeln("})");
document.writeln("");
document.writeln("document.addEventListener('pjax:complete', function () {");
document.writeln("  refreshFn()");
document.writeln("");
document.writeln("  $('script[data-pjax]').each(function () {");
document.writeln("    $(this).parent().append($(this).remove())");
document.writeln("  })");
document.writeln("");
document.writeln("  GLOBAL_CONFIG.islazyload && lazyLoadInstance.update()");
document.writeln("");
document.writeln("  typeof chatBtnFn === 'function' && chatBtnFn()");
document.writeln("  typeof panguInit === 'function' && panguInit()");
document.writeln("");
document.writeln("  if (typeof gtag === 'function') {");
document.writeln(
  "    gtag('config', 'ca-pub-1197128104711052', {'page_path': window.location.pathname});"
);
document.writeln("  }");
document.writeln("");
document.writeln("  if (document.getElementsByClassName('aplayer').length){");
document.writeln("    loadMeting()");
document.writeln("  }");
document.writeln("})");
document.writeln("");
document.writeln("document.addEventListener('pjax:send', function () {");
document.writeln("  if (window.aplayers) {");
document.writeln("    for (let i = 0; i < window.aplayers.length; i++) {");
document.writeln("      if (!window.aplayers[i].options.fixed) {");
document.writeln("        window.aplayers[i].destroy()");
document.writeln("      }");
document.writeln("    }");
document.writeln("  }");
document.writeln("");
document.writeln("  $(window).off('scroll')");
document.writeln("");
document.writeln("  //reset readmode");
document.writeln(
  "  $('body').hasClass('read-mode') && $('body').removeClass('read-mode')"
);
document.writeln("");
document.writeln("  //reset font-size");
document.writeln(
  "  $('body').css('font-size') !== originFontSize && $('body').css('font-size', parseFloat(originFontSize))"
);
document.writeln("})</script>");
document.writeln(
  "<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css'>"
);
document.writeln(
  "<script src='https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js'></script>"
);
document.writeln(
  "<script src='https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js'></script>"
);
document.writeln(
  "<meting-js server='netease' type='playlist' id='2187995420' fixed='true'></meting-js>"
);
```

别忘记把 id 那里的数字改成你自己的歌单

解析:

server='\netease'   ->平台名称。netease：网易；tencent：腾讯；xiami：虾米；kugou：酷狗；baidu：百度

type='\playlist\‘       ->类型。playlist：歌单；song：单曲；专辑：album；关键词：search；歌手：artist

id='\XXXX'                 ->音乐页面链接上的 id 号

更多参数请参考

[MetingGitHub](https://github.com/metowolf/MetingJS)

添加好 js 后还需要引用

打开 Hexo 根目录/source/\_data 的 butterfly.yml

往下滑,找到 Inject 的 bottom

![](https://cdn.jsdelivr.net/gh/slblog-github/BlogFlies/Blog/Pic/image-20200718154055037.png#alt=image-20200718154055037)

在 bottom 里面添加

```yaml
- <script src="/刚才创建的JS的名字.js"></script>
```

接着在你的终端里输入 hexo clean && hexo s

然后就会看到播放器了

# JS 解剖

1-51 为 Pjax 的 Lancher Command

52-55 为 Aplayer+MetingJS 的 Core Command

# 实现 Aplayer+MettingJS+Pjax 的第二种方法(来自群友小康大佬~)

1.把主题配置的

aplayer:

- asset_inject 改为 false

然后将主题的 aplayerInject 改为 true
