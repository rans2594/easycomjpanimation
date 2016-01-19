// JavaScript Document

//ロールオーバー
var preLoadImg = new Object();

function initRollOvers(){
	$("img.rollover").each(function(){
		var imgSrc = this.src;
		var sep = imgSrc.lastIndexOf('.');
		var onSrc = imgSrc.substr(0, sep) + '_on' + imgSrc.substr(sep, 4);
		preLoadImg[imgSrc] = new Image();
		preLoadImg[imgSrc].src = onSrc;
		$(this).hover(
			function() { this.src = onSrc; },
			function() { this.src = imgSrc; }
		);
	});
}
$(function(){
	initRollOvers();
});

// page scroll
$(function () {
   	$('a[href^=#]').click(function() {
      	// スクロールの速度
      	var speed = 400;// ミリ秒
      	// アンカーの値取得
      	var href= $(this).attr("href");
      	// 移動先を取得
     		var target = $(href == "#" || href == "" ? 'html' : href);
     		// 移動先を数値で取得
      	var position = target.offset().top;
      	// スムーススクロール
      	$('body,html').animate({scrollTop:position}, speed, 'swing');
      	return false;
   	});

});

// タブ切り替えメニュー
$(function() {
    $(".tab li").click(function() {
        var num = $(".tab li").index(this);
        $(".movieArea").addClass('hidden');
        $(".movieArea").eq(num).removeClass('hidden');
        $(".tab li").removeClass('selected');
        $(this).addClass('selected')
    });
});

/*
//PC用ニュースカルーセル表示
$(function(){
	$('.carousel').bxSlider({
		auto: false,
    	speed: 1000,
    	displaySlideQty: 3, //一画面に表示する数
    	moveSlideQty: 3, //移動時にずれる数
    	prevText: '<',
   		nextText: '>',
		pager: false,
		slideWidth: 120,
		minSlides: 3,
    	maxSlides: 3,
		slideMargin: 10,
		infiniteLoop: false, //ループさせるか否か
		hideControlOnEnd: true
	});
});
//スマホ用ニュースカルーセル表示
$(function(){
	$('.carousel_sp').bxSlider({
		auto: false,
    	speed: 1000,
    	displaySlideQty: 2, //一画面に表示する数
    	moveSlideQty: 2, //移動時にずれる数
    	prevText: '<',
   		nextText: '>',
		pager: false,
		slideWidth: 135,
		minSlides: 2,
    	maxSlides: 2,
		slideMargin: 10,
		infiniteLoop: false, //ループさせるか否か
		hideControlOnEnd: true
	});
});


//スマートフォンではtoggleメニュー
$(function() {
  $(".mainMenu").naver({
      animated: true
  });
});
*/