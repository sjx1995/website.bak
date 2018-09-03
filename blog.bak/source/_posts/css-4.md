---
title: CSS3 学习笔记（4）
date: 2015-10-15 15:20:19
categories: 学习笔记
tags: 
- CSS3
- 学习笔记
---
设置文本样式，运用CSS3实现动画等效果，一起其他CSS的属性
<!--more-->
# 设置文本样式
## text-align
`text-align`属性指定文本对齐方式
属性的值：
- left：左对齐
- right：右对齐
- center：居中
- justify：对齐到两端
- inherit：从父元素继承

## whitespace
浏览器默认会将多个空格合并为一个空格，换行符则会被忽略，这样可以将HTML文档布局和页面布局分开。但是使用`whitespace`属性可以保留HTML源文档中的空白
属性的值：
- normal：默认值，空白会被忽略
- pre：空白会被保留，处理方式类似<pre>
- nowrap：文本不会换行除非遇到<br>
- pre-wrap：保留空白符，但正常换行
- pre-line：合并空白符，保留换行符
- inherit：继承父元素

## direction
`direction`属性告诉浏览器文本块排列方向
属性的值：
- ltr
- rtl

## letter-spacing
设置文字(字母)之间间距，值为长度值

## word-spacing
设置单词之间间距，值为长度值

## line-height
设置行高，值为长度值、百分比

## text-indent
设置文本首行缩进，值为长度值、百分比

## text-shadow
设置文本阴影效果
语法：
```
<style type="text/css">
	p {
		/* 水平阴影位置和垂直阴影位置为必须值，模糊距离和颜色为可选值 */
		text-shadow: h-shadow v-shadow blur color;
	}
</style>
```

## 使用字体
`font-family`指定文本采用的字体名称
`font-size`指定文本的字体大小
`font-style`指定字体样式
`font-variant`指定字体是否以小型大写字母显示
`font-weight`设置字体粗细
`font`简写属性，语法如下：
```
<style type="text/css">
	p {
		font: <font-style> <font-variant> <font-weight> <font-size> <font-family>
	}
</style>
```

### 使用Web字体
通过`@font-face`可以下载web字体应用在页面
```
<style type="text/css">
	@font-face {
		font-family: 'MyFont';
		font-style: normal;
		font-weight: normal;
		src: url('http://font/myfont.woff');
	}
</style>
```

# 过渡、动画和变换
## 过渡
过渡效果是通过改变元素的CSS属性来实现的

### 示例
通过鼠标悬停在div元素上来改变CSS属性
```
<style type="text/css">
	div:hover {
		/* 宽度变换，时间为2s，多项改变通关过逗号隔开 */
		transition: width 2s;
		/* firefox */
		-moz-transition : width 2s;
		/* safari 和 chrome */
		-webkit-transition : width 2s;
		/* opera */
		-o-transition : width 2s;
	}
</style>
```

### transition-property
规定应用过渡的属性，值为字符串

### transition-duration
规定过渡的持续时间，值的单位为ms或s，默认为0

### transition-timing-function
规定过渡期间计算中间值的方式
属性的值：<a href="http://www.w3school.com.cn/cssref/pr_transition-timing-function.asp">CSS3 transition-timing-function 属性 - w3school 在线教程</a>

### transition-delay
规定过渡开始前的延迟，值的单位为ms或s，默认为0

### transition
简写属性，格式如下：
```
<style type="text/css">
	div {
		transition: <transition-property> <transition-duration> <transition-timing-function> <transition-delay>;
	}
</style>
```

### 创建反向过渡
只在`:hober`选择器上应用样式的话，只有鼠标移动到元素上才会应用过渡效果，一旦移开，则应用`div`样式，会立即回到初始状态十分突兀，所以一般过渡效果成对出现。
感刚开始布局页面时浏览器不会应用过渡。

## 动画
动画本质上是增强的过渡

### animation-name
指定动画名称

### animation-duration
指定动画持续时间，值单位为s或ms，默认值为0

### animation-time-function
指定动画播放期间中间值的计算方式
属性的值：<a href="http://www.w3school.com.cn/cssref/pr_animation-timing-function.asp">CSS3 animation-timing-function 属性 - w3school 在线教程</a>

### animation-delay
设置动画播放延迟，值单位为s或ms，默认值为0

### animation-iteration-count
设置动画播放次数，默认值为1

### animation-direction
设置动画循环播放时是否反向播放
属性的值：
- normal：每次都从头播放
- alternate：先从头播放再从尾播放

### animation-play-state
允许动画暂停和重新播放
属性的值：
- paused：动画停止播放
- playing：动画开始播放

### animation-fill-mode
规定动画播放前或播放后，其动画效果是否可见
属性的值：
- none：不改变默认行为
- forwards：播放完保持最后一个属性，在最后一个关键帧中定义
- backwords：在animation-delay中定义的一段时间内，在动画显示前，应用开始属性值，在第一个关键帧中定义
- both：向前和向后填充模式都被应用

