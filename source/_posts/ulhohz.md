---
title: 关于3.0.0RC2版本Valine魔改出博主、访客、小伙伴的教程
sticky: 1
abbrlink: 8f68d635
date: 2020-08-04 15:41:39
tags: [魔改, Hexo]
categories: [魔改, 评论]
description:
cover: https://i0.hdslb.com/bfs/album/28bab3b588500cd6e97fecd8dcc11d0b83decb1a.png
author: Hajeekn
---

关于 Butterfly 最新的 3.0.0RC2 版本如何魔改出博主、访客、小伙伴的教程

首先我们进行对比

发现 3.0.0RC 的 Valine.pug 与其他版本的结构不相同

其它版:

```jade
- let emojiMaps = '""'
if site.data.valine
  - emojiMaps = JSON.stringify(site.data.valine)

script.
  function loadvaline () {
    function requestSetting (from, set) {
      var from = from
      var setting = set.split(',').filter(function(item){
      return from.indexOf(item) > -1
      });
      setting = setting.length == 0 ? from :setting;
      return setting
    }

    var guestInfo = requestSetting(['nick','mail','link'],'#{ theme.valine.guest_info }')
    var requiredFields = requestSetting(['nick','mail'],'#{ theme.valine.requiredFields }')

    function initValine () {
      window.valine = new Valine({
        el:'#vcomment',
        appId: '#{theme.valine.appId}',
        appKey: '#{theme.valine.appKey}',
        path: window.location.pathname,
        placeholder: '#{theme.valine.placeholder}',
        avatar: '#{theme.valine.avatar}',
        meta: guestInfo,
        pageSize: '#{theme.valine.pageSize}',
        lang: '#{theme.valine.lang}',
        recordIP: #{theme.valine.recordIP},
        serverURLs: '#{theme.valine.serverURLs}',
        emojiCDN: '#{theme.valine.emojiCDN}',
        emojiMaps: !{emojiMaps},
        enableQQ: #{theme.valine.enableQQ},
        requiredFields: requiredFields,
      });
    }

    if (typeof window.valine ==='object') initValine()
    else $.getScript('!{url_for(theme.CDN.valine)}', initValine)
  }

  if ('!{defaultComment}' === 'Valine' || !{theme.comments.load_begin}) {
    loadvaline()
  }
  else {
    function loadOtherComment () {
      loadvaline()
    }
  }
```

RC2 版:

```jade
- let emojiMaps = '""'
if site.data.valine
  - emojiMaps = JSON.stringify(site.data.valine)

script.
  function loadValine () {
    function initValine () {
      window.valine = new Valine({
        el: '#vcomment',
        appId: '#{theme.valine.appId}',
        appKey: '#{theme.valine.appKey}',
        placeholder: '#{theme.valine.placeholder}',
        avatar: '#{theme.valine.avatar}',
        meta: '#{theme.valine.guest_info }'.split(','),
        pageSize: '#{theme.valine.pageSize}',
        lang: '#{theme.valine.lang}',
        recordIP: #{theme.valine.recordIP},
        serverURLs: '#{theme.valine.serverURLs}',
        emojiCDN: '#{theme.valine.emojiCDN}',
        emojiMaps: !{emojiMaps},
        enableQQ: #{theme.valine.enableQQ},
        path: window.location.pathname,
      });
      if ('#{theme.valine.requiredFields}') { valine.config.requiredFields= '#{theme.valine.requiredFields}'.split(',') }
    }

    if (typeof Valine === 'function') initValine()
    else $.getScript('!{url_for(theme.CDN.valine)}', initValine)
  }

  if ('!{theme.comments.use[0]}' === 'Valine' || !!{theme.comments.lazyload}) {
    if (!{theme.comments.lazyload}) loadComment(document.querySelector('#vcomment'),loadValine)
    else setTimeout(() => loadValine(), 0)
  } else {
    function loadOtherComment () {
      loadValine()
    }
  }
```

可以看到 script.下面的内容不一样

这就是不同之处了

这样也就导致部分根据 HCLonely 博客魔改 Valine 的用户无法找到魔改的地方

解决其实很简单

在 function loadValine 的前面加上

```jade
    function requestSetting (from, set) {
      var from = from
      var setting = set.split(',').filter(function(item){
      return from.indexOf(item) > -1
      });
      setting = setting.length == 0 ? from :setting;
      return setting
    }

    var guestInfo = requestSetting(['nick','mail','link'],'#{ theme.valine.guest_info }')
    var requiredFields = requestSetting(['nick','mail','link'],'#{ theme.valine.requiredFields }')
```

即可，然后就可以继续按照 HCLonely 的魔改教程魔改了。

完结，撒花
