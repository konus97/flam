
    $(function(){
        window.onload = function () {
            var elm = "#wrap>section";
            $(elm).each(function (index) {
                // 개별적으로 Wheel 이벤트 적용
                $(this).on("wheel DOMMouseScroll", function (e) {
                    e.preventDefault();
                    var delta = 0;
                    if (!event) event = window.event;
                    if (event.wheelDelta) {
                        delta = event.wheelDelta / 120;
                        if (window.opera) delta = -delta;
                    }
                    else if (event.detail)
                        delta = -event.detail / 3;
                    var moveTop = $(window).scrollTop();
                    var elmSelecter = $(elm).eq(index);
                    // 마우스휠을 위에서 아래로
                    if (delta < 0) {
                        if ($(elmSelecter).next() != undefined) {
                            try {
                                moveTop = $(elmSelecter).next().offset().top;
                            } catch (e) { }
                        }
                        // 마우스휠을 아래에서 위로
                    } else {
                        if ($(elmSelecter).prev() != undefined) {
                            try {
                                moveTop = $(elmSelecter).prev().offset().top;
                            } catch (e) { }
                        }
                    }

                    // 화면 이동 0.8초(800)
                    $("html,body").stop().animate({
                        scrollTop: moveTop + 'px'
                    }, {
                        duration: 600, complete: function () {
                        }
                    });
                });
            });
        }
            // 스크롤 이벤트를 추가하기 전에 윈도우의 너비를 확인합니다.
            if ($(window).width() >= 1024) {
                attachScrollEvent();
            }

            // 윈도우 리사이즈 이벤트에 따라 스크롤 이벤트를 업데이트합니다.
            $(window).resize(function () {
                if ($(window).width() >= 1024) {
                    // 기존 스크롤 이벤트를 제거합니다.
                    $(elm).off("wheel DOMMouseScroll");
                    // 스크롤 이벤트를 다시 추가합니다.
                    attachScrollEvent();
                } else {
                    // 윈도우 너비가 767px 미만인 경우 스크롤 이벤트를 제거합니다.
                    $(elm).off("wheel DOMMouseScroll");
                }
}); 
        
    });

    $(function(){
        var $header = $('header'); //헤더를 변수에 넣기
        var $page = $('.visual_text p'); //색상이 변할 부분
        var $window = $(window);
        var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
        
        $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
            pageOffsetTop = $page.offset().top;
        });
        
        $window.on('scroll', function(){ //스크롤시
            var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
            $header.toggleClass('down', scrolled); //클래스 토글
        });
    });

    $(function(){
        let baseline = -300;
        let pos1 = $("#main").offset().top + baseline;
        let pos2 = $("#work").offset().top + baseline;
        let pos3 = $("#offer").offset().top + baseline;
        let pos4 = $("#map").offset().top + baseline;

        $(window).on("scroll", function () {
            let scroll = $(this).scrollTop();

            if (scroll >= pos1 && scroll < pos2) {
                $("#navi li").removeClass("on");
                $("#navi li").eq(0).addClass("on");
            
            } else if (scroll >= pos2 && scroll < pos3) {
                $("#navi li").removeClass("on");
                $("#navi li").eq(1).addClass("on");
            
            } else if (scroll >= pos3 && scroll < pos4) {
                $("#navi li").removeClass("on");
                $("#navi li").eq(2).addClass("on");
                
            } else {
                $("#navi li").removeClass("on");
                $("#navi li").eq(3).addClass("on");
            
            }


        });


        $("#navi li").on("click", function () {
            let target = $(this).children("a").attr("href");
            //alert(target);
            let pos = $(target).offset().top;
            //alert(pos);
        $("html,body").stop().animate({ scrollTop: pos }, 800);
        
        });
        /*fade in&out효과*/
        AOS.init();
    });

   


    /*scroll top버튼*/
    $(function(){
        $('.top_btn').hide();
        $(window).scroll(function() {
            
            var serviceTop = $('.service').offset().top;
        
            if ($(window).scrollTop() >= serviceTop) {
              $('.top_btn').fadeIn();
            } else {
              $('.top_btn').fadeOut();
            }
          });
        $( '.top_btn' ).click( function() {
            $( 'html, body' ).animate( { scrollTop : 0 }, 400 );/*클릭 시 상단으로 올라가는데 0.4초소요*/
        return false;
        } );
    });

    /*모바일 서비스 터치 이벤트*/
    $(document).on("touchstart", ".service_box", function () {
        console.log("Touch start event");
    
        var $currentServiceBox = $(this);
        var $pElements = $(".service_box").not($currentServiceBox).children("p");
    
        // 다른 요소의 p 숨기기
        $pElements.stop().animate({opacity:"0"});
    
        // 현재 요소의 p 3초 동안 보이게 하기
        $currentServiceBox.children("p").stop().animate({opacity:"1"});
    
        // 3초 후에 현재 요소의 p 숨기기
        setTimeout(function() {
            $currentServiceBox.children("p").stop().animate({opacity:"0"});
        }, 3000);
    });
    

    


    /*스크롤 시 지도 움직임 막기*/
    $(function(){
        
        map.setDraggable(false);
        map.setZoomable(false);
    });

  