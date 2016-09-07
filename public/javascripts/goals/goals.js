angular.module('myApp')
.component('goals', {
  template: `
    <h1>GOALS</h1> <a ui-sref="goal-new" class="waves-effect waves-light btn">New</a>

    <div class="row">

      <div class="col s12 m4" ng-repeat = "goal in $ctrl.goals">
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="http://materializecss.com/images/office.jpg">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">{{ goal.title }}<i class="material-icons right">more_vert</i></span>
            <span ng-show="goal.completed" ng-click="$ctrl.toggle(goal)" class="glyphicon glyphicon-ok" aria-hidden="true"></span>
            <span ng-hide="goal.completed" ng-click="$ctrl.toggle(goal)" class="glyphicon glyphicon-unchecked" aria-hidden="true"></span>
            <a ng-click="$ctrl.show(goal)">{{ goal.title }}</a>
            <button ng-click="$ctrl.delete(goal)" class="btn btn-xs btn-danger">X</button>
          </div>
          <div class="card-reveal">

             <a ng-click="$ctrl.show(goal)">{{ goal.title }}</a>


            <button ng-click="$ctrl.delete(goal)" class="btn btn-xs btn-danger">X</button>


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
