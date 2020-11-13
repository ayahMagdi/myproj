
$(function(){


  window.onload = function(){

      $('body').css("paddingTop" , $('.final-clearance').height());

      $('.header-info').css("transform" , "translate(-50%,-50%) scale(1)");

      $('.subscribe-popup-container').delay(2000).fadeIn(500);

      // $('body').css("overflow" , "hidden")

      if($('.subscribe-popup-container').length > 0){

         $('body').css("overflow" , "hidden")  

         // console.log('hidden')        

      }

      $('.privacy-policy-popup').delay(1500).animate({

         // transform: 'scale(1)',
         opacity: '1',
         bottom: '20px'

      } , 300)

  }

   $('.final-clearance img').click(function(){

           $(this).parent('.final-clearance').animate({

            height : '0',
            opacity : '0'

          } , 300);

           $('body').css("paddingTop" , "0")

   })


 $('.subscribe-popup-container .close-img').click(function(){

     $(this).parents('.subscribe-popup-container').fadeOut(500);

     $('body').css("overflow" , "auto")

 })


 $('.info .client').click(function(){

    $('#' + $(this).data('value')).fadeIn(500 ,function(){

    	$(this).children().css("right" , "0");

    	$('body').css('overflow' , 'hidden');

         $(this).click(function(){

             $(this).fadeOut(500).children().css("right" , "-285px");

             $('body').css('overflow' , 'auto')

         })

    })

   $('#' + $(this).data('value')).children().click(function(e){

       e.stopPropagation();

   })

    $('.close-img').click(function(){

            $(this).parents('.parent-fadeout').fadeOut(500).children().css("right" , "-285px");

            $('body').css('overflow' , 'auto')

     })

    // $('.compare-container .close-img').click(function(){

    //         $(this).parent().parent().parent().fadeOut(500);

    //         $('body').css('overflow' , 'auto')

    //  

     $('.compare-container .d-fx').click(function(){

         $(this).parent().fadeOut(500);

         $('body').css('overflow' , 'auto')

     })

 })

 /******************************************/

     //  $('.close-img').click(function(){

     //        $(this).fadeOut(500)

     // })

  /*******************************************/

  $('.sign-up').click(function(){
 
     $(this).parents('.client-user-container').fadeOut(500 , function(){
 
         $('.sign-up-now-container').fadeIn(500 , function() {    

             $('.sign-up-now').css("right" , "0");

             $('body').css('overflow' , 'hidden');

             $(this).click(function(){

                  $(this).fadeOut(500);

                  $('body').css('overflow' , 'auto')

             })

         }) 

      $('.sign-up-now').click(function(e){

       e.stopPropagation();

     })

    $('.close-img').click(function(){

            $(this).parent().parent().fadeOut(500).children().css("right" , "-285px");

            $('body').css('overflow' , 'auto')

     })  

     })

  })

 /**********************************************/

 $('.wish-list-content button , .view-wishlist').click(function(){

    $(this).parents('.parent-fadeout').fadeOut(500 ,function(){

        $('.wish-list-pop-up').fadeIn(500);

        $('body').css('overflow' , 'hidden');

    })

 });

 $('.pop-up-content .close-img').click(function(){
 
   $(this).parents('.wish-list-pop-up').fadeOut(500);

   $('body').css('overflow' , 'auto');

 })

 $('.wish-list-pop-up').click(function(){
 
   $(this).fadeOut(500);

   $('body').css('overflow' , 'auto');

 })

  $('.pop-up-content').click(function(e){

       e.stopPropagation();

   })

  /*************************************************/
 $('.remove-product').each(function(){

    $(this).click(function(){

       $(this).parents('.parent-remove').fadeOut(200);

    })

 })

 $('.remove-all').click(function(){

       $(this).siblings('.delete-product').fadeOut(200);

       $(this).fadeOut(200);

 })

 $('.compare-content .remove-all').click(function(){

       $(this).siblings('.compare').children('.compare-products').children('.delete-product').fadeOut(200);

       $(this).fadeOut(200);

 })

  $('.compare').click(function(e){

     e.stopPropagation()

  })

  $('.cart-delete').click(function(e){

     e.preventDefault();

     $(this).parent().parent().fadeOut(200)

  })

   /*************************************************/

 $('.client-curreny').hover(function(){
 
     $('.currency-dropdown').slideDown();

 }, function (){

     $('.currency-dropdown').slideUp();    

 })

  /***********************************************************/

 $('.client-langs').hover(function(){
 
     $('.langs-dropdown').slideDown();

 }, function (){

    $('.langs-dropdown').slideUp();

 })

 /*********************************************************************************************/

 $('.navbar .navbar-ul > li').each(function(){

  $(this).hover(function(){

   $('#' + $(this).data('drop')).slideDown();

   $(this).siblings().children('section').slideUp();

  } ,function(){

    $('#' + $(this).data('drop')).slideUp();

  });

 });


    /*************************************************/

 $('.search').click(function(){
 
     $('.search-container').fadeIn(500 , function(){

         $(this).children('.search-content').css("top" , "0");

         $('.search-content input').focus();

         $(this).click(function(){

         	$(this).children('.search-content').css("top" , "-30%");

            $(this).fadeOut(500);

         })

     });

     $('.search-content').click(function(e){

        e.stopPropagation();

     })

     $('.search-content .close-img').click(function(){

            $('.search-content').css("top" , "-30%");

            $('.search-container').fadeOut(500)

     })

 })

/***********************************************/

 function changePhoto(){

 $('.product-top img.active').mouseenter(function(){

    if($(this).parent().parent().parent('.product-top').hasClass('img-hover')){

      $(this).attr('src' , 'imgs/' + $(this).data('hover'));
    }

 })

}

 function returnPhoto(){

 $('.product-top img.active').mouseleave(function(){

   if($(this).parent().parent().parent('.product-top').hasClass('img-hover')){

      $(this).attr('src' , 'imgs/' + $(this).data('leave'));

    }

 })

}

$('.product-top img.active').mouseenter(() => changePhoto())

$('.product-top img.active').mouseleave(() => returnPhoto())


 /**********************************************************/

 var ourImgs = $('.product-top .product-img .img-slider > img'),
     imgsLenght = ourImgs.length,
     currentSlide = 1;

$('.product-top .arrows .slide-right').click(function(){


    // if(currentSlide == 5){

    //      return false;
 
    // }else{

    //    currentSlide++;

    //    leftDisabled(currentSlide , 1);

    //    rightDisabled(currentSlide , 5);

    //    $($(this).parent().siblings('.img-slider').children('img.active')).removeClass('active').next().addClass('active');

    // }

    if($(this).parent().siblings('.img-slider').children('img.active').is(':last-of-type')){

       return false

    }else{


        currentSlide++;

        leftDisabled(currentSlide ,  1 , $(this).siblings('.slide-left'));

        rightDisabled(currentSlide , 5 , $(this));

        $(this).parent().parent().parent('.product-top').removeClass('img-hover');

       $($(this).parent().siblings('.img-slider').children('img.active')).removeClass('active').next().addClass('active')

    }

})

$('.product-top .arrows .slide-left').click(function(){


    if($(this).parent().siblings('.img-slider').children('img.active').is(':first-of-type')){

       return false

    }else{


        currentSlide--;

        leftDisabled(currentSlide ,  1 , $(this));

        rightDisabled(currentSlide , 5 , $(this).siblings('.slide-right'));

        $(this).parent().parent().parent('.product-top').removeClass('img-hover');

       $($(this).parent().siblings('.img-slider').children('img.active')).removeClass('active').prev().addClass('active')

    }

    // if(currentSlide == 1){


    //      return false
 
    // }else{

    //     currentSlide--;

    //     leftDisabled(currentSlide ,  1);

    //     rightDisabled(currentSlide , 5);

    //     $($(this).parent().siblings('.img-slider').children('img.active')).removeClass('active').prev().addClass('active');

    // }

})

// function disabledClassSlider(){

//   $('.product-top .arrows span').click(function(){

//     if($(this).parent().siblings('.slide-img').children('img.active').is(':first-of-type')){
       
//        $('.product-top .arrows .slide-left').addClass('disabled');

//        $('.product-top .arrows .slide-right').removeClass('disabled');

//        console.log($(this).parent());

//     }else{

//        $('.product-top .arrows .slide-left').removeClass('disabled')

//     }

//     if($(this).parent().siblings('.slide-img').children('img.active').is(':last-of-type')){

//        $('.product-top .arrows .slide-right').addClass('disabled');

//        $('.product-top .arrows .slide-left').removeClass('disabled')

//     }else{

//        $('.product-top .arrows .slide-right').removeClass('disabled')

//     }

//   }) 

// }
 
function leftDisabled(index , value, arrow){

 if(index == value){

    $(arrow).addClass('disabled')

 }else{
 
  $(arrow).removeClass('disabled')

 }

} 

function rightDisabled(index , value , arrow){

  if(index == value){

    $(arrow).addClass('disabled')

 }else{
 
    $(arrow).removeClass('disabled')

 }

}
/**********************************************************/

$('.product-info .slider-arrows .slide-down').click(function(){

  if($(this).parent().siblings('.slide-img').children('.images.active').is(':last-of-type')){

      console.log('yes it is');
      
      return false
  
  }else{

    disabledClass();

     console.log('no');

     $(this).parent().siblings('.slide-img').children('.images.active').removeClass('active').next().addClass('active')

  }

})

$('.product-info .slider-arrows .slide-up').click(function(){

  if($(this).parent().siblings('.slide-img').children('.images.active').is(':first-of-type')){
    
     return false;

  }else{

    disabledClass();

     $(this).parent().siblings('.slide-img').children('.images.active').removeClass('active').prev().addClass('active')

  }

})

function disabledClass(){

  $('.product-info .slider-arrows > span').click(function(){

    if($(this).parent().siblings('.slide-img').children('.images.active').is(':first-of-type')){

       $('.product-info .slider-arrows .slide-up').addClass('disabled');

       $('.product-info .slider-arrows .slide-down').removeClass('disabled');

    }else{

       $('.product-info .slider-arrows .slide-up').removeClass('disabled');

    }

    if($(this).parent().siblings('.slide-img').children('.images.active').is(':last-of-type')){

       $('.product-info .slider-arrows .slide-down').addClass('disabled');

       $('.product-info .slider-arrows .slide-up').removeClass('disabled');

    }else{

       $('.product-info .slider-arrows .slide-down').removeClass('disabled');

    }

  }) 

}

 /**********************************************************/

 $('.product-bottom .colors li').each(function(){

     $(this).click(function(){

       $('#' + $(this).data('index')).attr('src' , 'imgs/' + $(this).attr('id') + '.jpg');

       $(this).addClass('active').siblings().removeClass('active');

       $(this).parent().parent().siblings('.product-top').removeClass('img-hover') 

   })

 })

$('.product-bottom .size li').click(function(){

        $(this).addClass('active').siblings().removeClass('active')

 })
 


/*****************************************************************/


 $('.new-products-details .click').click(function(){

    $('#' + $(this).data('show')).fadeIn(500);

    $('.products-container .close-img').fadeIn();

    $('body').css('overflow' , 'hidden');
 
})

  $('.products-container .close-img').click(function(){
   
     $(this).parents('.products-container').fadeOut(500);

     $('body').css('overflow' , 'auto')

  })

  $('.products-container').click(function(){
   
     $(this).fadeOut(500);

     $('body').css('overflow' , 'auto')

  })

  $('.product-info').click(function(e){
   
     e.stopPropagation()

  })

/****************************************************************************/

$('.autoplay').slick({
   dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  accessibility: false,
  pauseOnFocus: true,
  pauseOnHover: true
});

/****************************************************************************/

$('.responsive').slick({
  // dots: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  accessibility: false,
  pauseOnFocus: true,
  pauseOnHover: true
});

/*****************************************************************************/

$(window).scroll(function(){

   var scroll = $(this).scrollTop(),
       fixedPos = $('.our-products-infos .product-gallery'),
       removefixedPos = $('.our-products-infos .product-description').height(),
       stickyImgs = $('.product-4_imgs .product-gallery .view-img:nth-of-type(2)');

  if(scroll >= 80){

      $('.navbar-fx , .info-fx').addClass('scroll-show');

      $('.scroll-to-top').fadeIn(200);

  }else{
       
       $('.navbar-fx , .info-fx').removeClass('scroll-show');

        $('.scroll-to-top').fadeOut(200);

  }

  if(scroll >= fixedPos.offset().top && scroll < removefixedPos){

    fixedPos.addClass('pos-fx')
 
  }else{
 
   fixedPos.removeClass('pos-fx')

  }

  // if(scroll >= 150){

  //   $('.scroll-to-top').fadeIn(200);

  // }else{

  //   $('scroll-to-top').fadeOut(200)

  // }


 })

// $(window).scroll(function(){

//    var scroll = $(this).scrollTop();


  // if(scroll >= 80){

  //     $('.info_homelv3 .navbar').removeClass('scroll-show');

  //     $('.info_homelv3').addClass('data-scroll')

  // }else{
       
  //      $('.info_homelv3').removeClass('data-scroll')

  // }

  // if(scroll >= 200){

  //     $('.scroll-to-top').fadeIn(200);

  //     console.log("scroll is 200")

  // }else{

  //    $('.scroll-to-top').fadeOut(200);

  // }


 // })

$(window).scroll(function(){

   var scroll = $(this).scrollTop();


  // if(scroll >= 80){

  //     $('.homelv_6-collect .navbar').removeClass('scroll-show');

  //     $('.homelv_6-collect').addClass('homelv_6-collect-fixed')

  // }else{
       
  //      $('.homelv_6-collect').removeClass('homelv_6-collect-fixed')

  // }

  if(scroll >= 350){

      $('.sticky-infos-container').css('height' , '100PX')

  }else{
       
      $('.sticky-infos-container').css('height' , '0')

  }

  if(scroll >= $('.product-4_imgs .product-description').offset().top && scroll >= 550){

     $('.product-4_imgs .product-description').addClass('pos-fx');

  }else{

     $('.product-4_imgs .product-description').removeClass('pos-fx');

  }


 })

  /*****************************************************************/

 $('.product-gallery .images > img').each(function(){

     $(this).click(function(){

         $(this).parent().parent().parent().siblings('.view-img').children('img').attr('src' , $(this).attr('src'));

         $(this).addClass('show').siblings().removeClass('show')

     })


 })


 /************************************************/

 $('.show-size-guid').click(function(){

   $(this).parents('.products-container').fadeOut(500);

    $('#' + $(this).data('size')).fadeIn(500 , function(){

         $('body').css('overflow' , 'hidden');

         $(this).click(function(){

             $(this).fadeOut(500);

             $('body').css('overflow' , 'auto')

         })
    })

 })

 $('.return-exchange').click(function(){

   $(this).parents('.products-container').fadeOut(500);

   $('#' + $(this).data('return')).fadeIn(500 , function(){

     $('body').css('overflow' ,'hidden');

     $(this).click(function(){
   
        $(this).fadeOut(500);

        $('body').css('overflow' , 'auto')

     })

   })

 })

 /**************** page2 *************************************************************************************/

 $('.col-left-collection h2').click(function(){

     $(this).siblings().slideToggle(500);

     $('.col-left-collection h2 span').toggleClass('slide-down');

      if($('.col-left-collection h2 span').hasClass('slide-down')){

        $('.col-left-collection h2 span').css({

              borderTop: '1px solid #000',
              borderRight: '1px solid #000',
              borderBottom: '0',
              borderLeft: '0',
              top: '4px'

        })

      } else{

        $('.col-left-collection h2 span').css({

              borderTop: '0',
              borderRight: '0',
              borderBottom: '1px solid #000',
              borderLeft: '1px solid #000',
              top: '8px'

        })

      }
  }); 

 /***************************************************/

$('.select-women').click(function(){

   $(this).siblings().slideToggle(500);

     $('.select-women .border').toggleClass('slide-down');

      if($('.select-women .border').hasClass('slide-down')){

        $('.select-women .border').css({

              borderTop: '1px solid #000',
              borderRight: '1px solid #000',
              borderBottom: '0',
              borderLeft: '0',
              top: '4px'

        })

      } else{

        $('.select-women .border').css({

              borderTop: '0',
              borderRight: '0',
              borderBottom: '1px solid #000',
              borderLeft: '1px solid #000',
              top: '8px'

        })

      }

})

/******************************************************************/

$('.select-men').click(function(){

   $(this).siblings().slideToggle(500);

     $('.select-men .border').toggleClass('slide-down');

      if($('.select-men .border').hasClass('slide-down')){

        $('.select-men .border').css({

              borderTop: '1px solid #000',
              borderRight: '1px solid #000',
              borderBottom: '0',
              borderLeft: '0',
              top: '4px'

        })

      } else{

        $('.select-men .border').css({

              borderTop: '0',
              borderRight: '0',
              borderBottom: '1px solid #000',
              borderLeft: '1px solid #000',
              top: '8px'

        })

      }

})

/***************************************************/

$('.select label span i').click(function(){


   $(this).css('color' , '#141414');

   $(this).parent('span').css('border' , '1px solid #141414')

})


/****************************************************************/

 $('.col-left-colors h2').click(function(){

     $(this).siblings().slideToggle(500);

     $('.col-left-colors h2 span').toggleClass('slide-down');

      if($('.col-left-colors h2 span').hasClass('slide-down')){

        $('.col-left-colors h2 span').css({

              borderTop: '1px solid #000',
              borderRight: '1px solid #000',
              borderBottom: '0',
              borderLeft: '0',
              top: '4px'

        })

      } else{

        $('.col-left-colors h2 span').css({

              borderTop: '0',
              borderRight: '0',
              borderBottom: '1px solid #000',
              borderLeft: '1px solid #000',
              top: '8px'

        })

      }
  }); 

 /***********************************************************************/

 $('.select-color li').click(function(){

    $(this).find('span i').toggleClass('toggleColor')

 })


 /***************************************************************/

 $('.col-left-size h2').click(function(){

     $(this).siblings().slideToggle(500);

     $('.col-left-size h2 span').toggleClass('slide-down');

      if($('.col-left-size h2 span').hasClass('slide-down')){

        $('.col-left-size h2 span').css({

              borderTop: '1px solid #000',
              borderRight: '1px solid #000',
              borderBottom: '0',
              borderLeft: '0',
              top: '4px'

        })

      } else{

        $('.col-left-size h2 span').css({

              borderTop: '0',
              borderRight: '0',
              borderBottom: '1px solid #000',
              borderLeft: '1px solid #000',
              top: '8px'

        })

      }
  }); 

/*****************************************************************************/

 $('.col-left-price h2').click(function(){

     $(this).siblings().slideToggle(500);

     $('.col-left-price h2 span').toggleClass('slide-down');

      if($('.col-left-price h2 span').hasClass('slide-down')){

        $('.col-left-price h2 span').css({

              borderTop: '1px solid #000',
              borderRight: '1px solid #000',
              borderBottom: '0',
              borderLeft: '0',
              top: '4px'

        })

      } else{

        $('.col-left-price h2 span').css({

              borderTop: '0',
              borderRight: '0',
              borderBottom: '1px solid #000',
              borderLeft: '1px solid #000',
              top: '8px'

        })

      }
  });

//  var i = 10;

//   for(i = 0 ; i <= 900 ; i += 10){

//    $('.price-choose').value() = i

// }

/**********************************************************************/


/*****************************************************************************/

 $('.col-left-brands h2').click(function(){

     $(this).siblings().slideToggle(500);

     $('.col-left-brands h2 span').toggleClass('slide-down');

      if($('.col-left-brands h2 span').hasClass('slide-down')){

        $('.col-left-brands h2 span').css({

              borderTop: '1px solid #000',
              borderRight: '1px solid #000',
              borderBottom: '0',
              borderLeft: '0',
              top: '4px'

        })

      } else{

        $('.col-left-brands h2 span').css({

              borderTop: '0',
              borderRight: '0',
              borderBottom: '1px solid #000',
              borderLeft: '1px solid #000',
              top: '8px'

        })

      }
  });

/****************************************************************************/

 var activeclassPrice = $('.sort-price > ul > li ul li.active').text(),

     activeclassPhoto = $('.photo-num > ul > li ul li.active').text(),

     menuPrice = $('.sort-price > ul > li ul'),

     menuPhoto = $('.photo-num > ul > li ul'),

     listItemsPrice = $('.sort-price > ul > li ul li'),

     listItemsPhoto = $('.photo-num > ul > li ul li');



 $('.sort-price > ul > li').mouseenter(function(){
 
     $(menuPrice).slideDown();

 })

 $('.sort-price > ul > li').mouseleave(function(){
  
     $(menuPrice).delay(500).slideUp();

     $(menuPrice).mouseenter(function(){
 
        $(menuPrice).stop()

     })

     $(menuPrice).mouseleave(function(){
 
        $(menuPrice).slideUp()

     })

 })

 $('.photo-num > ul > li').mouseenter(function(){
 
     $(menuPhoto).slideDown();

 })

 $('.photo-num > ul > li').mouseleave(function(){
  
     $(menuPhoto).delay(500).slideUp();

     $(menuPhoto).mouseenter(function(){
 
        $(menuPhoto).stop()

     })

     $(menuPhoto).mouseleave(function(){
 
        $(menuPhoto).slideUp()

     })

 })

 /*************************************************/

   $('.sort-price > ul > li span').html(activeclassPrice);

   $(listItemsPrice).each(function(){

     $(this).click(function(){

         $('.sort-price > ul > li span').html($(this).text())

     })
  
   })


   $('.photo-num > ul > li span').html(activeclassPhoto);

   $(listItemsPhoto).each(function(){

     $(this).click(function(){

         $('.photo-num > ul > li span').html($(this).text())

     })
  
   })

 /*****************************************************************/

  $('.women-full-details .photo-num .fa').click(function(){

     $('#our-products').removeClass();

     $('#our-products').addClass($(this).data('grid'));
    
     $(this).addClass('active').siblings().removeClass('active')

 })
  

/*************************************************************/

$('#range').mousemove(function(){

   $('#value').html($('#range').val())

})

/******************************************************/


$('.banner-area').slick({
  dots: true,
  arrows: false,
  autoplay: true,
  infinite: true,
  fade: true,
  autoplaySpeed: 8000,
  centerMode: true,
  accessibility: false
})


$('.single-item').slick({

   dots: true,

});


/*********************** shoplv_10 ******************************************************************************/


$('.lookbook-content .lookbook-info').each(function(){


   $(this).hover(function(){

       $(this).children('.lookbook-item').css("display" , "block")

   } , function (){

      $(this).children('.lookbook-item').css("display" , "none")

   })
 

})

/**************************************************************************************************/

$('.account-page-heading > div').each(function(){

  $(this).click(function(){

        $('#' + $(this).data('accordion')).addClass('active').siblings().removeClass('active');

        $(this).addClass('active').siblings().removeClass('active')
    
  })

})

/************************************************************************************************/

$("#img_01").elevateZoom({

  zoomType: "inner" , 
  cursor: "crosshair"

});

$('.our-products-infos .images img').on('click', function(){
    // Remove old instance od EZ
    $('.zoomContainer').remove();
    zoomImage.removeData('elevateZoom');
    // Update source for images
    // zoomImage.attr('src', $(this).data('image'));
    // zoomImage.data('zoom-image', $(this).data('zoom-image'));
    // Reinitialize EZ
    // zoomImage.elevateZoom(zoomConfig);
});

/********************************************************************************/


$('.product-2_accordion-container .accordion-close img').click(function(){

    $(this).parent().siblings('.product-2_accordion-content').slideToggle();

    $(this).toggleClass('rotate');

    // if($(this).hasClass('rotate')){
     
    //   $(this).parent().siblings('.product-2_accordion-content').slideUp();

    // }

})

/*************************************************************************************/

$('.lazy').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true
});
 

