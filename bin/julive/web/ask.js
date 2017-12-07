function dialog($dialog) {
	$dialog.show();
	centerDialog($dialog.find(".dialog"));
}
function centerDialog($dialog) {
	var t = ($(window).height()-$dialog.height())/2
	t = t<0?0:t;
	$dialog.css("top",t)
}
function closeDialog($dialog) {
	$dialog.hide()
}
$(".askBtn").click(function () {
	dialog($(".dialog-mask"))
});
$(".J-dialog-close").click(function (e) {
		closeDialog($(this).parents(".dialog-mask"))
});