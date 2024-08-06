/*include header*/
$(function(){
    $('#includeheader').load('header.html');
})

$(function(){
    $('#player').load('player-bar.html')
})

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $('.channel-podcast').addClass('fixed-web');
    } else {
        $('.channel-podcast').removeClass('fixed-web');
    }
})
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $('.navbar').addClass('fix-header');
    } else {
        $('.navbar').removeClass('fix-header');
    }
})