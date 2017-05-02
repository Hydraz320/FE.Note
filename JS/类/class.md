# es6中类的概念

[参考 - 阮一峰老师的es6入门](http://es6.ruanyifeng.com/#docs/class)

基本写法如下：

```javascript
//定义类
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

```

注意，定义“类”的方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去了就可以了。另外，方法之间不需要逗号分隔，加了会报错。

这边就不写太细了，研究的不深入呢还...