$(function () {


    const MVS = new Swiper('.main_visual_slide', {
        loop: true,
        parallax: true,
        //effect: 'fade', /*이미지에fade주기(effect: 'fade',)*/
        speed: 1000,
        pagination: {
            el: '.main_visual .page',
            clickable: true, /*클릭안되면 쓰면된다.*/
        },/*도트만들때필요함*/

    });


    const main_manual_slide = new Swiper('.main_manual_slide', {
        loop: true,
        slidesPerView: 3.5,
        spaceBetween: 30,
    });




    $('.main_manual .step button').on('click', function () {
        let idx = $(this).parent().index();
        main_manual_slide.slideToLoop(idx);
    })


    /*autoplay.start*/

    const MBS = new Swiper('.main_brand_slide', {
        loop: true,
        effect: 'fade', /*이미지에fade주기(effect: 'fade',)*/
        pagination: {
            el: '.main_brand .page',
            clickable: true, /*클릭안되면 쓰면된다.*/
        },/*도트만들때필요함*/
        navigation: {
            nextEl: '.main_brand .next',
            prevEl: '.main_brand .prev',
        },/*화살표*/
    });


});



$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('#header').addClass('on');
        } else {
            $('#header').removeClass('on');
        }
    });
});

$(function () {
    $('.main_menu .tab_menu button').on('click', function () {
        let idx = $(this).index(); // 클릭한 것의 번호를 가져와서 저장함
        console.log(idx);

        $('.main_menu .tab_menu button').removeClass('on');
        $(this).addClass('on');

        $('.main_menu .tab_menu_content .con').removeClass('on');
        $('.main_menu .tab_menu_content .con').eq(idx).addClass('on');
    });
});


$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 })
    });

    $(window).on('scroll', function () {
        //스크롤 된 양을 구함.
        let sct = $(window).scrollTop();
        console.log(sct)

        if (sct > 200) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });
});