#!/usr/bin/env sh

# abort on errors
set -e

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://jason71708.github.io/threejs-beginner-tutorial
git push -f git@github.com:jason71708/threejs-beginner-tutorial.git master:gh-pages

cd -