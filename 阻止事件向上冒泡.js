$(function(){
	$(".search").click(function (event){
		$('.search_results').show();//显示
		$(document).click(function(){
			$('.search_results').hide();//影藏
			});
		event.stopPropagation();//阻止事件向上冒泡
	});
	$('.search_results').click(function (event){
		event.stopPropagation();//阻止事件向上冒泡
	});
});
