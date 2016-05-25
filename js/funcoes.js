var incremento = 0
$('ul#menu li').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){
    incremento++
    if(incremento == 5){
        $('ul#menu li, .introLogo').removeClass('intro');
        $('body').css({"background":"white"});
    }
});

$('ul#menu li').on('click',function(){
    var id = $(this);
    var section = id.attr("data-section");
    var zoom = id.attr("data-zoom");
    id.parent().css({"z-index":"0"});
    id.siblings().fadeOut(300);
    id.addClass(zoom);
    
});
