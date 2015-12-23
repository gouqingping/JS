window.onload = function()
{
	//获取元素
	var oDiv1 = document.getElementById('div1');
	var oLeft = document.getElementById('left');
	var oRight = document.getElementById('right');
	var oImg = document.getElementById('img');
	var oDiv = document.getElementById('div');
	var aLi = oDiv.getElementsByTagName('li');     
	var img = Array();  //定义一个空数组
	img[0] = "images/1.jpg";
	img[1] = "images/2.jpg";
	img[2] = "images/3.jpg";
	img[3] = "images/4.jpg";
	img[4] = "images/5.jpg";
	img[5] = "images/6.jpg";
	img[6] = "images/7.jpg";
	img[7] = "images/8.jpg";
	img[8] = "images/9.jpg";
	img[9] = "images/10.jpg";
	var timer = null;  
	var i=1;
	//开启计时器
	function startMove()  
	{
		timer = setInterval(function()
		{
			if(i == 9)  //判断是否是最后一张图片，如果是最后一张图片(i=9)，(i=0)就把显示第一张图片
			{
				//清除所有li的class样式
				for(var j=0;j<aLi.length;j++)
				{
						aLi[j].className = '';
				}
					oImg.src = img[i];
					aLi[i].className = 'on';
					i = 0;
			}
			else
			{
				for(var j=0;j<aLi.length;j++)
				{
						aLi[j].className = '';
				}
				oImg.src = img[i];
				aLi[i].className = 'on';
				i++;
				}	
		},1000);
		
	}
	
	startMove();  //打开网页就开启计时器（调用函数）
	
	//鼠标移入事件 关闭计时器---》选项卡功能---》显示左右箭头----》添加左右箭头点击事件，事件图片左右切换
	oDiv1.onmouseover = function()  
	{
			clearInterval(timer);  //关闭计时器
			//选项卡的功能
			for(var k=0;k<aLi.length;k++)
			{
				aLi[k].a = k;  
				aLi[k].onmouseover = function()   //给所有li依次添加鼠标移入事件
				{
					//清空所有的liclass样式
					for(var j=0;j<aLi.length;j++)
					{
							aLi[j].className = '';
					}
					this.className = 'on';
					oImg.src = img[this.a];	  //this代表执行当前事件的标签aLi[k]
				}	
			}	
			oLeft.style.display = 'block'; 
			oRight.style.display = 'block';

			oLeft.onclick = function()  //给左边的箭头点击事件，点击向左切换图片，即i = i-1
			{
				//判断当前是否是第一张图片，如果是第一张图片（i==0），点击之后就显示最后一张图片(i = aLi.length-1)
				if(i == 0)
				{
					for(var j=0;j<aLi.length;j++)
					{
							aLi[j].className = '';
					}
					i = aLi.length-1;
					oImg.src = img[i];	
					aLi[i].className = 'on';	
				}
				else
				{
					
					for(var j=0;j<aLi.length;j++)
					{
							aLi[j].className = '';
					}
					i--;
					oImg.src = img[i];	
					aLi[i].className = 'on';
					
				}
			}
			oRight.onclick = function()//给右边的箭头点击事件，点击向右切换图片，即i = i+1
			{
				//判断当前是否是第一张图片，如果是最后一张图片（i==aLi.length-1），点击之后就显示第一张图片(i = 0)
				if(i == aLi.length-1)
				{
					
					for(var j=0;j<aLi.length;j++)
					{
							aLi[j].className = '';
					}
					i = 0;
					oImg.src = img[i];	
					aLi[i].className = 'on';	
				}
				else
				{
					
					for(var j=0;j<aLi.length;j++)
					{
							aLi[j].className = '';
					}
					i++;
					oImg.src = img[i];	
					aLi[i].className = 'on';
					
				}
			}
			
				
	}
	
	oDiv1.onmouseout = function()  //鼠标移出事件，开启计时器，影藏左右两个箭头
	{
			oLeft.style.display = 'none';
			oRight.style.display = 'none';
			startMove();
	}
}
