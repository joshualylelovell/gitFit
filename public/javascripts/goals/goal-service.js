angular.module('myApp')
.service('goalService', function($http) {

  this.getGoals = function() {
    return $http.get('/goals');
  };

  this.getGoal = function(id) {
    return $http.get('/goals/' + id);
  };

  this.toggle = function(goal) {
    return $http.get('/goals/' + goal._id + '/toggle');
  };

  this.create = function(goal) {
    return $http.post('/goals', goal);
  };

  this.update = function(goal) {
    return $http.put('/goals/' + goal._id, goal);
  };

  this.delete = function(goal) {
    return $http.delete('/goals/' + goal._id);
  };
});
