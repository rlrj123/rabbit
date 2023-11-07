$('.gnb>li').mouseenter(function(){
$('.sub').stop().slideDown();
})
$('.gnb>li').mouseleave(function(){
$('.sub').stop().slideUp();
})