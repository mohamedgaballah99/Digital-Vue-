import $ from "../../node_modules/jquery/dist/jquery.min.js";
$(document).ready(function(){
    $(window).scroll(function(){
        if(($(this).scrollTop()) > 550){
            $('.icon').fadeIn();
        }
        else{
            $('.icon').fadeOut();
        }
    });
});