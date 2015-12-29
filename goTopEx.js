function goTopEx(){
        var obj=document.getElementById("goTopBtn");//获取id为goTopBtn的元素
        function getScrollTop(){//函数名为getScrollTop
                return document.documentElement.scrollTop;//获取当前页面的滚动条纵坐标位置
            }
        function setScrollTop(value){//函数名为setScrollTop,形参为value
                document.documentElement.scrollTop=value;//设置的滚动条纵坐标位置
            }    
        window.onscroll=function(){
            getScrollTop()>0?obj.style.display="":obj.style.display="none";//当滚动条的高度>0时,则obj显示,否则隐藏掉
            }
        obj.onclick=function(){
            var goTop=setInterval(scrollMove,10);//每隔10毫秒发生scroolMove方法
            function scrollMove(){
                    setScrollTop(getScrollTop()/1.1);//设置滚动条的高度
                    if(getScrollTop()<1)clearInterval(goTop);//如果滚动条的高度<1,则清除掉scroolMove方法
                }
        }
    }
