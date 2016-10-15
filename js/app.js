(function ($) {
    $(document).ready(function () {

        $('.profile-image').on('mouseover', function () {
            $('.settings').stop().toggle(); //css('display', 'none');
        });

        $('.profile-image').focusout(function () {
            $('.settings').hide();
        });
    });
})(jQuery);