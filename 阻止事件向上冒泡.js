$(function(){
	
	// 定义触发事件原素
	search       = $(".search");
	searchShow   = $('.search_results');
	//  *** 这里开始是你需要触发的事件 *** 
	search.click(function (event){
		//点击触发原素，触发事件
	
		searchShow.show();
		//事件显示
		$(document).click(function(){
			//点击区域外部任意位置隐藏
			searchShow.hide();
		});
		event.stopPropagation();
		//阻止事件向上冒泡
		
	});
	//  *** 到这里结束是你需要触发的事件 ***
	
	searchShow.click(function (event){
		event.stopPropagation();
		//阻止事件向上冒泡
	});
	
});
