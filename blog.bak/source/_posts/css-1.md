---
title: CSS3 学习笔记（1）
date: 2015-09-09 11:10:23
categories: 学习笔记
tags: 
- CSS3
- 学习笔记
---
CSS（层叠样式表）用来规定HTML文档的呈现形式（外观和格式排版）。
<!--more-->
# 定义和应用样式
CSS由一条或多条以分号隔开的样式声明组成，每条声明包含着一个CSS属性和该属性的值，二者用冒号隔开。
CSS样式示例：
```
background-color:white; color:grey
```
其中包含：
- 样式声明：`background-color:white`
- 属性：`background-color`
- 值：`white`

## 内嵌样式
```
<p style="color:grey">
```

## 文档内嵌样式
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
<style type="text/css">
	p {
		background-color:white; 
		color:grey;
	}	
</style>
</head>
<body>
	<p>I like HTML.</p>
</body>
</html>
```
其中`p`为选择器，声明被包含在花括号中。

## 外部样式表
文件`style.css`：
```
p {
	background-color:white; 
	color:grey;
}
```
导入外部样式表：
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<p>I like HTML.</p>
</body>
</html>
```
如果不同的样式表使用了相同的选择器，得以应用的是后面导入的样式。

### 从其他样式表中导入样式
从`style1.css`中导入：
```
@import "style1.css";
p {
	background-color:white; 
	color:grey;
}
```
`@import`语句必须位于样式表顶部，可以导入多个样式表。

### 声明样式表的字符编码
`@charset`用于声明样式表使用的字符编码。
在样式表中可以出现在`@import`之前的语句只有`@charset`。
```
@charset "UTF-8";
@import "style1.css";
p {
	background-color:white; 
	color:grey;
}
```

# 样式的层叠和继承
浏览器根据层叠和继承来确定显示一个元素时各种样式属性采用的值。
定义样式的方法，除了`元素内嵌`、`文档内嵌`、`外部样式表`之外还有两个来源：
- 浏览器样式
- 用户样式

## 样式层叠
浏览器显示元素CSS属性时的次序：
1. 元素内嵌样式
2. 文档内嵌样式
3. 外部样式
4. 用户样式
5. 浏览器样式

## 重要样式调整层叠次序
把样式属性值标记为重要(important)，可以改变正常的层叠次序。
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
<style type="text/css">
	p {
		background-color:white; 
		color:grey !important;
	}	
</style>
</head>
<body>
	<p style="color:black">I like HTML.</p>
</body>
</html>
```
拥有`!important`标识的属性浏览器会优先考虑。

## 根据具体程度和定义次序解决同级样式冲突
如果多条定义于同一层次的样式应用于同一个元素，而且他们都包含浏览器要看的CSS属性。为了判断该用哪一个值，浏览器会评估两条样式的具体程度：
1. 样式的选择器中id值的数目
2. 选择器中其他属性和伪类的数目
3. 选择器中元素名和伪元素的数目

如果同一个样式属性出现在具体程度相当的几条样式中，浏览器会选择后面的样式来显示。

## 继承
如果浏览器在直接相关的样式找不到具体的属性，就会求助于继承机制，使用氟元素的样式属性值。

# 颜色
可以用以下方法来规定 CSS 中的颜色：
- 十六进制色  `#RRGGBB`

	其中的 RR（红色）、GG（绿色）、BB（蓝色）十六进制整数规定了颜色的成分。所有值必须介于 0 与 FF 之间。
- RGB 颜色

	`rgb(red, green, blue)`
- RGBA 颜色

	`rgba(red, green, blue, 透明度alpha)`
- HSL 颜色

	`hsl(色调hue, 饱和度saturation, 亮度lightness)`
- HSLA 颜色

	`hsla(hue, saturation, lightness, alpha)`
- 预定义/跨浏览器颜色名

# 长度
## 绝对长度
这类单位是现实世界中的度量单位。

|单位标识符|说明|
|---------|----|
|in|英寸|
|cm|厘米|
|mm|毫米|
|pt|磅|
|pc|pica(1pica=12磅)|

## 相对长度
相对单位的测量要依托其他类型的单位。

|单位标识符|说明|
|---------|----|
|em|与元素字号挂钩|
|ex|与元素字体的"x高度"挂钩|
|rem|与根元素的字号挂钩|
|px|CSS像素|
|%|另一属性的值的百分比|

CSS允许用算式作值，算式包含在关键字`calc`后的括号之中：
```
p {
	font-size: 20pt;
	width: calc(80% - 20px);
}
```

# 测试CSS支持情况
- http://caniuse.com
- http://www.midernizr.com

* * *
<p align="right">
By.Sunly
Hangzhou Fall
</p>
<br />