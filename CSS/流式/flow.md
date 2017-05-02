# 流式布局

每行的项目数固定，会自动分行。之前实习做过这种布局，当时用的float。
不过这里有border无法重叠的问题，如果显示border颜色则会出现变粗的问题。
此处仅展示布局方法。

![flow](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071330.png)

```css
.parent {
  width: 200px;
  height: 150px;
  background-color: black;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
}

.child {
  box-sizing: border-box;
  background-color: white;
  flex: 0 0 25%;
  height: 50px;
  border: 1px solid red;
}
```