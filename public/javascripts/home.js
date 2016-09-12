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

      <div class="cardbox">
         <div class="row" class="hcard">
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Card Title</span>
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
              </div>
              <div class="card-action">

                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>

        <div class="row" "hcard">
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Card Title</span>
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
              </div>
              <div class="card-action">

                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div class="parallax-container">
    <div class="parallax"><img src="http://imgur.com/SXSnSQX.jpeg" alt="parallax2" id="pullup"></div>
  </div>
</div>
  `,
  controller: function(Auth, $state) {
    this.name = 'gitFit';
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
