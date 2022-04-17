---
title: Butterfly友链朋友圈
sticky: 1
tags: [魔改, 友链朋友圈]
description: 基于冰卡诺老师的友链朋友圈,支持直接在主题配置文件配置
categories: [魔改, 友链朋友圈]
cover: https://rmt.dogedoge.com/fetch/hajeekn/storage/20210314135158.png
photos: https://rmt.dogedoge.com/fetch/hajeekn/storage/20210314135158.png
abbrlink: alopakmn
date: 2021-03-14 12:58:42
copyright_author_href: https://blog.slqwq.cn
author: Hajeekn
---

本文章首发于[语雀](https://www.yuque.com/ladjeek/ygg4q6)!
通过各种高科技功能同步到[Hajeekn 的博客](https://blog.slqwq.cn)

---

# 什么是友链朋友圈？

**你是否经常烦恼于友链过多但没有时间浏览？那么友链朋友圈将解决这一痛点。你可以随时获取友链网站的更新内容，并了解友链的活跃情况 。**
效果图如下：
![](https://rmt.ladydaily.com/fetch/hajeekn/storage/202204171109786.png#crop=0&crop=0&crop=1&crop=1&id=rV54U&originHeight=521&originWidth=386&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
~~因为是 beta 版本，所以不可避免还有错误，为了更好制作这个项目，发现 bug。我首先 release 这个 beta 版本。~~
目前 release1.5 版本：
① 支持**butterfly、volantis、matery 主题**的友链获取
② 支持[**小康友链**](https://docs.tzki.cn/Friend)**及**volantis 主题友链**，即部署于 gitee 上的 issuse 友链获取
③ 支持 butterfly、volantis、matery 主题的最新文章获取**
④ 支持大部分拥有 sitemap 网站的文章获取
⑤ 拥有友链屏蔽、关键词屏蔽、等自定义 yaml 的配置项

---

以上照搬于冰卡诺老师的介绍

# Config1: Get leancloud id&key

## ① 账号的注册与登录

进入[Leancloud 国际版本](https://leancloud.app)
![](https://rmt.ladydaily.com/fetch/hajeekn/storage/202204171110864.png#crop=0&crop=0&crop=1&crop=1&id=nbiM1&originHeight=429&originWidth=937&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
点击 Console
![](https://rmt.ladydaily.com/fetch/hajeekn/storage/202204171110926.png#crop=0&crop=0&crop=1&crop=1&id=BC5lt&originHeight=862&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
在这个页面,如果你没有 LeanCloud 账号选择注册
如果有就登陆

## ② 创建应用并获取 id&key

进入设置 -> 域名绑定绑定一个域名
(其实也可以不绑定)
绑定完后进入设置 -> 应用 Keys
复制 APPID 和 APPKEY

# Config2: Config GitHub Actions

## ① Fork 项目

进入[GitHub 项目](https://github.com/Zfour/hexo-circle-of-friends)
Fork 此项目

## ② 配置变量

进入设置 -> 机密(Secrets)
**Name**分别以 APPID、APPKEY、LINK 创建环境变量。
**Value 分别**填入刚刚保存 Leancloud 的应用 ID（AppID）和应用密钥（AppKey）以及你的友链地址
保存三个环境变量。

## ③ 修改配置文件并启用

修改\_config.yml
**如果你使用的的是**[**小康友链**](https://docs.tzki.cn/Friend)**部署，选择**`**type: normal**`\*\* **`**gitee_friends_links**`**的**`**enable**`**改为**`**true**`**，然后填入你的 gitee 用户名、gitee 仓库名及抓取的 issue 状态即可\*\*
**如果你是 volantis 主题，则选择**`**type: volantis**`**，然后填入你的 gitee 用户名、gitee 仓库名及抓取的 issue 状态。**
**你可以通过**`**block_word**`**手动屏蔽 sitemap 中的关键字。比如你想屏蔽**`**example.com/bookshop**`**这个页面和以下分类则添加**`**bookshop**`**作为屏蔽项。**
**你可以通过**`**block_chars**`**手动屏蔽 sitemap 抓取的标题中包含的站点信息字符。比如你想屏蔽**`**我是鸽子|小冰博客**`**这篇文章的**`**|小冰博客**`**则添加**`**|**`**作为屏蔽项。（目前只支持 gbk 字符）**
**如果你发现，你的友链中有十分 bug 的网站或者你不感兴趣的网站，你也可以添加网站屏蔽。添加  **`**[https://example.com/](https://example.com/)**`**作为屏蔽项。但为了您的友谊，我不建议屏蔽。（这个功能其实是为了减少 bug 而设计的）**
如果完成了上述更改就可以给自己 Fork 的项目点个 Star 就可以启用了

# Config3: Config Vercel API

## ① 注册

为了不暴露[leancloud](https://console.leancloud.app/apps)的应用 ID（AppID）和应用密钥（AppKey），同时减少前端处理数据的压力，还需配置 vercel api。
首先前往  [Vercel 官网](https://vercel.com/)，点击右上角的 sign up 进行注册。

## ② 导入项目并部署 API

点击仪表盘的 New Project -> Import Third-Party Git Repository
然后填入冰卡诺老师的仓库
`https://github.com/Zfour/hexo-circle-of-friends-api`
选择个人账户(PERSONAL ACCOUNT)
选择 GitHub 按钮后他就会克隆一份到你的 GitHub 中
然后继续点击下一步(Continue)
接着会跳转到快要部署的界面
点击 Deploy 就部署完成了
然后进入项目的设置
找到 Envionment Variables
**Name**分别以 LEANCLOUD_ID、LEANCLOUD_KEY 创建环境变量。
**Value 分别**填入刚刚保存 Leancloud 的应用 ID（AppID）和应用密钥（AppKey）。

## ③ 检查 API 是否部署好

访问(Vercel 分给你的地址/api)
如果出现数据就可以了,如果提示 502 回到项目的主页,查看 Build Logs
重新部署一下就可以了

# Config4: Config Page

首先前往主题目录/layout/includes/page
新建一个 circle.pug
里面写入

```javascript
#article-container
  if top_img === false
    h1.page-title= page.title
  if theme.circle.enable
  div.js-pjax
    div(id='moments_container')
    script.
      var requests_url = '!{theme.circle.requests_url}'; //api地址
      var orign_data = []; //api请求所得到的源数据
      var maxnumber = !{theme.circle.maxnumber}; //页面展示文章数量
      var addnumber = !{theme.circle.addnumber}; //每次加载增加的篇数
      var opentype = '!{theme.circle.opentype}';  //'_blank'打开新标签,'_self'本窗口打开
      var nofollow = true; //禁止搜索引擎抓取
      // 自定义loading图 例如: var loadingCutom = '<i class="fa fa-spinner fa-spin"></i>'
      // 自定义loading图 例如: var loadingCutom = '<img src="你的图片地址" alt="加载中...">'
      var loadingCutom = '!{theme.circle.loading}'

      //处理数据

      if(document.getElementById('moments_container')){
      //添加加载动画
      var loading_pic = document.getElementById('moments_container');

      // 判断loadingCutom值是否为空
      if(typeof loadingCutom == "undefined" || loadingCutom == null || loadingCutom === "") {
      loading_pic.innerHTML = '<span id="moments_loading"><i class="fa fa-spinner fa-spin"></i></span>';
      } else {
      loading_pic.innerHTML = '<span id="moments_loading">'+loadingCutom+'</span>';
      }

      fetch(requests_url).then(
      data => data.json()
      ).then(
      data => {
      orign_data = data;
      data_handle(nofollow,orign_data, maxnumber)
      }
      )}

      var data_handle = (nofollow,data, maxnumber) => {
      var today = todaypost();
      var Datetody = new Date(today);
      for (var item = 0; item < data[1].length; item++) {
      var Datedate = new Date(data[1][item][1]);
      if (Datedate > Datetody) {
      data[1].splice(item--, 1);
      }
      }
      var today_post = 0;
      var error = 0;
      var unique_live_link;
      var datalist = data[1].slice(0, maxnumber);
      var listlenth = data[1].length;
      var user_lenth = data[0].length;
      var datalist_slice = slice_month(datalist);
      var last_update_time = timezoon(datalist_slice);
      var link_list = [];
      for (var item of data[1]) {
      if (item[1] === today) {
      today_post += 1;
      }
      link_list.push(item[3]);
      }
      var arr = unique(link_list);
      unique_live_link = arr.length;
      for (var item of data[0]) {
      if (item[3] === 'true') {
      error += 1;
      }
      }
      var html_item = '<h2>统计信息</h2>';
      html_item += '<div id="info_user_pool" class="moments-item info_user_pool" style="">';
      html_item += '<div class="moments_chart"><span class="moments_post_info_title">当前友链数：</span><span class="moments_post_info_number">' + user_lenth + ' 个</span><br><span class="moments_post_info_title">失败数：</span><span class="moments_post_info_number">' + error + ' 个</span><br></div>';
      html_item += '<div class="moments_chart"><span class="moments_post_info_title">活跃友链数：</span><span class="moments_post_info_number">' + unique_live_link + ' 个</span><br><span class="moments_post_info_title">当前库存：</span><span class="moments_post_info_number">' + listlenth + ' 篇</span><br></div>';
      html_item += '<div class="moments_chart"><span class="moments_post_info_title">今日更新：</span><span class="moments_post_info_number">' + today_post + ' 篇</span><br><span class="moments_post_info_title">最近更新：</span><span class="moments_post_info_number">' + last_update_time + '</span><br></div>';
      html_item += '</div>';

      for (var month_item of datalist_slice) {
      html_item += '<h2>' + month_item[0] + '</h2>';
      for (var post_item of month_item[1]) {
      var rel = '';
      if (nofollow && opentype == '_blank'){
      rel = 'noopener nofollow';
      }else if(nofollow){
      rel = 'nofollow';
      }else if(opentype == '_blank'){
      rel = 'noopener';
      }else{
      rel = '';
      }
      html_item += ' <div class="moments-item">';
      html_item += ' <a target="' + opentype + '" class="moments-item-img" href="' + post_item[2] + '" title="' + post_item[0] + '"rel="'+ rel + '">';
      html_item += '<img onerror="this.onerror=null,this.src=&quot;https://cdn.jsdelivr.net/gh/Zfour/Butterfly-friend-poor-html/friendcircle/404.png&quot;"';
      html_item += ' src="' + post_item[4] + '"></a>';
      html_item += '<div class="moments-item-info"><div class="moments-item-time"><i class="far fa-user"></i>';
      html_item += '<span>' + post_item[3] + '</span>';
      html_item += ' <div class="moments_post_time"><i class="far fa-calendar-alt"></i>' +
      '<time datetime="' + post_item[1] + '" title="' + post_item[1] + '">' + post_item[1] + '</time></div>';
      html_item += `</div><a target="${opentype}" class="moments-item-title" href="${post_item[2]}" title="${post_item[0]}"rel="${rel}">${post_item[0]}</a></div>`;
      html_item += '</div>';

      }
      }
      if (data[1].length - maxnumber > 0) {
      html_item += '<div style="text-align: center"><button type="button" class="moments_load_button" ' +
      'onclick="load_more_post()">加载更多...</button>' +
      '</div>'
      }
      html_item += '<style>.moments-item-info span{padding-left:.3rem;padding-right:.3rem}.moments_post_time time{padding-left:.3rem;cursor:default}.moments_post_info_title{font-weight:700}.moments_post_info_number{float:right}.moments_chart{align-items:flex-start;flex:1;width:100px;height:60px;margin:20px}@media screen and (max-width:500px){.info_user_pool{padding:10px;flex-direction:column;max-height:200px}.moments_chart{flex:0;width:100%;height:160px;margin:0}}.moments-item:before{border:0}@media screen and (min-width:500px){.moments_post_time{float:right}}.moments_load_button{-webkit-transition-duration:.4s;transition-duration:.4s;text-align:center;border:1px solid #ededed;border-radius:.3em;display:inline-block;background:transparent;color:#555;padding:.5em 1.25em}.moments_load_button:hover{color:#3090e4;border-color:#3090e4}.moments-item{position:relative;display:-webkit-box;display:-moz-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-moz-box-align:center;-o-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;margin:0 0 1rem .5rem;-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;-ms-transition:all .2s ease-in-out;transition:all .2s ease-in-out;box-shadow:rgba(0,0,0,0.07) 0 2px 2px 0,rgba(0,0,0,0.1) 0 1px 5px 0;border-radius:2px}.moments-item-img{overflow:hidden;width:80px;height:80px}.moments-item-img img{max-width:100%;width:100%;height:100%;object-fit:cover}.moments-item-info{-webkit-box-flex:1;-moz-box-flex:1;-o-box-flex:1;box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding:0 .8rem}.moments-item-title{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;font-size:1.1em;-webkit-transition:all .3s;-moz-transition:all .3s;-o-transition:all .3s;-ms-transition:all .3s;transition:all .3s;-webkit-line-clamp:1}</style>'



      var moments_container = document.getElementById('moments_container') ;
      append_div(moments_container, html_item)
      };

      var load_more_post = () => {
      if(document.getElementById('moments_container')){
      maxnumber = maxnumber + addnumber;
      document.getElementById('moments_container') .innerHTML = "";
      data_handle(nofollow,orign_data, maxnumber)}
      };



      //加载更多文章
      //将html放入指定id的div容器
      var append_div = (parent, text) => {
      if(document.getElementById('moments_container')){
      loading_pic.innerHTML = ``;
      };
      if (typeof text === 'string') {
      var temp = document.createElement('div');
      temp.innerHTML = text;
      // 防止元素太多 进行提速
      var frag = document.createDocumentFragment();
      while (temp.firstChild) {
      frag.appendChild(temp.firstChild);
      }
      parent.appendChild(frag);
      } else {
      parent.appendChild(text);
      }
      };

      //去重
      var unique = (arr) => {
      return Array.from(new Set(arr))
      };

      //时区优化
      var formatDate = (strDate) => {
      try {
      var date = new Date(Date.parse(strDate.replace(/-/g, "/")));
      var gettimeoffset;
      if (new Date().getTimezoneOffset()) {
      gettimeoffset = new Date().getTimezoneOffset();
      } else {
      gettimeoffset = 8;
      }
      var timeoffset = gettimeoffset * 60 * 1000;
      var len = date.getTime();
      var date2 = new Date(len - timeoffset);
      var sec = date2.getSeconds().toString();
      var min = date2.getMinutes().toString();
      if (sec.length === 1) {
      sec = "0" + sec;
      }
      if (min.length === 1) {
      min = "0" + min;
      }
      return date2.getFullYear().toString() + "/" + (date2.getMonth() + 1).toString() + "/" + date2.getDate().toString() + " " + date2.getHours().toString() + ":" + min + ":" + sec
      } catch (e) {
      return ""
      }
      };

      var timezoon = (datalist_slice) => {
      var time = datalist_slice[0][1][0][5];
      return formatDate(time)
      };

      //今日时间
      var todaypost = () => {
      var date = new Date();
      var year = date.getFullYear();
      var month = (date.getMonth() + 1).toString();
      var day = (date.getDate()).toString();
      if (month.length === 1) {
      month = "0" + month;
      }
      if (day.length === 1) {
      day = "0" + day;
      }
      return year + "-" + month + "-" + day
      };

      //月份切片
      var slice_month = (data) => {
      var monthlist = [];
      var datalist = [];
      var data_slice = data;
      for (var item in data_slice) {
      data_slice[item].push(item);
      if (data_slice[item][1].lenth !== 10) {
      var list = data_slice[item][1].split('-');
      if (list[1].length < 2) {
      list[1] = "0" + list[1]
      }
      if (list[2].length < 2) {
      list[2] = "0" + list[2]
      }
      data_slice[item][1] = list.join('-')
      }
      var month = data_slice[item][1].slice(0, 7);
      if (monthlist.indexOf(month) !== -1) {
      datalist[monthlist.length - 1][1].push(data_slice[item])
      } else {
      monthlist.push(month);
      datalist.push([month, [data_slice[item]]])
      }
      }
      for (var mounthgroup of datalist) {
      mounthgroup.push(mounthgroup[1][0][6]);
      }
      return datalist
      };

```

保存,然后返回到 layout 文件夹
打开 page.pug
在 default 的上面添加

```javascript
      when 'circle'
        include includes/page/circle.pug
```

保存文件
然后打开主题配置
写入

```yaml
circle:
  enable: true  // 总开关
  requests_url: https://quanfr-api.slqwq.cn/api  // API地址
  maxnumber: 20  // 页面展示文章数量
  addnumber: 10  // 每次加载增加的篇数
  opentype: _blank  // '_blank'打开新标签,'_self'本窗口打开
  loading: //自定义loading动画,可留空
```

# Config5: New Page

在命令行输入

```bash
hexo new page circle
```

进入 Hexo 根目录/source 的 circle 文件夹
打开 index.md
在
---内写入 type: circle
这样就配置好啦,可以看看效果了
**通过此方法配置,默认兼容 Pjax**

# Thanks for you
