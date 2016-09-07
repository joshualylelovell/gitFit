angular.module('myApp')
.component('goalShow', {
  template: `
    <h3>SHOW</h3>
    <p><b>Title: </b>{{ $ctrl.goal.title }}</p>
    <p><b>Completion Date: </b>{{ $ctrl.goal.dateToComplete }}</p>
    <p><b>Distance: </b>{{ $ctrl.goal.distance }}</p>
    <p><b>Time: </b>{{ $ctrl.goal.time }}</p>
    <p><b>Sets: </b>{{ $ctrl.goal.sets }}</p>
    <p><b>Reps: </b>{{ $ctrl.goal.reps }}</p>
    <p><b>Muscle Group: </b>{{ $ctrl.goal.muscleGroup }}</p>
    <p><b>ID: </b>{{ $ctrl.goal._id }}</p>
    <p><b>Completed: </b>
      <span ng-show="$ctrl.goal.completed" class="glyphicon glyphicon-ok" aria-hidden="true"></span>
      <span ng-hide="$ctrl.goal.completed" class="glyphicon glyphicon-unchecked" aria-hidden="true"></span>
    </p>
    <p><b>Created: </b>{{ $ctrl.goal.updatedAt | date : "medium" }}</p>
    <p><b>Last Updated: </b>{{ $ctrl.goal.createdAt | date : "medium" }}</p>

    <a ui-sref="goals" class="btn btn-primary">Back</a>
    <a ng-click="$ctrl.edit(goal)" class="btn btn-warning">Edit</a>
    <!-- I could not get the opts to work this way:
    <!-- <a ui-sref="goal-edit" ui-sref-opts="{ id: $ctrl.goal._id }" class="btn btn-primary">Edit</a> -->
  `,
  controller: function(goalService, $state, $stateParams) {
    this.goal = null;

    this.edit = function() {
      $state.go('goal-edit', { id: this.goal._id });
    };

    goalService.getGoal($stateParams.id)
    .then( res => {
      this.goal = res.data;
    });
  }
});
