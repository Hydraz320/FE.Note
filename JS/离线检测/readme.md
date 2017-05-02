# 离线检测

讲白了就是设计这么一个API。

1. navigator.onLine Bool
	可以用于检测浏览器的在线或离线状态

2. window的online、offline事件

```javascript
EventUtil.addListener(window, "online", function () {});

EventUtil.addListener(window, "offline", function () {});
```