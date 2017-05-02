# 居中问题

[参考 - CSS TRICKS](https://css-tricks.com/centering-css-complete-guide/)

上面的参考讲的已经太好了。我这就不写了。仅列举几点注意点。

---
# 目录
## 1.水平居中
#### 1.1 inline/inline-*(文本或链接等)
#### 1.2 block
#### 1.3 多个block
## 2.垂直居中
#### 2.1 inline/inline-*(文本或链接等)
#### 2.2 block
## 3.水平垂直居中
#### 3.1 固定已知宽高
#### 3.2 未知宽高
#### 3.3 flexbox
## 4.浮动水平垂直居中

# 内容

## 1.水平居中
#### 1.1 inline/inline-*(文本或链接等)

```css
.center-children {
  text-align: center;
}
```
只要令想要居中的子元素(inline/inline-\*)的**父元素**的text-align为center即可。

#### 1.2 block

```css
.center-me {
  margin: 0 auto;
}
```
具有设置好的比父元素小width，即可通过margin来居中。如果width未设置即为100%，也就没有居中的意义了。

#### 1.3 多个block
水平排列并居中
```css
/* 这里相当于居中的子元素从block变为inline-block再使用1.1的方法 */
.inline-block-center {
  text-align: center;
}
.inline-block-center div {
  display: inline-block;
  text-align: left;
}
/* 容器设为flex 主轴用justify-content对齐他 */ 
/* align-items控制交叉轴且默认stretch 所以居中元素会等高 */
.flex-center {
  display: flex;
  justify-content: center;
}
```
垂直排列并居中，就用margin: auto就好，注意要居中的子元素需要设置确定的宽度。

## 2.垂直居中
#### 2.1 inline/inline-*(文本或链接等)
##### 2.1.1 单行(如单行短文字)
其中一个方法是设置上下padding相等。
```css
.link {
  padding-top: 30px;
  padding-bottom: 30px;
}
```
另一个方法则是在文本不会wrap的情况下，令行高与高度相等。
```css
.center-text-trick {
  height: 100px;
  line-height: 100px;
  white-space: nowrap;
}
```
##### 2.1.2 多行
方法一：利用vertical-align: middle
在表格中，垂直居中是默认属性。因此对于非表格的情形下，也可以利用display来使其模仿table的性质(**两者的表现结果有差别！**)
```css
/* 容器转换为table */
.center-table {
  display: table;
  height: 250px;
  background: white;
  width: 240px;
  margin: 20px;
}
/* 子元素转化为table-cell，然后设置vertical-align: middle */
.center-table p {
  display: table-cell;
  margin: 0;
  background: black;
  color: white;
  padding: 20px;
  border: 10px solid white;
  vertical-align: middle;
}
```
方法二：flex走一个
对于flex方法而言，垂直居中和水平居中的区别只在于，flex-direction是垂直方向，居中依旧由justify-content来处理。**注意**不要混淆的一点是：align-items确实是定义项目在交叉轴上如何对齐，但子元素依旧是排列在水平方向是，它定义的是不同高度的子元素如何在水平方向上对齐(默认stretch)。参考下图：
![align-items](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png)
```css
/* 和水平居中的区别就是flex-direction: column 非常漂亮 */
.flex-center-vertically {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 400px;
}
```
**这种方法只适用于容器高度确定的情况！！！**

方法三：“Ghost element" 没怎么理解 先不管了。
#### 2.2 block
##### 2.2.1 固定已知高度
```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  height: 100px;
  margin-top: -50px;/* 高度的一半 */
}
```
注意**相对定位**。上述css代码是对于box-sizing: border-box的情形。对于box-sizing: content-box的情形，margin-top需要求取padding和border和的一半。
##### 2.2.2 未知高度
```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```
注意使用transform: translateY(-50%)这一方法。transform属性允许我们对元素进行旋转、缩放、移动或倾斜。

##### 2.2.3 flexbox
flexbox的方法依旧容易，而且写法同inline/inline-*中flex写法。当然，容器高度依旧需要。
```css
.parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
```
## 3.水平垂直居中
#### 3.1 固定已知宽高
这一方法具有很好的跨平台兼容性。就是用负margin的技巧。
```css
.parent {
  position: relative;
}

.child {
  width: 300px;
  height: 100px;
  padding: 20px;

  position: absolute;
  top: 50%;
  left: 50%;

  margin: -70px 0 0 -170px;
}
```
#### 3.2 未知宽高
已知用margin，未知用transform：translate，它基于当前元素的width和height来自动调整。
```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```
#### 3.3 flexbox
把主轴的justify-content和交叉轴的align-items都center了就ok了。
```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## 4.浮动水平垂直居中

撇去float的破坏性，float就是个带方向的inline-block。注意要relative定位才行(至于为什么relative...因为absolute是相对于第一个不为static的父元素定位的，而这段代码的container就是static呀。所以最后会相对于页面的主体来定位...)。

```css
#container {
  width: 960px;
  height: 200px;
  background-color: red;
}
#box {
  float: left;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background-color: yellow;
}
```