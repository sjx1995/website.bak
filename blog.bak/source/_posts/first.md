---
title: Hexo 3.0 静态博客搭建笔记
date: 2015-04-17 15:27:44
categories: 技术
tags: 
- blog
- hexo
---
第一次搭建博客，
Hello World
<!--more-->
## Hexo基本命令

新建博客：([]为可选参数)
```
hexo new [deploy] “title”
```
生成静态文件：
```
hexo generate
```
启动服务器：(访问 [http://localhost:4000/](http://localhost:4000/) 可本地预览)
```
hexo serve
```
部署至GitHub：
```
hexo deploy
```
更多命令参见[命令|Hexo官方文档](http://hexo.io/zh-cn/docs/commands.html)

* * *

## Hexo全局配置

在`主站`目录下`_config.yml`可以进行全局配置，详细设置参见[配置|Hexo官方文档](http://hexo.io/zh-cn/docs/configuration.html)。

> 因为 yaml 语法要求，配置里冒号后需有一个半角空格。

值得注意的是，在`Hexo 3.0`之后，`deploy`的`type`类型需要将原来的<del>`github`</del>改写为`git`，并且使用命令：
```
npm install hexo-deployer-git —save
```
安装`hexo-deployer-git`插件。

* * *

## Hexo写博客

新建博客：
```
hexo new [deploy] “title”
```
在`/source/_post`下可看到生成的`.md`文件。
Hexo支持`Markdown`语法，实在方便呢~
当需要多个tag时，可使用语法：

```
tags:
- tag1
- tag2
- tag3
```
需要首页显示概览而不是全文显示时，可使用语法：

首页展示部分：
```
<!--more-->
```
点击read more之后显示的更多内容...

* * *

## Hexo插件

安装插件：
```
npm install <插件名称> —save
```
插件参见[Plugins·GitHub](https://github.com/hexojs/hexo/wiki/Plugins)

* * *

## 图床

在`/source/img`下存放图片，在文中引用图片时可直接使用`/img/picture_name.jpg`地址。

> 鉴于GitHub在国内访问过慢，建议使用微博图床，支持[chrome扩展插件](https://chrome.google.com/webstore/detail/%E6%96%B0%E6%B5%AA%E5%BE%AE%E5%8D%9A%E5%9B%BE%E5%BA%8A/fdfdnfpdplfbbnemmmoklbfjbhecpnhf?hl=zh-CN)。


* * *
<p align="right">
By.Sunly
Hangzhou Spring
</p>
<br />