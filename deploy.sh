#!/bin/bash

rm -rf ../git-ignore.github.io/react-styled-sierra/* &&
cp -r ./storybook-static/* ../git-ignore.github.io/react-styled-sierra &&
cd ../git-ignore.github.io &&
git add . &&
git commit -m "updated: ==react-styled-sierra ui-lib==" &&
git push