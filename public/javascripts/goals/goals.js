angular.module('myApp')
.component('goals', {
  template: `
    <h1>GOALS</h1>

    <div class="goals" ng-repeat = "goal in $ctrl.goals">
      <span ng-show="goal.completed" ng-click="$ctrl.toggle(goal)" class="glyphicon glyphicon-ok" aria-hidden="true"></span>
      <span ng-hide="goal.completed" ng-click="$ctrl.toggle(goal)" class="glyphicon glyphicon-unchecked" aria-hidden="true"></span>
      <a ng-click="$ctrl.show(goal)">{{ goal.title }}</a>
      <button ng-click="$ctrl.delete(goal)" class="btn btn-xs btn-danger">X</button>
    </div>
    <hr/>
    <a ui-sref="goal-new" class="btn btn-primary">New</a>
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
      $state.go('goal-show', { id: goal._id });
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
