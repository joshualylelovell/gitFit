angular.module('myApp')
.component('goals', {
  template: `
    <h1>GOALS</h1> <a ui-sref="goal-new" class="waves-effect waves-light btn">New</a>
      <div class="divider"></div>
      <div class="section">
        <h2>Upcoming Goals</h2>
        <div class="row">
          <div class="col s12 m4" ng-repeat = "goal in $ctrl.goals | filter: { completed: false }">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="http://materializecss.com/images/office.jpg">
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
                  <li>{{ goal.dateToComplete }}</li>
                  <li ng-show="goal.title === 'Running'">Distance (in miles): {{ goal.distance }}</li>
                  <li ng-show="goal.title === 'Running'">Time to complete goal (in minutes): {{ goal.time }}</li>
                  <li ng-show="goal.title === 'Weight Lifting'">Number of sets: {{ goal.sets }}</li>
                  <li ng-show="goal.title === 'Weight Lifting'">Number of reps: {{ goal.reps }}</li>
                  <li ng-show="goal.title === 'Weight Lifting'">Muscle group to focus on: {{ goal.muscleGroup }}</li>
                </ul>
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
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="http://materializecss.com/images/office.jpg">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{{ goal.title }}<i class="material-icons right">more_vert</i></span>
                <span class="card-title activator grey-text text-darken-4">{{ goal.dateToComplete }}<i class="material-icons right">more_vert</i></span>
                <span ng-show="goal.completed" ng-click="$ctrl.toggle(goal)" class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                <span ng-hide="goal.completed" ng-click="$ctrl.toggle(goal)" class="glyphicon glyphicon-unchecked" aria-hidden="true"></span>
                <button ng-click="$ctrl.delete(goal)" class="btn btn-xs btn-danger">X</button>
              </div>
              <div class="card-reveal">
                <ul>
                  <li> <a ng-click="$ctrl.show(goal)">{{ goal.title }}</a></li>
                  <li>{{ goal.dateToComplete }}</li>
                  <li ng-show="goal.title === 'Running'">Distance (in miles): {{ goal.distance }}</li>
                  <li ng-show="goal.title === 'Running'">Time it took to complete goal (in minutes): {{ goal.time }}</li>
                  <li ng-show="goal.title === 'Weight Lifting'">Number of sets completed: {{ goal.sets }}</li>
                  <li ng-show="goal.title === 'Weight Lifting'">Number of reps completed: {{ goal.reps }}</li>
                  <li ng-show="goal.title === 'Weight Lifting'">Muscle group to focus on: {{ goal.muscleGroup }}</li>
                </ul>
              </div>
            </div>
          </div>
    </div>


  `,
  controller: function(goalService, $state) {
    this.goals = null;

    this.getGoals = function() {
      goalService.getGoals()
      .then( res => {
        this.goals = res.data;
      });
    };

    this.getGoals();

    this.show = function(goal) {
      $state.go('goal-show', { id: goal._id});
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
