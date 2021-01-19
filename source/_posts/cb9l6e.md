---


title: 使用全新的评论系统————————————Waline

sticky: 1

abbrlink: 4a5e237

date: 2021-01-17 08:08:23

tags:

- 简约、大气

description: 一款简约、大气、安全的评论系统，快来看看

categories:
- 评论系统

cover: "[https://rmt.dogedoge.com/fetch/hajeekn/storage/20210117085159.png](https://rmt.dogedoge.com/fetch/hajeekn/storage/20210117085159.png)"

---

市面上有许多评论

- Valine
- 来必力
- 畅言

等等评论系统

这篇文章我将教大家使用一款全新的评论————Waline

Waline 是基于 Valine 所衍生出来的评论

你可以将 Waline 等价为 With backend Valine

官网:[https://waline.js.org/](https://waline.js.org/)

本篇文章将以 Butterfly 3.5.1 做演示

# 获取 APP ID/KEY

首先我们登录账号

[https://console.leancloud.app/login?from=%2Fapps](https://console.leancloud.app/login?from=%2Fapps)

没有的可以自己注册

登陆完成后我们创建一个应用

创建完成后进入设置![](https://rmt.dogedoge.com/fetch/hajeekn/storage/20210117082407.png#alt=image-20210117082406980)

选择应用 Keys

![](https://rmt.dogedoge.com/fetch/hajeekn/storage/20210117082909.png#alt=image-20210117082909100)

记好这三个重要 ID

# 部署至 Vercel

[![](https://vercel.com/button#alt=) ](https://vercel.com/import/project?template=https://github.com/lizheming/waline/tree/master/example)

点击上方按钮跳转到 Vercel 部署

。未登录的话需要登录，这里选 Github 登录即可。登录后会让你输入 Vercel 项目名称。

![](https://rmt.dogedoge.com/fetch/hajeekn/storage/20210117083221.png#alt=image-20210117083221605)

输入名称后点击 Continue 进入下一步，输入 Github 仓库名称。Vercel 会基于 waline 模板帮助你新建并初始化该仓库。

仓库初始化完毕后开始准备部署到 Vercel。这里需要在 Environment Variables 初配置 `LEAN_ID`, `LEAN_KEY` 和 `LEAN_MASTER_KEY` 三个环境变量。它们的值分别对应上一步在 LeanCloud 中获得的 `APP ID`, `APP KEY`, `Master Key`。如果你是 LeanCloud 国内版用户的话，还需要输入 `LEAN_SERVER` 环境变量，对应的是你在上一步上绑定的已备案域名。

点击 Deploy 就会开始进行部署了。稍等片刻，就会看到满屏的烟花庆祝你部署成功了。点击 Visit 会跳转到部署好的网站地址上，该地址即为之后需要填入的 `serverURL` 地址。

# 配置实战

接着我们进入 Butterfly 主题配置

找到 waline 配置项

![](https://rmt.dogedoge.com/fetch/hajeekn/storage/20210117083427.png#alt=image-20210117083427398)

在 serverURL 填入刚才的网站地址(记得带上 https 协议)

默认配置文件如下:

```yaml
# waline - A simple comment system with backend support fork from Valine
# https://waline.js.org/
waline:
  serverURL: # Waline server address url
  avatar: monsterid # gravatar style https://zh-tw.gravatar.com/site/implement/images/#default-image
  bg: /image/comment_bg.png # waline background
  emojiCDN: # emoji CDN
  option:
```

# 自定义表情

如果你需要自定义表情，请在`emojiCDN`配置你的表情 CDN

同时你需要在 Hexo 根目录下的`source/_data/`创建一个 json`waline.json`

`waline.json`与`valine.json`的配置文件可共用

格式如下

```json
{
  "tv_doge": "6ea59c827c414b4a2955fe79e0f6fd3dcd515e24.png",
  "tv_親親": "a8111ad55953ef5e3be3327ef94eb4a39d535d06.png",
  "tv_偷笑": "bb690d4107620f1c15cff29509db529a73aee261.png",
  "tv_再見": "180129b8ea851044ce71caf55cc8ce44bd4a4fc8.png",
  "tv_冷漠": "b9cbc755c2b3ee43be07ca13de84e5b699a3f101.png",
  "tv_發怒": "34ba3cd204d5b05fec70ce08fa9fa0dd612409ff.png",
  "tv_發財": "34db290afd2963723c6eb3c4560667db7253a21a.png",
  "tv_可愛": "9e55fd9b500ac4b96613539f1ce2f9499e314ed9.png",
  "tv_吐血": "09dd16a7aa59b77baa1155d47484409624470c77.png",
  "tv_呆": "fe1179ebaa191569b0d31cecafe7a2cd1c951c9d.png",
  "tv_嘔吐": "9f996894a39e282ccf5e66856af49483f81870f3.png",
  "tv_困": "241ee304e44c0af029adceb294399391e4737ef2.png",
  "tv_壞笑": "1f0b87f731a671079842116e0991c91c2c88645a.png",
  "tv_大佬": "093c1e2c490161aca397afc45573c877cdead616.png",
  "tv_大哭": "23269aeb35f99daee28dda129676f6e9ea87934f.png",
  "tv_委屈": "d04dba7b5465779e9755d2ab6f0a897b9b33bb77.png",
  "tv_害羞": "a37683fb5642fa3ddfc7f4e5525fd13e42a2bdb1.png",
  "tv_尷尬": "7cfa62dafc59798a3d3fb262d421eeeff166cfa4.png",
  "tv_微笑": "70dc5c7b56f93eb61bddba11e28fb1d18fddcd4c.png",
  "tv_思考": "90cf159733e558137ed20aa04d09964436f618a1.png",
  "tv_驚嚇": "0d15c7e2ee58e935adc6a7193ee042388adc22af.png"
}
```

# END

## Thanks For You

{% mermaid %}

pie

title 文章内容采集

"Waline 文档" : 30.77

"Butterfly 文档" : 40.56

"自写" : 28.67

{% endmermaid %}
