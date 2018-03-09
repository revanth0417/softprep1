 'use strict';
 angular.module('inspinia')
     .controller('directiveList2', function($scope, $state, $filter, DTOptionsBuilder, DTColumnDefBuilder, $injector, $attrs, quotationservice,$timeout,customerService) {
            
         var vm = this; 
         var numberFormat = function(n){return n<10 ? '0'+n : n}
         $scope.droppage  = 0;
         $scope.nexthideli = 0;
         $scope.statusTab  = 'date_of_birth';
         $scope.currentPages = 0;
          $scope.fromDate=String(numberFormat($scope.dobdate)+numberFormat($scope.dobmonth+1)) ;
             $scope.toDate=String(numberFormat($scope.dobdate)+numberFormat($scope.dobmonth+1)) ;       

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
                
            }
             $scope.list = [];
             //console.log($filter('currentpage')(selectedItem)) ;
             if (selectedItem == 0) {
                 var curcount = 0;
             } else {
                 var order = $filter('currentpages')(selectedItem);
                 var curcount = order * 10;
             }
                
               var id=$scope.statusTab+':'+$scope.fromDate+':'+$scope.toDate+':' ;
                  
                customerService.listdobdoa(id, curcount).then(function(data) {
                 //  console.log('enter');
                  
                 $scope.list = data;
             });
                
          
         }
         $scope.page = [];
         $scope.statusChange = function(id) {
                    

             $scope.fromDate=String(numberFormat($scope.dobdate)+numberFormat($scope.dobmonth+1)) ;
             $scope.toDate=String(numberFormat($scope.dobdate)+numberFormat($scope.dobmonth+1)) ;       
             $scope.statusTab = id;
             $scope.page = [];
             $scope.list = [];
             $scope.currentPages = 0;

             if(id != 10050) {

                if(id != null){
                      id=$scope.statusTab+':'+$scope.fromDate+':'+$scope.toDate+':' ;
                          customerService.listdobdoa(id).then(function(data) {
                     // console.log(data.count);
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
               
                 
             }else{
                
                 // $scope.listalldata();
             }



             $scope.gotopage(0);

         }

         $scope.statusChange($scope.statusTab);

         $scope.PushIndexVal=0;
          $scope.PushId='';
         $scope.sendVal=function(val,index){
           $scope.sendpush=true ;
           $scope.PushIndexVal=index;
           $scope.PushId=val;
           console.log($scope.sendpush) ;
         }
         $scope.send=function(){
             var error = 0;
             if($scope.message== '' || $scope.message == undefined){
                alert('Enter Message')
                error++;
            }
           if(error == 0){
            $scope.msg={
                'customer_id' : $scope.PushId ,
                'message' : $scope.message 
            }

             $scope.sendpush=false ;
              $scope.list[$scope.PushId]=false ;
              console.log($scope.msg);
              $scope.message ='' ;

              customerService.pushMsg($scope.msg).then(function(data) {
                 //  console.log('enter');
                  
                  if (data.error == undefined) { 
                       
                         toastr.success('Sendpush Successfully Submited');
                    } else {
                         toastr.warning('Problem In SendPush');
                    } 


             });
           
             


           }


         }
        

     });