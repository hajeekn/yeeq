---
title: 友情链接
sticky: 1
date: 2020-05-17 15:43:50
type: "link"
comments: false
aside: false
---
<script src="https://cdn.jsdelivr.net/npm/jquery">
<script>console.log('Hajeekn的友链页面,不容侵犯');</script>
<div id='friend1'></div>
<script src='https://unpkg.com/butterfly-friend/dist/friend.min.js'></script>
<script>
var obj = {
    // 容器选择器
    el: '#friend1',
    // gitee主人id
    owner: 'SLQWQ',
    url: 'https://cdn.jsdelivr.net/npm/hajeekn-friendjson/friend.json',
    // gitee仓库
    repo: 'Friends',
    // 排序方式
    direction_sort: 'asc',
    // 按标签排序
    sort_container: ['乐特大佬', 'N0ts大佬', 'Gitee友链', 'GitHub友链'],
    // 标签描述
    labelDescr: {
      乐特大佬: "<span style='color:red;'>这可是乐特大佬专属的位置哦!!</span>",
      Nots大佬: "<span style='color:red;'>这可是Nots大佬专属的位置哦!!</span>",
      Gitee友链: "<span style='color:red;'>这些都是我的友链啦~</span>",
      GitHub友链: "<span style='color:gold;'>这些都是来自GitHub仓库申请的朋友辣</span>",
    }
  }
  document.querySelector('.flink').insertAdjacentHTML('afterbegin',"<div id='friend1'></div>")
  new Friend(obj)
</script>
```yaml
name: SL's Blog
link: https://blog.slqwq.cn
avatar: https://npm.elemecdn.com/perorepe-cdn/v1/bigger-photos/avatar.webp
descr: 梦中做梦,做了个白日梦
```

申请方法1:

前往[Gitee](https://gitee.com/slqwq/Friends)添加Issues，当管理员审核通过后方可显示

申请方法2:
前往[Github](https://github.com/ladjeek-actions/friendget)添加Issues，当管理员审核通过后方可显示

但在这之前，请先确保您已添加本站友链！

详细申请方法已记载到仓库的README.md，按照MD指示方可完成