$(".gotop").click(function () {
	$("html,body").stop(true,true).animate({"scrollTop":0});
});
$(".toorbar-sort").click(function () {
	$(".toorbar-sort-mask").show();
});
$(".toorbar-sort-mask").click(function () {
	$(".toorbar-sort-mask").hide();
});