

var cishu = 0;
//   设置顶部p标签点击事件显示下面隐藏盒子以及箭头向上或向下
$('.head_top p').click(function(){
cishu++;
// console.log(cishu)
  
    $('.head_content').stop().slideToggle(500);
      
    if(cishu%2 != 0){

        $(this).children('i').css({
            'transform':'rotate(180deg)',
            'transition':'1s'
        })
      }else if(cishu%2 == 0){
        $(this).children('i').css({
            'transform':'rotate(0deg)',
            'transition':'1s'
        })
      }
    
  })
//   顶部区域
//   设置导航栏里面li的点击事件使对应的隐藏盒子显示  
$('.nav_li').click(function(){
   
    var num = $(this).index();
    $('.none_box').eq(num).css({
        
        'opacity' : 1
    })
    $('.none_box').eq(num).stop().fadeToggle(200).siblings('.none_box').stop().fadeOut(200)  
   
    $(this).find('i').addClass('icon-iconfontup').removeClass('icon-iconfontdown').end().siblings().find('i').removeClass('icon-iconfontup').addClass('icon-iconfontdown')

    

})
$('.top_nav').mouseleave(function(){
    $(this).children('.none_box').stop().slideUp(200)
    $(this).children('.nav_ul').find('i').addClass('icon-iconfontdown').removeClass('icon-iconfontup')
})
$('.none_box .X').click(function(){

    $('.none_box').stop().slideUp()
 var index = $(this).attr('new');
//  console.log(index)

$(this)
.parent().siblings('.nav_ul').children('.nav_li').eq(index).find('i').addClass('icon-iconfontdown').removeClass('icon-iconfontup')

})
$('.denglu a').mouseenter(function(){
    $('.login_none').stop().fadeIn(500)
})
$('.login_none').mouseleave(function(){
    $('.login_none').stop().fadeOut(500)
})
//    video里面的a标签设置鼠标进入事件  改变其css样式
$('.video_box_text a').mouseenter(function(){

    $(this).css({
        'transition':'0.4s',
        'background':'#f9f9f9',
        'color':'black'
    })
})
// 设置video里面a标签鼠标离开样式  改变其css样式
$('.video_box_text a').mouseleave(function(){

    $(this).css({
        'transition':'0.4s',
        'background':'transparent',
        'color':'#f9f9f9'
    })



})



//   以下为底部二维码显示隐藏
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