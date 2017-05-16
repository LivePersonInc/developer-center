$(document).ready(function () {

    // Initialize Fancybox
    $(".fancybox").fancybox({
        padding: 0,
    });
    $('.fancybox-media').fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        padding: 0,
        helpers: {
            media: {}
        }
    });
    $('.fancybox-department').fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        padding: 0,
        maxWidth: 500,
        width: '90%'
    });

    // Chat slideout 8 second delay

    $('#chatSlideOut').delay(2000).slideDown(900);

    //Slideout Standard SlideUp/Down
    function chatDropin() {
        $('#chatSlideOut a.open').click(function (event) {
            event.preventDefault();
            $('#chatSlideOut').removeClass('closed');
            $('#chatSlideOut').addClass('opened');
        });
        $('#chatSlideOut a.close').click(function (event) {
            event.preventDefault();
            $('#chatSlideOut').removeClass('opened');
            $('#chatSlideOut').addClass('closed');
        });
    };
    chatDropin();

});
