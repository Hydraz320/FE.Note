# Transform && Animation

[参考系列1-7](http://www.w3cplus.com/content/css3-gradient)

## Gradient(这里只介绍linear-gradient线性渐变)

举个例子(不管IE):

```css
/* 指定rgba、url妥妥的 */
background: -moz-linear-gradient(right, rgba(255,255,255,0), rgba(255,255,255,1)),url(xxx);
background: -webkit-linear-gradient(right, rgba(255,255,255,0), rgba(255,255,255,1)),url(xxx);
background: -o-linear-gradient(right, rgba(255,255,255,0), rgba(255,255,255,1)),url(xxx);
/* 可以制定具体位置的颜色 */
background: -moz-linear-gradient(top, #ace, #f96 80%, #f96);
background: -webkit-linear-gradient(top,#ace,#f96 80%,#f96);
background: -o-linear-gradient(top, #ace, #f96 80%, #f96);
/* 可以指定角度 重复渲染 */
background: -moz-repeating-linear-gradient(top left -45deg, #ace, #ace 5px, #f96 5px, #f96 10px);
background: -webkit-repeating-linear-gradient(top left -45deg, #ace, #ace 5px, #f96 5px, #f96 10px);
```

## RGBA

opacity后代元素会随着一起具有透明性，所以我们Opacity中的字随着透明值下降越来越看不清楚，而RGBA不具有这样的问题。(这个问题今天正好碰到了...)

为了解决opacity这样的问题我们需要增加一个空的div来专门放置使用透明的背景，然后通过使用绝对定位来实现我们需要的结果。

当然IE(除IE9)不兼容RGBA嘛。

RGBA不仅可以用于background，还可以用于color、border-color、text-shadow、box-shadow

text-shadow的参数：
* h-shadow(必需。水平阴影的位置。允许负值。) 
* v-shadow(必需。垂直阴影的位置。允许负值。)
* blur(可选。模糊的距离。)
* color(可选。阴影的颜色。)

## border-radius

不同浏览器下有不同的指向四个角和指定圆角水平垂直半径的设置方法。

border-radius的内径值是等于外径值减去边框厚度值，当他们的值为负时，内径默认为0。

# transform

Transform字面上就是变形，改变的意思。在CSS3中transform主要包括以下几种：旋转rotate、扭曲skew、缩放scale和移动translate以及矩阵变形matrix。

transform-origin元素基点，设置值可以为left top right bottom center和百分比

书写规则:
```css
 //Mozilla内核浏览器：firefox3.5+
  -moz-transform: rotate | scale | skew | translate ;
 //Webkit内核浏览器：Safari and Chrome
  -webkit-transform: rotate | scale | skew | translate ;
 //Opera(presto)
  -o-transform: rotate | scale | skew | translate ;
 //IE9(trident)
  -ms-transform: rotate | scale | skew | translate ;
 //W3C标准
  transform: rotate | scale | skew | translate ;
 ```

## transition

transition主要包含四个属性值：

* 执行变换的属性: transition-property,
* 变换延续的时间: transition-duration,
* 在延续时间段，变换的速率变化: transition-timing-function,
* 变换延迟时间: transition-delay。

# animation

keyframes关键帧

目前支持动画的也就webkit内核的浏览器了。

animation主要有以下几种：
* animation-name;animation-duration;
* animation-timing-function;
* animation-delay;
* animation-iteration-count;
* animation-direction;
* animation-play-state

举个例子：

```css
@-webkit-keyframes 'wobble' {
     0% {
        margin-left: 100px;
        background: green;
     }
     40% {
        margin-left: 150px;
        background: orange;
     }
     60% {
        margin-left: 75px;
        background: blue;
     }
     100% {
        margin-left: 100px;
        background: red;
     }
  }

animation: 'wobble' 20s ease-in-out 2s infinite alternate;
```

















