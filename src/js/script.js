 $(document).ready(function(){
    $(".rate-yo").rateYo({
        ratedFill: "#F2994A",
        rating: 4,
        starWidth: "17px",
        normalFill: "#c4c4c4"
    });

    $(".banner-slider").slick({
        dots: false,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="img/arrow-left.svg" alt= ""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="img/arrow-right.svg" alt=""></button>',
    })
}); 
