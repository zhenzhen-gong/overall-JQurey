window.onload = function(){
    //计算每排放置几个图片
    function overall(box,contentBoxs){
       var contentWidth = contentBoxs[0].offsetWidth+20
       var windowWidth = document.documentElement.clientWidth
       var lisNum = parseInt(windowWidth/contentWidth)
       //设置最外层容器的高度
       box.style.width = lisNum*contentWidth+"px"
    }
    var box = document.getElementById("box")
    var contentBoxs = box.getElementsByTagName("div")
    overall(box,contentBoxs)
    
    
}