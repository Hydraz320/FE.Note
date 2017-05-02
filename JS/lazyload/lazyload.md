# 懒加载

[参考](http://www.cnblogs.com/flyromance/p/5042187.html)

[参考](http://www.cnblogs.com/jxlwqq/p/4318979.html)

[参考 - 有节流函数](http://www.html-js.com/article/jilewendapingtai-qianduanruheshixiantupianlanjiazailazyload-tigaoyonghutiyan%203860)

代码见js文件。

具体原理是这样的：

滚了高度+视口高度-图片的offset>0，则开始加载替换src。

## 可能的问题

要是图多了咋办，总不能一直for循环吧……

所以是这么想的：如果我的img们是一个一个排列的，不至于有的高有的低没什么规律，那么每次只计算某一个img，当这个img需要加载了，我就加载，然后next()，仿佛一个个中间件一样，再计算下一个。这样就避免了for。

当然也可以用个变量存储显示到哪了，然后for从这个地方开始遍历也是很稳的。

这个可能没什么问题。但是我记得百度面的时候问了一个问题，就是如果图片加载的特别特别多，内存吃不消的时候是怎么处理的。
我去看了百度图片，加载了好久，尼玛dom还是在插入新的html，根本没发现啥变化……

内存确实一直在涨，大概chrome内存占用到了3G以上后，就刷不出新的图片了。难道这就是处理方法？
看了下dom发现是用imgid的div包了94个imgpage的div，每个imgpage里用ul包了20个li(也就是20个图片)。算起来这次搜索也就给了大约2000张图嘛……

看看这个疑惑有没有解决的缘分了。。。