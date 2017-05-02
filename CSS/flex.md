# Flex布局

[参考：阮一峰的网络日志](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
[骰子案例](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
## 一、容器属性

> * flex-direction(有时需要垂直方向来进行对齐处理)
> * flex-wrap
> * flex-flow(flex-direction属性和flex-wrap属性的简写)
> * justify-content(主轴对齐方式)
> * align-items(交叉轴对齐方式)
> * align-content

#### 1. flex-direction
flex-direction属性决定主轴的方向（即项目的排列方向）。
```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```
它可能有4个值。

> * row（默认值）：主轴为水平方向，起点在左端。
> * row-reverse：主轴为水平方向，起点在右端。
> * column：主轴为垂直方向，起点在上沿。
> * column-reverse：主轴为垂直方向，起点在下沿。

![flex-direction](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png)

#### 2. flex-wrap
flex-wrap属性定义，如果一条轴线排不下，如何换行。
```css
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```
它可能取三个值。

(1) nowrap（默认）：不换行。
![nowrap](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071007.png)

(2) wrap：换行，第一行在上方。
![wrap](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071008.jpg)

(3) wrap-reverse：换行，第一行在下方。
![wrap-reverse](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071009.jpg)

#### 3. flex-flow
flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
```css
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```
#### 4. justify-content(主轴对齐方式)
justify-content属性定义了项目在主轴上的对齐方式。
```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```
![justify-content](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png)

它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。

> * flex-start（默认值）：左对齐
> * flex-end：右对齐
> * **center： 居中（常用）**
> * space-between：两端对齐，项目之间的间隔都相等。
> * space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

#### 5. align-items(交叉轴对齐方式)
align-items属性定义项目在交叉轴上如何对齐。
```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```
![align-items](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png)

它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。

> * flex-start：交叉轴的起点对齐。
> * flex-end：交叉轴的终点对齐。
> * center：交叉轴的中点对齐。
> * baseline: 项目的第一行文字的基线对齐。
> * stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

#### 6. align-content
align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```
![align-content](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png)

该属性可能取6个值。

> * flex-start：与交叉轴的起点对齐。
> * flex-end：与交叉轴的终点对齐。
> * center：与交叉轴的中点对齐。
> * space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
> * space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
> * stretch（默认值）：轴线占满整个交叉轴。

## 二、项目属性
以下6个属性设置在项目上。

> * order(在圣杯布局中可以把nav提到左边)
> * flex-grow
> * flex-shrink
> * flex-basis
> * **flex(常用)**
> * align-self(可覆盖align-items交叉轴属性 配合css伪类选择器6的飞起 比如nth-child)

#### 1. order
order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
```css
.item {
  order: <integer>;
}
```
![order](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png)
#### 2. flex-grow
flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
```css
.item {
  flex-grow: <number>; /* default 0 */
}
```
![flex-grow](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071014.png)

如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
#### 3. flex-shrink
flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```
![flex-shrink](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071015.jpg)

如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
负值对该属性无效。

#### 4. flex-basis
flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```
它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。
#### **5. flex(重要)**
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```
该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

#### 6. align-self
align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```
![align-self](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071016.png)

该属性可能取6个值，除了auto，其他都与align-items属性完全一致。
