window.onload = function(){
    //计算每排放置几个图片
    function overall(box,contentBoxs){
       var contentWidth = contentBoxs[0].offsetWidth
       var windowWidth = document.documentElement.clientWidth
       var lisNum = parseInt(windowWidth/contentWidth)
       box.style.width = lisNum*contentWidth+20+"px"
    }
    var box = document.getElementById("box")
    var contentBoxs = box.getElementsByTagName("div")
    overall(box,contentBoxs)
    
    
}