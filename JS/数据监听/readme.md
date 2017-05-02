# 对象

[参考 - JS高级程序设计(第3版)]()

**注意**这一块我在[IFE2017](https://github.com/Hydraz320/Hydraz320.github.io/tree/master/ife2017)中的理解比这里深了一点
---

## 属性类型

### 1 数据属性

数据属性包含一个数据值的位置。在这个位置上可以读取和写入值。数据属性类似于通常所说的域、成员变量之类的概念。

数据属性有4个描述其行为的特效(感觉就像是成员变量的4个描述属性，觉得这样说更容易理解)：

> * [[Configurable]] default: true

> * [[Enumerable]] default: true

> * [[Writable]] default: true

> * [[Value]] default: undefined

要修改属性默认的特性，必须使用es5的Object.defineProperty()方法。

```javascript
Object.defineProperty(obj, key, descriptorObj)
```

### 2 访问器属性

老实说我觉得访问器属性就像是中间件一类的东西(不知道对不对啦但我觉得很像)。

访问器属性有如下四个特性：

> * [[Configurable]] default: true

> * [[Enumerable]] default: true

> * [[Get]] default: undefined

> * [[Set]] default: undefined

## 如何监听一个对象的变化

这里是参考了Vue那一套。放到data里的数据都会被加上getter和setter。这里学着意思意思。

```javascript
// 观察者构造函数
function Observer(data) {
    this.data = data;
    // 这里有递归
    this.walk(data);
}

// 此函数用于深遍历对象的各个属性，利用hasOwnProperty剔除for-in遍历出的原型链上的enumerable属性
// 因为我们要为对象的每一个属性绑定getter和setter，所以采用的是递归的思路
Observer.prototype.walk = function (obj) {
    let val;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            val = obj[key];
            // 如果该属性仍为对象，继续new Observer
            if (typeof val === 'object') {
                new Observer(val);
            }
            // 重写属性 绑上getter和setter
            this.convert(key, val);
        }
    }
};

Observer.prototype.convert = function (key, val) {
    Object.defineProperty(this.data, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            console.log('你访问了' + key);
            return val;
        },
        set: function (newVal) {
            console.log('你设置了' + key);
            console.log('新的' + key + ' = ' + newVal);
            if (newVal === val) return;
            val = newVal;
        }
    })
};

let data = {
    year: 2017,
    user: {
		name: "gz",
		gender: "male"
	}
};

let me = new Observer(data);
```
