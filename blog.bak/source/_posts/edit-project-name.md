---
title: MyEclipse2015/2016中修改web context-root
date: 2016-12-26 03:18:30
categories: 技术
tags: 
- MyEclipse
- contect-root
---
新版本MyEclipse不能直接修改context-root了
<!--more-->
### 解决方法
在项目根目录下`.setting`中找到`org.eclipse.wst.common.component`文件
分别修改`deploy-name`、`java-output-path`、`context-root`中的名称
* * *
<p align="right">
By.Sunly
Hangzhou Winter
</p>
<br />