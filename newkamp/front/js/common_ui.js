

(function(){
	$(document).ready(function() {
		let childs = document.getElementsByClassName("slider")[0].childNodes;
		let countitem = 0;
		for(let i = 0; i < childs.length; i++) {
			if(childs[i].nodeName === "DIV") {
				countitem++;
			}
		}


		function slider(){
			$('.subSlider .slider').bxSlider({
				captions: false,
				slideWidth: 1200,
				pager : false,
				minSlides: 3,
				maxSlides: countitem,
				moveSlides: 1,
				slideMargin: 30,
				infiniteLoop: true,
				touchEnabled : false,
				onSlideBefore: function($slideElement, oldIndex, newIndex){
					$(".subSlider > .bx-wrapper").addClass("block");
				},
				onSlideAfter: function($slideElement, oldIndex, newIndex){
					$(".subSlider > .bx-wrapper").removeClass("block");
				}

			});
		}
		slider();



		function sliderPop(){
			var xxx = $(".pop .bxslider > div:eq(0)").height();
			$(".pop").height(xxx);
			var sw = ($('.slider-area.pop .slider').children().length > 1)?true:false;
			$('.slider-area.pop .slider').bxSlider({
				captions: false,
				slideWidth: 460,
				pager : true,
				controls: sw,
				minSlides: 1,
				maxSlides: 1,
				moveSlides: 1,
				slideMargin: 0,
				infiniteLoop: true,
				touchEnabled : false,
				onSlideBefore: function($slideElement, oldIndex, newIndex){
					$(".pop > .bx-wrapper").addClass("block");
				},
				onSlideAfter: function($slideElement, oldIndex, newIndex){
					$slideElement.css('height', $slideElement.children()[0].naturalHeight);
					let xxx = $slideElement.find("img").height();
					$slideElement.closest(".slider-area").height(xxx);
					$(".pop > .bx-wrapper").removeClass("block");
				}

			})
		}
		sliderPop();
	});

})();



// our multi slide adaptive height function passing slider object
function multiSlideAdaptiveHeight(slider) {


	// set our vars
	let activeSlides = [];
	let tallestSlide = 0;

	// very short delay in order for us get the correct active slides
	setTimeout(function() {

		// loop through each active slide for our current slider
		$('.slick-track .slick-active', slider).each(function(item) {

			// add current active slide height to our active slides array
			activeSlides[item] = $(this).outerHeight();

		});

		// for each of the active slides heights
		activeSlides.forEach(function(item) {

			// if current active slide height is greater than tallest slide height
			if (item > tallestSlide) {

				// override tallest slide height to current active slide height
				tallestSlide = item;

			}

		});

		// set the current slider slick list height to current active tallest slide height
		$('.item', slider).height(tallestSlide);

	}, 10);

}