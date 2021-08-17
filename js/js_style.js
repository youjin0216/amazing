$(function(){
	$("nav > ul > li").hover(
		function(){
			//$(this).find("ul").css({display: "block"})
			$(this).children("ul").stop().slideDown(300);

		},
		function(){
			//$(this).find("ul").css({display: "none"})
			$(this).children("ul").stop().slideUp(300);
		}
	);

	$(".controller li").click(function(){
    $(".controller li").removeClass("on");
    $(this).addClass("on");

    var n = $(this).index();
    $(".circle-keyvisual ul").css({marginLeft: (-300) * n });
  });


	var owl=$("#owl"); // container입니다.
	owl.owlCarousel({
		autoPlay: true, // 자동 실행될 내용인지에 대한 내용을 설정합니다.
		navigation: false, // prev, next 버튼에 대한 영역의 보임을 설정합니다.
		singleItem: true, // 하나의 이미지만 보일지 여러 개의 이미지를 보일지를 설정합니다.
		items: 1, // singleItem이 false인 경우, 보일 이미지의 개수를 설정합니다.
		transitionStyle: "fade", // transition을 설정합니다.(fade, backSlide, goDown, fadeUp)
		beforeMove: beforeMove, // 동작이 시작될 때, 호출되는 함수를 설정합니다.
		afterMove: afterMove, // 동작이 종료될 때, 호출되는 함수를 설정합니다.
	});
	function beforeMove(){
		// console.log("before move");
	}

	$(".description").eq(0).addClass("active");

	function afterMove(){
		// console.log("after move");
		$(".owl-pagination .owl-page").each(function(){
			if($(this).hasClass("active")){
				// console.log($(this).index());
				var n=$(this).index();
				$(".description").removeClass("active");
				$(".description").eq(n).addClass("active");
			}
		});
	}

	$(".mini-keyvisual li").click(function(e){
		e.preventDefault(); // a 링크 처리 방지
		$(".mini-keyvisual li").removeClass("on");
		$(this).addClass("on");
		var n=$(this).index();
		// console.log(n);
		// console.log($(".mini-pic img").attr("src")); // attr : attribute(속성)
		/*
		0 ---> images/sub_key01.png ---> "images/sub_key0"+(n+1)+".png"
		1 ---> images/sub_key02.png
		2 ---> images/sub_key03.png
		*/
		var url="images/sub_key0"+(n+1)+".png";
		$(".mini-pic img").attr("src", url)
			.css({opacity:0})
			.animate({opacity:1}, 300); // jQuery animation
	});

	$(".mini-keyvisual a").click(function(){
			var color=$(this).attr("data-color");
			$(".mini-keyvisual ul").css({"background-color":color});
	});

	var dataArray=new Array();

	dataArray[0]="<span>인도의 Gold City<br>자이살메르 Jaisalmer</span><br> <br>사막 위 최고의 낭만, 낙타 사파리<br>사막과 낙타를 보기위해 사람들이 몰려온다 <br> 사막 한가운데서 많은 별을 볼 수 있는 <br>낭만적인 밤을 기대해도 좋다.";
	dataArray[1]="<span>덴마크 오덴세, <br>동화<미운 오리새끼>의 무대</span><br><br>자연생태계를 고스란히 보존해 놓은 정원, <br> 나무와 꽃 사이의 분수와 아담한 조각상, <br>누구나 휴식을 취할 수 있도록 만든 예쁜 의자는 <br>새삼 이곳이 동화의 무대이을 깨닫게 한다."; // Array ---> AJAX

	$("section .title li a").click(function(e){
		e.preventDefault();
		var n=$(this).parent().index();
		var str="images/banner"+(n+1);
		$(".desc").html(dataArray[n]);
		$(".picture img").attr("src", str+".png");
		$("#banner .background").css({"background-image":"url("+str+".jpg)"});
	});
});
