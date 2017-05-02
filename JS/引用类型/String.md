# 字符串

[参考 - JS高级程序设计(第3版)]()

---

str.length属性

## 1. 字符方法

```javascript
str.charAt(index)

str.charCodeAt(index)
```

## 2. 字符串操作方法

```javascript
str.concat("...", "...", ...)或者加号操作符(+)

str.slice(begin, end)

str.substring(begin, end)

str.substr(begin, number)
``` 
slice()会将传入的负值与字符串长度相加

substr()将负的第一个参数加上字符串长度，负的第二个参数转换为0

substring()会把所有负数都转换为0

## 3. 字符串位置方法

```javascript
str.indexOf("...")

str.lastIndexOf("...")
```

## 4. trim()方法

```javascript
str.trim()
```

## 5. 字符串大小写转换方法

```javascript
str.toLowerCase()

str.toLocaleLowerCase()

str.toUpperCase()

str.toLocaleUpperCase()
```

## 6. 字符串的模式匹配方法

```javascript
// 返回一个数组 第一项是与整个模式匹配的字符串 之后的每一项(如果有)保存着与正则表达式中的捕获组匹配的字符串
str.match(pattern)// pattern.exec(str) pattern为正则表达式或RegExp对象

str.search(pattern)// 返回第一个匹配项的索引，如没有则返回-1

// **难点！！**
str.replace("..."/pattern, "..."/pattern)
// **难点！！**
str.replace("..."/pattern, func(match, pos, originalText){...})

// **难点！！**
str.split("..."/pattern)
```




























