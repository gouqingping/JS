
setTimeout(function(){adju.adjusfunction()});
var tag = ['div','p','span','h1','h2','h3','a','input','option','select'],
adju    = {
	tagfunction:function(adjus,adjusFont) {
		for (var i = 0; i < tag.length; i++) {
			if (document.getElementsByTagName(tag[i]).length>0) {
				var inputNadeName = document.getElementsByTagName(tag[i]).nodeName;
				for (var s = 0; s < document.getElementsByTagName(tag[i]).length; s++) {
					sty = document.getElementsByTagName(tag[i])[s].innerHTML;
					if(sty.indexOf(adjus)!==-1) {
						document.getElementsByTagName(tag[i])[s].innerHTML = sty.replace(eval('/'+adjus+'/g'),adjusFont);
					}
				}
				if (inputNadeName = "input") {
					for (var l = 0; l < document.getElementsByTagName(tag[i]).length; l++) {
				 		sty = document.getElementsByTagName(inputNadeName)[l].value;
				 		if(sty.indexOf(adjus)!==-1) {
				 			document.getElementsByTagName(inputNadeName)[l].value = sty.replace(eval('/'+adjus+'/g'),adjusFont);
				 		}
				 	}
				}
			}

		}
	},
	adjusfunction:function() {
		var adj     = ['课程','订单','销售'];
		var adjfont = ['样板','试用','试用'];
		for (var i = 0; i < tag.length; i++) {
			if (document.getElementsByTagName(tag[i]).length>0) {
				for (var s = 0; s < document.getElementsByTagName(tag[i]).length; s++) {
					sty = document.getElementsByTagName(tag[i])[s].innerText;
					for (var l = 0; l < adj.length; l++) {
						if ( sty.indexOf(adj[l]) !== -1 ) {
							var adjus     = adj[l];
							var adjusFont = adjfont[l];
							this.tagfunction(adjus,adjusFont);
						}
					}
				}
			}
		}
	}
}