/*******************************************************************/

$('.qa-content .qa-top img').click(function(){

  $(this).parent().parent().siblings('.qa-answer').slideToggle();
  $(this).toggleClass('rotate');

})

/**********************************************************************/

 $('.login-icon').hover(function(){

    $('.login-form').slideDown()    

 } , function(){

    $('.login-form').slideUp()

 })
 
 // $('.login-info .login-icon img').hover(function(){

 //   $('.login-form').slideDown()

 // } , function(){

 //    $('.login-form').delay(200).slideUp();

 // })

 // new WOW().init();

 $('.scroll-to-top').click(function(){

    $('html , body').animate({scrollTop : 0} , 400)

 })

 /*******************************************************/

 setInterval(function(){

 var productsArray = Array.from($('.products-notification').children()),
     productsArrayLength = productsArray.length,
     randomNumber = Math.floor(Math.random() * productsArrayLength);


     $(productsArray[randomNumber]).delay(1000).animate({

        height : '100%',
        transform : "scale(1)",
        opacity : '1'

     },150).siblings().animate({

       height : '0',
       transform : "scale(0)",
       opacity : '0'

     },200);

      // console.log(randomNumber)

 }, 8000);

 $('.products-notification .close-img').click(function(){

    $(this).parents('.product-notification').animate({

       height : '0',
       transform : "scale(0)",
       opacity : '0'

    } , 200)

 })


 if($('.privacy-policy-popup').length > 0){
 
   $('.products-notification').css({'bottom': $('.privacy-policy-popup').height() + 40 })

   console.log($('.privacy-policy-popup').height())

 }



 $('.privacy-policy-popup .cookie-right').click(function(){

    $(this).parents('.privacy-policy-popup').fadeOut(500).css("display" , "none");

    $('.products-notification').animate({bottom: '20px'})

 })


})




















