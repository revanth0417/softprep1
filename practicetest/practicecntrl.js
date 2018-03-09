
      
        routerApp.controller('practCntrl', function($scope, $http) {
            // console.log($scope.names);
			$scope.post ={
				"selectQuantionType": [
				  {
					"name": "Quantitative Comparision",
					"countQua": 10,
					"child": [{
					  
						  "Id": 1011,
						  "Name": "According to a recent survey, 26 percent of the 2,000 workers at Company X were discontented employees. 20 percent of those discontented had worked at the company for at least ten years. If 40 percent of all the workers have worked at Company X for at least ten years, how many people who had worked at least ten years did not respond that they were discontented with their jobs?",
						  "QuestionTypeId": 2,
						  "Options": [{
							  "Id": 1055,
							  "QuestionId": 1010,
							  "Name": "Theme",
							  "IsAnswer": false
						  }, {
							  "Id": 1057,
							  "QuestionId": 1010,
							  "Name": "Code-front",
							  "IsAnswer": false
						  }, {
							  "Id": 1056,
							  "QuestionId": 1010,
							  "Name": "Cross Page Posting",
							  "IsAnswer": true
						  }, {
							  "Id": 1058,
							  "QuestionId": 1010,
							  "Name": "None of the above",
							  "IsAnswer": false
						  }],
						  "QuestionType": {
							  "Id": 1,
							  "Name": "Multiple Choice",
							  "IsActive": true
						  }
					  }
					  
					]
				  },
				  {
					"name": "Data Interpretation",
					"countQua": 20,
					"child": [ {
						  "Id": 1011,
						  "Name": "According to a recent survey, 26 percent of the 2,000 workers at Company X were discontented employees. 20 percent of those discontented had worked at the company for at least ten years. If 40 percent of all the workers have worked at Company X for at least ten years, how many people who had worked at least ten years did not respond that they were discontented with their jobs?",
						  "QuestionTypeId": 2,
						  "Options": [{
							  "Id": 1055,
							  "QuestionId": 1010,
							  "Name": "Theme",
							  "IsAnswer": false
						  }, {
							  "Id": 1057,
							  "QuestionId": 1010,
							  "Name": "Code-front",
							  "IsAnswer": false
						  }, {
							  "Id": 1056,
							  "QuestionId": 1010,
							  "Name": "Cross Page Posting",
							  "IsAnswer": true
						  }, {
							  "Id": 1058,
							  "QuestionId": 1010,
							  "Name": "None of the above",
							  "IsAnswer": false
						  }],
						  "QuestionType": {
							  "Id": 1,
							  "Name": "Multiple Choice",
							  "IsActive": true
						  }
					  }
					  
					]
				  },
				  {
					"name": "Problem Solving",
					"countQua": 20,
					"child": [
					  {
						  "name" :"SingleAnswer" , 
						  "countQua":30
					  },
			  
					  {
						  "name": "Multiple Answer",
						   "countQua": 50
						  },
					  {
						  "name" :"NumericEntry" ,
						   "countQua":50
						  }         
					  ]         
					  
			  
				  }
				]
			  
			  
			  }

console.log($scope.post);



        });
       
  
