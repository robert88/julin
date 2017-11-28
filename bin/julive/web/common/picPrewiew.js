
var swiper4 = new Swiper('.photo-c .swiper-container', {
	paginationClickable: true,
	// Disable preloading of all images
	preloadImages: false,
	// Enable lazy loading
	lazyLoading: true
});
var swiper3 = new Swiper('.photo-b .swiper-container', {
	paginationClickable: true,
	// Disable preloading of all images
	preloadImages: false,
	// Enable lazy loading
	lazyLoading: true,
	slidesPerView: 4,
	spaceBetween: 30,
});
$(".photoBox").find(".close").click(function(){
	$(".photoBox").hide();
});

window.initPicview =function (list,imgs) {
	$(".photoBox").show()
	swiper3.removeAllSlides();
	swiper4.removeAllSlides();
	for(var i=0;i<list.length;i++){
		swiper3.appendSlide('<div class="item swiper-slide">{0}</div>'.tpl(list[i]));
	}
	for(var i=0;i<imgs.length;i++){
		swiper4.appendSlide('<div class="swiper-slide">{0}</div>'.tpl(imgs[i]));
	}
}

