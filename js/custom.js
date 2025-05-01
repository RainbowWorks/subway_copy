$(function () {
    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        parallax: true,/*겹치는 슬라이드이다. wiper-parallax="300" html에 적어줘야됨*/
        speed: 1000,/*옮기는거1초*/
    });/*슬라이드 돌아감, 베껴쓰면된다.*/



    const MIS = new Swiper('.main_news_slide', {
        loop: true,
        effect: 'fade', /*이미지에fade주기(effect: 'fade',)*/
        pagination: {
            el: '.main_news .page',
            clickable: true, /*클릭안되면 쓰면된다.*/
        },/*도트만들때필요함*/
        navigation: {
            nextEl: '.main_news .next',
            prevEl: '.main_news .prev',
        },/*화살표*/
    });

    const main_manual_slide = new Swiper('.main_manual_slide', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
    });




    $('.main_manual .step button').on('click', function () {
        let idx = $(this).parent().index();
        main_manual_slide.slideToLoop(idx);
    })


    /*autoplay.start*/


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