### animation
简写属性，除了`animation-play-state`属性，格式如下：
```
<style type="text/css">
	div {
		animation: <animation-name> <animation-duration> <animation-time-function> <animation-delay> <animation-iteration-count>;
	}
</style>
```

### 使用动画
动画是两部分定义的：
第一部分是包含在样式声明中，使用`animation`等属性，他们定义了动画的样式，但没有定义那些属性是动画。
第二部分是使用`@key-frames`规则创建的，用来定义动画的属性。
```
<!DOCTYPE html>
<html>
<head>
	<title>example</title>
	<style type="text/css">
		div {
			width: 100px;
			height: 100px;
			/* 将动画命名为MyDiv */
			animation-name: MyDiv;
			animation-duration: 10s;
			/* chromw and safair */
			-webkit-animation-duration: 10s;
		}
		/* 绑定到MyDiv */
		@keyframes MyDiv {
			/* 这是第一帧 */
			from {
				background-color: : red;
			}
			/* 在规定的时间10s的25%将颜色变为黄色，这是一个中间关键帧 */
			25% {
				background-color: yellow;
			}
			50% {
				background-color: : blue;
			}
			/* 这是最后一帧 */
			to {
				background-color: green;
			}
		}
		/* chrome and safair */
		@-webkit-keyframes MyDiv {
			/* 0%可以替代from */
			0% {
				background-color: : red;
			}
			25% {
				background-color: yellow;
			}
			50% {
				background-color: : blue;
			}
			/* 100%可以替代to */
			100% {
				background-color: green;
			}
		}
	</style>
</head>
<body>
	<div></div>
</body>
</html>

```

### 初始状态
CSS动画的一个优势在于可以将元素样式定义在动画初始状态中，只要HTML页面一加载成功就会应用动画效果。

### 结束状态
CSS动画的一个局限是关键帧为属性定义的值只能在动画中应用，所以动画结束之后，元素的外观会返回初始状态。
如果需要保留结束时的外观，则需要用到`过渡`。

## 变换
利用CSS变换可以旋转、缩放、倾斜、平移、转动元素。
chrome 和 safari 需要加上 `-webkit` 前缀

### transform 和 transform-origin
transform 指定应用的变换类型
transform-origin 指定变换的起点

### 2D变换方法：
#### translate
translate()方法将元素从起始位置平移至其他位置
将元素从原位置左侧移动10px，从顶端移动20px
`transfrom: translate(10px,20px);`

#### rotate
rotate()方法将元素顺时针旋转一定角度
将元素顺时针旋转30度：
`transfrom: rotate(30deg);`

#### scale
scale()方法可以缩放元素
将元素宽度变为原来2倍，高度变为原来0.5倍：
`transfrom: scale(2,0.5);`

#### skew
skew()方法可以翻转元素
将元素沿X轴翻转30度 沿Y轴翻转200度：
`transfrom: skew(30deg,200deg);`

#### matrix
matrix()方法需要六个参数，包含数学函数，允许旋转、缩放、移动、倾斜元素

### 3D变换方法：
#### rotate
rotateX()方法将元素沿X轴旋转
rotateY()方法将元素沿Y轴旋转
将元素沿X轴旋转30度：
`rotateX(30deg);`

### 将变换作为过渡和动画处理
将变换作为过渡和动画处理，可以更加自然的定义元素的变换

# 其他CSS属性
## 设置元素的颜色和透明度
### color
`color`属性设置元素前景色，一般情况下为文本设置颜色

### opacity
`opacity`属性设置元素透明度，取值范围是0到1，1代表不透明

## 设置表格样式
### border-collapse
设置相邻单元格的边框处理样式
属性的值：
- separate：为每个单元格绘制单独边框
- collapse： 将相邻单元格边框合二为一

### border-spacing
设置相邻单元格边框的间距

### caption-side
设置表格标题的位置
属性的值：
- top
- bottom

### empty-cells
设置空单元格是否显示边框
属性的值：
- show
- empty

### table-layout
指定表格的布局样式
属性的值：
- auto
- fixed：禁用自动布局，表格大小由自身和单独的每列的width值设定

## 设置列表样式
### list-style-type
在列表中设置标记

### list-style-image
将图像作为列表标记

### list-style-position
指定标记相对于列表项目盒子的位置

### list-style
简写属性，格式如下;
```
<style type="text/css">
	ul {
		list-style: <list-style-type> <list-style-position <list-style-image>;
	}
</style>
```

## 设置光标样式
### cursor
`cursor`属性可以设置光标的样式
属性的值：
- url：需使用的自定义光标的URL，切记定义一种普通光标以备没有URL定义光标时使用
- default：默认光标（通常是一个箭头）
- auto：默认值，浏览器设置的光标
- crosshair：光标呈现为十字线
- pointer：光标呈现为指示链接的指针（一只手）
- move：此光标指示某对象可被移动。
- text：此光标指示文本
- wait：此光标指示程序正忙（通常是一只表或沙漏）
- help：此光标指示可用的帮助（通常是一个问号或一个气球）

* * *
<p align="right">
By.Sunly
Hangzhou Fall
</p>
<br />