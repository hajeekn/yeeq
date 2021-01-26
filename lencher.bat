@echo off
title "欢迎使用一键Deploy脚本"
color 6
hexo clean && git add --all && git commit -m "🥧🍬DouBi Update~🍬🥧Π" && git push -f https://ladjeek-actions:qpalzm131+2+3+4+@github.com/ladjeek-actions/blogsour.git && yuque-hexo clean && git push -f https://ladjeek-actions:qpalzm131+2+3+4+@github.com/ladjeek-actions/yeeq.git