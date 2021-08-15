---
sticky: 1
date: 2021-01-24 13:52:14
aside: false
---

# 这里是Hajeekn的留言板

{% note orange fas fa-sms simple %}
你可以在这里友好的留言或者留下你的小脚印🐱👣哦
{% endnote %}

<style>/* 滚动条隐藏 */
::-webkit-scrollbar {
  display: none;
}
/* 禁用图片点击,butterfly渲染后会给图片套上fancybox，点开后会造成信笺偏移*/
.formmain{
   pointer-events: none !important;
}
/* top-img隐藏 */
#page-header {
  background: transparent !important;
}
/* 宽度小于530px隐藏信封 */
@media screen and (max-width: 530px) {
  #computer {
    display: none !important;
  }
}

@media screen and (min-width: 530px) {
  #mobile {
    display: none !important;
  }
}

#article-container img {
  margin: 0 auto 0rem;
}

#form-wrap {
  overflow: hidden;
  height: 447px;
  position: relative;
  top: 0px;
  transition: all 1s ease-in-out .3s;
  z-index: 0;
}
/* 调整信封划出高度，换信笺内容以后可在此设置height */
#form-wrap:hover {
  height: 1050px;
  top: -200px;
}

#beforeimg {
  position: absolute;
  bottom: 126px;
  left: 0px;
  background-repeat: no-repeat;
  width: 530px;
  height: 317px;
  z-index: -100;
  pointer-events: none;
}

#afterimg {
  position: absolute;
  bottom: -2px;
  left: 0;
  background-repeat: no-repeat;
  width: 530px;
  height: 259px;
  z-index: 100;
  pointer-events: none;
}

#envelope {
  position: relative;
  overflow: visible;
  width: 500px;
  margin: 0px auto;
  transition: all 1s ease-in-out .3s;
  padding-top: 200px;
}

#maincontent {
  width: 530px;
  margin: 20px auto 0;
}

.headerimg {
  width: 100%;
  overflow: hidden;
  pointer-events: none;
}

.formmain {
  background: white;
  width: 95%;
  max-width: 800px;
  margin: auto auto;
  border-radius: 5px;
  border: 1px solid;
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.18);
}

.title3 {
  text-decoration: none;
  color: rgb(246, 214, 175);
}

.comments {
  border-bottom: #ddd 1px solid;
  border-left: #ddd 1px solid;
  padding-bottom: 20px;
  background-color: #eee;
  margin: 15px 0px;
  padding-left: 20px;
  padding-right: 20px;
  border-top: #ddd 1px solid;
  border-right: #ddd 1px solid;
  padding-top: 20px;
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
}

.bottomcontent {
  text-align: center;
  margin-top: 40px;
}

.bottomimg {
  width: 100%;
  margin: 5px auto 5px auto;
  display: block;
  pointer-events: none;
}

.bottomhr {
  font-size: 12px;
  text-align: center;
  color: #999;
}
/* 夜间模式 */
[data-theme='dark']
  .formmain {
    background: rgb(50, 50, 50);
  }
[data-theme='dark']
  .comments {
    background: rgba(90, 90, 90, 0.8)
  }</style>

  <div id="computer">
    <div id="maincontent"><br>
      <div id="form-wrap"><img src="https://cdn.jsdelivr.net/gh/Akilarlxh/Valine-Admin@v1.0/source/img/before.png" id="beforeimg">
        <div id="envelope">
          <form>
            <div class="formmain">
              <img class="headerimg" src="https://ae01.alicdn.com/kf/U5bb04af32be544c4b41206d9a42fcacfd.jpg"/>
              <div style="padding: 5px 20px;">
                <center>
                  <h3 calss="title3">来自Hajeekn的留言:</h3>
                </center>
                <center class="comments">
                  有什么想问的？<br>
                  有什么想说的？<br>
                  有什么想吐槽的？<br>
                </center>
                <div class="bottomcontent">
                <img class="bottomimg" src="https://ae01.alicdn.com/kf/U0968ee80fd5c4f05a02bdda9709b041eE.png"/>
                </div>
                <p class="bottomhr">小小书记人偶竭诚为您服务！</p>
              </div>
            </div>
          </form>
        </div><img id="afterimg" src="https://cdn.jsdelivr.net/gh/Akilarlxh/Valine-Admin@v1.0/source/img/after.png">
      </div>
    </div>
  </div>
  <div id="mobile">
    <form>
      <div class="formmain"><img class="headerimg" src="https://ae01.alicdn.com/kf/U5bb04af32be544c4b41206d9a42fcacfd.jpg" />
        <div style="padding: 5px 20px;">
          <center>
            <h3 class="title3">来自Hajeekn的留言:</h3>
          </center>
          <center class="comments">
            有什么想问的？<br>
            有什么想说的？<br>
            有什么想吐槽的？<br>
          </center>
          <div class="bottomcontent"><img src="https://ae01.alicdn.com/kf/U0968ee80fd5c4f05a02bdda9709b041eE.png" class="bottomhr"></div>
          <p class="bottomhr"">小小书记人偶竭诚为您服务！</p>
        </div>
      </div>
    </form>
  </div>

