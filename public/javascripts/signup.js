angular.module('myApp')
.component('signup', {
  template: `
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1>Sign up</h1>
      </div>
      <div class="col-sm-12">
        <form class="form" name="form" ng-submit="$ctrl.register(form)" novalidate>

          <div class="form-group" ng-class="{ 'has-success': form.name.$valid && $ctrl.submitted,
                                              'has-error': form.name.$invalid && $ctrl.submitted }">
            <label>Name</label>

            <input type="text" name="name" class="form-control" ng-model="$ctrl.user.name"
                   required/>
            <p class="help-block" ng-show="form.name.$error.required && $ctrl.submitted">
              A name is required
            </p>
          </div>

          <div class="form-group" ng-class="{ 'has-success': form.email.$valid && $ctrl.submitted,
                                              'has-error': form.email.$invalid && $ctrl.submitted }">
            <label>Email</label>

            <input type="email" name="email" class="form-control" ng-model="$ctrl.user.email"
                   required
                   mongoose-error/>
            <p class="help-block" ng-show="form.email.$error.email && $ctrl.submitted">
              Doesn't look like a valid email.
            </p>
            <p class="help-block" ng-show="form.email.$error.required && $ctrl.submitted">
              What's your email address?
            </p>
            <p class="help-block" ng-show="form.email.$error.mongoose">
              {{ $ctrl.errors.email }}
            </p>
          </div>

          <div class="form-group" ng-class="{ 'has-success': form.password.$valid && $ctrl.submitted,
                                              'has-error': form.password.$invalid && $ctrl.submitted }">
            <label>Password</label>

            <input type="{{$ctrl.inputType}}" name="password" ng-model="$ctrl.user.password"
                               ng-minlength="3"
                               required
                               mongoose-error/>
              <input type="checkbox" id="checkbox" ng-model="passwordCheckbox" ng-click="$ctrl.hideShowPassword($ctrl.inputType)" />
              <label for="checkbox" ng-if="passwordCheckbox">Hide password</label>
              <label for="checkbox" ng-if="!passwordCheckbox">Show password</label>
            </div>

            <p class="help-block"
               ng-show="(form.password.$error.minlength || form.password.$error.required) && $ctrl.submitted">
              Password must be at least 3 characters.
            </p>
            <p class="help-block" ng-show="form.password.$error.mongoose">
              {{ $ctrl.errors.password }}
            </p>




          <div>
            <button class="btn btn-inverse btn-lg btn-register green" type="submit">
              Sign up
            </button>
          </div>

        </form>
      </div>
    </div>
    <hr>
  </div>
  `,

  controller: function(Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;
    this.inputType = 'password';

    this.hideShowPassword = function(inputType){
        if (this.inputType == 'password')
      this.inputType = 'text';
        else
      this.inputType = 'password';
    };


    this.register = function(form) {
      this.submitted = true;

      if (form.$valid) {
        return this.Auth.createUser({
          name: this.user.name,
          email: this.user.email,
          password: this.user.password
        })
        .then(() => {
          // Account created, redirect to goals
          this.$state.go('goals');
        })
        .catch(err => {
          err = err.data;
          this.errors = {};
          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });
        });
      }
    };
  }
});
