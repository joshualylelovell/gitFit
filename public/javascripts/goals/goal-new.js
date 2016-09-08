angular.module('myApp')
.component('goalNew', {
  template: `
    <h3>NEW FITNESS GOAL</h3>

    <form ng-submit="$ctrl.save()">

      <div class="form-group">
        <label for="title">What's your goal?</label>
        <select class="form-control fitness-type"
                name="title"
                ng-model="$ctrl.goal.title">
                <option value="" disabled selected>Choose your option</option>
                <option value="Running">Running</option>
                <option value="Weight Lifting">Weight Lifting</option>
        </select>
      </div>

      <div class="form-group">
        <label for="dateToComplete">Completion Date</label>
        <input type="date"
               class="form-control"
               name="dateToComplete"
               ng-model="$ctrl.goal.dateToComplete">
      </div>

      <div class="form-group" ng-show="$ctrl.goal.title === 'Running'">
        <label for="distance">Distance (in miles)</label>
        <input type="number"
               class="form-control"
               name="distance"
               ng-model="$ctrl.goal.distance">
      </div>

      <div class="form-group" ng-show="$ctrl.goal.title === 'Running'">
        <label for="time">How long will it take you (in minutes)?</label>
        <input type="number"
               class="form-control"
               name="time"
               ng-model="$ctrl.goal.time">
      </div>

      <div class="form-group" ng-show="$ctrl.goal.title === 'Weight Lifting'">
        <label for="sets">How many sets can you do?</label>
        <input type="number"
               class="form-control"
               name="sets"
               ng-model="$ctrl.goal.sets">
      </div>

      <div class="form-group" ng-show="$ctrl.goal.title === 'Weight Lifting'">
        <label for="reps">How many reps can you do?</label>
        <input type="number"
               class="form-control"
               name="reps"
               ng-model="$ctrl.goal.reps">
      </div>

      <div class="form-group" ng-show="$ctrl.goal.title === 'Weight Lifting'">
        <label for="muscleGroup">Which muscle group will you focus on?</label>
        <input type="text"
               class="form-control"
               name="muscleGroup"
               ng-model="$ctrl.goal.muscleGroup">
      </div>
      <a ui-sref="goals" class="btn btn-primary">Back</a>
      <button type="submit" class="btn btn-success">Save</button>
    </form>
  `,
  controller: function(goalService, $state) {
    this.goal = {
      title: '',
      completed: false
    };

    this.save = function() {
      goalService.create(this.goal)
      .then( res => {
        $state.go('goals');
      });
    };
  }
});
