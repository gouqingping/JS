// JavaScript Document
function makeshi(x){
    var form2=document.diqu.one.options.length;//这句解释同上
    var diqul=new Array(form2)//新建一个数组，项数为第一个下拉列表的项数
    for(i=0;i<form2;i++)//循环第一个下拉列表的项数那么多次
        diqul[i]=new Array();//子循环
        //下面是给每个循环赋值
            diqul[0][0]=new Option("秦皇岛市 ","秦皇岛市 ");
                diqul[0][1]=new Option("冀州市 ","冀州市 ");
                diqul[0][2]=new Option("石家庄市 ","石家庄市 ");
            diqul[1][0]=new Option("南京市 ","南京市 ");
                diqul[1][1]=new Option("苏州市 ","苏州市 ");
                diqul[1][2]=new Option("常州市 ","常州市 ");
            diqul[2][0]=new Option("南宁市 ","南宁市 ");
                diqul[2][1]=new Option("柳州市 ","柳州市 ");
                diqul[2][2]=new Option("北海市 ","北海市 ");
            diqul[3][0]=new Option("杭州市 ","杭州市 ");
                diqul[3][1]=new Option("温州市 ","温州市 ");
                diqul[3][2]=new Option("义乌市 ","义乌市 ");
			diqul[4][0]=new Option("成都市 ","成都市 ");
                diqul[4][1]=new Option("德阳市 ","德阳市 ");
                diqul[4][2]=new Option("广元市 ","广元市 ");
				diqul[4][3]=new Option("南充市 ","南充市 ");
    var sc=document.diqu.sc;//方便引用
    for(m=sc.options.length-1;m>0;m--)
    //这个要看清楚,因为要重新填充下拉列表的话必须先清除里面原有的项,清除和增加当然是有区别的了,所以用递减
        sc.options[m]=null;//将该项设置为空,也就等于清除了
    for(j=0;j<diqul[x].length;j++){//这个循环是填充下拉列表
        sc.options[j]=new Option(diqul[x][j].text,diqul[x][j].value)
        //注意上面这据,列表的当前项等于 新项(数组对象的x,j项的文本为文本，)
    }
    sc.options[0].selected=true;//设置被选中的初始值
}
