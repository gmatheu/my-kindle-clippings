var allTestFiles = []
var TEST_REGEXP = /(spec|test)\.js$/i

Object.keys(window.__karma__.files).forEach(function (file) {
  if (TEST_REGEXP.test(file)) {
    var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '')
    allTestFiles.push(normalizedTestModule)
  }
})
require.config({
  baseUrl: '/base',
	paths: {
		'underscore': 'node_modules/underscore/underscore',
		'myClippings': 'lib/MyClippings'
	},
  deps: allTestFiles,
	shim: {
			'underscore': {
					exports: '_'
			}
	},
  callback: window.__karma__.start
})
