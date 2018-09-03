---
title: CSS3 学习笔记（3）
date: 2015-10-08 16:08:09
categories: 学习笔记
tags: 
- CSS3
- 学习笔记
---
盒子是CSS的基础概念，我们需要使用它来配置元素的外观以及文档的整体布局。
<!--more-->
# 盒模型
![](http://www.w3school.com.cn/i/ct_boxmodel.gif)	

## padding
`padding`属性定义了元素的内边距
百分比和包含块的宽度有关，高度不考虑在内
```
<style type="text/css">
	p {
		/* 顶部内边距10px，左右内边距20px，下边内边距30px */
		padding: 10px 20px 30px;
	}
</style>
```

## margin
`margin`属性定义了原色的外边距
百分比和包含块的宽度有关

## width 和 height
`width`和`height`属性可以控制元素的尺寸
`min-width`和`min-height`属性为元素设置最小尺寸
`max-width`和`max-height`属性为元素设置最大尺寸
百分比是根据包含块的宽度来计算的

## box-sizing
`box-sizing`属性以确切的方式定义适应某个区域的具体内容
盒子的标准模型的宽是`content`+`border-width`+`padding`，使用`box-sizing`属性可以将`border-width`和`padding`计算到设置的`width`中，比如设置的`width`为100px，`padding-width`为10px，使用`box-sizing`属性使宽度仍为100px而不是120px。

## overflow
当内容太多，容器过小，内容就会溢出。使用`overflow`可以改变溢出行为。
- overflow：简写属性
- overflow-x：设置水平方向溢出方式
- overflow-y：设置垂直方向溢出方式
属性的值：
- visible：默认值，会溢出显示
- auto：自行处理，通常内容被裁剪会有滚动条
- hidden：多余部分直接被忽略
- scroll：显示滚动条查看更多内容
- inherit：从父元素继承

## visibility
`visibility`可以控制元素的可见性，

属性的值：
- visible：默认值，元素可见
- hidden：元素不可见，但是占据空间
- collapse：元素不可见，且不占据空间，只能应用到相表相关元素（Google Chrome 55 暂不支持）

## display
`display`属性可以改变元素盒类型，相应的会改变元素在页面上的布局方式
属性的值：
- inline：创建一个行内元素，使用inline属性浏览器会忽略width、height、margin
- block：创建一个块级元素，块级元素会在垂直方向跟周围元素有所区别
- inline-block：创建一个行内-块级元素，元素和周围元素会并列显示，但不会忽略width、height、margin属性
- run-in：盒子类型取决于周围元素
- none：隐藏元素，元素不占据空间

## float
`float`属性会创建浮动盒，浮动盒会将元素边界移动到包含块或另一个浮动盒的边界
属性的值：
- left：移动盒至包含块左边界或另一浮动盒元素右边界
- right：移动盒至包含块右边界或另一浮动盒元素左边界
- none：元素位置固定

## clear
如果设置多个浮动元素，默认情况下会堆叠显示。
`clear`属性使浮动元素的一个或两个边界不能挨着另一个浮动元素
属性的值：
- none：可以紧挨浮动元素
- left：左边不能挨着浮动元素
- right：右边不能挨着浮动元素
- both：两边都不能挨着浮动元素

# 创建布局
## 定位内容
`position`属性设置了元素的定位方法
`left`、`top`、`right`、`bottom`属性定位元素偏移量
`position`属性的值：
- static：默认值，没有定位，忽略top、left、z-index等
- absolute：生成绝对定位元素，相对于position不为static的最近的祖先元素进行定位
- relative：生成相对定位元素，相对于其正常位置定位
- fixed：生成绝对定位元素，相对于浏览器窗口进行定位
- inherit：从父元素继承
`z-index`属性指定元素显示的层叠顺序，属性的值是数值，值越小，越在底部

## column
`column`属性使内容多列分布，类似于报纸排版
使用`column-count`指定列数或者`column-width`指定列宽，以便内容在垂直的多列中分布

## 弹性盒布局(FlexBox)
参考资料：
- <a href="http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html">Flex 布局教程:语法篇 - 阮一峰的网络日志</a>
- <a href="http://www.ruanyifeng.com/blog/2015/07/flex-examples.html">Flex 布局教程:实例篇 - 阮一峰的网络日志</a>

弹性布局可以更好的支持流动界面。
将任意容器指定为flex布局：
```
<style type="text/css">
	.box {
		display: flex;
		/ * webkit内核浏览器加上厂商前缀 */
		display: -webkit-flex;
	}
</style>
```
将行内元素指定为flex布局：
```
.p {
	display: inline-flex;
}
```
设置为`flex`属性后子元素的`float`、`clear`、`vertical-align`属性将失效

### flex布局基本概念
采用flex布局的元素称为flex容器，他的所有子元素成为容器成员。
![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png)
容器默认有两个轴，水平的主轴和垂直的交叉轴，项目默认沿主轴排列

### 容器的属性
#### flex-direction
确定主轴(main axis)的方向
属性的值：
- row：默认值，主轴为水平方向，左为起点
- row-reverse：主轴为水平方向，右为起点
- column：主轴为垂直方向，上为起点
- column-reverse：主轴为垂直方向，下为起点

#### flex-wrap
默认情况下项目排列在一条主轴上，如果项目过多需要还行，`flex-wrap`规定如何换行
属性的值：
- nowrap：不换行
- wrap：换行，第一行在上
- wrap-reverse：换行，第一行在下

#### justify-content
定义项目在主轴上的对齐方式
属性的值：
- flex-start：左对齐，默认值
- flex-end：右对齐
- content：居中
- space-between：两端对齐，项目之间的间隔相等
- space-around：每个项目两侧间隔相等

#### align-items
定义项目在交叉轴上的对齐方式
属性的值：
- stretch：将占满整个容器高度，默认值
- flex-star：上对齐
- flex-end：下对齐
- conter：垂直居中
- baseline：项目第一行文字的基线对齐

#### align-content
属性定义多根轴线情况下的对齐方式，如果只有一根轴线属性无效
属性的值：
- stretch：将占满整个交叉轴，默认值
- flex-start：与交叉轴起点对齐
- flex-end：与交叉轴终点对齐
- center：与交叉轴中点对齐
- space-between：与交叉轴两端对齐，间隔相等
- space-around：每根轴线两端的间隔都相等

### 项目的属性
#### order
定义项目排列顺序，值为数值，越小排列越靠前

#### flex-grow
定义项目缩放比例，默认值为0
如果值为0，即使有空余空间也不放大
如果所有项目值为1，则平分空间
如果项目值分别为1、2、1，则按比例分配空间

#### flex-shrink
定义项目缩小比例，默认值0
如果值为1，空间不足时项目将缩小
如果值为1、0、1，空间不足时值为0的项目不缩小

#### align-self
属性容许单个项目拥有与其他项目不同的对齐方式，可覆盖align-items属性

* * *
<p align="right">
By.Sunly
Hangzhou Fall
</p>
<br />