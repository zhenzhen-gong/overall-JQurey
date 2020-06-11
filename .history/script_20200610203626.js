//javaScript写法
// window.onload = function () {
//     var box = document.getElementById("box")
//     var contentBoxs = box.getElementsByTagName("div")

//     //计算每排放置几个图片
//     function overall(box, contentBoxs) {
//         //获取屏幕显示的列数
//         var contentWidth = contentBoxs[0].offsetWidth + 20
//         var windowWidth = document.documentElement.clientWidth
//         var lisNum = parseInt(windowWidth / contentWidth)

//         //设置最外层容器的高度
//         box.style.width = lisNum * contentWidth + "px"
//         //定义一个数组并储存每一列的宽度
//         var everyHeight = new Array()
//         for (var i = 0; i < contentBoxs.length; i++) {
//             if (i < lisNum) {
//                 everyHeight[i] = contentBoxs[i].offsetHeight + 20
//             } else {
//                 var minHeight = Math.min.apply(null, everyHeight)
//                 var minIndex = getIndex(minHeight, everyHeight)
//                 //最小高度的列距离最左边的距离
//                 var leftValue = contentBoxs[minIndex].offsetLeft - 10
//                 contentBoxs[i].style.position = 'absolute'
//                 contentBoxs[i].style.top = minHeight + 'px'
//                 contentBoxs[i].style.left = leftValue + "px"
//                 everyHeight[minIndex] += contentBoxs[i].offsetHeight + 20
//             }
//         }
//     }
    // //获取高度最小的列的索引
    // function getIndex(minHeight, everyHeight) {
    //     for (index in everyHeight) {
    //         if (everyHeight[index] == minHeight) {
    //             return index
    //         }
    //     }
    // }
//     overall(box, contentBoxs)
// }

//JQuery写法
$(document).ready(function(event){
    var box = $("#box")
    var contentBoxs = box.children("div")
    console.log(contentBoxs.eq(0).height());
    
    var overall = function(box, contentBoxs){
        console.log('overall',contentBoxs.eq(1).height())
        // 获取屏幕显示的列数
        var contentWidth = contentBoxs.eq(0).width() + 40
        var windowWidth = $(window).width()
        var lisNum = parseInt(windowWidth / contentWidth)

        //设置最外层容器的高度
        box.width(lisNum * contentWidth)
        
         //定义一个数组并储存每一列的高度
        var everyHeight = new Array()
        for (var i = 0; i < contentBoxs.length; i++) {
            console.log('遍历boxes开头的everyHeight',everyHeight)
            if (i < lisNum) {
                everyHeight[i] = contentBoxs.eq(i).height() + 40
            } else {
                //获取最小列的高度
                console.log('最小列的高',everyHeight)
                var minHeight = Math.min.apply(null, everyHeight)
                //获取最小列的索引
                var minIndex = getIndex(minHeight, everyHeight)
                //最小高度的列距离最左边的距离
                var leftValue = contentBoxs.eq(minIndex).position().left
                contentBoxs.eq(i).css({
                    "position":"absolute",
                    "top":minHeight,
                    "left":leftValue,
                    "opacity":"0"
                }).stop().animate({
                    "opacity":"1"
                },1000)
                everyHeight[minIndex] += contentBoxs.eq(i).height() + 40
            }
        }
    }
   //获取高度最小的列的索引
   function getIndex(minHeight, everyHeight) {
    for (index in everyHeight) {
        if (everyHeight[index] == minHeight) {
            return index
        }
         }
    }
overall(box, contentBoxs)
})