

$(function(){
  $(‘a’).mousedown(function(e){
    alert(e.which) // 1 = 鼠标左键 left; 2 = 鼠标中键; 3 = 鼠标右键
    return false;//阻止链接跳转
  });
});

$(function(){
  $(‘#bodyMousedown’).mousedown(function(e){
    if(3 == e.which){
      alert(‘这 是右键单击事件’);
    }else if(1 == e.which){
      alert(‘这 是左键单击事件’);
    }
  });
});
