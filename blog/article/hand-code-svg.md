---
title: 手写SVG
date: 2018-09-17 15:40:25
categories: 学习笔记
tags:
- 编程
---
这篇手写svg的教程参考文章[SVG入门—如何手写SVG - 掘金
](https://juejin.im/post/5acd7c316fb9a028c813348d)<!--more-->

文章介绍了如何绘制六个简单的SVG图标，文章写的很详细，个人思考写在注释里面了，直接上代码。

```
        <svg width="750px" height="500px">
            <defs>

                <!--坐标系x向右为正，y向下为正-->

                <!--使用g创建组合对象-->

                <g id="leftalign">
                    <!--左对齐图标-->
                    <!--line绘制直线，x1为起始x位置，x2为结束x位置-->
                    <line x1="3" x2="48" y1="3" y2="3"></line>
                    <line x1="3" x2="65" y1="19" y2="19"></line>
                    <line x1="3" x2="48" y1="35" y2="35"></line>
                    <line x1="3" x2="65" y1="51" y2="51"></line>
                </g>

                <g id="rightcaret">
                    <!--插入图标-->
                    <!--polyline绘制折线，points为折点坐标-->
                    <polyline points="3 3, 30 28, 3 53"></polyline>
                </g>

                <g id="browser">
                    <!--浏览器图标-->
                    <!--rect绘制矩形，x、y为矩形左上角坐标-->
                    <rect x="3" y="3" width="80" height="60"></rect>
                    <line x1="3" x2="83" y1="19" y2="19"></line>
                    <line x1="20" x2="20" y1="3" y2="17"></line>
                </g>

                <!--使用symbol创建模板-->

                <symbol id="alert" viewBox="0 0 86 86">
                    <!--警示图标-->
                    <!--ellipse绘制（椭）圆形，cx、cy为原点坐标，rx为水平方向的半径，ry为竖直方向的半径-->
                    <ellipse cx="43" cy="43" rx="40" ry="40"></ellipse>
                    <line style="stroke-width: 8;" x1="43" x2="43" y1="19" y2="48"></line>
                    <ellipse style="fill:black;" cx="43" cy="65" rx="5" ry="5"></ellipse>
                </symbol>

                <symbol id="play" viewBox="0 0 86 86">
                    <!--播放图标-->
                    <ellipse cx="43" cy="43" rx="40" rx="40"></ellipse>
                    <!--ploygon绘制多边形，points为端点坐标-->
                    <polygon points="35 23, 60 43, 35 63"></polygon>
                </symbol>

                <symbol id="download" viewBox="0 0 64 71">
                    <!--下载图标-->
                    <!--path通过指定点及点和点间的线来绘制任意图形-->
                    <!--M为将点以绝对位置移动，m为将点以相对位置移动-->
                    <!--L为以绝对位置向某方向划线，l为以相对位置向某方向划线-->
                    <!--Z是在当前点和起始点之间画一条线，以闭合图形-->
                    <path d="
                M 18 3
                L 46 3
                L 46 40
                L 61 40
                L 32 68
                L 3 40
                L 18 40
                Z
                "></path>
                </symbol>
            </defs>

            <!--使用use来使用defs中的组合-->
            <use href="#leftalign" x="100" y="100"></use>
            <use href="#rightcaret" x="300" y="100"></use>
            <use href="#browser" x="500" y="100"></use>

            <!--使用use来使用symbol中的模板-->
            <use href="#alert" x="100" y="200" width="100" height="100"></use>
            <use href="#play" x="300" y="200" width="100" height="100"></use>
            <use href="#download" x="500" y="200" width="100" height="100"></use>
        </svg>
 ```

### 完成之后创建的图标

![](https://ww1.sinaimg.cn/large/9f2a978ely1fvcknqr0ikj20nm0gowei.jpg)

### 完整代码
[SVG入门—如何手写SVG(总结) - 掘金](https://juejin.im/post/5acd7c316fb9a028c813348d#heading-20)





* * *
<p style="text-align:right">
By.Sunly<br>
Taizhou Fall
</p>
<br>