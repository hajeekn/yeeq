---
title: bb
sticky: 1
date: 2021-02-11 14:35:07
comments: false
aside: false
type: bb
---
{% raw %}
<style>/* bb哔哔 */
/* bb样式 */

.timeline ul li{
  position: relative;
  padding-left: 2.5rem;
}

/* 标题 */
.bb-info{
  display: inline;
  float: right;
  line-height: 3.7rem;
  color: var(--heo-secondtext);
}

/* 每条动态 */
#bber > section > ul > div > li > div{
  display: flex;
  flex-direction: initial;
  flex-wrap: wrap;
  background: var(--heo-post-blockquote-bg);
  box-shadow: var(--heo-shadow-lightblack);
  border-radius: 12px;
  padding: 8px 16px;
  margin-top: 12px;
}

#bber p{
  margin: 0;
}

#bber .datafrom i{
  margin-right: 4px;
}

/* 时间 */
#bber > section > ul > div > li > div .datatime{
  order: 1;
  color: var(--heo-secondtext);
  font-size: 0.6rem;
}

/* 内容 */
#bber > section > ul > div > li > div .datacont{
  order: 0;
  font-size: 1rem;
  font-weight: bold;
  color: var(--heo-lighttext);
  width: 100%;
  line-height: 1.38;
  margin: 8px 0;
}

/* 设备 */
#bber > section > ul > div > li > div .datafrom{
  order: 2;
  color: var(--heo-secondtext);
  font-size: 0.6rem!important;
  margin-left: 8px;
}
#bber > section > ul > div > li > div .datafrom small{
  font-size: 100%;
}

/* 时间线 */
.timeline ul li::before {
  position: absolute;
  top: 0.5rem;
  left: 0rem;
  z-index: 1;
  width: 2rem;
  height: 2rem;
  border-radius: 8px;
  background: var(--card-bg);
  content: "";
  background-image: url(https://cdn.jsdelivr.net/gh/zhheo/Guli@0.6/img/avatar.png);
  background-size: 2rem;
}

/* 加载更多 */
.load-btn.button-load{
  background: var(--heo-card-btn-bg);
  color: var(--heo-fontcolor);
  padding: 12px 12px;
  margin: 8px 0;
  width: 100%;
  text-align: center;
  border-radius: 12px;
  transition: 0.3s;
  font-weight: bold;
}

.load-btn.button-load:hover{
  background: var(--heo-main);
  color: var(--heo-white);
  transition: 0.3s;
  box-shadow: var(--heo-shadow-blue);
}</style>
{% endraw %}