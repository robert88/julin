
$(".open").click(function () {
	var $item = $(this).parents(".find-item");
	var ulHeight = $item.find("ul").height();
	var liHeight = $item.find("ul>li").height();
	if($item.hasClass("find-item-open")){
		$item.removeClass("find-item-open").height(liHeight);
	}else{
		$item.addClass("find-item-open").height(ulHeight);
	}
});

/*居理咨询师*/
var swiper = new Swiper('.personList .swiper-container', {
	pagination: '.swiper-pagination',
	paginationClickable: true,
	// Disable preloading of all images
	preloadImages: false,
	slidesPerView: 3,
	// Enable lazy loading
	lazyLoading: true
});

/*登录*/
$(".loginBtn").click(function () {
	dialog($(".login-dialog"))
});