var LoadImg = {
    isLoading:true,
    init:function () {
        if(this.isLoading){
            this.isLoading = !this.isLoading;
            var images = document.getElementsByTagName('img');
            /*
             * images类数组对象 除了索引属性,还有length(可枚举),item(不可枚举),namedItem(不可枚举);
             * 遍历尽量不要用for ... in
             * */
            var winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            for(var i = 0;i<images.length;i++){
                this.isInWindow(images[i],winHeight);
            }
            if(i === images.length){
                this.isLoading = !this.isLoading;
            }
        } else {
            return false;
        }
    },
    isInWindow:function (ele,height) {
        var boundObj = ele.getBoundingClientRect().bottom;
        var srcStr = ele.dataset.src;
        if(boundObj<height){
            ele.setAttribute("src",srcStr)
        }
    }
}