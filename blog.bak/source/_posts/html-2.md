---
title: HTML5 学习笔记（2）
date: 2015-09-15 08:22:46
categories: 学习笔记
tags: 
- HTML5
- 学习笔记
---
HTML5中的一大主要变化是基本信念方面的：
即将元素的语义与元素对其内容呈现结果的影响分开。
<!--more-->
# 文档元素和元数据元素
文档元素和元数据元素是用来创建HTML文档和说明其内容的元素。

## DOCTYPE 元素
每一个HTML文档都必须以`DOCTYPE`元素开头。 

## html 元素
`html`元素即为根元素，他表示文档中HTML部分的开始。
局部属性：
- manifest

## head 元素
`head`元素包含着文档的元数据。
在HTML文档中，元数据向浏览器提供了有关文档内容和标记的信息，此外还有脚本和外部信息(如CSS样式表)的引用。
必须有`tittle`元素，其他可有可无。

## body 元素
`body`元素包含文档的内容，`body`元素紧跟在`head`元素之后。他是`html`的第二个子元素。
内容包含所有的短语元素和流元素。

# 用元数据元素说明文档
元数据可以提供HTML文档的信息，他本身并不是文档内容，但提供了关于文档的信息。
元数据元素放在`head`元素中。

## tittle 元素
内容：文章标题或对文章内容的简单说明。

## base 元素
`base`元素可以设置一个基准URL，让HTML文档中的其他URL依据此URL进行解析。
相对链接节省了URL中的协议、主机名、端口，需要根据基准URL得出完整形式。
`base`元素还能设定链接打开的方式和提交表单时浏览器的反应。
HTML文档应该至少包含一个`base`元素，通常是`head`元素中最靠前的一个。
局部属性：
- href：设置链接路径
- target：设置浏览器打开URL的方式
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<!-- 使用href属性设置链接 -->
	<base href="http://example.com/">
</head>
<body>

</body>
</html>
```

## meta 元素
`meta`元素定义文档的各种元数据，一个HTML文档可以包含多个`meta`元素
局部属性：
- name：定义名值对
- content：定义名值对
- charset：声明字符编码
- http-equiv：模拟HTTP标头字段
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<!-- 用名值对定义元数据 -->
	<meta name="author" content="Sunly">
	<meta name="description" content="A simple example">
	<!-- 声明字符编码 -->
	<meta charset="utf-8">
	<!-- 模拟HTTP标头字段，下面语句意为每5秒刷新一次页面 -->
	<meta http-equiv="refresh" content="5">
</head>
<body>

</body>
</html>
```

## style 元素
使用`style`元素定义HTML文档内嵌的CSS样式。
局部属性：
- type：指定样式类型，这个属性的值总是"text/css"
- media：制定样式作用范围
- scopend：指定样式适用媒体

## link 元素
用来在HTML文档和外部资源(如CSS样式表)之间建立连接。
局部属性：
- href：指定link链接资源的URL
- rel：说明文档与所关联资源的关系类型
- hreflang：所关联资源所用语言
- media：说明关联内容所适用设备
- type：指定关联内容MINE类型
- sizes：指定图标大小
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<!-- 使用link元素载入外部样式表 -->
	<link rel="stylesheet" type="text/css" href="/ctyle.css">
	<!-- 使用link元素添加网页标识 -->
	<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
	<!-- 预先加载page.html页面 -->
	<link rel="prefetch" href="/page.html">
</head>
<body>

</body>
</html>
```

## script 元素
`script`元素用来在网页中加入脚本。
默认情况下，浏览器遇到script元素就会停止处理HTML文档，转而处理脚本文件直至处理完毕。
局部属性：
- type：引用脚本的类型
- src：引用外部脚本的的URL
- defer：推迟加载脚本，先加载HTML文档
- async：异步加载脚本
- charset：说明外部脚本所用字符编码

## noscript 元素
`noscript`元素向禁用了JS或不支持JS的用户显示内容。

* * *
<p align="right">
By.Sunly
Hangzhou Fall
</p>
<br />