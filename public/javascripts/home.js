angular.module('myApp')
.component('home', {
  template: `
<div class="outer-parallax">
   <div class="parallax-container">
    <div class="parallax"><img src="http://imgur.com/2lkgFB8.jpeg" alt="parallax1"></div>
  </div>

  <div class="section grey">
    <div class="row container">
      <h2 class="header">Set goals that fit your schedule</h2>

      <b><p class="grey-text text-darken-3 lighten-3">
      Our app, {{ $ctrl.name }}, uses unprecedented levels of technology to help you plan and track your fitness regime.
      This app has been hand-forged using computers by developers who have amazing physiques.
      <p></b>

      <div class="cardbox col s12 m6"">

       <div class="card large">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="https://i.imgur.com/FVeFwgB.jpg">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{{ $ctrl.demoGoal.title }} Goal<i class="medium material-icons right">more_vert</i></span>
                <p>Due:</p>
                <span class="datespan">{{ $ctrl.demoGoal.dateToComplete  | date:'EEEE, MMMM d, y' }}</span>
                <br>
                <p>Completed:</p>
                <span ng-show="goal.completed" ng-click="$ctrl.toggle(goal)" class="left glyphicon glyphicon-ok" aria-hidden="true"></span>
                <span ng-hide="goal.completed" ng-click="$ctrl.toggle(goal)" class="left glyphicon glyphicon-unchecked" aria-hidden="true"></span>
                <br>
                <br>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4"><a ng-click="$ctrl.show(goal)">{{ $ctrl.demoGoal.title }}</a><i class="material-icons right">close</i></span>
                <ul>
                   <li>Distance: {{ $ctrl.demoGoal.distance }} miles</li>
                   <li>Time to complete goal: {{ $ctrl.demoGoal.time }} minutes</li>
                   {{ }}
                  <br>
                  <br>
                </ul>
                    <button ng-click="$ctrl.edit(goal)" class="waves-effect waves-light btn">Edit</button>
                    <button ng-click="$ctrl.delete(goal)" class="waves-effect waves-light btn">Delete</button>
              </div>
            </div>

          </div>
        <p>
        Paragraph about the card

        </p>
    </div>
  </div>
  <div class="parallax-container">
    <div class="parallax"><img src="http://imgur.com/SXSnSQX.jpeg" alt="parallax2" id="pullup"></div>
  </div>
</div>
  `,
  controller: function(Auth, $state) {
    this.name = 'gitFit';
    this.demoGoal = { title:  'Demo Running',
                    dateToComplete: '12-25-2016',
                    distance: 5,
                    time: 40,
                    completed: false,
                  };
    this.parallax = function(){
                    console.log('Parallax JQuery init works in home.js');
                    $('.parallax').parallax();
                  };
  }
});

//<section class="container well text-center">
//   <h1>Welcome to the</h1>
  // <h1>{{ $ctrl.name }}</h1>
//..
// </section>


// var GoalSchema = new mongoose.Schema({
//   title:     { type: String,  required: true },
//   dateToComplete: {type: Date, required: true },
//   distance: Number,
//   time: Number,
//   sets: Number,
//   reps: Number,
//   muscleGroup: String,
//   completed: { type: Boolean, required: true },
//   user:      { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
//   },
//   { timestamps: true }  // createdAt, updatedAt
// );
