 $(document).ready(function(){
    $(".rate-yo").rateYo({
        ratedFill: "#F2994A",
        rating: 5,
        starWidth: "17px",
        normalFill: "#c4c4c4"
    });  

    $(".banner-slider").slick({
        dots: false,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="img/arrow-left.svg" alt= ""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="img/arrow-right.svg" alt=""></button>',
        responsive: [
        
              {
                breakpoint: 730,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                }
              }
        ]

    });
    $(".slider-guests").slick({
        dots: false,  
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="img/left.svg" alt= ""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="img/right.svg" alt=""></button>',
        responsive: [
            {
              breakpoint: 820,
              settings: {
                  dots: true,
                  arrows: false,
              }
            }
      ]
    });
    $('.menu__btn').on('click', function(){
        $('.menu-mobile__list').toggleClass('menu-mobile__list--active')
    });
}); 
