
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
    $('.focus-area-contents-0').hover(function () {

        $('.section-focus-area').css('display', 'none');
        $('.section-focus-area-0').css({
            'display': 'block',
            'animation': 'moveInRight 1s ease-out '
        });

    },
    ),
        $('.focus-area-contents-1').hover(function () {
            $('.section-focus-area').css('display', 'none');
            $('.section-focus-area-1').css({
                'display': 'block',
                'animation': 'moveInRight 1s ease-out '
            });

        }
        ),
        $('.focus-area-contents-2').hover(function () {
            $('.section-focus-area').css('display', 'none');
            $('.section-focus-area-2').css({
                'display': 'block',
                'animation': 'moveInRight 1s ease-out '
            });

        }
        )


            $("#submit").click(function() {
            var company_name = $("#company_name").val();
            var email = $("#email").val();
            var message = $("#message").val();
            var contact = $("#contact").val();
            $("#returnmessage").empty(); // To empty previous error/success message.
            // Checking for blank fields.
            if (name == '' || email == '' || contact == '') {
            alert("Please Fill Required Fields");
            } else {
            // Returns successful data submission message when the entered information is stored in database.
            $.post("contact_form.php", {
            name1: company_name,
            email1: email,
            message1: message,
            contact1: contact
            }, function(data) {
            $("#returnmessage").append(data); // Append returned message to message paragraph.
            if (data == "Your request has been received, We will contact you soon.") {
            $("#form")[0].reset(); // To reset form fields on success.
            }
            });
            }
            });

  });
