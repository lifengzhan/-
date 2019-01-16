$('.head_top p').click(function(){
    $('.head_content').css({
        'opacity' : 1
 
    })
    $('.head_content').stop().slideToggle(500);
    
  })
//   顶部区域
$('.nav_li').click(function(){
    var num = $(this).index();
    $('.none_box').eq(num).css({
        
        'opacity' : 1
    })
    $('.none_box').eq(num).stop().fadeToggle(200).siblings('.none_box').stop().fadeOut(200)  
   
    

})
$('.none_box .X').click(function(){

    $('.none_box').stop().slideUp()
})
$('.denglu a').mouseenter(function(){
    $('.login_none').stop().fadeIn(500)
})
$('.login_none').mouseleave(function(){
    $('.login_none').stop().fadeOut(500)
})














$('.top_right').children('a').eq(0).mouseenter(function(){
    // $('.erweima').css('display','block')
    $('.erweima').stop().fadeIn(500)
})
$('.top_right').children('a').eq(0).mouseleave(function(){
    $('.erweima').stop().fadeOut(500)
})


$('.tubiao a').mouseenter(function(){
    var num = $(this).attr('data-index')
    $('.hahaha').eq(num).stop().fadeIn(
    500)
})
$('.tubiao a').mouseleave(function(){
    var num = $(this).attr('data-index')
    $('.hahaha').eq(num).stop().fadeOut(500)
})