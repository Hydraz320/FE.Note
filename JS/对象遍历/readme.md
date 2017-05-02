# 对象属性的遍历

## 1. 遍历可枚举的自身属性

```javascript
// method1
Object.keys(obj)

// method2
for (var key in obj) {
	if (obj.hasOwnProperty(key)) {
		console.log(obj[key]);
	}
}
```

## 2. 遍历所有的自身属性

```javascript
Object.getOwnPropertyNames(obj)
```

## 3. 遍历可枚举的自身属性和继承属性

```javascript
// for in 遍历
var props = [];
for (var prop in obj) {
	props.push(prop);
}
```

## 4. 遍历所有的自身属性和继承属性

```javascript
Object.getOwnPropertyNames(obj)

Object.getPrototypeOf(obj)
```

利用Object.getOwnPropertyNames(obj)搜索当前对象的全部属性，然后迭代去找原型对象Object.getPrototypeOf(obj)上的全部属性。