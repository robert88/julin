

function resizeFooter() {
	var top = $(".footer-wrap").offset().top+$(".footer-wrap").height() -$(window).height()
	$(".footer").css(top>0?top:0);
}
$(window).on("resize",function () {
	resizeFooter();
});