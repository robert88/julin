

function resizeFooter() {
	var $footer = $(".footer-wrap")
	if($footer.length){
		var top = $footer.offset().top+$footer.height() -$(window).height();
		$footer.css("top",top>0?top:0);
	}

}
$(window).on("resize",function () {
	resizeFooter();
});