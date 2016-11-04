/**
 * Created by huyanh on 2016. 11. 2..
 */
$(document).ready(function() {

    $('.mobile-menu').on("click", function () {
        console.log("hello");
        var distance = $('.main').css('right');

        if (distance == "auto" || distance == "0px") {
            openSidepage();
        } else {
            closeSidepage();
        }
    });
});

function openSidepage() {
    $('.main').animate({
        right: '280px'
    }, 400, 'easeOutBack');

}

function closeSidepage(){
    $('.main').animate({
        right: '0px'
    }, 400, 'easeOutQuint');
}

