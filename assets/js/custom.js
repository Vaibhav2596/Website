$(document).ready(function(){
	$('.single-accord p').hide();
	$('.single-accord h2').click(function(){
		$(this).parent('.single-accord').find('p').slideToggle().parents('.single-accord').siblings().find('p').hide(500).addClass('collapsed');
		$(this).find('span').toggleClass('onlyMinus');
		$(this).parents('.single-accord').siblings().find('h2 span').removeClass('onlyMinus');
	});
	$('.Patient').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:2
			}
		}
	})

	$('.ortho').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})

	$('.hospCarousel').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})



});
// $(document).ready(function () {
//     stickyFunction();
// });

// function stickyFunction() {
//     var stickyHeaderTop = $('.formContainer').offset().top;
//     var topOrthoSection = $('.topOrthoSection').offset().top;
//     $(window).scroll(function () {
//         if ($(window).scrollTop() > stickyHeaderTop) {
//             $('.formContainer').css({
//                 position: 'fixed',
//                 top: '0px'
//             });
//         }else if($(window).scrollTop() > stickyHeaderTop){
//             $('.formContainer').css({
//                 position: 'static',
//                 top: '0px'
//             });
//         }else {
//             $('.formContainer').css({
//                 position: 'static',
//                 top: '0px'
//             });
//         } 
//         // if ($('.topOrthoSection').visible(true)) {
//         //     $('.formContainer').css({
//         //         position: 'static',
//         //         top: '0px'
//         //     });
//         // } else {
//         //     $('.formContainer').css({
//         //         position: 'fixed',
//         //         top: '0px'
//         //     });
//         // }
//     });
// }