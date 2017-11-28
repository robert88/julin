var swiper = new Swiper('.banner .swiper-container', {
	pagination: '.swiper-pagination',
	onInit: function (swiper){
		var len = swiper.wrapper.find(".swiper-slide").length;
		swiper.wrapper.parent().find(".swiper-slide-info").html('<span class="">' + swiper.activeIndex +"/" +len+ '</span>');
	},
	onSlideChangeEnd:function (swiper) {
		var len = swiper.wrapper.find(".swiper-slide").length;
		swiper.wrapper.parent().find(".swiper-slide-info").html('<span class="">' + swiper.activeIndex +"/" +len+ '</span>');
	},
	paginationClickable: true,
	// Disable preloading of all images
	preloadImages: false,
	// Enable lazy loading
	lazyLoading: true
});
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

$(".more-info-btn").click(function () {
	$(this).parents(".more-info-wrap").find(".more-info").slideToggle();
});
$(".Huxing-wrap  .swiper-container img").click(function () {
	initPicview(
		["<a>效果图(<span>11</span>)</a>","<a>样板间(<span>8</span>)</a>",'<a>环境规划图(<span>1</span>)</a>','<a>楼盘实景图(<span>27</span>)</a>','<a>配套实景图(<span>5</span>)</a>']
		,["<img src='/public/images/house1.jpg'>","<img src='/public/images/house2.jpg'>"]
	)
});

//创建和初始化地图函数：
function initMap(){
	if(!window.BMap){
		setTimeout(initMap,1000);
		return
	}
	createMap();//创建地图
	setMapEvent();//设置地图事件
	addMapControl();//向地图添加控件
	addMarker();//向地图中添加marker
}

//创建地图函数：
function createMap(){
	var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
	var point = new BMap.Point(114.059824,22.537433);//定义一个中心点坐标
	map.centerAndZoom(point,15);//设定地图的中心点和坐标并将地图显示在地图容器中
	window.map = map;//将map变量存储在全局
}

//地图事件设置函数：
function setMapEvent(){
	map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
	map.enableScrollWheelZoom();//启用地图滚轮放大缩小
	map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
	map.enableKeyboard();//启用键盘上下左右键移动地图
}

//地图控件添加函数：
function addMapControl(){
	//向地图中添加缩放控件
	var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
	map.addControl(ctrl_nav);
	//向地图中添加缩略图控件
	var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
	map.addControl(ctrl_ove);
	//向地图中添加比例尺控件
	var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
	map.addControl(ctrl_sca);
}

//标注点数组
var markerArr = [{title:"在这里",content:"健云康",point:"114.06525|22.542974",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}}
];
//创建marker
function addMarker(){
	for(var i=0;i<markerArr.length;i++){
		var json = markerArr[i];
		var p0 = json.point.split("|")[0];
		var p1 = json.point.split("|")[1];
		var point = new BMap.Point(p0,p1);
		var iconImg = createIcon(json.icon);
		var marker = new BMap.Marker(point,{icon:iconImg});
		var iw = createInfoWindow(i);
		var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
		marker.setLabel(label);
		map.addOverlay(marker);
		label.setStyle({
			borderColor:"#808080",
			color:"#333",
			cursor:"pointer"
		});

		(function(){
			var index = i;
			var _iw = createInfoWindow(i);
			var _marker = marker;
			_marker.addEventListener("click",function(){
				this.openInfoWindow(_iw);
			});
			_iw.addEventListener("open",function(){
				_marker.getLabel().hide();
			})
			_iw.addEventListener("close",function(){
				_marker.getLabel().show();
			})
			label.addEventListener("click",function(){
				_marker.openInfoWindow(_iw);
			})
			if(!!json.isOpen){
				label.hide();
				_marker.openInfoWindow(_iw);
			}
		})()
	}
}
//创建InfoWindow
function createInfoWindow(i){
	var json = markerArr[i];
	var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
	return iw;
}
//创建一个Icon
function createIcon(json){
	var icon = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
	return icon;
}
//创建和初始化地图
initMap()
