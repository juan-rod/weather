requirejs.config({
  baseUrl: './javascripts',
  config: {
    'moment': {
      noGlobal: true
    }
  },
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'firebase': '../lib/bower_components/firebase/firebase',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'q': '../lib/bower_components/q/q',
    'lodash': '../lib/bower_components/lodash/lodash',
    'moment': '../lib/bower_components/moment/moment'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

requirejs(
  ["dependencies", "core-list"],
  function(dependencies, coreList) {

    coreList();

  });//end of main require function
