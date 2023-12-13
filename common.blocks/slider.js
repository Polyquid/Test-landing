new Swiper('.sliders', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    spaceBetween: 10,
    keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
    },
    loop: true,
});