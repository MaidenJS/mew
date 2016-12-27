(function ($) {
    $(document).ready(function () {

        // Nav Bar settings
        var nav_settings = $('.navbar-container__nav-settings');
        $(document).on('click', function() {
            if (nav_settings.css('display') == 'block') {
                nav_settings.css({
                    'display': 'none'
                });
            }
        });
        $('.navbar-container__profile-image').on('click', function(event) {
            nav_settings.toggle(function() {
                $(this).css({
                    'position': 'absolute',
                    'right': 0,
                    'z-index': 2
                });
            });
            event.stopPropagation();
        });

    });
})(jQuery);