# 有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度。

### 1. Flex

```html
<div class="box">
    <div class="el1"></div>
    <div class="el2"></div>
</div>
```

```css
.box {
	width:200px;
	height:300px;
	background:red;
	display:flex;
	flex-direction:column;
}
.el1 {
	height:100px;
	background:green;
}
.el2 {
	background:blue;
	flex:1;
}
```

### 2. 利用bottom: 0

```html
<div class="box">
    <div class="el1"></div>
    <div class="el2"></div>
</div>
```

```css
.box {
	width:200px;
	height:300px;
	background:red;
	position:relative;
}
.el1 {
	height:100px;
	background:green;
}
.el2 {
	background:blue;
	width:200px;
	position:absolute;
	top:100px;
	bottom:0;
}
```

### 3. 利用负margin

```html
<div class="outer">
    <div class="A"></div>
    <div class="B"></div>
</div>
```

```css
html,
body { 
	height: 100%; 
	padding: 0; 
	margin: 0; 
}
.outer { 
	height: 100%; 
	padding: 100px 0 0; 
	box-sizing: border-box ; 
}
.A { 
	height: 100px; 
	margin: -100px 0 0; 
	background: #BBE8F2; 
}
.B { 
	height: 100%; 
	background: #D9C666; 
}
```

### 4. 利用absolute

```html
<div class="outer">
    <div class="A"></div>
    <div class="B"></div>
</div>
```

```css
html,
body { 
	height: 100%; 
	padding: 0; 
	margin: 0; 
}
.outer { 
	height: 100%; 
	padding: 100px 0 0; 
	box-sizing: border-box ; 
	position: relative; 
}
.A { 
	height: 100px; 
	background: #BBE8F2; 
	position: absolute; 
	top: 0 ; 
	left: 0 ; 
	width: 100%; 
}
.B { 
	height: 100%; 
	background: #D9C666; 
}
```
