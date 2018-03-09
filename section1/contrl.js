routerApp.controller('customersCtrl', function($scope, $http, $interval) {
    $http.get("section1/data.json")
        .then(function(response) {
            $scope.names = response.data;
        });
    $scope.page = "section1";
    $scope.startTimer = moment().unix();
    $scope.timeCount = 0;
    $scope.estimationStop = moment().add(2, 'mins').unix();



    // alert('Start Time is' + $scope.startTimer);
    $interval(function() {
        //  alert('Now Time is' + $scope.estimationStop);

        if ($scope.startTimer == $scope.estimationStop) {

            $scope.page = "section4";

            if ($scope.startTimer == $scope.estimationStop) {

                $scope.page = "section4";

            }
        }
    }, 3000)

    $interval(function() {
        $scope.timeCount = $scope.timeCount + 1;
    }, 1000)

    $scope.inSection4Click = function() {

        $scope.page = "section2";
    }

    $scope.itemsPerPage = 1;
    $scope.items = [];
    $scope.currentPage = 1;
    $scope.selectRadio = function(parentIndex, rowIndex) {
            // console.log('-----' + rowIndex + '-----');
            angular.forEach($scope.names.questions[parentIndex].Options, function(val, key) {
                console.log(parentIndex, key)
                if (rowIndex == key) {
                    console.log($scope.names.questions[parentIndex].Options[key]);
                    $scope.names.questions[parentIndex].Options[key].IsAnswer = true;
                } else {
                    $scope.names.questions[parentIndex].Options[key].IsAnswer = false;
                }

            });
        }
        /*pagination*/
    $scope.prevPage1 = function() {
        if ($scope.currentPage - 1) {
            $scope.currentPage = $scope.currentPage - 1;
        }
    }

    $scope.nextPage1 = function() {
        if ($scope.currentPage != $scope.names.questions.length + 1) {
            $scope.currentPage = $scope.currentPage + 1;
        }
    }
     
    // disable refresh button

//     function disableF5(e) { if ((e.which || e.keyCode) == 116 || (e.which || e.keyCode) == 82) e.preventDefault(); };

//     $(document).ready(function(){
//          $(document).on("keydown", disableF5);
//     });

//     document.onkeydown = function(ev) {	
//         var key;
//         ev = ev || event;
//         key = ev.keyCode;
//         if (key == 116) {
//         return false;  // disable F5 key
//         }
// }

});