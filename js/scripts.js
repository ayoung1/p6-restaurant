// My Scripts
$(document).foundation();

/*Menu Scroll*/
var scrollspeed = 1000;

$("#logob").click(function()
{
    scrollTo($("#home"), scrollspeed)
});

$("#homeb").click(function()
{
	scrollTo($("#home"), scrollspeed)
});

$("#aboutb").click(function()
{
	scrollTo($("#about"), scrollspeed)
});

$("#menub").click(function()
{
	scrollTo($("#menu"), scrollspeed)
});

$("#contactb").click(function()
{
	scrollTo($("#contact"), scrollspeed)
});

$("#contactb").attr('title', 'This is the hover text');

/*Functions*/
function scrollTo(selector, speed, easing, offset) {
    $(".contain-to-grid").fadeOut(0);

    if ($(selector)) {
        offset = (offset) ? offset : 0;
        speed = (speed) ? speed : 400;
        easing = (easing) ? easing : "swing";
        var ypos = $(selector).offset().top - offset;
 
        $('html, body').stop().animate({ scrollTop: ypos }, speed, easing);
    }

    $(".contain-to-grid").fadeIn(1000);
}