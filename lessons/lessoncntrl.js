
//$('#menu').tendina(); 
 routerApp.controller('lessonCntrl', function($scope, $http) {
// 	$(document).ready(function(){
// 				$("#math , #verbal").treeview({
// 					toggle: function() {
// 						//console.log("%s was toggled.", $(this).find(">span").text());
// 					}
// 				});
				
// 				$("#add").click(function() {
// 					var branches = $("<li><span class='folder'>New Sublist</span><ul>" + 
// 						"<li><span class='file'>Item1</span></li>" + 
// 						"<li><span class='file'>Item2</span></li></ul></li>").appendTo("#math , #verbal");
// 					$("#math , #verbal").treeview({
// 						add: branches
// 					});
// 				});
// 			});			
// 			/// filter for branch lessons
// 			$(function() {
// 				$('#math_filter').treeListFilter('.mathtree', 200);
// 				$('#verbal_filter').treeListFilter('.verbaltree', 200);
// 			});
// jQuery(function() {
// 	$('#quant-lessons').bonsai({
// 		expandAll: true,
// 	});
// 	$('#verbal-lessons').bonsai({
// 		expandAll: true,
// 	});
// });

// $('#expand-quant').change(function(event) {
// 	if(this.checked) {
// 		$('#quant-lessons > li.collapsed').not("ul li ul li ul li.collapsed").removeClass('collapsed').addClass('expanded');
// 		$('#quant-lessons > li ul').not("ul li ul li ul").css('height', 'auto');
// 	}
// 	else {
// 		$('#quant-lessons > li.expanded').not("ul li ul li ul li.expanded").removeClass('expanded').addClass('collapsed');
// 		$('#quant-lessons > li ul').not("ul li ul li ul").height(0);
// 	}
// });

// $('#expand-verbal').change(function(event) {
// 	if(this.checked) {
// 		$('#verbal-lessons > li.collapsed').not("ul li ul li ul li.collapsed").removeClass('collapsed').addClass('expanded');
// 		$('#verbal-lessons > li ul').not("ul li ul li ul").css('height', 'auto');
// 	}
// 	else {
// 		$('#verbal-lessons > li.expanded').not("ul li ul li ul li.expanded").removeClass('expanded').addClass('collapsed');
// 		$('#verbal-lessons > li ul').not("ul li ul li ul").height(0);
// 	}
// });

// $(document).ready(function(){
// 	if($('#msg').html()=='You have no access'){
// 		$('#upgrade-link').trigger('click');
// 	}
// 	setTimeout(function(){ $('#msg').fadeOut() }, 5000);
// });

// $('.btn-sider').click(function(e) {
// 	$('#_skill,#_difficulty,#_progress,#_graph').toggle();
// 	if($('#tog').hasClass('fa-chevron-circle-right')) {
// 		$('#tog').removeClass('fa-chevron-circle-right').addClass('fa-chevron-circle-left');
// 	}
// 	else {
// 		$('#tog').removeClass('fa-chevron-circle-left').addClass('fa-chevron-circle-right');
// 	}
// 	$('.col-sm-95').toggleClass('col-sm-95-fuller');
// 	$('.col-sm-35').toggleClass('col-sm-35-fuller');
// 	$('.sider').toggleClass('no-sider');
// });

// $('.mainless').on("click", function(){
//     resetData();
// });
// $('.subless').on("click", function(){
//      resetData();
// 	});
// $('.subless1').on("click", function(){
//      resetData();
// 	});

// function success(data) {
// 	$("#lessonid").empty().html(data.sublesson.id);
// 	$("#lessontext").empty().html(data.sublesson.lessonText);
// 	var math = $("#lessontext").html();
// 	MathJax.Hub.Queue(["Typeset",MathJax.Hub,"lessontext"]);
// 	$("#lessonname").empty().html(data.sublesson.name);
//      if(data.lessondetails)
//          {
//      if(data.lessondetails.bookMarked.name=="FLAGGED")
//      	$('#bookmark').prop('checked',true);
//      else
//      	$('#bookmark').prop('checked',false);
 	
//      $('.notes').val(data.lessondetails.notes);

//      $('a[name=confidence]').each(function() {
// 		$(this).addClass('btn  btn-info btn-test');

// 	  if(data.lessondetails.confLevels!=null)
// 		  {
// 		if($(this).data("value") == data.lessondetails.confLevels.name)
//  		   {
// 			$(this).removeClass('btn  btn-info btn-test');
// 			$(this).addClass('btn  btn-success btn-test ');
// 			$('[name=confi]').val(data.lessondetails.confLevels.name);
// 			 //console.log("The lessons value are", $('[name=confi]').val());
//    		   }
// 		 else
// 			  $('[name=confi]').val('');
// 		 }
	 
// 	        });
//         }
// 	$('.details').show();
// }

// $("a[name=confidence]").on("click", function() {
// 	$('a[name=confidence]').each(function() {
// 		$(this).addClass('btn  btn-info btn-test');
// 	});
// 	$(this).removeClass('btn  btn-info btn-test');
// 	$(this).addClass('btn  btn-success btn-test ');
// 	$('[name=confi]').val($(this).data("value"));

// 	//console.log("Hello in console of confidence click",$('[name=confi]').val());
// 	lessondetails();
// });

// $('#bookmark').on("click", function(event) {
// 	var isChecked = event.target.checked;
// 	var bookmark
// 	if(isChecked)
// 		$('[name=bokmark]').val('FLAGGED');
// 	else
// 		$('[name=bokmark]').val('UNFLAGGED');

// 	//console.log("Hello in console of confidence click",$('[name=bokmark]').val());
// 	lessondetails();
// });
// $('.notes').on("change",function(event){
// 	lessondetails();
// });

// function lessondetails(){
// //	console.log("The console of lesson details are");
// //	console.log("BookMark is",$('[name=bokmark]').val());
// //	console.log("Confidence  is",$('[name=confi]').val());
// //	console.log("Notes is",$('.notes').val());

	
// 	var url = appContext + "/lesson/lessonDetailsSave";
// 	$.ajax({
// 		url : url,
// 		type : "POST",
// 		data : {
// 			bookMarked :$('[name=bokmark]').val(),
// 			confLevels :$('[name=confi]').val(),
// 			notes      :$('.notes').val(),
// 			subLessonId:$("#lessonid").html()
// 		},
// 		success : function(data) {
// 			//console.log("data is"+data)
// 		}
// 	});
// }

// $('.lessfilter').on("click",function(event){
// 	lessonsFiltering();
// });

// $('.lessfilterchng').on("change",function(event){
// 	lessonsFiltering();
// });

// function lessonsFiltering()
// {
//   var notesdata="" ,bookmark="UNFLAGGED"
//  // console.log("The details are------",$('#confidencefil').val(),"Lessons value-----" ,$("#e9").val())

//   if($('#notesfil').is(":checked"))
// 		{
// 		notesdata = "notes";
// 		}

// 	if($('#bookmarksfil').is(":checked"))
// 		{
// 		bookmark="FLAGGED";
// 		}
// 	var mainle ="",lessonid=0
// 	//var lessonid = $("#e9").val();
// 	if(lessonid!=0 && lessonid!=undefined)
// 		{
// 	if(lessonid.length>4)
// 	{
//   mainle = lessonid.substring(lessonid.length-4,lessonid.length);
//   if(mainle=='less')
// 	lessonid = lessonid.substring(0,lessonid.length-4);
// 	}
// 		}

// 	var conffil = $('#confidencefil').val()
// 	if(conffil == 'Select')
// 		conffil = "" 

			
// 	var url = appContext + "/lesson/lessonsFiltering";
// 	$.ajax({
// 		url : url,
// 		type : "POST",
// 		data : {
// 			bookMarked : bookmark,
// 			confLevels :$('#confidencefil').val(),
// 			notes : notesdata,
// 			subLessonId : lessonid,
// 			mainle : mainle
// 		},
// 		success : function(data) {
// 			 $("#lesshier").empty().html(data);
// 		}
// 	});
// }

// function resetData(){
// 	$('a[name=confidence]').each(function() {
// 		$(this).addClass('btn  btn-info btn-test');
// 	});
// 	$('#bookmark').prop('checked',false);
// 	$('.notes').val('');
// 	$("#lessonid").empty().html('');
// 	$("#lessontext").empty().html('');
// 	$("#lessonname").empty().html('');
// 	$('[name=confi]').val('');
// }

//$("#e9").select2();
});