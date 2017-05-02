# Get/Post

[w3school](http://www.w3school.com.cn/tags/html_ref_httpmethods.asp)

[参考](https://mp.weixin.qq.com/s?__biz=MzI2OTI4MjEzNw==&mid=2247483736&idx=1&sn=be7ab90b9a8a359e9f1857736d147fad&chksm=eae3ff6edd947678d8bd98ea8fb80fd7002a84e0a2dc96933adf17fd859c40063b368f74f84a&mpshare=1&scene=2&srcid=11143GTyWIKWw8hAD1Bl2fTi&key=a98151195d8f00d2b9efeac61623a9e658a7e46354e140a1b06dd042892afed84d19c73378045a42b3927744e4d50fc9f497eb4f31d803a559a3ce1616050969be8f318425ffae2cc7e4dd820731b25a&ascene=0&uin=MTg5MzA5ODU1&devicetype=iMac+MacBookPro11%2C4+OSX+OSX+10.12.3+build(16D32)&version=12020010&nettype=WIFI&fontScale=100&pass_ticket=TZNJTnroNwOakmZwG%2BlQneSSRxbQyddaitvkYHdARBU%3D)

这是以前点评时主管大人公众号上的文章...感谢。

---

以下为个人整理。

### 语义

依照HTTP协议，Post的语义是向服务器添加数据，也即，会修改服务器上的数据。所以从语义上说，Get是比Post更安全的操作。

就大部分情况而言，两者在数据传输上其实是一样的。

### 区别

 \\   |  GET | POST
 ---- | ---- | ---- 
**后退按钮/刷新**|无害|数据会被重新提交（浏览器应该告知用户数据会被重新提交）。|
**书签**|可收藏为书签|不可收藏为书签
**缓存**|能被缓存|不能缓存
**编码类型**|application/x-www-form-urlencoded|application/x-www-form-urlencoded 或 multipart/form-data。为二进制数据使用多重编码。
**历史**|参数保留在浏览器历史中。|参数不会保存在浏览器历史中。
**对数据长度的限制**|是的。当发送数据时，GET 方法向 URL 添加数据；URL 的长度是受限制的（URL 的最大长度是 2048 个字符）。|无限制。
**对数据类型的限制**|只允许 ASCII 字符。|没有限制。允许二进制数据，所以上传文件用Post
**安全性**|与 POST 相比，GET 的安全性较差，因为所发送的数据是 URL 的一部分。在发送密码或其他敏感信息时绝不要使用 GET ！|POST 比 GET 更安全，因为参数不会被保存在浏览器历史或 web 服务器日志中。
**可见性**|数据在 URL 中对所有人都是可见的。|数据不会显示在 URL 中，但参数内容在请求的body里。

### 长度

所谓的请求长度限制是由浏览器和 web 服务器决定和设置的，各种浏览器和 web 服务器的设定均不一样，这依赖于各个浏览器厂家的规定或者可以根据 web 服务器的处理能力来设定。

