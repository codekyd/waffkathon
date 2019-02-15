
// Header Sticky
const HeaderSticky = function () {
    'use strict';

    // Handle Header Sticky
      const handleHeaderSticky = function () {
          // On loading, check to see if more than 15rem, then add the class
          if ($('.js__header-sticky').offset().top > 15) {
              $('.js__header-sticky').addClass('nav-bar__sticky');
          }

          // On scrolling, check to see if more than 15rem, then add the class
          $(window).on('scroll', function () {
              if ($('.js__header-sticky').offset().top > 15) {
                  $('.js__header-sticky').addClass('nav-bar__sticky');
              } else {
                  $('.js__header-sticky').removeClass('nav-bar__sticky');
              }
          });
      };


      return {
      init: function () {
        handleHeaderSticky(); // initial setup for Header Sticky
      }
    }
  }();

  $(document).ready(function () {
    HeaderSticky.init();

    // animate the intro divs
    $('.benefit-contents-0').hover(function () {

        $('.section-benefit').css('display', 'none');
        $('.section-benefit-0').css({
            'display': 'block',
            'animation': 'moveInRight 1s ease-out '
        });

    },
    ),
        $('.benefit-contents-1').hover(function () {
            $('.section-benefit').css('display', 'none');
            $('.section-benefit-1').css({
                'display': 'block',
                'animation': 'moveInRight 1s ease-out '
            });

        }
        ),
        $('.benefit-contents-2').hover(function () {
            $('.section-benefit').css('display', 'none');
            $('.section-benefit-2').css({
                'display': 'block',
                'animation': 'moveInRight 1s ease-out '
            });

        }
        )
  });
