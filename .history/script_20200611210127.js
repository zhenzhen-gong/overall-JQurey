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
//模拟数据
var data = [{
    "src": "1.png",
    "title": "第一怪 竹筒当烟袋"
}, {
    "src": "2.png",
    "title": "第二怪 草帽当锅盖"
}, {
    "src": "3.png",
    "title": "第三怪 这边下雨那边晒"
}, {
    "src": "4.png",
    "title": "第四怪 四季服装同穿戴"
}, {
    "src": "5.png",
    "title": "第五怪 火车没有汽车快"
}, {
    "src": "6.png",
    "title": "第六怪 火车不通国内通国外"
}, {
    "src": "7.png",
    "title": "第七怪 老奶爬山比猴快"
}, {
    "src": "8.png",
    "title": "第八怪 鞋子后面多一块"
}, {
    "src": "9.png",
    "title": "第九怪 脚趾四季露在外"
}, {
    "src": "10.png",
    "title": "第十怪 鸡蛋拴着卖"
}, {
    "src": "11.png",
    "title": "第十一怪 粑粑叫饵块"
}, {
    "src": "12.png",
    "title": "第十二怪 花生蚕豆数着卖"
}, {
    "src": "13.png",
    "title": "第十三怪 三个蚊子一盘菜"
}, {
    "src": "14.png",
    "title": "第十四怪 四个老鼠一麻袋"
}, {
    "src": "15.png",
    "title": "第十五怪 树上松毛扭着卖"
}, {
    "src": "16.png",
    "title": "第十六怪 姑娘叫老太"
}, {
    "src": "17.png",
    "title": "第十七怪 小和尚可以谈恋爱"
}, {
    "src": "18.png",
    "title": "第十八怪 背着娃娃谈恋爱"
}];
$(document).ready(function(event){
    var box = $("#box")
    var contentBoxs = box.children("div")
    // console.log(contentBoxs.eq(0).height());
    
    var overall = function(box, contentBoxs){
        // console.log('overall',contentBoxs.eq(1).height())
        // 获取屏幕显示的列数
        var contentWidth = contentBoxs.eq(0).width() + 40
        var windowWidth = $(window).width()
        var lisNum = parseInt(windowWidth / contentWidth)

        //设置最外层容器的高度
        box.width(lisNum * contentWidth)
        
         //定义一个数组并储存每一列的高度
        var everyHeight = new Array()
        for (var i = 0; i < contentBoxs.length; i++) {
            // console.log('遍历boxes开头的everyHeight',everyHeight)
            if (i < lisNum) {
                everyHeight[i] = contentBoxs.eq(i).height() + 40
            } else {
                //获取最小列的高度
                // console.log('最小列的高',minHeight)
                var minHeight = Math.min.apply(null, everyHeight)
                //获取最小列的索引
                var minIndex = getIndex(minHeight, everyHeight)
                //最小高度的列距离最左边的距离
                var leftValue = contentBoxs.eq(minIndex).position().left
                //调用设置样式的函数setStyle（）
                setStyle(contentBoxs.eq(i),minHeight,leftValue,i)
                everyHeight[minIndex] += contentBoxs.eq(i).height() + 40
            }
            contentBoxs.eq(i).hover(function(event){
                $(this).stop().animate({
                    "opacity":"0.5"
                },300)
            },function(event){
                $(this).stop().animate({
                    'opacity':"1"
                },300)
            })
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
    // 查看页面滚动到哪个位置 开始追加后面的元素
    var getcheck = function(box){
        //获取网页的高度
        var documentHeight = $(window).height()
        //获取文档向上滚动的高度
        var scrollHeight = $(window).scrollTop()
        //获取最后一个盒子所在列的总高度
        var contentBoxs = box.children("div")
        //最后一个盒子的top值
        var lastCBoxTop = contentBoxs.eq(contentBoxs.length-1).offset().top
        //最后一个盒子自身的高度
        var lastCBoxHeight = contentBoxs.eq(contentBoxs.length-1).height()+20
        //最后一个盒子所在列的总高度=它的top值+自身的高度
        var lastCBLHeight = lastCBoxTop + lastCBoxHeight
        //当网页的高度+滚动的高度 >= 最后一个盒子所在列的总高度  则追加元素
        return documentHeight + scrollHeight >= lastCBLHeight? true:false   
    }
    //设置追加内容的样式
    var getStartNum = 0;
    var setStyle = function(box,top,left,index){
        if(getStartNum>=index){
            return false
        }
        // 前18个样式在调用时设置
        // 追加的部分即索引值>18,则执行getStartNum = index，然后再执行box.css添加样式
        box.css({
            "position":"absolute",
            "top":top,
            "left":left,
            "opacity":"0"
        }).stop().animate({
            "opacity":"1"
        },1000)
        getStartNum = index
    }
    //在后面追加内容
    var appendContent = function (box){
        if(getcheck(box)){
            for(i in data){
                var newText = '<div><img src="images/'+data[i].src+'"><a href="http://www.imooc.com" target="_blank">'+data[i].title+'</a></div>'
                box.append(newText)
            }
        }else{
            return false
        }
        overall(box, box.children("div"))
    }
    //给内容添加样式

//  // overall()必须在所有图片加载完成后再执行，否则取到的div高度为a标签的高度
//   var promise = new Promise(function(resolve,reject){
//        console.log(1)
//   //1.统计共有多少张图片，记为n
//   var n =$('img').length
//   var a=0
//   //2.load触发一次，++一次，直到等于n，说明图片全部加载完成。
//   $('img').on('load',function(){
//       console.log('load')
//       a++;
//         if(a==n){
//             resolve()
//         }
//         })
//    })
//    promise.then(function(){
//        console.log(2)
//         //3.这个时候用Promise控制执行overall
//         overall(box, contentBoxs)
//    })
$(this).scroll(function(event){
    appendContent(box,contentBoxs)
})
    overall(box, contentBoxs)
   
})