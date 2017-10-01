require.config({
  baseUrl: '../lib',
	paths: {
	  'underscore': '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
    "jQuery": "//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min",
    'domReady': '//cdnjs.cloudflare.com/ajax/libs/require-domReady/2.0.1/domReady.min',
    'knockout': '//cdnjs.cloudflare.com/ajax/libs/knockout/3.4.2/knockout-min'
	},
	shim: {
			'underscore': {
					exports: '_'
			},
			'jQuery': {
					exports: '$'
			}			
	}
});

requirejs(['ClippingsApp', "knockout", 'domReady!'], function(clippingsApp, ko) {
  console.log('Started!');
  ko.applyBindings(new clippingsApp());

  console.log('Loaded!');
});