angular.module('myApp')
.component('about', {
  template: `
    <section class="container text-center">
      <h1>This App uses the following Technologies</h1>
      <article class="col-md-6">
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

      <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">This App uses the following Technologies</span>
              <p>
              <h3>Client Technologies</h3>
              <ul class="no-bullets">
               <li ng-repeat = "tech in $ctrl.clientTechnologies">{{ tech }}</li>
             </ul>
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>



    </section>
  `,
  controller: function() {
    this.clientTechnologies = [
      'Angular 1.5',
      'Twitter Bootstrap',
      'Angular Messages (ngMessages)',
      'Angular Animate (ngAnimate)',
      'Angular UI Router'
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
