angular.module('myApp')
.component('goalNew', {
  template: `
    <h3>NEW</h3>
    <p>GOAL: finish this.</p>

    <a ui-sref="goals" class="btn btn-primary">Back</a>
  `,
  controller: function(goalService, $state, $stateParams, Auth) {
    this.goalService = goalService;
    this.$state = $state;
    this.goal = null;
    this.Auth = Auth;
    
  }
});

angular.module('myApp')
.component('goalEdit', {
  template: `
    <h3>EDIT</h3>
    <p>GOAL: finish this.</p>

    <a ng-click="$ctrl.show()" class="btn btn-primary">Back</a>
  `,
  controller: function(goalService, $state, $stateParams, Auth) {
    this.goalService = goalService;
    this.$state = $state;
    this.goal = null;

    this.show = function() {
      this.$state.go('goal-show', { id: this.goal._id });
    };

    goalService.getGoal($stateParams.id)
    .then( res => {
      this.goal = res.data;
      console.log('this.goal:', JSON.stringify(this.goal));
    });
  }
});
