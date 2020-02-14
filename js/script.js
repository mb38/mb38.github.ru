/* HEADER MENU */
let win = $(window),
    fixed = $(".header_fixed"),
    limit = 1080;

function tgl (state) {
    fixed.toggleClass("header_hidden", state);
}

win.on("scroll", function() {
	let top = win.scrollTop();
    
    if (top < limit) {
        tgl(true);
    } else {
        tgl(false);
    }
});

/* Smooth transition menu */
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});