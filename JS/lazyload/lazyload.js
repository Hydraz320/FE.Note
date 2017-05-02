var imgs = document.getElementsByTagName('img');
// 获取视口高度与滚动条的偏移量
function lazyload(){
    var scrollTop = window.pageYOffset
        || document.documentElement.scrollTop// 这里比较扯的是 w3c标准要求这个值真实反映滚动高度 
        || document.body.scrollTop;// 这个值恒为0 而chrome正好反掉了……
    var viewportSize = window.innerHeight 
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    for(var i=0; i<imgs.length; i++) {
        var x = scrollTop + viewportSize - imgs[i].offsetTop;
        if(x > 0){
            imgs[i].src = imgs[i].getAttribute('data-url');   
        }
    }
}

setInterval(lazyload,500);