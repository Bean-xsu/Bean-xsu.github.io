#! /bin/bash

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m '来自Hiyiin的提交'

# 如果发布到 https://<USERNAME>.github.io  填写你刚刚创建的仓库地址
git push -f git@github.com:Bean-xsu/Bean-xsu.github.io.git master

cd -
rm -rf docs/.vuepress/dist
