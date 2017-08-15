/*--------------------------------------------- 1.屏幕可视窗口的大小----------------------------------------------------*/
//原生
window.onload = function () {
    var wHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    window.innerHeight  //----标准浏览器及IE9+
    document.documentElement.clientHeight  //----标准浏览器及低版本IE标准模式
    document.body.clientHeight  // ----低版本混杂模式

//jQuery模式
//$(window).height()

    /*------------------------------------------- 2.浏览器顶部与文档顶部之间的距离--------------------------------------------*/
//原生
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    window.pageYOffset  //标准浏览器及IE9+
    document.documentElement.scrollTop //标准浏览器和低版本IE标准模式
    document.body.scrollTop  //低版本混杂模式

//jQuery模式
//$(document).scrollTop()

    /*---------------------------------------------------- 3.获取元素的尺寸-------------------------------------------------*/
//$(o).width() = o.style.width;
//$(o).innerWidth() = o.style.width+o.style.padding;
//$(o).outerWidth() = o.offsetWidth = o.style.width+o.style.padding+o.style.border;
//$(o).outerWidth(true) = o.style.width+o.style.padding+o.style.border+o.style.margin;

//注意：要使用原生的style.xxx方法获取属性，这个元素必须已经有内嵌的样式，如<div style="...."></div>；

//如果原先是通过外部或内部样式表定义css样式，必须使用o.currentStyle[xxx] || document.defaultView.getComputedStyle(0)[xxx]来获取样式值

    // var ele = document.getElementsByClassName('block1')[0];
    // ele.getBoundingClientRect();//获取一个相对于浏览器的元素几何包含对象
    //
    //
    //
    // var isLoading = true;
    // /*
    //  * isLoading变量是为了解决scroll事件独有的重复执行函数引起的性能问题，确保一次滚动所有函数执行完成后。执行有效函数。
    //  * */
    // loadImage();
    // window.addEventListener("scroll",loadImage);
    // // document.addEventListener("click",loadImage)
    // function loadImage() {
    //     if(isLoading){
    //         isLoading = !isLoading;
    //         var images = document.getElementsByTagName('img');
    //         /*
    //         * images类数组对象 除了索引属性,还有length(可枚举),item(不可枚举),namedItem(不可枚举);
    //         * 遍历尽量不要用for ... in
    //         * */
    //         var winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    //         for(var i = 0;i<images.length;i++){
    //             isInWindow(images[i],winHeight);
    //         }
    //         if(i === images.length){
    //             isLoading = !isLoading;
    //         }
    //     } else {
    //         return false;
    //     }
    // }
    //
    // function isInWindow(ele,height) {
    //     var boundObj = ele.getBoundingClientRect().bottom;
    //     var srcStr = ele.dataset.src;
    //     if(boundObj<height){
    //         ele.setAttribute("src",srcStr)
    //     }
    // }
    LoadImg.init();
    window.addEventListener("scroll",function () {
        LoadImg.init();
    })

}