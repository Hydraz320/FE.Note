# 圣杯布局(Flex实现)

![圣杯布局](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071323.png)

圣杯布局的一个特点是：为了在加载过程中先加载内容区域，content部分在dom中处于nav前面，因此html结构如下:

```html
<body class="HolyGrail">
  <header>...</header>
  <div class="body">
    <main class="content">...</main>
    <nav class="nav">...</nav>
    <aside class="ads">...</aside>
  </div>
  <footer>...</footer>
</body>
```

CSS代码如下
```css
.HolyGrail {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

header,
footer {
  flex: 1;
}

.body {
  display: flex;
  flex: 1;/* 这里使得头尾中等高了 */
}

.content {
  flex: 1;
}

.nav, .ads {
  /* 两个边栏的宽度设为12em */
  flex: 0 0 12em;
}

.nav {
  /* 靠order来调整顺序 导航放到最左边 */
  order: -1;
}
```

如果是小屏幕，躯干的三栏自动变为垂直排列。
```css
@media (max-width: 768px) {
  .body {
    flex-direction: column;
    flex: 1;
  }
  .nav,
  .ads,
  .content {
    flex: auto;
  }
}
```