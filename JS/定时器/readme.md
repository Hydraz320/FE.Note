# setInterval和setTimeout的一点比较

这里写写自己对二者的体会。

1. setTimeout-Loop在很多时候都可以替代setInterval，但据测试来看前者性能开销要大一些；

2. 考虑一个轮询，当我们使用setInterval时，如果网速等问题导致第一个ajax响应的时间比轮询间隔时间要长，那么第一个ajax响应之前，第二个请求就又出去了。而使用setTimeout-Loop，则可以在响应前什么都不做。这样一来，间隔本身虽然未必准确，却可以保证流程。具体代码示例见下：

```javascript
// 不要这样做
var pollServerForNewMail = function () {
  $.getJSON('/poll_newmail.php', function (response) {
    if (response.newMail) {
      alert(
        "New mail. At last. You made me walk all the way to the server and back every " +
        "second for this, so if this isn't life-or-death, you got another thing coming."
      );
    }
  });
};
setInterval(pollServerForNewMail, 1000);

//这个好点
(function pollServerForNewMail() {
  $.getJSON('/poll_newmail.php', function (response) {
    if (response.newMail) {
      alert(
        "You have received a letter, good sir. " + 
        "I will have a quick lie-down and be on my way shortly."
      );
    }
    setTimeout(pollServerForMail, 1000);
  });
}());
```

