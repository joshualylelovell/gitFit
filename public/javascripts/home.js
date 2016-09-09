angular.module('myApp')
.component('home', {
  template: `
  {{ $ctrl.parallax() }}

   <div class="parallax-container">
    <div class="parallax"><img src="http://imgur.com/2lkgFB8.jpeg" alt="parallax1"></div>
  </div>
  <div class="section grey">
    <div class="row container">
      <h2 class="header">Parallax</h2>
      <p class="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
    </div>
  </div>
  <div class="parallax-container">
    <div class="parallax"><img src="http://imgur.com/SXSnSQX.jpeg" alt="parallax2" id="pullup"></div>
  </div>



    <h3> Near end of section</h3>
  `,
  controller: function() {
    this.name = 'Project 3 Fitness App';
    this.parallax = function(){
                    console.log('I hope it works');
                    $('.parallax').parallax();
                  };
  }
});

//<section class="container well text-center">
//   <h1>Welcome to the</h1>
  // <h1>{{ $ctrl.name }}</h1>
//..
// </section>
