# 自定义事件

[参考](http://www.zhangxinxu.com/wordpress/2012/04/js-dom%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6/)

[Event](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event)

[CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)

---

## 1. JS自定义事件

首先是张鑫旭老师2012年所写一个例子(有写得更好的例子，我只拿了这个小例子放这...)。

```javascript
var Event = {
    _listeners: {},    
    // 添加
    addEvent: function(type, fn) {
        if (typeof this._listeners[type] === "undefined") {
            this._listeners[type] = [];
        }
        if (typeof fn === "function") {
            this._listeners[type].push(fn);
        }    
        return this;
    },
    // 触发
    fireEvent: function(type) {
        var arrayEvent = this._listeners[type];
        if (arrayEvent instanceof Array) {
            for (var i=0, length=arrayEvent.length; i<length; i+=1) {
                if (typeof arrayEvent[i] === "function") {
                    arrayEvent[i]({ type: type });    
                }
            }
        }    
        return this;
    },
    // 删除
    removeEvent: function(type, fn) {
    	var arrayEvent = this._listeners[type];
        if (typeof type === "string" && arrayEvent instanceof Array) {
            if (typeof fn === "function") {
                // 清除当前type类型事件下对应fn方法
                for (var i=0, length=arrayEvent.length; i<length; i+=1){
                    if (arrayEvent[i] === fn){
                        this._listeners[type].splice(i, 1);
                        break;
                    }
                }
            } else {
                // 如果仅仅参数type, 或参数fn邪魔外道，则所有type类型事件清除
                delete this._listeners[type];
            }
        }
        return this;
    }
};
```

## 2. Event

```html
<!DOCTYPE html>
<html>
<head lang="zh-CN">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title></title>
<style>
  .button {
      width: 200px;
      height: 200px;
      background-color: antiquewhite;
      margin: 20px;
      text-align: center;
      line-height: 200px;
  }
</style>
</head>
<body>
<div class="button">Button</div>
<script>
  "use strict";
  var btn = document.querySelector('.button');
  var ev = new Event('test', {
      bubbles: 'true',
      cancelable: 'true'
  });
  btn.addEventListener('test', function (event) {
      console.log(event.bubbles);
      console.log(event.cancelable);
      console.log(event.detail);
  }, false);
  btn.dispatchEvent(ev);
</script>
</body>
</html>
```

## 3. CustomEvent

```html
<!DOCTYPE html>
<html>
<head lang="zh-CN">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title></title>
<style>
  .button {
      width: 200px;
      height: 200px;
      background-color: antiquewhite;
      margin: 20px;
      text-align: center;
      line-height: 200px;
  }
</style>
</head>
<body>
<div class="button">Button</div>

<script>
  "use strict";
  var btn = document.querySelector('.button');

  var ev = new CustomEvent('test', {
      bubbles: 'true',
      cancelable: 'true',
      detail: 'ppppp'
  });
  btn.addEventListener('test', function (event) {
      console.log(event.bubbles);
      console.log(event.cancelable);
      console.log(event.detail);
  }, false);
  btn.dispatchEvent(ev);
</script>
</body>
</html>
```

## 4. 总结

> * 自定义事件必备的几点是：添加事件、触发事件、移除事件。这里张鑫旭老师对事件的管理是封为一个对象，其中的每组键值对，键为事件类型，值为函数的数组，而函数就是内置事件里所说的addEventListener中提供的作为参数的函数，也即对相应事件采取的处理方法。触发事件则是遍历相应事件的数组按顺序执行。之前在ymm实习的时候，BMP项目就是用了这么个eventproxy，添加事件的时候(不是在Vue中的)就Event.xxxListener。现在想想确实事件管理有的搞啊。

> * Event、CustomEvent则是简单得多的封装。这些在JS高程里貌似没看见。用起来也很简单，就是配置好event属性，然后将相应事件添加到元素上，在需要触发事件的时候调用dispatchEvent(ev)即可。

