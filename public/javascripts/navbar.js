angular.module('myApp')
.component('navbar', {
  template: `
  <div class="navbar-fixed">
    <nav>
     <div class="nav-wrapper">
       <a href="/" class="brand-logo">
        {{ $ctrl.name }}
        <i class="material-icons">person_pin</i>
       </a>
       <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li ng-class="{ active: $ctrl.$state.includes('home') }" ><a ui-sref="home">Home</a></li>
        <li ng-show="$ctrl.Auth.isLoggedIn()" ng-class="{ active: $ctrl.$state.includes('goals') }" ><a ui-sref="goals">Goals</a></li>
        <li ng-hide="$ctrl.Auth.isLoggedIn()" ng-class="{ active: $ctrl.$state.includes('login')  }" ><a ui-sref="login">Login</a></li>
        <li ng-hide="$ctrl.Auth.isLoggedIn()" ng-class="{ active: $ctrl.$state.includes('signup') }" ><a ui-sref="signup">Sign Up</a></li>
        <p ng-show="$ctrl.Auth.isLoggedIn()" class="navbar-text"> Hi, {{ $ctrl.Auth.getCurrentUserSync().name }}!</p>
        <button ng-show="$ctrl.Auth.isLoggedIn()" type="button" class="waves-effect waves-light btn" ng-click="$ctrl.logout()">Logout</button>
       </ul>
     </div>
    </nav>
</div>
  `,
  controller: function(Auth, $state) {
    this.name = "Project 3 Fitness App";
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
