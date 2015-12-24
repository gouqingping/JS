//滚动后导航固定
$(function(){
	$(window).scroll(function(){
          height = $(window).scrollTop();
          var wheel=document.getElementById("mousewheel");
   	  	  if(height > 120){
   	  	  	$(wheel).fadeOut();
   	  	  	//渐隐
   	  	  }else{
   	  	  	$(wheel).fadeIn();
   	  	  	//渐显
   	  	  };

	});
});
