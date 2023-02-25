(function(){

	$(document).ready(function() {
		
		$(".menu-wrap .menu a").mouseenter(function(){
			$(".sub-menu").show();
		})		
		$(".header-area").mouseleave(function(){
			$(".sub-menu").hide();
		});

		$(".sub-menu .menu-box .menu").mouseenter(function(){
			var menuNum = $(this).index();
			$(".header-wrap .header .menu-wrap .menu > li").removeClass('active');
			$(".header-wrap .header .menu-wrap .menu > li").eq(menuNum).addClass('active');
		}).mouseleave(function(){
			$(".header-wrap .header .menu-wrap .menu > li").removeClass('active');
		});

		$("a.disabled").removeAttr("href");
	});
})();

