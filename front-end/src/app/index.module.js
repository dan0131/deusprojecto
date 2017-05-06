/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { DashboardController } from './dashboard/dashboard.controller';
import { InventryController } from './inventry/inventry.controller';
import { PatientController } from './patient/patient.controller';
import { AdduserController } from './adduser/adduser.controller';
import { IssueDrugController } from './issuedrugs/issuedrugs.controller';
import { CompareToDirective } from './directives/compareTo.directive';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('pharmacyFront', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap', 'toastr', 'satellizer'])
  .constant('malarkey', malarkey)
  .constant('API_URL', 'http://localhost:5000/')
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .controller('DashboardController', DashboardController)
  .controller('InventryController', InventryController)
  .controller('IssueDrugController', IssueDrugController)
  .controller('PatientController', PatientController)
  .controller('AdduserController', AdduserController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('compareTo', CompareToDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
