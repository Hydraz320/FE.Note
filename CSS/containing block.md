# 包含块

[包含块(containing block)与块容器盒(block container box)概念不同](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Visual_formatting_model)。

对于定位而言，我们常说absolute的盒子相对于第一个不为static的父元素进行定位。事实上，这里本质上就是包含块定义的。

CSS 视觉格式化模型的一部分工作是从文档元素生成盒。生成的盒拥有不同类型，并对视觉格式化模型的处理产生影响。生成盒的类型取决于 CSS 属性 display。

当元素的 CSS 属性  display 为 block, list-item 或 table 时，它是块级元素 block-level 。块级元素（比如<p>)视觉上呈现为块，竖直排列。