$(".search-condition").on("click",">li",function () {
	$(".search-condition>li dl").not($(this)).slideUp();
	$(this).find("dl").slideDown();
	$(".search-select-mask").show();
}).on("click","dl .case-type",function () {
	$(this).addClass("current").siblings().removeClass("current");
	$(this).parents("dl").find(".case-type-item").eq($(this).index()).addClass("active").siblings().removeClass("active");

	return false;
}).on("click","dl .case-type-option",function () {
	$(this).parents("dl").slideUp();
	$(".search-select-mask").hide();
	$(this).addClass("selected").siblings().removeClass("selected");
	return false;
}).on("click","dl",function () {
	return false;
});
$(".search-select-mask").click(function () {
	$(".search-condition>li dl").slideUp();
	$(".search-select-mask").hide();
});
