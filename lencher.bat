@echo off
title "欢迎使用一键Deploy脚本"
color 6
git add --all && git commit -m "🥧🍬DouBi Update~🍬🥧Π" && git push -f https://ladjeek-actions:qpalzm131+2+3+4+@github.com/ladjeek-actions/blogsour.git
title "正在部署到GitHub及其他平台"
hexo clean && yuque-hexo clean && git push -f https://ladjeek-actions:qpalzm131+2+3+4+@github.com/ladjeek-actions/yeeq.git
title 部署完成了哦~
color 3
title 全部工作已完成,Finish ALL JOB~
color 1