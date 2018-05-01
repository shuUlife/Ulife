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
	],
});
var $$ = Dom7;
var mainView = app.views.create('.view-main');