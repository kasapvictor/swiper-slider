
const swiper = new Swiper('.swiper-container', {
	// direction: 'vertical',
	slidesPerView: 3,
	loop: true,
	spaceBetween: 30,
	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
		//type: 'progressbar',
		clickable: true,
		//type: 'fraction', // 1/4
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});