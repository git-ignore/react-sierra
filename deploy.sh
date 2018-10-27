#!/bin/bash

rm -rf ../git-ignore.github.io/react-skeleton-ui &&
mkdir ../git-ignore.github.io/react-skeleton-ui && 
mkdir ../git-ignore.github.io/react-skeleton-ui/build && 
cp -r ./styleguide/build/* ../git-ignore.github.io/react-skeleton-ui/build &&
cp ./styleguide/index.html ../git-ignore.github.io/react-skeleton-ui &&
cd ../git-ignore.github.io &&
git add . &&
git commit -m "updated: == react-styleguide ==" &&
git push --force