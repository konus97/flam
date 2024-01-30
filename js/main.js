
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
        $( window ).scroll( function() {
            if ( $( this ).scrollTop() > 600 ) {/*600보다 더 내려왔을 때 해당 아이콘이 보이게 함*/
            $( '.top_btn' ).fadeIn();
                } else {
                    $( '.top_btn' ).fadeOut();
                }
        } );
        $( '.top_btn' ).click( function() {
            $( 'html, body' ).animate( { scrollTop : 0 }, 400 );/*클릭 시 상단으로 올라가는데 0.4초소요*/
        return false;
        } );
    });

