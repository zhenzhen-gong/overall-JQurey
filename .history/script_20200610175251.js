window.onload = function(){
    //计算每排放置几个图片
    function overall(box,contentBoxs){
       var contentWidth = contentBoxs[0].offsetWidth+20
       var windowWidth = document.documentElement.clientWidth
       var lisNum = parseInt(windowWidth/contentWidth)
       //设置最外层容器的高度
       box.style.width = lisNum*contentWidth+"px"
    }
    //定义一个数组并储存每一列的宽度
    var everyHeight = new Array()
    for(let i = 0;i<contentBoxs.length;i++){
        if(i < lisNum){
           everyHeight[i] = contentBoxs[i].offsetHeight+20
        }else{
            var minHeight = Math.min.apply(null, everyHeight)
            var minIndex = getIndex(minHeight,everyHeight)
            //最小高度的列距离最左边的距离
            var leftValue = contentBoxs[minIndex].offsetLeft - 10
            contentBoxs[i].style.position = 'absolute'
            contentBoxs[i].style.top = minHeight
            contentBoxs[i].style.left = leftValue
            everyHeight[minIndex] += contentBoxs[i].offsetHeight+20
        }
    }
    //获取高度最小的列的索引
    function getIndex(minHeight,everyHeight){
        for (index in everyHeight){
            if(everyHeight[index] == minHeight){
                return index
            }
        }
    }
    var box = document.getElementById("box")
    var contentBoxs = box.getElementsByTagName("div")
    overall(box,contentBoxs)
    
    
}