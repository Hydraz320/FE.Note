#模块化

[参考](http://www.ruanyifeng.com/blog/2012/10/javascript_module.html)

[准备翻译这篇](https://auth0.com/blog/javascript-module-systems-showdown/)

其中,关于实现私有变量,使其只能通过公有方法对其进行赋值的问题,方法如下:

###立即执行函数(Immediately-Invoked Function Expression, IIFE)
```javascript
　　var module1 = (function(){
　　　　var _count = 0;
　　　　var m1 = function(){
　　　　　　//...
　　　　};
　　　　var m2 = function(){
　　　　　　//...
　　　　};
　　　　return {
　　　　　　m1 : m1,
　　　　　　m2 : m2
　　　　};
　　})();
```

还有相关的优化,详情可见参考博客.

**顺便说一句，当初写的时候有没有发现这其实是个闭包？？哈哈，这次终于看出来了。**