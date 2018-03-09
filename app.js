var routerApp = angular.module('routerApp', ['ui.router', 'ngCookies']);

routerApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'home.html',
        controller: 'homeCntrl'
    })

        .state('lessons', {
            url: '/lessons',
            templateUrl: 'lessons/lessons.html',

        })



        .state('fulllength', {
            url: '/fulllength',
            templateUrl: 'fulllength.html'
        })
        .state('cover', {
            url: '/cover',
            templateUrl: 'cover.html',
            controller: 'popcntrl'
        })
        .state('section1', {
            url: '/section1',
            templateUrl: 'section1/section1.html',
            controller: 'customersCtrl'

        })
        .state('timer', {
            url: '/timer',
            templateUrl: 'timer.html',
            controller: 'timeCtrl'

        })
        .state('section2', {
            url: '/section2',
            templateUrl: 'section2/section2.html',
            controller: 'customersCtrl1'


        })

        .state('login', {
            url: '/login',
             templateUrl: 'login/login.html',
            controller: 'loginCtrl'
        })

        .state('logout', {
            url: '/logout',
           templateUrl: 'logout/logout.html',
           controller: 'logoutCtrl'


        })
        .state('accountsetting', {
            url: '/accountsetting',
            templateUrl: 'accountsetting.html'


        })

        .state('signup', {
            url: '/signup',
            templateUrl: 'signup.html'


        })


        .state('practicetest', {
            url: '/practicetest',
            templateUrl: 'practicetest/practice.html',
            controller: 'practCntrl'


        })



        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'partial-about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': {
                    templateUrl: 'table-data.html',
                    controller: 'scotchController'
                }
            }

        })

});



// for popup
// routerApp.controller('coverCntrl', function ($scope) {

//     $scope.popup = function (url) {
//         params = 'width=' + screen.width;
//         params += ', height=' + screen.height;
//         params += ', top=0, left=0'
//         params += ', fullscreen=yes';

//         newwin = window.open(url, 'windowname4', params);
//         if (window.focus) { newwin.focus() }
//         return false;

//     }



// });

routerApp.controller('homeCntrl', function ($scope, $rootScope, $cookieStore, $state) {


    if ($cookieStore.get('loginAccess') == undefined) {
        $state.go('login');
    }

});

 routerApp.controller('logoutCtrl', function ($scope, loginService, $state, $rootScope, $cookieStore) {
      $cookieStore.remove('loginAccess');
      $state.go('login');

  });
