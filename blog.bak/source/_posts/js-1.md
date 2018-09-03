---
title: JavaScript 学习笔记（1）
date: 2015-09-12 15:11:49
categories: 学习笔记
tags: 
- javascript
- 学习笔记
---
JavaScript一种直译式脚本语言，已经被广泛用于Web应用开发。
<!--more-->
# 简单的输出
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<script type="text/javascript">
		document.writeln("Hello");
	</script>
</body>
</html>
```

# 定义和使用函数
## 使用带参数的函数
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<script type="text/javascript">
		function myFunc(name){
			document.writeln("Hello " + name + "!");
		};
		myFunc("Xiao Ming ");
	</script>
</body>
</html>
```

## 定义会返回结果的函数
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<script type="text/javascript">
		function myFunc(name){
			return("Hello " + name + "!");
		};
		document.writeln(myFunc("Xiao Ming "));
	</script>
</body>
</html>
```

# 使用变量和类型
## 变量
定义变量要用`var`关键字，定义的同时还可以赋值。
`局部变量`：定义在函数中的变量，只能在该函数中使用。
`全局变量`：直接在`script`元素中定义的变量，可以在任何地方使用。

## 基本类型
javascript基本类型有三个：
- 字符串类型(string)
- 数值类型(number)
- 布尔类型(boolean)

### 字符串类型
表示字符串时要用引号。
```
<script type="text/javascript">
	var firstString = "This is a string.";
	var secondString = 'This is anoher string.';
</script>
```

### 布尔类型
布尔类型只有`true`和`false`两个值。
```
<script type="text/javascript">
	var firstBool = true;
	var secondBool = false;
</script>
```

### 数值类型
数值类型包括整数和浮点数。
```
<script type="text/javascript">
	var intNumber = 1;
	var floatNumber = 1.23;
	var hexValue = 0xFFFF;
</script>
```

## 创建对象
通过`new Object()`的方法创建一个对象，并且赋值给名为`myData`的变量：
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<script type="text/javascript">
		//创建对象
		var myData = new Object();
		myData.name = "Xiao Ming ";
		myData.weather = "sunny ";

		document.writeln("Hello " + myData.name + "!");
		document.writeln("Today is " + myData.weather + ".");
	</script>
</body>
</html>
```

### 使用对象字面量
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<script type="text/javascript">
		var myData = {
			//使用对象字面量
			name: "Xiao Ming ",
			weather: "sunny "
		}

		document.writeln("Hello " + myData.name + "!");
		document.writeln("Today is " + myData.weather + ".");
	</script>
</body>
</html>
```

### 将函数用作方法
函数变成了一个名为`printMessaages`的方法：
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<script type="text/javascript">
		var myData = {
			name: "Xiao Ming ",
			weather: "sunny ",
			//将函数用作方法
			printMessaages: function(){
				document.writeln("Hello " + this.name + "!");
				document.writeln("Today is " + this.weather + ".");
			}
		};

		myData.printMessaages();
	</script>
</body>
</html>
```
在方法内部使用对象属性时要用到`this`关键字。

## 使用对象
### 读取修改对象
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<script type="text/javascript">
		var myData = {
			name: "Xiao Ming ",
			weather: "sunny "
		};
		//常见的读取修改对象的方法
		myData.name = "Xiao Hua ";
		//类似数组索引的方法，可以用变量表示属性名
		var proName = "weather ";
		myData[proName] = "raining";

		document.writeln("Hello " + myData.name + "!");
		document.writeln("it is " + myData["weather"] + ".");
	</script>
</body>
</html>
```

### 枚举对象属性
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<script type="text/javascript">
		var myData ={
			name: "Xiao Ming ",
			weather: "sunny ",
			printMessaages: function(){
				document.writeln("Hello " + this.name + "!");
				document.writeln("Today is " + this.weather +".");
			}
		};
		//for...in循环枚举对象属性
		for (var prop in myData) {
			document.writeln("Name: " + prop + "Value: " + myData[prop]);
		}
	</script>
</body>
</html>
```

`for...in`循环代码块中的语句会对myData中对象的每一个属性执行一次，在每一次迭代过程中，所处理的属性名会赋值给`prop`变量。
例子中作为方法定义的函数也可以被枚举。

### 为对象添加新属性
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<script type="text/javascript">
		var myData = {
			name: "Xiao Ming",
		};
		//为对象添加新属性
		myData.weather = "sunny";
	</script>
</body>
</html>
```

### 为对象添加新方法
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<script type="text/javascript">
		var myData = {
			name: "Xiao Ming ",
		};
		//为对象添加新方法
		myData.sayHello = function(){
			document.writeln("Hello " + this.name + "!");
		};
	</script>
</body>
</html>
```

### 删除对象的属性
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<script type="text/javascript">
		var myData = {
			name: "Xiao Ming ",
			weather: "sunny "
		};
		//删除对象的属性
		delete myData.name;
		delete myData["weather"];
	</script>
</body>
</html>
```

### 检查对象是否具有某项属性
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<script type="text/javascript">
		var myData = {
			name: "Xiao Ming ",
			weather: "sunny "
		};
		//检查对象是否具有某项属性
		var hasName = "name" in myData;
		var hasDate = "date" in myData;
		//hasName的值为ture,hasDate的值为false
		document.writeln("hasName: " + hasName);
		document.writeln("hasDate: " + hasDate);
	</script>
</body>
</html>
```

# JavaScript 运算符
## 算数运算符
|运算符|描述|
|-----|----|
|+、-、*、/|加、减、乘、除|
|%|求余|
|++|累加|
|--|递减|

