@echo off
title SLר����ƽ̨����ű�
color 6
title ���ڽ���Codingƽ̨����
"./Hexo Deploy Tools.exe"
title �����~
color 3
title ���ڽ���GitLabƽ̨����
git add --all
git commit -m "Update Website"
git push -u gitlab master -f
title �������~
color 1

