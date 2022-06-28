$(function(){
    //Header Icon
    $('.header .contain .menu').click(function(){
        $('.header .contain .tools').fadeToggle()
    })
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $('.header').css({
                'position':'fixed'
            })
        }
        else{
            $('.header').css({
                'position':'relative'
            })
        }
    })
    

    //Title Icons
    var anime = setInterval(()=>{
        if($('.title .one').css('left')=='0px'){
            $('.title .one').animate({
                left:'-100%'
            })
            $('.title .two').animate({
                left:'0%'
            })
            $('.title .three').animate({
                left:'100%'
            })
        }
        else if($('.title .two').css('left')=='0px'){
            $('.title .one').animate({
                left:'-200%'
            })
            $('.title .two').animate({
                left:'-100%'
            })
            $('.title .three').animate({
                left:'0%'
            })
        }
        else if($('.title .three').css('left')=='0px'){
            $('.title .one').animate({
                left:'0%'
            })
            $('.title .two').animate({
                left:'100%'
            })
            $('.title .three').animate({
                left:'200%'
            })
        }
    },10000)
    $('.title > i').eq(0).click(function(){
        clearInterval(anime);
        if($('.title .one').css('left')=='0px'){
            $('.title .one').animate({
                left:'-100%'
            })
            $('.title .two').animate({
                left:'0%'
            })
            $('.title .three').animate({
                left:'100%'
            })
        }
        else if($('.title .two').css('left')=='0px'){
            $('.title .one').animate({
                left:'-200%'
            })
            $('.title .two').animate({
                left:'-100%'
            })
            $('.title .three').animate({
                left:'0%'
            })
        }
        else if($('.title .three').css('left')=='0px'){
            $('.title .one').animate({
                left:'0%'
            })
            $('.title .two').animate({
                left:'100%'
            })
            $('.title .three').animate({
                left:'200%'
            })
        }
    })
    $('.title > i').eq(1).click(function(){
        clearInterval(anime);
        if($('.title .one').css('left')=='0px'){
            $('.title .one').animate({
                left:'-200%'
            })
            $('.title .two').animate({
                left:'-100%'
            })
            $('.title .three').animate({
                left:'0%'
            })
        }
        else if($('.title .two').css('left')=='0px'){
            $('.title .one').animate({
                left:'0%'
            })
            $('.title .two').animate({
                left:'100%'
            })
            $('.title .three').animate({
                left:'200%'
            })
        }
        else if($('.title .three').css('left')=='0px'){
            $('.title .one').animate({
                left:'-100%'
            })
            $('.title .two').animate({
                left:'0%'
            })
            $('.title .three').animate({
                left:'100%'
            })
        }
    })


    //Title Button
    $('.title .contain .content .btn button').click(function(){
        Swal.fire(
            'Sorry!',
            'Booking Is Closed!',
            'info'
        )
    })


    //Icon Of City
    $('.city .contain .bottom .icon').click(function(){
        $('.city .contain .bottom .video').fadeIn()
        $('.city .contain .bottom .video').css({
            'z-index':'99'
        });
        $('.city .contain .bottom .video video source').attr('src','../Images/Learn HTML In Arabic 2021 - _23 - Video(480P).mp4');
    })
    $('.city .contain .bottom .video .icon').click(function(){
        $('.city .contain .bottom .video').fadeOut()
        $('.city .contain .bottom .video').css({
            'z-index':'-1'
        });
        $('.city .contain .bottom .video video source').attr('src','');
    })



    //Pop Button
    $('.pop .contain .btn').click(function(){
        if($(this).find('button span').html()=='View All Tour'){
            $(this).find('button span').html('View Main Tour')
            $('.pop .contain .bottom .box.fade').fadeIn();
        }
        else{
            $(this).find('button span').html('View All Tour')
            $('.pop .contain .bottom .box.fade').fadeOut();
        }
    })


    //About Button
    $('.about .contain .right .btn').click(function(){
        if($(this).find('button span').html()=='Read More'){
            $(this).find('button span').html('Read Less')
            $(this).parent().find('p').text('Aliquam erat volutpat. Donec lobortis risus ut nunc ultrices, ut bibendum nibh auctor. Fusce dolor purus, fringilla a felis sed, gravida pellentesque sem. Etiam faucibus massa in fringilla eleifend. In hac habitasse platea dictumst. Duis varius, metus quis sodales mattis, massa dolor consequat urna, quis varius quam mauris id ante. Vestibulum at dictum quam, nec elementum tortor. Duis gravida feugiat ornare. Maecenas a urna in lacus pretium tristique. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cum, officia debitis vitae nam asperiores possimus laboriosam iste beatae fugit, cupiditate sed rem impedit earum accusantium, explicabo nostrum sunt necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quis neque at in perspiciatis velit eaque mollitia eligendi exercitationem obcaecati!')
        }
        else{
            $(this).find('button span').html('Read More')
            $(this).parent().find('p').text('Aliquam erat volutpat. Donec lobortis risus ut nunc ultrices, ut bibendum nibh auctor. Fusce dolor purus, fringilla a felis sed, gravida pellentesque sem. Etiam faucibus massa in fringilla eleifend. In hac habitasse platea dictumst. Duis varius, metus quis sodales mattis, massa dolor consequat urna, quis varius quam mauris id ante. Vestibulum at dictum quam, nec elementum tortor. Duis gravida feugiat ornare. Maecenas a urna in lacus pretium tristique...')
        }
    })


    //Inbox button
    $('.inbox .contain .right form .btn').click(function(){
        Swal.fire(
            'Good!',
            'Submit is Successed!',
            'success'
        )
    })


    //Book Now
    $('button').each(function(){
        $(this).click(function(){
            if($(this).find('span').html()=='Book Now'){
                Swal.fire(
                    'Sorry!',
                    'Booking Is Closed!',
                    'info'
                )
            }
        })
    })
})