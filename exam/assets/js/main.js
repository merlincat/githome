$(function(){

    // $(".hamburger, #nav_shadow").on('click', function(){
    //     $(".hamburger").toggleClass("is-active");
    //     $("body").toggleClass("open");
    // })
    $(".hamburger").on('click', function(){
        $(".hamburger").toggleClass("is-active");
    })
    
    // $(".m_list_item-link").on('click',function(){
    //     $(".hamburger").removeClass("is-active");
    //     $("body").removeClass("open");
    // });
    // $(".m_list_item-link, list_item-link").on('click', function(e){
    //     e.preventDefault();
    //     let top = $($(this).attr("href")).offset().top;
    //     $("html, body").animate({scrollTop:top}, 400);
    // });
    // $("#to_top").on('click', function(){
    //     $("html, body").animate({scrollTop:0}, 400);
    // })
});