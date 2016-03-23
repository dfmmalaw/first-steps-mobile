angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('login', {
      url: '/page1',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('signup', {
      url: '/page2',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })
        
      
    
      
    .state('menu', {
      url: '/side-menu21',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    
      
        
    .state('menu.children', {
      url: '/children',
      views: {
        'side-menu21': {
          templateUrl: 'templates/children.html',
          controller: 'childrenCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.settings', {
      url: '/settings',
      views: {
        'side-menu21': {
          templateUrl: 'templates/settings.html',
          controller: 'settingsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.aboutUs', {
      url: '/aboutus',
      views: {
        'side-menu21': {
          templateUrl: 'templates/aboutUs.html',
          controller: 'aboutUsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.contactUs', {
      url: '/contact',
      views: {
        'side-menu21': {
          templateUrl: 'templates/contactUs.html',
          controller: 'contactUsCtrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});