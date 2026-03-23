$(function(){


$('.drawer').drawer();
$('.c1_content').hide();


let scroll;
let winH = $(window).height();
let objTop = $('.c1').offset().top;
$(window).on('scroll', function(){
    scroll = $(window).scrollTop();
    if(scroll >= objTop - winH/2){
        $('.aaa').fadeIn(1500);
    }else{
        $('.aaa').fadeOut(500);
    }
});
let scrol2;
let winH2 = $(window).height();
let objTop2 = $('.c1').offset().top;
$(window).on('scroll', function(){
    scroll2 = $(window).scrollTop();
    if(scroll2 >= objTop2 - winH2/2){
        $('.bbb').fadeIn(1500);
    }else{
        $('.bbb').fadeOut(500);
    }
});
let scrol3;
let winH3 = $(window).height();
let objTop3 = $('.c1').offset().top;
$(window).on('scroll', function(){
    scroll3 = $(window).scrollTop();
    if(scroll3 >= objTop3 - winH3/2){
        $('.ccc').fadeIn(1500);
    }else{
        $('.ccc').fadeOut(500);
    }
});


$('.hover1').hover(function(){
    $('.ura1').css('transform','rotate(10deg)');
},function(){
    $('.ura1').css('transform','rotate(6deg)');
});
$('.hover2').hover(function(){
    $('.ura2').css('transform','rotate(8deg)');
},function(){
    $('.ura2').css('transform','rotate(5deg)');
});
$('.hover3').hover(function(){
    $('.ura3').css('transform','rotate(5deg)');
},function(){
    $('.ura3').css('transform','rotate(3deg)');
});
$('.hover4').hover(function(){
    $('.ura4').css('transform','rotate(12deg)');
},function(){
    $('.ura4').css('transform','rotate(6deg)');
});

$(document).ready(function() {
    $('.drawer').drawer();
});


let num = $(window).width();
if (num < 657) {
    $('.td3').html('');
    $('.tuika1').html($('.tuika1').html()+'<li>製造</li><li>電気工事</li>');
} else {
    console.log('画面幅657px以下でtableのHTML変更');
}


});