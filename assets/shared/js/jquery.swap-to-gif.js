(function ($) {

    $.fn.swapToGif = function () {
        var staticImg = this.attr('src');
        var gifImg = this.data('gif-src') ? this.data('gif-src') : staticImg.substr(0, staticImg.lastIndexOf(".")) + ".gif";

        this.hover(function () {
            $(this).attr('src', gifImg);

        }, function () {
            // on mouse leave
            $(this).attr('src', staticImg);
        });
    };
})(jQuery);