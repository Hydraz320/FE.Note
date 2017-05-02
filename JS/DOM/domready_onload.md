# 图片onload window.onload window.domready执行顺序

虽然这个问题问的怪怪的，但是window.load确实涉及到一些内容。

有次百度电面问过，白屏是因为什么。其实到现在我也不知道该怎么回答，当时也只知道可能是script标签放在head里放太多然后阻塞了。后来看到一篇文章，然后针对这个问题整理如下：

> * 引入外部资源造成DOM构建的阻塞(例如头部的script);

> * iframe不阻塞DOM构建，但是会占用http请求使得标签无法更快加载资源。

而这还可能会导致贸然拿dom会出错的问题。所以window.onload就变得格外重要了。

window.onload是什么东西都加载好才触发的，比较晚。

浏览器提供了一个document.readyState属性,当它变成complete时,说明这时机到了，但这是一个属性,不是一个事件,需要使用不太精确的setInterval轮询。

于是出现了个DOMContentLoaded事件。

[简书](http://www.jianshu.com/p/d851db5f2f30)

DOM文档加载的步骤为：

1. 解析HTML结构。

2. 加载外部脚本和样式表文件。

3. 解析并执行脚本代码。

4. DOM树构建完成。//DOMContentLoaded

5. 加载图片等外部文件。

6. 页面加载完毕。//load

最后写了个测试来看看：

```javascript
	var img = document.getElementById('avatar');
	img.src = "https://hydraz320.github.io/static/img/avatar.png";
	img.addEventListener("load", function () {
		console.log("img.onload");
	}, false);
	// 注意这个事件得按DOM2来写
	document.addEventListener("DOMContentLoaded", function() {
		console.log("DOMContentLoaded");
	}, false);
	window.addEventListener("load", function() {
		console.log("window.onload");
	}, false);
```

最终打印结果为：

DOMContentLoaded

img.onload

window.onload