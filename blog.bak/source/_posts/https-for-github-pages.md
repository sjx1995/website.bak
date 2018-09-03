---
title: 为Github Pages开启HTTPS
date: 2016-10-28 18:27:06
categories: 技术
tags: 
- HTTPS
- blog
---
通过Cloudflare为博客开启HTTPS和自定义域名
<!--more-->
#### 准备工作
+ 通过Github Pages搭建好的博客
+ 自定义域名
+ 注册cloudflare账号

***

## 为Github Pages启用自定义域名
在你的博客的根目录创建名为CNAME的文件，将你的域名写入文件，并且提交至Github。
然后在域名供应商的域名服务器(Nameserver)填写DNS服务商cloudflare提供的ip。
![](/img/gitpages-https-1.jpg)
在cloudflare官网添加两条A记录指向Github Pages提供的ip地址。
> [Setting up an apex domain](https://help.github.com/articles/setting-up-an-apex-domain/)

![](/img/gitpages-https-2.jpg)

***

## 为你的一级域名开启HTTPS
如果你是用一级域名作为博客地址，在cloudflare网站的Crypto标签页下即可开启HTTPS支持。
![](/img/gitpages-https-3.jpg)
然后在Page Rules标签页下添加规则，实现HTTPS跳转。
![](/img/gitpages-https-4.jpg)

## 为你的二级域名开启HTTPS
如果你是用二级域名（以blog.example.com为例）作为博客地址，首先将二级域名解析到你的博客地址。创建记录类型为CNAME，NANE填写二级域名，记录值填写博客地址：Github用户名.github.io
![](/img/gitpages-https-5.jpg)
修改`CNAME`文件为你的二级域名。
在cloudflare网站的Crypto标签页下即可开启HTTPS支持。
![](/img/gitpages-https-6.jpg)
然后在Page Rules标签页下添加规则，实现HTTPS跳转。
![](/img/gitpages-https-7.jpg)

* * *
<p align="right">
By.Sunly
Hangzhou Fall
</p>
<br />