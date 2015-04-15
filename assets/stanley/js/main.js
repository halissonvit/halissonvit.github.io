$(document).ready(function () {
    $('div.form-group.float-label-wrapper').floatLabel();
    $('img.swap-to-gif').swapToGif();

    var properties = {
        offset: '#ww',
        clone: true,
        throttle: 500
    };
    new Headhesive('.navbar', properties);
});