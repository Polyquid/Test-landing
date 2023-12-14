import Swiper from 'swiper';
import { Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/keyboard';
import 'swiper/css/pagination';

const swiper = new Swiper('.sliders', {
    modules: [Keyboard, Pagination],
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