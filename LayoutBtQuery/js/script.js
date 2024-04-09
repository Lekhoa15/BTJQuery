/***************************************************************************
*
* SCRIPT JS
*
***************************************************************************/

$(document).ready(function(){


    // Hover Button for All Pages
    $('.hoverJS').hover(function(){
        $(this).stop().fadeTo(100,0.8);
    },function(){
        $(this).stop().fadeTo(100,1);
    });
    

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });


    

});