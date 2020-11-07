$(function() {
    // wow初期化
    new WOW().init();

    var topBtn = $('.top-btn');
    topBtn.hide();
    $(window).scroll(function(){
        if($(this).scrollTop()>1000){
            topBtn.fadeIn(500);
        }else{
            topBtn.fadeOut(500)
        }
    })

    topBtn.click(function(){
        $('html').animate({
            scrollTop: 0
        }, 300);
        return false
    });

    // header実装
    $(function() {
        var _window = $(window)
        var _header = $('.header-nav')
    
        _window.on('scroll',function(){     
            heroBottom = $('.top').height();
            if(_window.scrollTop() > heroBottom){
                _header.addClass('fixed');
                $('.profile').addClass('fixed');
            }
            else{
                _header.removeClass('fixed');   
                $('.profile').removeClass('fixed');
            }
        });

        _window.trigger('scroll');
    });

    $(function() {
        $('.menu-bar').on('click', function () {
            $(this).toggleClass('open');
            $('.toggle-menu').toggleClass('open');
            $('.toggle-menu-back').toggleClass('open');
        });
      
        $('.toggle-menu-link').on('click', function() {
            $('.toggle-menu').removeClass('open');
            $('.toggle-menu-back').removeClass('open');
            $('.menu-bar').removeClass('open');
        })
    });

    // #から始まるURLがクリックされた時
    jQuery('a[href^="#"]').click(function() {
        let speed = 300;
        let id = jQuery(this).attr("href");
        let target = jQuery("#" == id ? "html" : id);
        let position = jQuery(target).offset().top;
        // その分だけ移動すればヘッダーと被りません
        jQuery("html, body").animate(
        {
            scrollTop: position
        },
        speed
        );
        return false;
    });
})