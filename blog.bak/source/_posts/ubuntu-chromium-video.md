---
title: ubuntn下chromium不能播放视频
date: 2015-12-16 23:01:15
categories: 技术
tags: 
- ubuntu
- chromium
---
环境： Ubuntu 14.04
<!--more-->
只有在Chromium中出现flash player问题的原因：

只有在Chromium中发生这个问题的原因是，之前Chromium使用Netscape Plugin API构架来支持Flash，从Ubuntu 14.04开始，Chromium将会停止使用Netscape Plugin API。因此，我们才遇到Chromium的Adobe Flash Player的问题。

那么，为什么这个问题没有发生在其他浏览器上？答案是，因为它们使用 Flash Player 11.2。

修复Chromium上Adobe Flash Player的问题：

修复这个问题，我们应该使用Pepper Flash Player，一个来自Google更安全更稳定的版本的Flash Player。在Ubuntu 14.04的源里有Adobe Flash Player Pepper 安装器。这个安装器会下载Google Chrome，提取出Pepper Flash Player然后设置给Chromium使用。

要在Ubuntu 14.04安装Pepper Flash Player，打开一个终端，使用下面的命令：
```
sudo apt-get install pepperflashplugin-nonfree
sudo update-pepperflashplugin-nonfree --install
```
之后重启Chromium，不用重启系统。


* * *
<p align="right">
By.Sunly
Hangzhou Winter
</p>
<br />