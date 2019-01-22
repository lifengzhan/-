$(window).scroll(function () {
//    给window设置滚动事件
    var w_s = $(window).scrollTop()
//    获取距离顶部的距离
    // console.log(w_s)




    for (var i = 0; i < $('.none_pic').length; i++) {
    //  循环遍历  

        if (w_s >= $('.none_pic').eq(i).offset().top - 300) {

            $('.none_pic').eq(i).stop().fadeOut(300)

           
            
        }
    
    
    }
    
    // for(var j =0 ;j<$('.li_tag').length;j++){
    //     if (w_s >= $('.li_tag').eq(j).offset().top - 300) {

    //         $('.li_tag').eq(j).stop().fadeIn(100)
    // }
    // //   console.log(new_index)
    // }
        if(w_s > 1000){

            $('.to_top').fadeIn(300)
        }else{
            $('.to_top').fadeOut(300)
        }

})

$('.l_btn').mouseenter(function () {

    $(this).css({
        'background': 'black',
        'color': 'white',
        'transition': '0.5s'
    })

})
$('.l_btn').mouseleave(function () {

    $(this).css({
        'background': '',
        'color': 'black',
        'transition': '0.5s'
    })

})
$('.r_btn').mouseenter(function () {

    $(this).css({
        'background': 'red',
        'color': 'white',
        'transition': '0.5s'
    })

})
$('.r_btn').mouseleave(function () {

    $(this).css({
        'background': '',
        'color': 'black',
        'transition': '0.5s'
    })

})



$('.bottom_btn').mouseenter(function () {

    $(this).css({

        'background': 'black',
        'color': 'white',
        'transition': '0.3s'

    })
})
$('.bottom_btn').mouseleave(function () {

    $(this).css({

        'background': 'white',
        'color': 'black',
        'transition': '0.3s'

    })
})

$('.to_top').click(function () {

    $('html,body').animate({
        scrollTop: 0
    }, 2000)

})