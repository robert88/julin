
/*banner的轮播*/
var swiper = new Swiper('.banner .swiper-container', {
	pagination: '.swiper-pagination',
	onInit: function (swiper){
		var len = swiper.wrapper.find(".swiper-slide").length;
		swiper.wrapper.parent().find(".swiper-slide-info").html('<span class="">' + (swiper.activeIndex+1) +"/" +len+ '</span>');
	},
	onSlideChangeEnd:function (swiper) {
		var len = swiper.wrapper.find(".swiper-slide").length;
		swiper.wrapper.parent().find(".swiper-slide-info").html('<span class="">' + (swiper.activeIndex+1) +"/" +len+ '</span>');
	},
	paginationClickable: true,
	// Disable preloading of all images
	preloadImages: false,
	// Enable lazy loading
	lazyLoading: true
});

/*户型的轮播*/
var swiper2 = new Swiper('.Huxing-wrap .swiper-container', {
	pagination: '.swiper-pagination',
	slidesPerView: 3,
	paginationClickable: true,
	spaceBetween: 30,
	height:131,
	paginationClickable: true,
	// Disable preloading of all images
	preloadImages: false,
	// Enable lazy loading
	lazyLoading: true
});

/*
 * 点击显示更多
 * */
$(".more-info-btn").click(function () {
	$(this).parents(".more-info-wrap").find(".more-info").slideToggle();
});

/*
 * 点击图片显示图片列表
 * */
$(".picViewWrap  .swiper-container img").click(function () {
	initPicview(
		["<a>效果图(<span>11</span>)</a>","<a>样板间(<span>8</span>)</a>",'<a>环境规划图(<span>1</span>)</a>','<a>楼盘实景图(<span>27</span>)</a>','<a>配套实景图(<span>5</span>)</a>']
		,["<img src='/public/images/house1.jpg'>","<img src='/public/images/house2.jpg'>"]
	)
});


/*通过url滚动到锚点*/
var scrollToMap = location.href.split("?");
if(scrollToMap[1]){
	var scrollTarget = $.getParam(scrollToMap[1]).scroll;
	if($("#"+scrollTarget).length){
		$("html,body").stop(true,true).animate({"scrollTop":$("#"+scrollTarget).offset().top-$(".header-wrap").height()})
	}

}
/*弹框*/
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
$(".J-dialog-close").click(function (e) {
	closeDialog($(this).parents(".dialog-mask"))
});

/*
 * 收藏
 * */
$("#collection").click(function () {
	dialog($(".dialog-collection"))
});
