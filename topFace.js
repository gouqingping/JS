// JavaScript Document
(function(a) {
	a.fn.qqFace = function(b) {
		var c = {
			id: "facebox",
			path: "face/",
			assign: "content1",
			tip: "表情"
		},
			d = a.extend(c, b),
			e = a("#" + d.assign),
			f = d.id,
			g = d.path,
			h = d.tip;
		if (e.length <= 0) return alert("缺少表情赋值对象。"), !1;
		a(this).click(function(b) {
			var c, e;
			if (a("#" + f).length <= 0) {
				c = '<div id="' + f + '" style="position:absolute;display:none;z-index:1000;" class="qqFace">' + '<table border="0" cellspacing="0" cellpadding="0"><tr>';
				for (var i = 1; i <= 75; i++) e = "[/" + h + i + "]", c += '<td><img src="' + g + i + '.gif" onclick="$(\'#' + d.assign + "').setCaret();$('#" + d.assign + "').insertAtCaret('" + e + "');\" /></td>", i % 15 == 0 && (c += "</tr><tr>");
				c += "</tr></table></div>"
			}
			a("body").append(c);
			var j = a(this).position(),
				k = j.top + a(this).outerHeight();
			a("#" + f).css("top", k), a("#" + f).css("left", j.left), a("#" + f).show(), b.stopPropagation()
		}), a(document).click(function() {
			a("#" + f).hide(), a("#" + f).remove()
		})
	}
})(jQuery), jQuery.extend({
	unselectContents: function() {
		window.getSelection ? window.getSelection().removeAllRanges() : document.selection && document.selection.empty()
	}
}), jQuery.fn.extend({
	selectContents: function() {
		$(this).each(function(a) {
			var b = this,
				c, d, e, f;
			(e = b.ownerDocument) && (f = e.defaultView) && typeof f.getSelection != "undefined" && typeof e.createRange != "undefined" && (c = window.getSelection()) && typeof c.removeAllRanges != "undefined" ? (d = e.createRange(), d.selectNode(b), a == 0 && c.removeAllRanges(), c.addRange(d)) : document.body && typeof document.body.createTextRange != "undefined" && (d = document.body.createTextRange()) && (d.moveToElementText(b), d.select())
		})
	},
	setCaret: function() {
		if (!$.browser.msie) return;
		var a = function() {
				var a = $(this).get(0);
				a.caretPos = document.selection.createRange().duplicate()
			};
		$(this).click(a).select(a).keyup(a)
	},
	insertAtCaret: function(a) {
		var b = $(this).get(0);
		if (document.all && b.createTextRange && b.caretPos) {
			var c = b.caretPos;
			c.text = c.text.charAt(c.text.length - 1) == "" ? a + "" : a
		} else if (b.setSelectionRange) {
			var d = b.selectionStart,
				e = b.selectionEnd,
				f = b.value.substring(0, d),
				g = b.value.substring(e);
			b.value = f + a + g, b.focus();
			var h = a.length;
			b.setSelectionRange(d + h, d + h), b.blur()
		} else b.value += a
	}
})
