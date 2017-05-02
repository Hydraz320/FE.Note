# Ajax

[参考 - JS高级程序设计(第3版)]()

[一篇很透彻的博客 - SegmentDefault](https://segmentfault.com/a/1190000004322487#articleHeader0)

---

1. 创建XMLHttpRequest对象,也就是创建一个异步调用对象

2. 创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息

3. 设置响应HTTP请求状态变化的函数

4. 发送HTTP请求

5. 获取异步调用返回的数据

6. 使用JavaScript和DOM实现局部刷新

```javascript
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
	if (xhr.readyState == 4) {
		if ((xhr.status >= 200 && xhr.status <300) || xhr.status ==304) {
			alert(xhr.responseText);
		} else {
			alert(xhr.status);
		}
	}
};

xhr.open("get", "example.txt", true);
xhr.setRequestHeader("MyHeader", "MyValue");
xhr.send(null);

// 可能需要encodeURIComponent处理了才行
xhr.open("get", "example.php?name1=value1&name2=value2", true);
xhr.setRequestHeader("MyHeader", "MyValue");
xhr.send(null);

// post
xhr.open("post", "postexample.php", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
var form = document.getElementById("user-info");
xhr.send(serialize(form));
```