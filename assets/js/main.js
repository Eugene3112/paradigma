$(document).ready(function(){
    $('.modal-send-all').on('click', function(){
        $('.widow-education').fadeIn();
        $('.modal-window').fadeIn();
    });
    $('.close').on('click',function(){
        $('.modal-window').fadeOut();
        $('.success-modal').fadeOut();
    });
    $('.button-modal').on('click',function(){
        event.preventDefault();
        $('.widow-education').fadeOut();
        $('.success-modal').fadeIn();
    });  
    $('.information-content__icon').on('mouseenter', function(){
        $('.focus-modal').fadeIn();
    });
    $('.information-content__icon').on('mouseleave', function(){
        $('.focus-modal').fadeOut();
    });
    $('.map-link').on('click', function(){
        $('.map').toggle('.hidden')
    });
    $('.mobile-nav').on('click', function(){
        $('.wrapper-navigation').toggle('.hidden-menu')
    });
   
    
});