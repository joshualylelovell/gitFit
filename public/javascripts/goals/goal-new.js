angular.module('myApp')
.component('goalNew', {
  template: `
    <h3>NEW</h3>
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
