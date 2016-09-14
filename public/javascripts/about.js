angular.module('myApp')
.component('about', {
  template: `
  <section class="container text-center about">
  <div class="row">
        <h2>About</h2>
        <h3>Technologies Used</h3>
              <hr>
        <article class="col-md-6 tech">
          <h3>Client Technologies</h3>
          <ul class="no-bullets">
            <li ng-repeat = "tech in $ctrl.clientTechnologies">{{ tech }}</li>
          </ul>
        </article>
        <article class="col-md-6">
          <h3>Server Technologies</h3>
          <ul class="no-bullets">
            <li ng-repeat = "tech in $ctrl.serverTechnologies">{{ tech }}</li>
          </ul>
        </article>

        <h3 class="clearfix">The Team</h3>
              <hr>
        <article class="col-md-6">
          <img src="https://avatars.githubusercontent.com/u/18056682?v=3" class="circle profile">
          <h5>B Murrah</h5>
          <p>B Murrah is wearing a pink/red shirt today. Some say it is salmon</p>
        </article>
        <article class="col-md-6">
          <img src="https://avatars.githubusercontent.com/u/13894470?v=3" class="circle profile">
          <h5>B West</h5>
          <p>This guy has a beard and it is red</p>
        </article>
        <article class="col-md-6">
          <img src="https://avatars.githubusercontent.com/u/18180988?v=3" class="circle profile">
          <h5>C Smith</h5>
          <p>Die hard user of the app. Also, he is tall</p>
        </article>
        <article class="col-md-6">
          <img src="https://avatars.githubusercontent.com/u/20169725?v=3" class="circle profile">
          <h5>J Lovell</h5>
          <p>Joshua is wearing shorts today.</p>
        </article>

</div>

  </section>
  `,
  controller: function(Auth, $state) {
    this.clientTechnologies = [
      'Angular 1.5',
      'Twitter Bootstrap',
      'Angular Messages (ngMessages)',
      'Angular Animate (ngAnimate)',
      'Angular UI Router',
      'Toastr Notifications',
      'Materialize'
    ];
    this.serverTechnologies = [
      'Express 4',
      'Passport',
      'Mongoose',
      'MongoDB',
      'NodeJS 6'
    ];
  }
});
