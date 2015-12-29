//倒计时

var clock = '';
var nums = 240;
var btn;
function sendCode(thisBtn){ 
  btn = thisBtn;
  btn.disabled = true; //将按钮置为不可点击
  btn.value = nums+'秒后可重新获取';
  clock = setInterval(doLoop, 1000); //一秒执行一次
}
function doLoop(){
  nums--;
  if(nums > 0){
    btn.value = nums+'秒后可重新获取';
  }else{
    clearInterval(clock); //清除js定时器
    btn.disabled = false;
    btn.value = '点击发送验证码';
    nums = 60; //重置时间
  }
}
