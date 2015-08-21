requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'firebase': '../lib/bower_components/firebase/firebase',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'q': '../lib/bower_components/q/q',
    'lodash': '../lib/bower_components/lodash/lodash'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

requirejs(
  ["dependencies", "firebase", "authentication"],
  function(dependencies, fb, auth) {

    var ref = new Firebase("https://sallys-weather-app.firebaseio.com");
    var authData = ref.getAuth();

    if (authData === null) {
      ref.authWithOAuthPopup("github", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          auth.setUid(authData.uid);
          require(["core-list"], function(corelist) {});
        }
      });
    } else {
      auth.setUid(authData.uid);
      require(["core-list"], function(corelist) {});
    }

  });//end of main require function
