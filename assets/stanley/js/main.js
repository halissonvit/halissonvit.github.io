$(document).ready(function () {
    $('div.form-group.float-label-wrapper').floatLabel();
    $('img.swap-to-gif').swapToGif();

    var properties = {
        offset: '#ww',
        clone: true,
        throttle: 500,
        onStick: function (headhesive) {
            $.each([headhesive.elem, headhesive.targetElem], function(i, navbar) {
                $(navbar).find('.avatar').removeClass('invisible');
            });
        },
        onUnstick: function (headhesive) {
            $.each([headhesive.elem, headhesive.targetElem], function(i, navbar) {
                $(navbar).find('.avatar').addClass('invisible');
            });
        }

    };
    var headhesive = new Headhesive('.navbar', properties);
});