---
title: HTML5 学习笔记（4）
date: 2015-09-18 10:02:45
categories: 学习笔记
tags: 
- HTML5
- 学习笔记
---
表单是HTML中获取用户输入的手段。
<!--more-->
# 基本的表单
一个基本的表单需要三个元素：`form`、`input`和`button`。

## form 元素
`form`元素定义一个表单。
局部属性：
- action：说明将用户的请求发送到什么地方
- method：说明将表单发送到服务器的HTTP方法
- enctype：指定浏览器对发送的数据采用的编码方式
- name：为表单设置独一无二的标识符，与全局属性id不同
- accept-charset：
- novalidate：
- target：改变提交表单之后的服务器反馈信息的呈现方式，与a元素的target属性类似
- autocomplete：用于表单的自动完成，允许直：on和off

## input 元素
`input`元素用来收集用户输入的数据。
局部属性：
- name：定义input名称
- disabled：禁用元素
- form：规定所属一个或多个表单
- type：规定元素类型
- autofocus：自动聚焦
- 取决于type的属性值的其他属性

## button 元素
`button`元素用来提交表单。
局部属性：
- name：按钮名称
- disabled：禁用元素
- form：规定按钮属于一个或多个表单
- type：按钮类型，当值为reset时重置表单
- value：规定按钮初始值
- 取决于type的属性值的其他属性

### 当 type="submit" 时 button 的额外属性
- formaction：覆盖form的action属性，另行指定表单要提交的URL
- formenctype：覆盖form的entype属性，另行指定表单编码方式
- formmethod：覆盖form的method属性，另行指定如何发送数据(POST或者GET)
- formtarget：覆盖form的target属性，另行指定反馈信息的呈现方式
- formnovalidate：覆盖form的novalidate属性，提交不会验证

## label 元素
`label`元素为表单中每一个元素提供说明。
如果用户点击了`label`元素内的文字，就会切换到控件本身。
局部属性：
- for：规定控件绑定的表单
- form：规定所属的一个或多个表单

## fieldset 元素
`filedset`元素将表单内元素分组。

## legend 元素
`legend`元素可以为`fieldset`分组添加说明。

# 定制 input 元素
通过对`input`元素的`type`属性进行配置，可以实现让用户输入特定类型的数据。

## 当 type="text" 时 input 元素的额外属性
- maxlength：用户可以在文本框中输入字符的最大数目
- size：浏览器必须保证文本框显示的最小字符数
- value：为用户输入提供一个默认值或推荐选项
- placeholder：为用户输入提供参考值
- datalist：为input输入提供列表值，使用input的list属性绑定datalist
- option：为datalist提供可选择的值。
- readonly：阻止用户编辑，不影响外观，值会发送给服务器
- disables：阻止用户编辑，文本框灰色，不会的发送给服务器

## 当 type="password" 时 input 元素的额外属性
- maxlength：设置输入最大字符数
- pattern：指定一个验证输入的正则表达式
- placeholder：为用户输入提供参考值
- required：使用户必须输入以通过验证
- readonly
- size
- value

## 当 type="submit/reset/button" 时
当type="submit"时生成提交表单按钮
当type="reset"时生成重置表单按钮
当type="button"时生成不执行任何操作的按钮

## 当 type="number" 时 input 元素的额外属性
number应用于只输入数字的区域
- min/max：设定可接受的最小、大值
- required
- readonly
- step：上下调节的步长
- value：元素初始值

## 当 type="range" 时 input 元素的额外属性
range应用于包含一定数字域的输入域，range类型显示为滑动条
- min/max
- step
- value

## 当 type="checkbox" 时 input 元素的额外属性
checkbox应用于供用户选择是/否的复选框
在发送表单时只有勾选状态的数据会被发送
- checked：设置之后复选框呈勾选状态
- required
- value

## 当 type="radio" 时 input 元素的额外属性
radio应用于单选按钮
- checked
- required
- value

## 当 type="email/tel/url" 时 input 元素的额外属性
属性是设置为email/tel/url时input接受的数据分别为电子邮箱地址、电话号码、URL，并且会自动验证。

## 用来获取时间和日期的 input 元素类型
- date：选取日、月、年
- month：选取月、年
- week：选取周和年
- time：选取时间（小时和分钟）
- datetime：选取时间、日、月、年（UTC 时间）
- datetime-local：选取时间、日、月、年（本地时间）

## 当 type="color" 时 input 元素的额外属性
color应用于供用户选择颜色

## 当 type="color" 时 input 元素的额外属性
search类型用于搜索域，比如站点搜索或Google搜索
search域显示为常规的文本域

## 当 type="hidden" 时 input 元素的额外属性
hidden将隐藏input元素和值，但是会提交至服务器

## 当 type="image" 时 input 元素的额外属性
image型input元素生成显示为图片的按钮
- alt：提供文字说明
- height/width
- src：引用图片路径

## 当 type="image" 时 input 元素的额外属性
file型input元素在提交表单时将文件上传至服务器
- accept：指定接受的MINE类型
- multiple：一次上传的文件数
- required

# 其他表单元素及输入验证
## select 元素
`select`元素用来生成一个选项列表。
`select`元素配合`option`使用。
局部属性：
- name
- disabled
- form
- autofocus
- required
- input
- size：设定显示的选项数目
- multiple：允许用户一次选择多个属性

## optgroup 元素
`optgroup`元素可以为`option`分组。
局部属性：
- label：为分组提供一个小标题
- disabled

## textarea 元素
`textarea`元素生成多行文本框，用户可以在里面输入多行文本。
局部属性：
- name
- disabled
- form
- readonly
- maxlength
- autofocus
- required
- placeholder
- rows/cols：设置文本框可见行数\宽度
- wrap：控制用户输入换行符的方式

## output 属性
`output`属性表示计算数值
局部属性：
- name
- form
- for
乘法例子：
```
<form oninput="x.value=parseInt(a.value)*parseInt(b.value)">
<input type="number" id="a" value="50">*
<input type="number" id="b" value="50">=
<output name="x" for="a b"></output>
</form>
```

## keygen 元素
`keygen`元素可以生成公开、私有密钥对。




* * *
<p align="right">
By.Sunly
Hangzhou Fall
</p>
<br />