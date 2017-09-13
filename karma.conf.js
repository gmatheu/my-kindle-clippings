module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'requirejs'],
    files: [
      'test/test-main.js',
      {pattern: 'node_modules/underscore/*.js', included: false},
      {pattern: 'lib/*.js', included: false},
      {pattern: 'test/*Spec.js', included: false}
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
