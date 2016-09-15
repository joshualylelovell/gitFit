angular.module('myApp')
.component('navbar', {
  template: `
   <div ng-show="$ctrl.$state.includes('home')" class="navbar-fixed">
    <nav>
     <div class="nav-wrapper">
       <a href="https://github.com/benjaminwest1046/project3-fitness" target="_blank" class="brand-logo">
        {{ $ctrl.name }}
        <i class="material-icons">directions_run</i>
       </a>
       <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li ng-hide="$ctrl.Auth.isLoggedIn()" ng-classes="{ active: $ctrl.$state.includes('home') }"><a href="#about">About</a></li>
        <li ng-show="$ctrl.Auth.isLoggedIn()" ng-class="{ active: $ctrl.$state.includes('goals') }" ><a ui-sref="goals">Goals</a></li>
        <li ng-hide="$ctrl.Auth.isLoggedIn()" ng-class="{ active: $ctrl.$state.includes('login')  }" ><a ui-sref="login">Login</a></li>
        <li ng-hide="$ctrl.Auth.isLoggedIn()" ng-class="{ active: $ctrl.$state.includes('signup') }" ><a ui-sref="signup">Sign Up</a></li>
        <p ng-show="$ctrl.Auth.isLoggedIn()" class="navbar-text"> Hi, {{ $ctrl.Auth.getCurrentUserSync().name }}!</p>
        <button ng-show="$ctrl.Auth.isLoggedIn()" type="button" class="waves-effect waves-light btn" ng-click="$ctrl.logout()">Logout</button>
       </ul>
     </div>
    </nav>
   </div>

    <nav ng-show="$ctrl.$state.includes('goals')">
     <div class="nav-wrapper">
       <a href="https://github.com/benjaminwest1046/project3-fitness" target="_blank" class="brand-logo">
        {{ $ctrl.name }}
        <i class="material-icons">directions_run</i>
       </a>
       <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li ng-show="$ctrl.Auth.isLoggedIn()" ><a href="#about">About</a></li>
        <li ng-show="$ctrl.Auth.isLoggedIn()" ng-class="{ active: $ctrl.$state.includes('goals') }" ><a ui-sref="goals">Goals</a></li>
        <li ng-hide="$ctrl.Auth.isLoggedIn()" ng-class="{ active: $ctrl.$state.includes('login')  }" ><a ui-sref="login">Login</a></li>
        <li ng-hide="$ctrl.Auth.isLoggedIn()" ng-class="{ active: $ctrl.$state.includes('signup') }" ><a ui-sref="signup">Sign Up</a></li>
        <p ng-show="$ctrl.Auth.isLoggedIn()" class="navbar-text"> Hi, {{ $ctrl.Auth.getCurrentUserSync().name }}!</p>
        <button ng-show="$ctrl.Auth.isLoggedIn()" type="button" class="waves-effect waves-light btn" ng-click="$ctrl.logout()">Logout</button>
       </ul>
     </div>
    </nav>

    <nav ng-show="$ctrl.$state.includes('login')">
     <div class="nav-wrapper">
       <a href="https://github.com/benjaminwest1046/project3-fitness" target="_blank" class="brand-logo">
        {{ $ctrl.name }}
        <i class="material-icons">directions_run</i>
       </a>
       <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#about">About</a></li>
        <li ng-show="$ctrl.Auth.isLoggedIn()" ng-class="{ active: $ctrl.$state.includes('goals') }" ><a ui-sref="goals">Goals</a></li>
        <li ng-hide="$ctrl.Auth.isLoggedIn()" ng-class="{ active: $ctrl.$state.includes('login')  }" ><a ui-sref="login">Login</a></li>
        <li ng-hide="$ctrl.Auth.isLoggedIn()" ng-class="{ active: $ctrl.$state.includes('signup') }" ><a ui-sref="signup">Sign Up</a></li>
        <p ng-show="$ctrl.Auth.isLoggedIn()" class="navbar-text"> Hi, {{ $ctrl.Auth.getCurrentUserSync().name }}!</p>
        <button ng-show="$ctrl.Auth.isLoggedIn()" type="button" class="waves-effect waves-light btn" ng-click="$ctrl.logout()">Logout</button>
       </ul>
     </div>
    </nav>

    <nav ng-show="$ctrl.$state.includes('signup')">
     <div class="nav-wrapper">
       <a href="https://github.com/benjaminwest1046/project3-fitness" target="_blank" class="brand-logo">
        {{ $ctrl.name }}
        <i class="material-icons">directions_run</i>
       </a>
       <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#about">About</a></li>
        <li ng-show="$ctrl.Auth.isLoggedIn()" ng-class="{ active: $ctrl.$state.includes('goals') }" ><a ui-sref="goals">Goals</a></li>
        <li ng-hide="$ctrl.Auth.isLoggedIn()" ng-class="{ active: $ctrl.$state.includes('login')  }" ><a ui-sref="login">Login</a></li>
        <li ng-hide="$ctrl.Auth.isLoggedIn()" ng-class="{ active: $ctrl.$state.includes('signup') }" ><a ui-sref="signup">Sign Up</a></li>
        <p ng-show="$ctrl.Auth.isLoggedIn()" class="navbar-text"> Hi, {{ $ctrl.Auth.getCurrentUserSync().name }}!</p>
        <button ng-show="$ctrl.Auth.isLoggedIn()" type="button" class="waves-effect waves-light btn" ng-click="$ctrl.logout()">Logout</button>
       </ul>
     </div>
    </nav>

    <nav ng-show="$ctrl.$state.includes('goal-edit')">
     <div class="nav-wrapper">
       <a href="https://github.com/benjaminwest1046/project3-fitness" target="_blank" class="brand-logo">
        {{ $ctrl.name }}
        <i class="material-icons">directions_run</i>
       </a>
       <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li ng-show="$ctrl.Auth.isLoggedIn()" ><a href="#about">About</a></li>
        <li ng-show="$ctrl.Auth.isLoggedIn()" ng-class="{ active: $ctrl.$state.includes('goals') }" ><a ui-sref="goals">Goals</a></li>
        <li ng-hide="$ctrl.Auth.isLoggedIn()" ng-class="{ active: $ctrl.$state.includes('login')  }" ><a ui-sref="login">Login</a></li>
        <li ng-hide="$ctrl.Auth.isLoggedIn()" ng-class="{ active: $ctrl.$state.includes('signup') }" ><a ui-sref="signup">Sign Up</a></li>
        <p ng-show="$ctrl.Auth.isLoggedIn()" class="navbar-text"> Hi, {{ $ctrl.Auth.getCurrentUserSync().name }}!</p>
        <button ng-show="$ctrl.Auth.isLoggedIn()" type="button" class="waves-effect waves-light btn" ng-click="$ctrl.logout()">Logout</button>
       </ul>
     </div>
    </nav>

    <nav ng-show="$ctrl.$state.includes('goal-new')">
     <div class="nav-wrapper">
       <a href="https://github.com/benjaminwest1046/project3-fitness" target="_blank" class="brand-logo">
        {{ $ctrl.name }}
        <i class="material-icons">directions_run</i>
       </a>
       <ul id="nav-mobile" class="right">
        <li ng-show="$ctrl.Auth.isLoggedIn()" ><a href="#about">About</a></li>
        <li ng-show="$ctrl.Auth.isLoggedIn()"><a ui-sref="goals">Goals</a></li>
        <li ng-hide="$ctrl.Auth.isLoggedIn()"><a ui-sref="login">Login</a></li>
        <li ng-hide="$ctrl.Auth.isLoggedIn()"><a ui-sref="signup">Sign Up</a></li>
        <p ng-show="$ctrl.Auth.isLoggedIn() && $ctrl.Auth.getCurrentUserSync().name" class="navbar-text hide-on-med-and-down"> Hi, {{ $ctrl.Auth.getCurrentUserSync().name }}!</p>
        <button ng-show="$ctrl.Auth.isLoggedIn()" type="button" class="waves-effect waves-light btn" ng-click="$ctrl.logout()">Logout</button>
       </ul>
     </div>
    </nav>

    <nav ng-show="$ctrl.$state.includes('about')">
     <div class="nav-wrapper">
       <a href="https://github.com/benjaminwest1046/project3-fitness" target="_blank" class="brand-logo">
        {{ $ctrl.name }}
        <i class="material-icons">directions_run</i>
       </a>
       <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li ng-show="$ctrl.Auth.isLoggedIn()" ng-class="{ active: $ctrl.$state.includes('goals') }" ><a ui-sref="goals">Goals</a></li>
        <li ng-hide="$ctrl.Auth.isLoggedIn()" ng-class="{ active: $ctrl.$state.includes('login')  }" ><a ui-sref="login">Login</a></li>
        <li ng-hide="$ctrl.Auth.isLoggedIn()" ng-class="{ active: $ctrl.$state.includes('signup') }" ><a ui-sref="signup">Sign Up</a></li>
        <p ng-show="$ctrl.Auth.isLoggedIn()" class="navbar-text"> Hi, {{ $ctrl.Auth.getCurrentUserSync().name }}!</p>
        <button ng-show="$ctrl.Auth.isLoggedIn()" type="button" class="waves-effect waves-light btn" ng-click="$ctrl.logout()">Logout</button>
       </ul>
     </div>
    </nav>
  `,
  controller: function(Auth, $state) {
    this.name = "gitFit";
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

// Removed Home from Navbar
//         <li ng-class="{ active: $ctrl.$state.includes('home') }" ><a ui-sref="home">Home</a></li>