## 赋值运算符
|运算符|例子|等价于|
|-----|----|-----|
|=|x=y||
|+=|x+=y|x=x+y|
|-=|x-=y|x=x-y|
|*= | x*=y|x=x*y|
|/=|x/=y|x=x/y|
|%=|x%=y|x=x%y|

## 比较运算符
比较和逻辑运算符用于测试true或false。

|运算符|描述|
|-----|----|
|==|相等(仅比较值)|
|===|相同(比较值和类型)|
|!=|不相等|
|!==|不相同|
|>、>=|大于、大于或等于|
|<、<=|小于、小于或等于|

## 逻辑运算符
- 与 &&
- 或 ||
- 非 !

## 条件运算符
```
variablename=(condition)?value1:value2;
```

## 显式类型转换
字符串连接运算符(+)比加法运算符(同样为+)优先级更高。
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<script type="text/javascript">
		//myData1为数字+数字
		var myData1 = 5 + 5;
		//myData2为数字+字符串
		var myData2 = 5 + "5";

		document.writeln("result 1: " + myData1);
		document.writeln("result 2: " + myData2);
	</script>
</body>
</html>
```
结果如下：
```
result 1: 10
result 2: 55
```

## 数值到字符串的转换
|方法|说明|返回|
|----|----|---|
|toString()|以十进制表示数值|字符串|
|toString(2)|以二进制表示数值|字符串|
|toString(8)|以八进制表示数值|字符串|
|toString(16)|以十六进制表示数值|字符串|
|toFixed(n)|以小数点后有n位数字的形式表示实数|字符串|
|toExponential(n)|以指数表示法表示数值|字符串|
|toPrecision(n)|用n位有效数字表示数值|字符串|

## 字符串到数值的转换
|函数|说明|注释|
|----|---|----|
|Number(<str>)|生成一个整数或实数值|解析字符串值的方法很严格|
|parseInt(<str>)|生成一个整数值|会忽略数字字符后面的非数字字符|
|parseFloat(<str>)|生成一个整数或实数值|会忽略数字字符后面的非数字字符|

# 数组
## 创建和填充数组
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<script type="text/javascript">
		//创建数组
		var myArray = new Array();
		//填充数组
		myArray[0] = 100;
		myArray[1] = "String";
		myArray[2] = true;
	</script>
</body>
</html>
```

## 使用数组字量面
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<script type="text/javascript">
		//使用数组字量面，在一条语句中创建填充数组
		var myArray = [100,"String",true]; 
	</script>
</body>
</html>
```

## 读取、修改数组
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<script type="text/javascript">
		var myArray = [100,"String",true]; 
		//读取指定索引位置的数组元素
		document.writeln("Index 0: " + myArray[0]);
		//修改数组
		myArray[0] = false;
		//枚举数组
		for (var i = 0; i <= myArray.length; i++) {
			document.writeln("Index" + i + ": " + myArray[i]);
		}
	</script>
</body>
</html>
```

# 变量的作用域
如果变量在某个函数中，则在函数外不可见，称为`局部变量`，定义在所有函数之外的变量称为`全局变量`。
即使变量定义在if代码块中，在代码块之外也是可见的。

# 函数
函数也是一种数据类型。
```
<script type="text/javascript">
	//定义一个函数
	function f(){
		return 1;
	}
	//使用函数标识记法定义函数
	var f = function() {
		return 1;
	}
</script>
```

## 匿名函数
`匿名数据`：数据没有赋值给任意变量，也没有被赋予任何名字。
`匿名函数`：函数本质上和变量没有区别，因此也可以在没有名字的情况下使用。
```
<script type="text/javascript">
	//匿名数据
	"ABC";[1,2,3];undefined;null;1;
	//匿名函数，输出提示100
	alert(
		(function(x){
			return x*x;
		})(10)
	);
</script>
```

## 回调函数
把函数当作参数传递给其他函数
```
<script type="text/javascript">
	function one() {
		return 1;
	}
	function two() {
		return 2;
	}
	function add(a,b) {
		return a() + b();
	}
	add(one,two);
	//直接使用匿名函数当作回调函数
	function add(a,b){
		return a() + b();
	}
	add(function(){return 1;},function(){return 2;});
</script>
```

## 自调函数
自调函数在定义后自动运行。
```
<script type="text/javascript">
	(
		function(a) {
			alert('HELLO' + a + '!');
		}
	)('TOM');
</script>
```

# 处理错误
`try...catch`语句处理错误。
`finally`子句无论错误与否都会执行。
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<script type="text/javascript">
		try {
			var p = 101;
			document.writeln(p);
		} catch (e) {
			document.writeln("Error: " + e);
		} finally {
			document.writeln("Statements here are always executed.")
		}
	</script>
</body>
</html>
```

# undefined 和 null
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<script type="text/javascript">
	var myData = {
		name: "Xiao Ming",
		weather: "sunny"
	};
	document.writeln("var1: " + myData.date);
	document.writeln("Prop1: "+ ("Friday" in myData));

	myData.date = null;
	document.writeln("Var2: " + myData.date);
	document.writeln("Prop2: " + ("weather" in myData));
	</script>
</body>
</html>
```
输出结果：
```
Var1: undefined
Prop1: false
Var2: null
Prop2: true
```

在比较两个值的时候，如果想同等对待undefined值和null值，那么应该使用`==`，让JS进行类型转换。如果要区分null和undefined，则应该使用`===`。


* * *
<p align="right">
By.Sunly
Hangzhou Fall
</p>
<br />