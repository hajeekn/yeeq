@echo off
title 欢迎使用一键Deploy脚本
color 6
title 正在部署到GitHub及其他平台
hexo clean && hexo d -g

title 部署完成了哦~
color 3
title 正在部署到GitLab云端Job
git add --all
git commit -m "Update Website"
git push -u gitlab master -f
title 全部工作已完成,Finish ALL JOB~
color 1

