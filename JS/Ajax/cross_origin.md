# 跨域问题

[参考 - 百度谷歌排最前的一篇文章](http://www.cnblogs.com/dowinning/archive/2012/04/19/json-jsonp-jquery.html)

---

## 跨域

跨域，指的是浏览器不能执行其他网站的脚本。它是由浏览器的**同源策略**造成的，是浏览器对**JavaScript**施加的安全限制。

[摘自MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)
> 出于安全考虑，浏览器会限制脚本中发起的跨域请求。比如，使用 XMLHttpRequest 对象和Fetch发起 HTTP 请求就必须遵守同源策略。 具体而言，Web 应用程序通过 XMLHttpRequest 对象或Fetch能且只能向同域名的资源发起 HTTP 请求，而不能向任何其它域名发起请求。为了能开发出更强大、更丰富、更安全的Web应用程序，开发人员渴望着在不丢失安全的前提下，Web 应用技术能越来越强大、越来越丰富。比如，可以使用 XMLHttpRequest 发起跨站 HTTP 请求。（**这段描述跨域不准确，跨域并非浏览器限制了发起跨站请求，而是跨站请求可以正常发起，但是返回结果被浏览器拦截了。最好的例子是CSRF跨站攻击原理，请求是发送到了后端服务器无论是否跨域！注意：有些浏览器不允许从HTTPS的域跨域访问HTTP，比如Chrome和Firefox，这些浏览器在请求还未发出的时候就会拦截请求，这是一个特例。**）

说起来，之前在做展示平台时，有一段时间静态资源或者说前端我是和后端分离了放的。后端node自己跑一个端口，前端放容器里或者起了个静态资源服务器监听在另一个端口。当前端发起Ajax请求时，后端是接收到请求了的，只是返回时被拦截掉了。后来也是懒省事，返回的时候加了个Access-Control-Allow-Origin: *就搞掉了...这种Access-control-*的方法应该属于CORS，详见后文。

> 所谓同源是指，域名，协议，端口均相同(请注意：localhost和127.0.0.1虽然都指向本机，但也属于跨域。)

---

## JSON&&JSONP

二者的关系: 一个是描述信息的格式，一个是双方约定的信息传递方法。

因此目前最被推崇或者说首选的方案是：**用JSON来传数据**，**靠JSONP来跨域**。

JSONP利用的是：script标签可以跨域(事实上有src属性的标签都可以跨域，比如img、iframe)。

Ajax与JSONP的区别：ajax的核心是通过XmlHttpRequest获取非本页内容，而jsonp的核心则是动态添加script标签来调用服务器提供的js脚本。

---

## 例子

### 1. 未封装版本。

JSONP本质上就是个GET请求，通过在url中添加搜索参数，令服务端动态查询JSON数据，并用传递的函数将JSON数据包起来然后传回，从而在客户端实现跨域操作。

下面的例子里可以看到，通过document.createElement来创建script标签，并使用DOM操作将标签插入到文档里调用。而在url中，提供了搜索参数code和callback。其中，搜索参数是用于生成JSON的，而callback则是服务端用来包住JSON的。这样服务端就能知道本地函数名并将包装好的数据传回了。

```html
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script>
    // 得到航班信息查询结果后的回调函数
    var flightHandler = function(data){
    	alert('你查询的航班结果是：票价 ' + data.price + ' 元，' + '余票 ' + data.tickets + ' 张。');
    };
    // 提供jsonp服务的url地址（不管是什么类型的地址，最终生成的返回值都是一段javascript代码）
    var url = "http://flightQuery.com/jsonp/flightResult.aspx?code=CA1998&callback=flightHandler";
    // 创建script标签，设置其属性
    var script = document.createElement('script');
    script.setAttribute('src', url);
    // 把script标签加入head，此时调用开始
    document.getElementsByTagName('head')[0].appendChild(script); 
</script>
</head>
<body>
</body>
</html>
```

### 2. JQuery的例子

看看意思一下就好。

```html
<!DOCTYPE html>
<html>
<head>
	<title>Untitled Page</title>
	<script type="text/javascript" src="jquery.min.js"></script>
	<script type="text/javascript">
		jQuery(document).ready(function(){ 
			$.ajax({
				type: "get",
				async: false,
				url: "http://flightQuery.com/jsonp/flightResult.aspx?code=CA1998",
				dataType: "jsonp",
	            jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
	            jsonpCallback:"flightHandler",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
	            success: function(json){
	             	alert('您查询到航班信息：票价： ' + json.price + ' 元，余票： ' + json.tickets + ' 张。');
	            },
	            error: function(){
	             	alert('fail');
	            }
         	});
		});
	</script>
</head>
<body>
</body>
</html>
```

---

## 如果页面编码和被请求的资源编码不一致如何处理？

其实方法本身很简单，比如a.html的编码是gbk或gb2312的，引入的js编码为utf-8的，则在引入的时候需要这么写：

```html
<script src="http://www.xxx.com/test.js" charset="utf-8"></script>
```

---

## CORS 跨域资源共享(Cross-origin resource sharing)

[参考 - 阮一峰老师](http://www.ruanyifeng.com/blog/2016/04/cors.html)

### CORS

CORS请求包括简单请求和非简单请求。

对于简单请求而言，就是在头信息中加入Origin字段，来让服务器决定是否同意这次请求。这里需要注意的是，即使Origin指定的源不在许可范围内，也不能通过服务器返回的状态码来判断(可能返回200)，而应该检验相应是否包含Access-Control-Allow-Origin字段。如果不存在，则说明出错然后抛出。如果在指定域名的许可范围内，则响应中会多出3个CORS请求相关的字段，都以Access-Control-开头，具体就不在此详述。

对于非简单请求，比如请求方法是PUT或DELETE，或者Content-Type字段的类型是application/json，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求（preflight）。浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些HTTP动词和头信息字段。只有得到肯定答复，浏览器才会发出正式的XMLHttpRequest请求，否则就报错。服务器收到"预检"请求以后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers字段以后，确认允许跨源请求，就可以做出回应。

### CORS与JSONP的比较

CORS与JSONP的使用目的相同，但是比JSONP更强大。

JSONP只支持**GET**请求，CORS支持所有类型的HTTP请求。JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据。






