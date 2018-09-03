---
title: 关于Ingress多重CF
date: 2015-07-18 20:25:29
categories: Ingress
tags: Ingress
---
多重CF即在portal数量一定的情况下获得最多的cf控制区域。
以下将主要研究几种关于多重CF的简单制作方法：
<!--more-->

## 从4个portal构成的最基本多重CF说起

  首先应该明白一点规则：
  在CF内部不能做link，除非是从cf的顶点向内link。
  ![](/img/ingress-cf-1.jpg)
  这是一个最经典也是最基础的多重CF案例，使用4个portal完成了4个CF。
  在制作多重CF的过程中，重要的不是结果而是过程，即如图做出link的方法很多，但是多重CF的关键是link的顺序和方向。
  在这个简单的例子中，首先完成了内部的小型CF，然后完成外部大CF，最后从大CF顶点向内连接小cf顶点。记住这个顺序为以后复杂一点的多重会很有帮助。

* * *

## 让我们来尝试一下更多的点

  有了第一个例子，让我们在划出的大三角形内再加入更多的点吧。
  首先需要完成的还是底边的link和最靠近底部的内部小CF。
  第一个CF要求以大CF底边为底边且内部不再包含任何portal。我们暂且称其为`一阶三角`。
  ![](/img/ingress-cf-2.jpg)
  接下就是以新的portal为顶点、`一阶三角`的两条侧边为底边，制作三角型区域。我们暂且称其为`二阶三角`。
  这个过程要保证不会使`一阶三角`的顶点与大三角顶点的link受阻。
  ![](/img/ingress-cf-3.jpg)

> 如果还有其他的点重复这个步奏即可。

  接着完成大CF。
  为了完成更多的多重，可以从底边向上做link完成CF。
  ![](/img/ingress-cf-4.jpg)
  最后从顶点向内做link。
  这个过程一定要注意步骤：
  从顶点依次向`一阶三角顶点`、`二阶三角顶点`…做link。
  ![](/img/ingress-cf-5.jpg)
  恭喜！你已经完成了第一个多重CF！

* * *

## 当我有一个工po或者床po的时候

  一个工po或者床po意味着你将会有更多的key。此时多重CF的工作量将大大减少哦！
  把工/床po当做支点，首先完成最小的CF。
  ![](/img/ingress-cf-6.jpg)
  接着从下一个portal(红圈处)如第一种方法，以第一个CF的边为底边做新的CF。
  ![](/img/ingress-cf-7.jpg)
  只要注意link顺序，第二个多重就近在眼前啦！
  ![](/img/ingress-cf-8.jpg)

* * *

## note:

1.多重只是使一个区域内CF数量最大化，如果你想要的是MU最大化，可能需要放弃一些CF来完成。
2.多重重要的是顺序，依据不同的portal位置选择不同的方法，会事半功倍哦~
3.一个区域内最多CF数量公式(m个顶点围成的区域内包含n个portal)：
  3m+n-2

* * *

> 参考资料：
> [https://plus.google.com/104389566591650709184/posts/Bo9MXpwYw21](https://plus.google.com/104389566591650709184/posts/Bo9MXpwYw21)

* * *
<p align="right">
By.Sunly
Lanzhou Summer
</p>
<br />