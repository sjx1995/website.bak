---
title: CSS3 学习笔记（2）
date: 2015-09-19 06:46:02
categories: 学习笔记
tags: 
- CSS3
- 学习笔记
---
介绍CSS选择器，设置边框、页面背景、阴影等
<!--more-->
# 浏览器厂商特定前缀
部分新的CSS、JS特性只有部分浏览器支持，所以在属性名前需要特定的厂商前缀。

|浏览器|厂商前缀|
|-----|-------|
|Google Chrome、Safari|-webkit-|
|Opera|-o-|
|Firefox|-moz-|
|Internet Explorer|-ms-|

# CSS 选择器
## 基本选择器
### * 
通用选择器`*`可以选择所有元素

### <元素类型> 
类型选择器`<元素类型>`可以匹配指定类型的元素
```
p {
	font-color: black;
	font-size: 16px;
}
```

### *.<类名> 或 <元素类型>.<类名>
类选择器`*.<类名>`匹配指定类
类选择器`<元素类型>.<类名>`匹配属于指定类的特定类型元素

### #<id> 或 <元素类型>#<id>
ID选择器`#<id>`匹配指定id的元素

### [<属性>] 或 <元素类型>[<属性>]
条件选择器`[<属性>]`匹配特定属性的元素
匹配带有`href`的`<a>`元素：
```
a[href] {
	border:thin black solid;
	padding:4px;
}
```
元素属性选择器的条件：

