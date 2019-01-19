$(window).scroll(function () {

    var w_s = $(window).scrollTop()

    // console.log(w_s)




    for (var i = 0; i < $('.none_pic').length; i++) {


        if (w_s >= $('.none_pic').eq(i).offset().top - 300) {

            $('.none_pic').eq(i).stop().fadeOut(100)
        }

    }
    //   console.log(new_index)

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