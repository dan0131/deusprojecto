export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'app/dashboard/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'dashboard'
    })
    .state('inventry', {
      url: '/inventry',
      templateUrl: 'app/inventry/inventry.html',
      controller: 'InventryController',
      controllerAs: 'inventry'
    })
    .state('patient', {
      url: '/patient',
      templateUrl: 'app/patient/patient.html',
      controller: 'PatientController',
      controllerAs: 'patient'
    })
    .state('adduser', {
      url: '/adduser',
      templateUrl: 'app/adduser/adduser.html',
      controller: 'AdduserController',
      controllerAs: 'adduser'
    })
    .state('issuedrugs', {
      url: '/issuedrugs',
      templateUrl: 'app/issuedrugs/issuedrugs.html',
      controller: 'IssueDrugController',
      controllerAs: 'issuedrugs'
    });

  $urlRouterProvider.otherwise('/');
}
