---
title: HTML5 学习笔记（5）
date: 2015-09-18 20:16:44
categories: 学习笔记
tags: 
- HTML5
- 学习笔记
---
使用HTML元素嵌入内容可以丰富文档内容。
<!--more-->
# 嵌入图像
## img 元素
使用`img`元素可以嵌入图像。
局部属性：
- src：指定图像url
- alt：图片备用内容(比如图片无法显示或浏览器不支持时使用)
- height\width：图片高度、宽度
- usemap：将图片变为在客户端中可点击区域的图片
- ismap

## map 和 area 元素
`map`元素可以创建一个分区响应图，用户通过单击图片不同位置跳转到不同URL。
`map`元素的局部属性：
- name
`map`元素包含多个`area`元素，各自代表图像上的一个可被点击的区域。
`area`元素的局部属性：
- alt：替代内容
- href：区域被点击后跳转的URL
- target：设置浏览器打开URL的方式
- rel：描述当前文档和目标文档之间的关系
- media：区域适用的媒体
- hreflang：目标文档语言
- type：目标文档类型
- shape
- coords
`shape`和`coords`元素决定用户可以点击的区域，前者的值表示一个图形，后者的值根据前者的值而定。

## iframe 元素
`iframe`允许我们在一个HTML文档中嵌入另一个文档。
局部属性：
- src
- srcdoc
- width
- height
- sandbox：不带值应用后将会禁用表单、脚本、插件、连接；或者附加属性启用部分功能
- seamless：使iframe的内容显示的像主HTML文档的一个组成部分一样

## embed 元素
`embed`元素通常用于插件，但也用来嵌入浏览器可以直接处理的内容。
局部元素：
- src：指定内容地址
- type：指定内容mine类型
- height
- width

## object 和 param 元素
`object`元素的实现效果和`embed`一样，但是可以包含备用内容，当制定内容无法显示的时候会显示短语和流内容。
`object`元素的局部属性：
- data：指定内容地址
- type
- height
- width
- usemap：创建分区响应图
- name
- form
不同于`embed`将属性写在元素标签内，`object`元素将属性写在`param`标签内。
`param`元素的局部属性：
- name
- value



* * *
<p align="right">
By.Sunly
Hangzhou Fall
</p>
<br />