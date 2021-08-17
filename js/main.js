$(function(){
	var owl=$("#owl"); // container입니다.

	owl.owlCarousel({
		navigation : true, // prev, next 버튼에 대한 영역의 보임을 설정합니다.
		singleItem : true, // 하나의 이미지만 보일지 여러 개의 이미지를 보일지를 설정합니다.
		transitionStyle : "fadeUp" // transition을 지정합니다. (fade, backSlide, goDown, fadeUp)
	});

	// Select Transtion Type
	$("#transitionType").change(function(){
		var newValue=$(this).val();
		// TransitionTypes is owlCarousel inner method.
		owl.data("owlCarousel").transitionTypes(newValue);
		// After change type go to next slide
		owl.trigger("owl.next");
	});
});