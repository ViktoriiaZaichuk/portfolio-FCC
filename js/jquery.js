$(document).ready(function () {
    /* SCROLL UP */
    $(function () {
        $('.footer-go-up').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 'slow');
            return false;
        });
    });


    $(function () {
        $('.foot-up-hidden').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 'slow');
            return false;
        });
    });

    
    $(function () {
        $('.main-p-go-up').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 'slow');
            return false;
        });
    });

    /* SCROLL DOWN */
    $('.contact-me').click(function(){
        $('html, body').animate({
        scrollTop:$(document).height()
        }, 'slow');
        return false;
    });

});