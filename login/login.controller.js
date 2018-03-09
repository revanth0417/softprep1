'use strict';


angular.module('routerApp')
    .controller('loginCtrl', function($scope, $cookieStore, $state, $rootScope, $http, loginService) {


        $scope.login = {};
        $scope.errorLogin = "";
        $scope.watingMsg = "";
        console.log($cookieStore.get('loginAccess'));

        $rootScope.hideView = true;

        if ($cookieStore.get('loginAccess') == undefined) {
            $state.go('login');
        } 
        // else {
        //     $state.go('home');
        // }
        $scope.login = {};
        $scope.onSubmit = function() {
            $scope.errorLogin = "";
            $scope.watingMsg = "Please wait proccessing.......";
            console.log($scope.login);

            //get,post , put,delete , putch 
            // $http.post("http://velocityrocktools.com/velocity/api/admin/login/", $scope.login).then(function(data) {
            //     console.log(data);
            //     if (data.data.error == undefined) {
            //         $scope.watingMsg = "";
            //         $rootScope.hideView = false;
            //         //  alert('enter success');
            //         //    $cookieStore.put("loginAccess", data);
            //         // $state.go('category');
            //         // toaster.success('Welcome To Dashboard');

            //     } else {
            //         $scope.watingMsg = "";
            //         // alert('enter error');
            //         $scope.errorLogin = "Login failed! Please Check Username And Password";
            //         console.log('Please Check Username And Password');
            //     }
            // }, function(err) {
            //     $scope.watingMsg = "";
            //     return dfd.reject(err);
            // });

            loginService.getLogin($scope.login).then(function(data) {
                $scope.watingMsg = "";
                if (data.data.error == undefined) {
                    console.log(data);
                    $rootScope.hideView = false;
                    $cookieStore.put("loginAccess", data.data);
                    $state.go('home');
                    // toaster.success('Welcome To Dashboard');


                } else {
                    $scope.errorLogin = "Login failed! Please Check Username And Password";
                    console.log('Please Check Username And Password');
                }
            });
        };


    //   slider loginpage 
	jQuery(document).ready(function($) {

		$('#checkbox').change(function() {
			setInterval(function() {
				moveRight();
			}, 3000);
		});

		var slideCount = $('#slider ul li').length;
		var slideWidth = $('#slider ul li').width();
		var slideHeight = $('#slider ul li').height();
		var sliderUlWidth = slideCount * slideWidth;

		$('#slider').css({
			width : slideWidth,
			height : slideHeight
		});

		$('#slider ul').css({
			width : sliderUlWidth,
			marginLeft : -slideWidth
		});

		$('#slider ul li:last-child').prependTo('#slider ul');

		function moveLeft() {
			$('#slider ul').animate({
				left : +slideWidth
			}, 200, function() {
				$('#slider ul li:last-child').prependTo('#slider ul');
				$('#slider ul').css('left', '');
			});
		}
		;

		function moveRight() {
			$('#slider ul').animate({
				left : -slideWidth
			}, 200, function() {
				$('#slider ul li:first-child').appendTo('#slider ul');
				$('#slider ul').css('left', '');
			});
		};

		$('a.control_prev').click(function() {
			moveLeft();
		});

		$('a.control_next').click(function() {
			moveRight();
		});

	});
    });