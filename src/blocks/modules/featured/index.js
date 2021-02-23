import slick from 'slick-carousel';

$('#products-slide').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: $('.featured__nav-block'),
    prevArrow: '<div class="featured__nav-item"><div class="arrow-left"></div></div>',
    nextArrow: '<div class="featured__nav-item"><div class="arrow-right"></div></div>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {}
        },
        {
            breakpoint: 1120,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            }
        }
      ]
});