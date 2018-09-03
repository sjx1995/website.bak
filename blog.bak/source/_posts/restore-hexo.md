---
title: 重装系统后恢复HEXO
date: 2015-05-16 00:31:49
categories: 技术
tags: 
- hexo
- blog
---
最近重装了系统后不小心删掉了本地的目录...
恢复的过程实在麻烦，经常备份真的很重要!!!
<!--more-->
## 恢复
#### 安装Git和Node.js
* [Git](https://desktop.github.com/)
* [Node.js](https://nodejs.org/zh-cn/)

#### 安装Hexo
使用npm下载hexo：
```
npm install hexo-cli -g
```
进入博客根目录，建立hexo文件夹：
```
hexo init
```
```
npm install
```
安装插件：
```
npm install hexo-deployer-git --save
```

恢复备份的`_config.yml`或者重新修改。

恢复备份的`.\source`，原始的md文件很重要，如果没有备份只能根据已经生成的html改写或者转换为md。

- 安利一个html转md网站：http://www.atool.org/html2markdown.php

#### 测试
```
hexo g
```

#### SSH密钥
```
$ git config --global user.name "name"
$ git config --global user.email "email@mail.com"
```
生成SSH密钥：
```
ssh-keygen -t rsa -C "email@mail.com"
```
在github上添加 `./ssh/id_rsa.pub` 里面的公钥
测试：
```
ssh git@github.com
```

***

## 备份
* `./source`：博客原始文件
* `./themes`：主题文件
* `./node_modules`：插件
* `_config.yml`：站点配置文件

* * *
<p align="right">
By.Sunly
Hangzhou Spring
</p>
<br />