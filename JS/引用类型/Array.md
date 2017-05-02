# 数组

[参考 - JS高级程序设计(第3版)]()

---

## 1. 检测数组类型

假定只有一个全局执行环境：

```javascript
value instanceof Array
```

若存在两个以上不同的全局执行环境，导致存在不同的Array构造函数，es5新增如下方法：

```javascript
Array.isArray(value)
```

## 2. 转换方法

```javascript
arr.toLocaleString()

arr.toString()

arr.valueOf()
```

## 3. 栈方法

```javascript
arr.push(value)

arr.pop()
```

## 4. 队列方法

```javascript
arr.shift()

arr.unshift(value)
```

## 5. 重排序方法

```javascript
arr.reverse()

arr.sort(func(item1, item2))
```

## 6. 操作方法

```javascript
arr.concat("...", [...], ...)

arr.slice(begin, end)

arr.splice(index, delete, items...)
```

## 7. 位置方法

```javascript
arr.indexOf("...")

arr.lastIndexOf("...")
```

## 8. 迭代方法

迭代方法都不会修改数组中包含的值，并注意传入的函数参数形式一致。

```javascript
// 对数组中的每一项运行给定函数，如果该函数对**每一项**都返回true，则返回true
arr.every(func(item, index, array){...})
// 对数组中的每一项运行给定函数，如果该函数对**任一项**都返回true，则返回true
arr.some(func(item, index, array){...})
// 保留执行函数为true的项
arr.filter(func(item, index, array){...})
// 返回一个数组，其中每一项都是在原始数组中的对应项上运行传入函数的结果
arr.map(func(item, index, array){...})
// 对数组中的每一项运行传入的函数，无返回值
arr.forEach(func(item, index, array){...})
```

## 9. 归并方法

```javascript
arr.reduce(func(prev, cur, index, array){...})
arr.reduceRight(func(prev, cur, index, array){...})
```





















