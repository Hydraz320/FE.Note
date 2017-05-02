# 包装类型

这里就拿Number来说吧。

首先，注意区分Number(1)和new Number(1)。Number(1)是转换函数，而加了new就是赤裸裸的构造函数了。因此，Number(1)将仍然是"number"，而new Number(1)则必然是"object"，不信抬头看。

```javascript
Number(1) === 1
// true

new Number(1) === 1
// false

typeof Number(1)
// "number"

typeof new Number(1)
// "object"
```