|条件|说明|
|---|----|
|[attr]|选择带有attr属性的元素|
|[attr="val"]|选择带有attr属性的元素，且属性值为val|
|[attr^="val"]|选择带有attr属性的元素，且属性值以val开头|
|[attr$="val"]|选择带有attr属性的元素，且属性值以val结尾|
|[attr*="val"]|选择带有attr属性的元素，且属性值包含val|
|[attr~="val"]|选择带有attr属性的元素，且属性具有多个值，其中一个为val|
|[attr&#166;="val"]|选择带有attr属性的元素，且属性值为连字符(-)分割的多个值，其中一个为val|

## 选择器优先级
浏览器读取CSS的顺序是由上至下的，所以在下面的CSS样式优先级永远高于上面的样式。
样式优先级：行内样式>id选择器>类选择器。
使用`!important`可以强制修改样式。

## 复合选择器
组合使用不同的选择器可以匹配更多的特定元素，有的复合选择器可以匹配更多元素，有的复合选择器可以锁定更少的元素

### <选择器>,<选择器>,<选择器>
并集选择器会依次匹配符合条件的元素并应用样式

### <第一个选择器> <第二个选择器>
后代选择器先匹配第一个选择器，再从匹配元素后代中找出匹配第二个选择器的元素

### <第一个选择器> > <第二个选择器>
子代选择器类似后代选择器，但只匹配直接后代

### <第一个选择器> + <第二个选择器>
相邻兄弟选择器可以选择紧跟在某元素之后的一个兄弟元素

### <第一个选择器> ~ <第二个选择器>
普通相邻兄弟选择器可以选择紧跟在某元素之后的所有兄弟元素

## 伪元素选择器
伪元素选择器提供了更复杂的功能，但并非针对HTML文档中定义的元素

### ::first-line
`::first-line`选择器匹配文本中第一行，当窗口大小变化时，浏览器会重新评估首行

### ::first-letter
`::first-letter`选择器匹配文本快的首字母

### :before 和 :after
`before`和`after`选择器会在元素前、后添加内容，通过使用`content`属性指定插入内容
#### CSS计数器
```
<!DOCTYPE html>
<html>
<head>
	<title>example</title>
	<style type="text/css">
		body {
			/* 初始化名为paracount，初始值为1的计数器 */
			counter-reset: paracount 1;
		}
		p:before {
			/* 在p元素前插入计数器和"." */
			content: counter(paracount)".";
			/* 设定计数器的增量为1 */
			counter-increment: paracount 1;
		}
	</style>
</head>
<body>
	<p>I like HTML.</p>
	<p>I like CSS and JS.</p>
</body>
</html>
```
## 伪类选择器
和伪元素选择器一样，伪类选择器并不针对文档元素，而是为匹配具有某种特征的元素

### :root
`:root`选择器匹配根元素，总是返回html

### :first-child
子元素选择器`first-child`匹配元素的第一个子元素

### :last-child
子元素选择器`last-child`匹配元素的最后一个字元素

### only-child
子元素选择器`only-child`匹配某元素的唯一子元素且该父元素只有一个子元素

### only-of-child
子元素选择器`only-of-child`匹配某元素的唯一子元素但该父元素还拥有其他元素

### :nth-child(n)
`nth-child(n)`选择器匹配父元素的第n个子元素

### :nth-last-child(n)
`:nth-last-child(n)`选择器匹配父元素倒数第n个子元素

### :nth-of-typd(n)
`:nth-of-type(n)`选择器匹配父元素定义类型的第n个子元素

### :nth-last-of-type(n)
`:nth-last-of-type(n)`选择器匹配父元素定义类型的倒数第n个子元素

### :enabled 和 :disabled
`:enabled`和`:disabled`选择器匹配启用、禁用的元素，但不会匹配没有禁用状态的元素

### :checked
`:checked`选择器匹配用户选中的的按钮或者选择框

### :default
`:default`选择器匹配一组类似元素中的默认元素，例如提交按钮是表单中的默认元素

### :valid 和 :invalid
`:valid`和`:invalid`选择器匹配符合、不符合输入验证要求的input元素

### :in-range 和 :out-of-range
`:in-range`选择器匹配位于设定的范围内的input元素
`:out-of-range`选择器匹配位于设定的范围外的input元素

### :required 和 :optional
`:required`匹配具有`required`属性的input元素，这样可以确保用户必须输入与input相关的值才能提交表单
`:optional`匹配没有`required`属性的input元素

### :link 和 :visited
`:link`选择器匹配超链接
`:visited`选择器匹配已经访问过的超链接

### :hover
`:hover`选择器匹配用户鼠标悬停的任意元素

### :active
`:active`选择器匹配当前被用户激活的元素

### :focus
`:focus`选择器匹配当前获得焦点的元素

### :not
`:not`选择器可以对任意选择取反
匹配子元素不包含apress值的带有href属性的<a>元素
```
a:not([href="apress"]){
	border: thin black solid;
}
```

### :empty
`:empty`选择器匹配没有任意子元素的元素

### :lang
`:lang`选择器匹配基于lang全局属性的元素

### :target
`:target`选择器匹配目标元素
目标元素：URL带有#指向文档内具体元素，该元素即为目标元素

# 边框和背景
## 边框基本属性
### border-width
`border-width`属性设置边框宽度
属性的值：
- 长度值，例如em、px、cm
- 百分比
- thin > medium > thick

### border-style
`border-style`属性设置边框样式
属性的值：

|值|说明|
|--|---|
|none|定义无边框|
|hidden|与"none"相同。不过应用于表时除外，对于表，idden用于解决边框冲突|
|dotted|定义点状边框，在大多数浏览器中呈现为实线|
|dashed|定义虚线，在大多数浏览器中呈现为实线|
|solid|定义实线|
|double|定义双线。双线的宽度等于 border-width 的值|
|groove|定义槽线式边框。其效果取决于border-color的值|
|ridge|定义脊线边框。其效果取决于border-color的值|
|inset|定义内嵌效果边框。其效果取决于border-color的值|
|outset|定义外凸效果边框。其效果取决于border-color的值|
|inherit|规定应该从父元素继承边框样式|

### border-top-width
使用`top`、`left`、`bottom`、`right`可以为任意一条边定义属性

### 使用border简写属性
```
<style type="text/css">
	p {
		border: <宽度><样式><颜色>;
		border-top: <宽度><样式><颜色>;
	}
</style>
```

### border-radius
使用`radius`可以定义边框的圆角，属性的值可以是长度值或者百分比
```
<style type="text/css">
	p {
		/* 边框四个圆角半径为10px */
		border-radius: 10px;
		/* 具体定义一个圆角的水平曲线半径和垂直曲线半径，一个数值表示两者相同 */
		border-top-left-radius: 10px 20px;
		/* 分别定义四个圆角的半径，缺失的数据等于对角的数据 */
		border-top-left: 10px 15px;
		border-top-right: 10px 5px;
		border-bottom-right-radius: 15px;
		/* 上面的三条属性等同于 */
		border: 10px 10px 15px / 15px 5px;

	}
</style>
```

### border-image
使用`border-image`属性可以将图片用作边框，在使用过程中浏览器会将应用的图片切分为3*3的9块，将周围的8块用做边框的对应位置的部分
```
<style type="text/css">
	p {
		/* 引用图片，将其切割为30px*30px的方块，并且图片铺满边框 */
		border-image: url(/image/example.jpg) 30 30 round;
		/* 图片拉伸以填充边框 */
		border-image: url(/image/example.jpg) 30 30 stretch;

	}
</style>
```

## 设置元素背景
### 设置背景和颜色
```
<style type="text/css">
	p {
		/* 设置背景颜色为黑色 */
		background-color: black;
		/* 引用背景图像 */
		background-image: url(/image/example.jpg);
		/* 规定图像大小 */
		background-size: 40px 40px;
		/* 使图像最大充斥容器 */
		background-size: contain;
		/* 图像水平重复 */
		background-repeat: repeat-x; 
		/* 图像距左边距30px 上边距10px */
		background-position: 30px 10px;
		/* 背景固定在视窗/背景附着在内容上/背景固定在元素上 */
		background-attachment: fixed/local/scroll;
	}
</style>
```
# 创建盒子阴影
## box-shadow
`box-shadow`属性可以为盒子添加阴影
属性的值：
- hoffset：阴影的水平偏移量，正值代表向右偏移
- voffset：阴影的垂直偏移量，正值代表向下偏移
- blur：定义模糊值，值越大盒子边界越模糊
- spread：指定阴影的延伸半径，正值代表阴影向盒子各个方向延伸扩大
- color：阴影颜色
- inset：将外部阴影变成内部阴影

# 应用轮廓
## outline
`outline`属性可以在盒子外边绘制边框
属性：
- outline：简写属性
- outline-color：轮廓颜色
- outline-offset：轮廓的偏移量
- outline-style：设置轮廓样式
- outline-width：设置轮廓宽度

* * *
<p align="right">
By.Sunly
Hangzhou Fall
</p>
<br />