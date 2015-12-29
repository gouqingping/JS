$(document).ready(function() {
		var num = parseInt(Math.random()*2+1);
		var str='static/images/img_'+num+'.png'; 
		$("#img").attr("src",str);
	})

$(document).ready(function() {
		var num = parseInt(Math.random()*2+1);
		var str='static/images/img_'+num+'.png'; 
		$(".transform").attr("src",str);
	})  
