

  'use strict';
 angular.module('inspinia')
   .controller('directiveList', function($scope, $state, $filter, DTOptionsBuilder, DTColumnDefBuilder, $injector, $attrs, orderService) {
        
        console.log('enter...');
         var vm = this; 
         $scope.droppage  = 0;
         $scope.nexthideli = 0;
         $scope.statusTab  = 10050;
         $scope.currentPages = 0;



         $scope.fromDate22=$filter('date')(new Date(), 'yyyy-MM-dd');
         var makeDate = new Date($scope.fromDate22);
            makeDate = new Date(makeDate.setMonth(makeDate.getMonth() - 1));
                 
           var temp=$filter('date')(makeDate, 'yyyy-MM-dd'); 

            $scope.fromDate=String(temp) ;
          
              
         $scope.toDate=$filter('date')(new Date(), 'yyyy-MM-dd');

         $scope.DateSelect=function(){
            
             $scope.fromDate=$scope.fromDate ;
              $scope.toDate=$scope.toDate ;
               $scope.statusChange($scope.statusTab) ;
         }
         //Previous next 
         $scope.currentPage1 = function(type) {
             $scope.list = [];
             if (type == 'prev') {
                 //Pagination Prev
                 var devid = $scope.droppage / 10;
                 var decrement = devid - 1;
                 console.log(decrement);
                 $scope.droppage = decrement * 10;
                 console.log($scope.droppage);
             } else {
                 //Pagination Next
                 if ($filter('currentpage2')($scope.droppage) == 1) {
                     console.log($filter('currentpage2')($scope.droppage));
                     $scope.droppage = 10;
                 } else {
                     $scope.droppage = $filter('currentpage2')($scope.droppage) * 10;
                 }
                 //console.log(order);
                 console.log($scope.droppage);
             }
             $scope.gotopage($scope.droppage);
             //console.log(order);
         }
        //Goto pages 
         $scope.gotopage = function(selectedItem) {
            //console.log(selectedItem);
            if(selectedItem == null){
                 var curcount = 0;
                 $scope.nexthideli=0;
                 $scope.droppage=0;
                 console.log('enter in');
            }
             $scope.list = [];
             //console.log($filter('currentpage')(selectedItem)) ;
             if (selectedItem == 0) {
                 var curcount = 0;
             } else {
                 var order = $filter('currentpages')(selectedItem);
                 var curcount = order * 10;
             }
             // $scope.currentPage = curcount - 1;
            if($scope.statusTab == 10050){
                 
                  var id=$scope.statusTab+':'+$scope.fromDate+':'+$scope.toDate+':' ;
                    console.log(id);
               orderService.listAllOrderstatus(id,curcount).then(function(data) {
                 //  console.log('enter');
            console.log(data);
                 $scope.list = data;
             });

             }else{
                
               var id=$scope.statusTab+':'+$scope.fromDate+':'+$scope.toDate+':' ;
                  
                  orderService.listOrderBystatus(id, curcount).then(function(data) {
                 //  console.log('enter');
                 ///  console.log(data);
                 $scope.list = data;
             });
                
             } 
             
         }
         $scope.page = [];
         $scope.statusChange = function(id) {
                
             $scope.statusTab = id;
             $scope.page = [];
             $scope.list = [];
             $scope.currentPages = 0;

             if(id != 10050) {
                if(id != null){
                      id=$scope.statusTab+':'+$scope.fromDate+':'+$scope.toDate+':' ;
                         orderService.listOrderBystatus(id).then(function(data) {
                      console.log(data.count);
                     //$scope.list = [];
                     // $scope.list = data;
                     if (data.count > 10) {
                         $scope.pages = Math.ceil(data.count / 10);
                         var nexthide = $scope.pages - 1;
                         $scope.nexthideli = nexthide * 10;
                         // console.log('No Pages'+$scope.pages);
                         for (var i = 0; i < $scope.pages; i++) {
                             $scope.page.push({ id: i + 1, name: i * 10 });
                         }
                     } else {
                         $scope.pages = Math.ceil(10 / 10);
                         $scope.page.push({id:1,name:0});
                            
                     }
                 });
                }
               
                 
             }else if(id == 10050){
                 id=id+':'+$scope.fromDate+':'+$scope.toDate+':' ;
                 //console.log(id) ;
                 orderService.listAllOrderstatus(id).then(function(data) {
                      console.log(data.count);
                     //$scope.list = [];
                     $scope.list = data;
                     if (data.count > 10) {
                         $scope.pages = Math.ceil(data.count / 10);
                         var nexthide = $scope.pages - 1;
                         $scope.nexthideli = nexthide * 10;
                         // console.log('No Pages'+$scope.pages);
                         for (var i = 0; i < $scope.pages; i++) {
                             $scope.page.push({ id: i + 1, name: i * 10 });
                         }
                     } else {
                         $scope.pages = Math.ceil(10 / 10);
                         $scope.page.push({id:1,name:0});
                            
                     }
                 });

             }else {
                
                 // $scope.listalldata();
             }
 
             $scope.gotopage(0);

         }

         $scope.statusChange($scope.statusTab);
          $scope.$watch('list',function(newval,oldval){
            console.log(newval.length) ;
            if(newval.length > 10){
                $scope.statusChange($scope.statusTab);
            }
         });


     });