angular.module('myApp')
.component('navbar', {
  template: `
  <nav>
   <div class="nav-wrapper">
     <a href="/" class="brand-logo">
      <i class="material-icons">person_pin</i>
     </a>
     <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li ng-class="{ active: $ctrl.$state.includes('home') }" ><a ui-sref="home">Home</a></li>
      <li ng-show="$ctrl.Auth.isLoggedIn()" ng-class="{ active: $ctrl.$state.includes('goals') }" ><a ui-sref="goals">Goals</a></li>
      <li ng-hide="$ctrl.Auth.isLoggedIn()" ng-class="{ active: $ctrl.$state.includes('login')  }" ><a ui-sref="login">Login</a></li>
      <li ng-hide="$ctrl.Auth.isLoggedIn()" ng-class="{ active: $ctrl.$state.includes('signup') }" ><a ui-sref="signup">Sign Up</a></li>
      <p ng-show="$ctrl.Auth.isLoggedIn()" class="navbar-text">Hi! {{ $ctrl.Auth.getCurrentUserSync().email }}</p>
      <button ng-show="$ctrl.Auth.isLoggedIn()" type="button" class="waves-effect waves-light btn" ng-click="$ctrl.logout()">Logout</button>
     </ul>
   </div>
  </nav>
  `,
  controller: function(Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;

    this.logout = function() {
      this.Auth.logout()
      .then( res => {
        this.$state.go('login');
      });
    };
  }
});
