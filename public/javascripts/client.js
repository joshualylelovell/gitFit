angular.module('myApp', ['ngMessages', 'ngAnimate', 'ui.router']);

angular.module('myApp')
.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /home
  $urlRouterProvider.otherwise("/home");

  // Now set up the states
  $stateProvider
  .state('home', {
    url: "/home",
    template: "<home></home>"
  })
  .state('about', {
    url: "/about",
    template: "<about></about>"
  })
  .state('login', {
    url: "/login",
    template: "<login></login>"
  })
  .state('signup', {
    url: "/signup",
    template: "<signup></signup>"
  })
  .state('goals', {
    url: "/goals",
    template: "<goals></goals>"
  })
  .state('goal-new', {
    url: "/goals/new",
    template: "<goal-new></goal-new>"
  })
  .state('goal-show', {
    url: "/goals/:id",
    template: "<goal-show></goal-show>"
  })
  .state('goal-edit', {
    url: "/goals/edit/:id",
    template: "<goal-edit></goal-edit>"
  });

});
