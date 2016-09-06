angular.module('myApp')
.component('goalEdit', {
  template: `
    <h3>EDIT</h3>

    <form ng-submit="$ctrl.save()">

      <div class="form-group">
        <label for="title">Title</label>
        <input type="text"
               class="form-control"
               name="title"
               ng-model="$ctrl.goal.title">
      </div>

      <div class="form-group">
        <label for="completed">Completed</label>
        <input type="checkbox"
               class="form-control"
               name="completed"
               ng-model="$ctrl.goal.completed">
      </div>

      <a ng-click="$ctrl.show()" class="btn btn-primary">Back</a>
      <button type="submit" class="btn btn-success">Save</button>
    </form>
  `,
  controller: function(goalService, $state, $stateParams) {
    this.goal = null;

    this.show = function() {
      $state.go('goal-show', { id: this.goal._id });
    };

    this.save = function() {
      goalService.update(this.goal)
      .then( res => {
        $state.go('goals');
      });
    };

    goalService.getGoal($stateParams.id)
    .then( res => {
      this.goal = res.data;
    });
  }
});
