---
title: Fedora 安装 chrome
date: 2015-12-21 20:41:53
categories: 技术
tags: 
- fedora
- chrome
---
环境： Fedora 21
<!--more-->
在`/etc/yum.repos.d/`下创建`google.repo`
```
sudo touch google.repo
```
修改`google.repo`
```
sudo vi google.repo
```
写入以下内容:
安装32位chrome:
```
[google]
name=Google &ndash; i386
baseurl=http://dl.google.com/linux/rpm/stable/i386
enabled=1
gpgcheck=1
gpgkey=https://dl-ssl.google.com/linux/linux_signing_key.pub
```
安装64位chrome:
```
[google64]
name=Google &ndash; x86_64
baseurl=http://dl.google.com/linux/rpm/stable/x86_64
enabled=1
gpgcheck=1
gpgkey=https://dl-ssl.google.com/linux/linux_signing_key.pub
```
安装chrome:
```
sudo yum install google-chrome-unstable
```

* * *
<p align="right">
By.Sunly
Hangzhou Winter
</p>
<br />