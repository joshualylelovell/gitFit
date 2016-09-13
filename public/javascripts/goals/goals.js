angular.module('myApp')
.component('goals', {
  template: `
    <h1>GOALS</h1> <a ui-sref="goal-new" class="waves-effect waves-light btn green">New</a>
      <div class="divider"></div>
      <div class="section">
        <h2>Upcoming Goals</h2>
        <div class="row">
          <div class="col s12 m4" ng-repeat = "goal in $ctrl.goals | filter: { completed: false }">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light" ng-show="goal.title === 'Running'">
                <img class="activator" src="http://i.imgur.com/KIRUeAJ.jpg">
              </div>
              <div class="card-image waves-effect waves-block waves-light" ng-show="goal.title === 'Weight Lifting'">
                <img class="activator" src="http://i.imgur.com/loqxXqm.jpg">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{{ goal.title }} Goal<i class="medium material-icons right">more_vert</i></span>
                <p>Due:</p>
                <span class="datespan">{{ goal.dateToComplete  | date:'EEEE, MMMM d, y' }}</span>
                <br>
                <p>Completed:</p>
                <span ng-show="goal.completed" ng-click="$ctrl.toggle(goal)" class="left glyphicon glyphicon-ok" aria-hidden="true"></span>
                <span ng-hide="goal.completed" ng-click="$ctrl.toggle(goal)" class="left glyphicon glyphicon-unchecked" aria-hidden="true"></span>
                <br>
                <br>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4"><a ng-click="$ctrl.show(goal)">{{ goal.title }}</a><i class="material-icons right">close</i></span>
                <ul>
                  <li ng-show="goal.title === 'Running'">Distance: {{ goal.distance }} miles</li>
                  <li ng-show="goal.title === 'Running'">Time to complete goal: {{ goal.time }} minutes</li>
                  <li ng-show="goal.title === 'Weight Lifting'">Number of sets: {{ goal.sets }} sets</li>
                  <li ng-show="goal.title === 'Weight Lifting'">Number of reps: {{ goal.reps }} reps</li>
                  <li ng-show="goal.title === 'Weight Lifting'">Muscle group to focus on: {{ goal.muscleGroup }}</li>
                  <br>
                  <br>
                </ul>
                    <button ng-click="$ctrl.edit(goal)" class="waves-effect waves-light btn">Edit</button>
                    <button ng-click="$ctrl.delete(goal)" class="waves-effect waves-light btn">Delete</button>
              </div>
            </div>
          </div>
      </div>

      <div class="divider"></div>
      <div class="section">
        <h2>Completed Goals</h2>
        <div class="row">
          <div class="col s12 m4" ng-repeat = "goal in $ctrl.goals | filter: { completed: true } | orderBy: 'dateToComplete'">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light" ng-show="goal.title === 'Running'">
                <img class="activator" src="http://i.imgur.com/KIRUeAJ.jpg">
              </div>
              <div class="card-image waves-effect waves-block waves-light" ng-show="goal.title === 'Weight Lifting'">
                <img class="activator" src="http://i.imgur.com/loqxXqm.jpg">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{{ goal.title }}<i class="material-icons right">more_vert</i></span>
                <span ng-show="goal.completed" ng-click="$ctrl.toggle(goal)" class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                <span ng-hide="goal.completed" ng-click="$ctrl.toggle(goal)" class="glyphicon glyphicon-unchecked" aria-hidden="true"></span>
                <button ng-click="$ctrl.delete(goal)" class="btn btn-xs btn-danger">X</button>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4"><a ng-click="$ctrl.show(goal)">{{ goal.title }}</a><i class="material-icons right">close</i></span>
                <ul>
                  <li ng-show="goal.title === 'Running'">Distance: {{ goal.distance }} miles</li>
                  <li ng-show="goal.title === 'Running'">Time to complete goal: {{ goal.time }} minutes</li>
                  <li ng-show="goal.title === 'Weight Lifting'">Number of sets: {{ goal.sets }} sets</li>
                  <li ng-show="goal.title === 'Weight Lifting'">Number of reps: {{ goal.reps }} reps</li>
                  <li ng-show="goal.title === 'Weight Lifting'">Muscle group focused on: {{ goal.muscleGroup }}</li>
                </ul>
              </div>
            </div>
          </div>
    </div>


  `,

  controller: function(goalService, $state, Auth) {
    this.goals = null;

    toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "5000",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut",
    }

    this.getGoals = function() {
      goalService.getGoals()
      .then( res => {
        this.goals = res.data;
      })
      .then( function() {
        toastr.success("Welcome to gitFit," + Auth.getCurrentUserSync().name);
      })
    };

    this.getGoals();

    this.show = function(goal) {
      $state.go('goal-show', { id: goal._id});
    };

    this.edit = function(goal) {
      $state.go('goal-edit', { id: goal._id});
    };

    this.toggle = function(goal) {
      goalService.toggle(goal)
      .then( res => {
        this.getGoals();
      });
    };
    this.delete = function(goal) {
      goalService.delete(goal)
      .then( res => {
        this.getGoals();
      });
    };
  }

});
