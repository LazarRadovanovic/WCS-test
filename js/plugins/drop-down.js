$('.nav-item').click(function(){
    if ($(this).hasClass('active-nav-item')) {
        $(this).removeClass('active-nav-item');
        $(this).children('ul').removeClass('active-sub-menu');
    } else {
        $('.nav-item.active-nav-item').removeClass('active-nav-item');
        $(this).addClass('active-nav-item');
        $(this).children('ul').addClass('active-sub-menu');
    } 
});

$(document).mouseup(function (e){
    var drop_item = $(".drop-item");
    var sub_menu = $(".sub-menu");

    if (!drop_item.is(e.target) && drop_item.has(e.target).length === 0)  {
        sub_menu.removeClass('active-sub-menu');
        drop_item.removeClass('active-nav-item');
    }
});
