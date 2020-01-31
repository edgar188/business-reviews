// Users section Magnific-popup handler
$(document).ready(function () {
    $('.popup-user-info').magnificPopup({
        type: 'inline',
        midClick: true,
        preloader: false,
    });

    $('#close').click(function() {
        $.magnificPopup.close();
    });
});