var express = require('express');
var router = express.Router();
var Goal = require('../models/goal');

function makeError(res, message, status) {
  res.statusCode = status;
  var error = new Error(message);
  error.status = status;
  return error;
}

function authenticate(req, res, next) {
  if (!req.isAuthenticated()) {
    res.status(401).json( { message: 'Please signup or login.'} );
  }
  else {
    next();
  }
}

// INDEX
router.get('/', authenticate, function(req, res, next) {
  // get all the goals and render the index view
  Goal.find({ user: req.user}).sort('-createdAt')
  .then(function(goals) {
    res.json(goals);
  }, function(err) {
    return next(err);
  });
});

// CREATE
router.post('/', authenticate, function(req, res, next) {
  var goal = new Goal({
    title: req.body.title,
    dateToComplete: req.body.dateToComplete,
    distance: req.body.distance,
    time: req.body.time,
    sets: req.body.sets,
    reps: req.body.reps,
    muscleGroup: req.body.muscleGroup,
    completed: req.body.completed ? true : false,
    user: req.user
  });
  goal.save()
  .then(function(saved) {
    res.json(goal);
  }, function(err) {
    return next(err);
  });
});

// SHOW
router.get('/:id', authenticate, function(req, res, next) {
  Goal.findById(req.params.id)
  .then(function(goal) {
    if (!goal) return next(makeError(res, 'Document not found', 404));
    if (!req.user._id.equals(goal.user)) return next(makeError(res, 'Unauthorized', 401));
    res.json(goal);
  }, function(err) {
    return next(err);
  });
});

// UPDATE
router.put('/:id', authenticate, function(req, res, next) {
  Goal.findById(req.params.id)
  .then(function(goal) {
    if (!goal) return next(makeError(res, 'Document not found', 404));
    if (!req.user._id.equals(goal.user)) return next(makeError(res, 'Unauthorized', 401));
    goal.title = req.body.title;
    goal.dateToComplete = req.body.dateToComplete;
    goal.distance = req.body.distance;
    goal.time = req.body.time;
    goal.sets = req.body.sets;
    goal.reps = req.body.reps;
    goal.muscleGroup = req.body.muscleGroup;
    goal.completed = req.body.completed ? true : false;
    return goal.save();
  })
  .then(function(goal) {
    res.json(goal);
  }, function(err) {
    return next(err);
  });
});

// DESTROY
router.delete('/:id', authenticate, function(req, res, next) {
  Goal.findById(req.params.id)
  .then(function(goal) {
    if (!goal) return next(makeError(res, 'Document not found', 404));
    if (!req.user._id.equals(goal.user)) return next(makeError(res, 'Unauthorized', 401));
    return Goal.remove( { _id: goal._id} );
  })
  .then(function() {
    res.status(204).end();
  }, function(err) {
    return next(err);
  });
});

// TOGGLE completed status
router.get('/:id/toggle', authenticate, function(req, res, next) {
  Goal.findById(req.params.id)
  .then(function(goal) {
    if (!goal) return next(makeError(res, 'Document not found', 404));
    if (!req.user._id.equals(goal.user)) return next(makeError(res, 'Unauthorized', 401));
    goal.completed = !goal.completed;
    return goal.save();
  })
  .then(function(goal) {
    res.json(goal);
  }, function(err) {
    return next(err);
  });
});

module.exports = router;
