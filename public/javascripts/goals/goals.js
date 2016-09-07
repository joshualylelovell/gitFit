angular.module('myApp')
.component('goals', {
  template: `
    <h1>GOALS</h1>
    <div class="center">
    <div class="row">

      <div class="card col l4">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="https://hd.unsplash.com/photo-1463334535327-f9009ae62bf7">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
          <p><a href="#">This is a link</a></p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>

    <div class="card col l4">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="https://hd.unsplash.com/photo-1463334535327-f9009ae62bf7">
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
        <p><a href="#">This is a link</a></p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
        <p>Here is some more information about this product that is only revealed once clicked on.</p>
      </div>
    </div>

    <div class="card col l4">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="https://hd.unsplash.com/photo-1463334535327-f9009ae62bf7">
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
        <p><a href="#">This is a link</a></p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
        <p>Here is some more information about this product that is only revealed once clicked on.</p>
      </div>
    </div>
    </div>




    <div class="goals" ng-repeat = "goal in $ctrl.goals">
      <span ng-show="goal.completed" ng-click="$ctrl.toggle(goal)" class="glyphicon glyphicon-ok" aria-hidden="true"></span>
      <span ng-hide="goal.completed" ng-click="$ctrl.toggle(goal)" class="glyphicon glyphicon-unchecked" aria-hidden="true"></span>
      <a ng-click="$ctrl.show(goal)">{{ goal.title }}</a>
      <button ng-click="$ctrl.delete(goal)" class="btn btn-xs btn-danger">X</button>
    </div>
    <a ui-sref="goal-new" class="waves-effect waves-light btn">New</a>
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
