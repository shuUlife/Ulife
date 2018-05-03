var app = new Framework7({
	routes: [
		{
			path: '/home/',
			url: 'index.html',
		},
		{
			path: '/find/',
			url: './pages/find.html',
		}, 
		{
			path: '/myown/',
			url:'./pages/myown.html',
		},
	],
});
var $$ = Dom7;
var mainView = app.views.create('.view-main');
var mySwiper = new Swiper('.home_autoswiper', {
  autoplay: {
    delay: 5000,
    disableOnInteraction:false,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});