$(function () {
    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        parallax: true,/*겹치는 슬라이드이다. wiper-parallax="300" html에 적어줘야됨*/
        speed: 1000,/*옮기는거1초*/
    });/*슬라이드 돌아감, 베껴쓰면된다.*/
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
    $('.main_content .tab_menu button').on('click', function () {
        let idx = $(this).index(); // 클릭한 것의 번호를 가져와서 저장함
        console.log(idx);

        $('.main_content .tab_menu button').removeClass('on');
        $(this).addClass('on');

        $('.main_content .tab_content .con').removeClass('on');
        $('.main_content .tab_content .con').eq(idx).addClass('on');
    });
});
