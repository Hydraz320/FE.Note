# 闭包

[参考](http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)

**概念**

闭包就是能够读取其他函数内部变量的函数.

**为什么会有闭包**

个人理解是因为作用域的问题。ES5中不存在块级作用域而只有函数作用域。同时，函数(定义处)可以访问到上层作用域中的变量。

**用途**

1. 读取函数内部变量;
2. 让变量的值保持在内存中.

**一般怎么用**

根据我个人的经验是：

1. 循环事件绑定问题：利用函数形参拷贝传递的特点，将基本类型传入成为私有变量；返回一个引用了这个私有变量的函数。

2. 事件绑定函数this指向问题：写一个辅助函数，参数包括回调、this想指向的对象、参数列表；然后内部返回引用了他们的函数，函数内部就写func.call(this, args)这种就可以。此处可参考我写的轮播图组件里的代码。

总而言之一句话：注意到底是指向同一个量形成闭包了还是只是一份拷贝！

**开始**

```javascript
   function f1(){
　　　　var n=999;
　　　　function f2(){
　　　　　　alert(n); 
　　　　}
　　　　return f2;
　　}
　　var result=f1();
　　result(); // 999
```

这样,通过在f1内返回使用了f1内部变量的函数,我们就可以在f1外部读取到它的内部变量了.
而f2,就是闭包.

再看一个例子:
```javascript
var foo = ( function() {
    var secret = 'secret';
    // “闭包”内的函数可以访问 secret 变量，而 secret 变量对于外部却是隐藏的
    return {
        get_secret: function () {
            // 通过定义的接口来访问 secret
            return secret;
        },
        new_secret: function ( new_secret ) {
            // 通过定义的接口来修改 secret
            secret = new_secret;
        }
    };
} () );

foo.get_secret (); // 得到 'secret'
foo.secret; // Type error，访问不能
foo.new_secret ('a new secret'); // 通过函数接口，我们访问并修改了 secret 变量
foo.get_secret (); // 得到 'a new secret'
```

> 之所以可能通过这种方式在 JavaScript 种实现公有，私有，特权变量正是因为闭包，
闭包是指在 JavaScript 中，内部函数总是可以访问其所在的外部函数中声明的参数和变量，
即使在其外部函数被返回（寿命终结）了之后。


> 内部函数访问的是被创建的内部变量本身，而不是它的拷贝。


>闭包是 JavaScript 一个非常重要的特性，这意味着当前作用域总是能够访问外部作用域中的变量。 
因为 函数 是 JavaScript 中唯一拥有自身作用域的结构，因此闭包的创建依赖于函数。


[关于闭包循环的经典问题](https://segmentfault.com/a/1190000003818163?utm_source=tuicool&utm_medium=referral)