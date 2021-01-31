---
title: 记录一下捣鼓语雀文章同步到Hexo的过程
sticky: 1
tags: [日志, 捣鼓]
description:
categories:
cover: https://imgeek.52msr.cn/20210121151202.png
photos: https://imgeek.52msr.cn/20210121151202.png
abbrlink: 2ed5ru6
date: 2020-01-20 12:09:33
copyright_author_href: https://blog.slqwq.cn
author: Hajeekn
id: 25
comments: true
---

本文章首发于[语雀](https://www.yuque.com/ladjeek/ygg4q6)!
通过各种高科技功能同步到[Hajeekn 的博客](https://blog.slqwq.cn)
起初啦，我本来是想在语雀写文章同步到 Hexo 很方便。
可是呢?捣鼓的过程中踩了一系列的坑，这篇文章主要记录一下踩的那些坑

# 1.文章 Cover 自动被转为链接格式

这个也是最头疼的事情
在我同步文章上去后，文章的 cover 地址全部亮亮的，起初我没注意，不过 GitHub Actions 编译静态文件的时候我注意到了。
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12488964/1611116028792-8d1892e2-87b3-402f-a417-8b8d94476b44.png#align=left&display=inline&height=270&margin=%5Bobject%20Object%5D&name=image.png&originHeight=540&originWidth=1059&size=61678&status=done&style=none&width=529.5)**请大家注意看!**
在 cover 处
原本的

```bash
xxxx.com/xxx.png
```

变成了`[]()`格式，也就是说语雀平台把这个 cover 配置识别为了一串链接，导致 Hexo 同步下来时渲染失败了。

## 解决办法

在语雀内部点击这个被识别为链接的图片地址，选择删除链接(最后一个)即可

# 2.写法错误

同步到语雀后 front-matter 格式和 hexo 本地格式不是一样的。
也就是说本地和云端要放两套不同的模板(建议还是把本地的数据备份一下到 OneDrive 之类的网盘)

## 解决办法

这边给大家一套[C 哥](blog.ccknbc.cc)用的模板
滑稽

```markdown
---
title: #文章标题
tags: #标签(请使用数组结构!!!!，，例如[CC,牛逼,啊])
categories: #分类(请使用数组结构!!!!，例如[CC,牛逼,啊])
cover: #文章Cover
top_img: false #是否启用顶部大图
copyright_author_href: #作者网站
keywords: #关键字
description: #介绍
id: #第几篇文章
date: #编写日期
updated: #更新日期
---
```

各位参照这上面的格式写就可以了

# Thanks For You

其他的博主是没遇到过
如果有兴趣的话，博主会出一篇关于语雀文章同步到 Hexo 的文章
不过冰老师已经写了
<a class="button--red" target="_blank" rel="noopener" href="https://zfe.space/post/554e.html">点这里去看看冰老师的教程</a>
