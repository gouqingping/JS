/* html部分*/

<div class="btn-upload">
		<span>添加附件</span>
		<form><input type="file"></form>
</div>
<div class="mainImg" id="mainImg"></div>






/* CSS部分*/

.mainImg{
			max-width: 300px;
			max-height: 300px;
			border:1px solid #dcdcdc;
			backgruand-color:red;
		}

.mainImg   img{
			max-width: 100%;
			max-height: 100%;
		}
.btn-upload {
   			background-color: #f3f3f3;
    			background-image: linear-gradient(to bottom, #f5f5f5 0%, #f1f1f1 100%);
   			background-repeat: repeat-x;
   			border: 1px solid #dcdcdc;
    			border-radius: 4px;
    			color: #666;
    			cursor: pointer;
    			display: inline-block;
    			font-size: 14px;
   			line-height: 18px;
    			margin-right: 4px;
    			overflow: hidden;
    			padding: 4px 10px;
    			position: relative;
    			text-align: center;
    			vertical-align: middle;
		}
.btn-upload input {
    			border: medium solid transparent;
    			cursor: pointer;
    			margin: 0;
    			opacity: 0;
    			position: absolute;
    			right: 0;
    			top: 0;
}







/* js 部分*/


function previewA(file) {
	var img = new Image(), url = img.src = URL.createObjectURL(file);
	var $img = $(img);
	img.onload = function() {
			URL.revokeObjectURL(url);
			$('#mainImg').empty().append($img)
	}

console.log(url);
}


function previewB(file) {
	var reader = new FileReader();
	reader.onload = function(e) {
			var $img = $('<img>').attr("src", e.target.result)
			$('#mainImg').empty().append($img)
	}
	reader.readAsDataURL(file)
}
	 
$('[type=file]').change(function(e) {
	var file = e.target.files[0],
		  val  = $(this).val(),
	    reg  = /\.(png|jpg|gif|bmp)$/;
	
	if( reg.test(val) ){
		previewB(file)
	}else{
		alert('傻逼，你选的是什么东西？');
	}
})
