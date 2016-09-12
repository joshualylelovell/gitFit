'use strict';
var mongoose = require('mongoose');

var GoalSchema = new mongoose.Schema({
  title:     { type: String,  required: true },
  dateToComplete: {type: Date, required: true },
  distance: Number,
  time: Number,
  sets: Number,
  reps: Number,
  muscleGroup: String,
  completed: { type: Boolean, required: true },
  user:      { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  },
  { timestamps: true }  // createdAt, updatedAt
);

function date2String(date) {
  var options = {
    weekday: 'long', year: 'numeric', month: 'short',
    day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
  };
  return date.toLocaleDateString('en-US', options);
}

GoalSchema.methods.getCreatedAt = function() {
  return date2String(this.createdAt);
};

GoalSchema.methods.getUpdatedAt = function() {
  return date2String(this.updatedAt);
};


GoalSchema.methods.toString = function() {
  let status = this.completed ? 'completed' : 'not completed';
  return `Goal: ${this.title} owned by ${this.user.local.email} is ${status}.`;
};

module.exports = mongoose.model('Goal', GoalSchema);
