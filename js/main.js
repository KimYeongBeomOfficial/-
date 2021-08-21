$(function()
{
var wind = $(window),
    header = $('.top_box'),
    headerOffsetTop = header.offset().top;

    console.log(headerOffsetTop);

wind.scroll(function(){
    if(wind.scrollTop() >= headerOffsetTop)
       {header.addClass('sticky')}
    else
       {header.removeClass('sticky')}
    });
});