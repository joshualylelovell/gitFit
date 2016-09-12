angular.module('myApp')
.component('goalShow', {
  template: `
    <h3>This is your goal!</h3>
    <p><b>Goal: </b>{{ $ctrl.goal.title }}</p>
    <p><b>Completion Date: </b>{{ $ctrl.goal.dateToComplete }}</p>
    <p ng-show="$ctrl.goal.title === 'Running'"><b>Distance: </b>{{ $ctrl.goal.distance }}</p>
    <p ng-show="$ctrl.goal.title === 'Running'"><b>Time: </b>{{ $ctrl.goal.time }}</p>
    <p ng-show="$ctrl.goal.title === 'Weight Lifting'"><b>Sets: </b>{{ $ctrl.goal.sets }}</p>
    <p ng-show="$ctrl.goal.title === 'Weight Lifting'"><b>Reps: </b>{{ $ctrl.goal.reps }}</p>
    <p ng-show="$ctrl.goal.title === 'Weight Lifting'"><b>Muscle Group: </b>{{ $ctrl.goal.muscleGroup }}</p>
    <p><b>You created this: </b>{{ $ctrl.goal.createdAt | date : "medium" }}</p>
    <p><b>You last updated this: </b>{{ $ctrl.goal.updatedAt | date : "medium" }}</p>

    <a ui-sref="goals" class="btn btn-primary">Back</a>
    <a ng-click="$ctrl.edit(goal)" class="btn btn-warning">Edit</a>
    <!-- I could not get the opts to work this way:
    <!-- <a ui-sref="goal-edit" ui-sref-opts="{ id: $ctrl.goal._id }" class="btn btn-primary">Edit</a> -->
  `,
  controller: function(goalService, $state, $stateParams, Auth) {
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
