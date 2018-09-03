---
title: 使用 DOM
date: 2015-11-07 20:45:04
categories: 学习笔记
tags: 
- javascript
- 学习笔记
- DOM
---
DOM(文档对象模型)把Javascript和HTML内容联系起来，通过使用DOM可以增删、操作各种元素，利用event(事件)来响应用户交互操作，以及完全控制CSS
<!--more-->
# DOM：文档对象模型
DOM是一个对象的集合，这些对象代表了HTML文档里的各个元素。所以DOM是一个模型，由代表文档的众多对象组成。
DOM是HTML文档内容结构与javascript之间的桥梁。
DOM可以获得文档信息，也可以对其进行修改。
所有代表元素的DOM对象都支持同一组基本功能：文档模型里任何对象(代表元素的对象)至少能支持HTMLElement功能。

# 使用 Document 对象
Document对象是DOM的一个关键组成，Document是通往DOm功能的入口，它可以提供当前文档的信息，以及可以探索、导航、搜索、操作结构与内容的功能。

我们通过全局变量`document`访问Docuemnt对象。

## 使用 Document 元数据
每一个载入浏览器的HTML文档都会成为`Document`对象，`Document`对象可以从脚本中对HTML页面中所有元素进行访问。
`Document`对象是`window`对象中的一部分，可通过`window.document`进行访问。

### document 对象属性
```
<script type="text/javascript">
	//write()方法向文档写入内容
	//charset属性获取或设置文档字符集编码
	document.write("charset:" + document.charset);
	//writeln()方法向文档写入内容并换行
	//compatMode属性检测此文档是否触发怪异模式
	document.writeln("compatMode:" + document.compatMode);
	//cookie属性设置或返回与文档有关的cookie
	document.writeln("cookie:" + document.cookie);
	//domain属性返回文档域名
	document.writeln("domain:" + document.domain);
	//lastModified属性返回文档最后修改时间
	document.writeln("lastMoified:" + document.lastMoified);
	//referrer属性返回载入当前文档的URL
	document.writeln("referrer:" + document.referrer);
	//tittle属性返回文档标题
	document.writeln("tittle:" + document.tittle);
	//URL属性返回文档URL
	document.writeln("tittle:" + document.tittle);
</script>
```

### 使用 location 对象
`document.location`属性返回一个`Location`对象，`Location`对象包含有关当前URL的信息。
`Location`对象是`window`对象中的一部分，可通过`window.location`进行访问。
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script type="text/javascript">
		//hash属性返回URL片段
		document.writeln("hash:" + document.location.hash);
		//host属性返回从#开始的URL锚
		document.writeln("host:" + document.location.host);
		//hostname返回当前URL的主机名
		document.writeln("hostname:" + document.location.hostname);
		//href属性返回完整URL
		document.writeln("href:" + document.location.href);
		//pathname属性返回url的路径部分
		document.writeln("pathname:" + document.location.pathname);
		//port属性返回url的端口号
		document.writeln("port:" + document.location.port);
		//protocol属性返回URL协议
		document.writeln("protocol:" + document.location.protocol);
		//search属性返回URL的查询字符串部分
		document.writeln("search:" + document.location.search);
		
		function newDoc(){
			//assign方法加载一个新文档
			window.location.assign(http://domain.com);
		}

		function reloadPage(){
			//reload方法重新加载此文档
			window.location.reload();
		}

		function replaceDoc(){
			//replace方法用新文档替代当前文档，并且覆盖当前文档的历史记录
			window.lcoation.replace(http://domain.com);
		}
	</script>
</head>
<body>
	<input type="button" value=newDoc" onclick="newDoc()">
	<input type="button" value=reloadPage" onclick="reloadPage()">
	<input type="button" value=replaceDoc" onclick="replaceDoc()">
</body>
</html>
```

### 获取 HTML 元素对象
document对象可以作为一个访问文档内对象(代表元素的对象)的入口。

P564 26.2.3


















* * *
<p align="right">
By.Sunly
Hangzhou Winter
</p>
<br />