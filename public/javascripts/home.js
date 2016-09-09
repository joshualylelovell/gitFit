angular.module('myApp')
.component('home', {
  template: `
  {{ $ctrl.parallax() }}

   <div class="parallax-container">
    <div class="parallax"><img src="https://hd.unsplash.com/photo-1427384906349-30452365b5e8" alt="parallax1"></div>
  </div>
  <div class="section grey">
    <div class="row container">
      <h2 class="header">Parallax</h2>
      <p class="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
    </div>
  </div>
  <div class="parallax-container">
    <div class="parallax"><img src="https://hd.unsplash.com/photo-1434754205268-ad3b5f549b11" alt="parallax2"></div>
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
