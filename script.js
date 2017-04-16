 


var hw8 = angular.module('hw8', ['ngCordova','angularMoment','ngAnimate']);

     hw8.controller('page',function($scope,$http,$cordovaGeolocation) {
$scope.my = { myValue:true , myValuep:true , myValuee:true, myValuepl:true, myValueg:true, myValuef:true , show:true , showe:true, showp:true , showpl:true, showg:true,showf:true};

// on page load 
$(document).ready(function(){

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);

  $scope.lat = crd.latitude;
  $scope.long = crd.longitude;
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, options);
//angular.element(user_section).hide();



 
    
});

//on page load ends

//on click of search 
    $scope.getName=function(){
		
        $scope.required=true;
		
		if((typeof($scope.keyword)=="undefined")||(($scope.keyword)==null))
   {
				$('#prog').hide();
                     $scope.my.show=true;
                    $scope.my.showp=true;
                    
                    
                    $scope.my.showe=true;
                    $scope.my.showpl=true;
                    
                    $scope.my.showg=true;
                   

                    $scope.my.showf=true;
   }
		
		
		else
		
		
		
{
	 $('#prog').show();
       var $a = $('.nav-tabs .active').text(); 
		
        $http.get("fb.php?keyword="+ $scope.keyword+"&type="+$a+"&lat="+$scope.lat+"&long="+$scope.long)
    .then(function successCallback(response) {
        
        $('#prog').hide();

        if($a=="Users"){
        $scope.user = response.data.data;
        if(typeof(response.data.paging)!="undefined"){
            if(typeof(response.data.paging.next)!="undefined")
        { $scope.nextPage = response.data.paging.next; 
        $('.next').show();
    }
    else {
        $('.next').hide();
    }

    if(typeof(response.data.paging.previous)!="undefined")
    {
        $scope.previousPage = response.data.paging.previous;
        $('.previous').show();
    }
    else
    {
        $('.previous').hide();
    }
      }  
      else{
        $('.previous').hide();
        $('.next').hide();
      }
    }

    else
        if($a=="Events")
        {
            $scope.events = response.data.data;
            if(typeof(response.data.paging)!="undefined") {
             if(typeof(response.data.paging.next)!="undefined")
            
        { $scope.nextPage = response.data.paging.next; 
        $('.next').show();
    }
    else {
        $('.next').hide();
    }

    if(typeof(response.data.paging.previous)!="undefined")
    {
        $scope.previousPage = response.data.paging.previous;
        $('.previous').show();
    }
    else
    {
        $('.previous').hide();
    }
}
else
{
    $('.previous').hide();
    $('.next').hide();
}


        }
         else
        if($a=="Places")
        {
            $scope.places = response.data.data;
            if(typeof(response.data.paging)!="undefined"){
             if(typeof(response.data.paging.next)!="undefined")
            
        { $scope.nextPage = response.data.paging.next; 
        $('.next').show();}
    else {
        $('.next').hide();
    }

    if(typeof(response.data.paging.previous)!="undefined")
    {
        $scope.previousPage = response.data.paging.previous;
        $('.previous').show();
    }
    else
    {
        $('.previous').hide();
    }
}
else
{
    $('.previous').hide();
    $('.next').hide();
}
        }
         else
        if($a=="Groups")
        {
            $scope.groups = response.data.data;
            if(typeof(response.data.paging)!="undefined"){
             if(typeof(response.data.paging.next)!="undefined")
            
        { $scope.nextPage = response.data.paging.next;
        $('.next').show(); }
    else {
        $('.next').hide();
    }

    if(typeof(response.data.paging.previous)!="undefined")
    {
        $scope.previousPage = response.data.paging.previous;
        $('.previous').show();
    }
    else
    {
        $('.previous').hide();
    }
}
else
{
    $('.previous').hide();
    $('.next').hide();
}

        }
         else
        if($a=="Pages")
        {
            $scope.pages = response.data.data;
            if(typeof(response.data.paging)!="undefined"){
             if(typeof(response.data.paging.next)!="undefined")
            
        { $scope.nextPage = response.data.paging.next; 
        $('.next').show();}
    else {
        $('.next').hide();

    }

    if(typeof(response.data.paging.previous)!="undefined")
    {
        $scope.previousPage = response.data.paging.previous;
        $('.previous').show();
    }
    else
    {
        $('.previous').hide();
    }
}
else
{
    $('.previous').hide();
    $('.next').hide();
}
        }
        }, function errorCallback(response) {
        console.log(response)

     
        $scope.my.show=true;
                    $scope.my.showp=true;
                    
                    
                    $scope.my.showe=true;
                    $scope.my.showpl=true;
                    
                    $scope.my.showg=true;
                   

                    $scope.my.showf=true;
                     
                    
                
       
    });


         $scope.funp("Pages");
		$scope.fune("Events");
		$scope.funpl("Places");
		$scope.fune("Groups");		

   
  


    if($a=="Users"){

     
                     $scope.my.show=false;
                     $scope.my.showp=true;
                    
                    
                    $scope.my.showe=true;
                    $scope.my.showpl=true;
                    
                    $scope.my.showg=true;
                   

                    $scope.my.showf=true;
                    


            
 }
 if($a=="Pages")
 {
                     
                    $scope.my.showp=false;
                    
                    $scope.my.show=true;
                    $scope.my.showe=true;
                    $scope.my.showpl=true;
                    
                    $scope.my.showg=true;
                   

                    $scope.my.showf=true;
               
 }
 if($a=="Events")
 {
    
                   
                    
                    
                    $scope.my.showe=false;
                      $scope.my.show=true;
                    $scope.my.showp=true;
                    $scope.my.showpl=true;
                    
                    $scope.my.showg=true;
                   

                    $scope.my.showf=true;
               

 }
 if($a=="Places")
 {
   
                     
                    $scope.my.showpl=false;
                    $scope.my.show=true;
                    $scope.my.showp=true;
                    
                    
                    $scope.my.showe=true;
                    $scope.my.showg=true;
                   

                    $scope.my.showf=true;
             
 }
 if($a=="Groups")
 {
    
                   
                    
                    $scope.my.showg=false;
                   
  $scope.my.show=true;
                    $scope.my.showp=true;
                    
                    
                    $scope.my.showe=true;
                    $scope.my.showpl=true;
                    $scope.my.showf=true;
               

 }
 if($a=="fav")
 {
   
                    $scope.my.showf=false;
                     $scope.my.show=true;
                    $scope.my.showp=true;
                    
                    
                    $scope.my.showe=true;
                    $scope.my.showpl=true;
                    
                    $scope.my.showg=true;
                   

               

 }

    }
    }
    // on click of search ends 

    //on page tab click
    $scope.funp=function(value){

         $scope.my.showp=false;
$scope.required=true;

        if(typeof($scope.keyword)!="undefined"){
         
     $http.get("fb.php?keyword="+ $scope.keyword+"&type="+value)
        
    .then(function successCallback(response) {
     //   $('#prog').hide();

        $scope.pages = response.data.data;

        if(typeof(response.data.paging)!="undefined"){

         if(typeof(response.data.paging.next)!="undefined")
        { $scope.nextPage = response.data.paging.next; 
        $('.next').show();}
    else {
        $('.next').hide();
    }

    if(typeof(response.data.paging.previous)!="undefined")
    {
        $scope.previousPage = response.data.paging.previous;
        $('.previous').show();
    }
    else
    {
        $('.previous').hide();
    }
}
else
{$('.previous').hide();
    $('.next').hide();
}

        }, function errorCallback(response) {
        console.log(response)
    
       
    });

  
                     $scope.my.show=true;
                    
                    $scope.my.myValue=true;
                    $scope.my.showe=true;
                    $scope.my.myValuee=true;
                    $scope.my.showpl=true;
                    $scope.my.myValuepl=true;
                    
                    $scope.my.showg=true;
                    $scope.my.myValueg=true;
                   

                    $scope.my.showf=true;
                    $scope.my.myValuef=true;
                //    $('#prog').show();
				
		setTimeout(function () {
                     
                    $scope.my.showp=false;
                    
                    
					}, 1000);
                

    }
    else
    {
		$('#prog').hide();
                    $scope.my.show=true;
                    $scope.my.myValue=true;
                    $scope.my.showp=true;
                    $scope.my.myValuep=true;
                    
                    $scope.my.showe=true;
                    $scope.my.myValuee=true;
                    $scope.my.showpl=true;
                    $scope.my.myValuepl=true;
                    
                    $scope.my.showg=true;
                   $scope.my.myValueg=true;

                    $scope.my.showf=true;
                    $scope.my.myValueg=true;
    }
}


    // on page tab click ends

    //on user tab click

    $scope.funu=function(value){
        $scope.my.show=false;
        if(typeof($scope.keyword)!="undefined"){
        $http.get("fb.php?keyword="+ $scope.keyword+"&type="+value)
    .then(function successCallback(response) {
            
      //      $('#prog').hide();

        $scope.user = response.data.data;

        if(typeof(response.data.paging)!="undefined"){

         if(typeof(response.data.paging.next)!="undefined")
        { $scope.nextPage = response.data.paging.next;
        $('.next').show(); }
    else {
        $('.next').hide();
    }

    if(typeof(response.data.paging.previous)!="undefined")
    {
        $scope.previousPage = response.data.paging.previous;
        $('.previous').show();
    }
    else
    {
        $('.previous').hide();
    }
}
else
{
    $('.previous').hide();
    $('.next').hide();
}
        
        }, function errorCallback(response) {
        console.log(response)
    
       
    });
               
                $scope.my.showp=true;
                    $scope.my.myValuep=true;
                    
                    $scope.my.showe=true;
                    $scope.my.myValuee=true;
                    $scope.my.showpl=true;
                    $scope.my.myValuepl=true;
                    
                    $scope.my.showg=true;
                    $scope.my.myValueg=true;
                   
                    $scope.my.myValuef=true;
                    $scope.my.showf=true;
				//	 $('#prog').show();
				setTimeout(function () {  
	 
                   
					 $scope.my.show=false;
				},1000);
              
			  
                    
                   
			 
			  
                

    }
    else
    {
          $scope.my.show=true;
          $scope.my.myValue=true;
                   $scope.my.showp=true;
                    $scope.my.myValuep=true;
                    
                    $scope.my.showe=true;
                    $scope.my.myValuee=true;
                    $scope.my.showpl=true;
                    $scope.my.myValuepl=true;
                    
                    $scope.my.showg=true;
                    $scope.my.myValueg=true;
                   
                    $scope.my.myValuef=true;
                    $scope.my.showf=true;
    }
}

    //on user tab click ends
        
    //on event tab click
    $scope.fune=function(value){
         $scope.my.showe=false;
        if(typeof($scope.keyword)!="undefined"){
        $http.get("fb.php?keyword="+ $scope.keyword+"&type="+value)
    .then(function successCallback(response) {
		//$('#prog').hide();

        $scope.events = response.data.data;
        if(typeof(response.data.paging)!="undefined"){
         if(typeof(response.data.paging.next)!="undefined")
        
        { $scope.nextPage = response.data.paging.next; 
        $('.next').show();}
    else {
        $('.next').hide();
    }

    if(typeof(response.data.paging.previous)!="undefined")
    {
        $scope.previousPage = response.data.paging.previous;
        $('.previous').show();
    }
    else
    {
        $('.previous').hide();
    }
}
else
{$('.previous').hide();
    $('.next').hide();
}
        }, function errorCallback(response) {
        console.log(response)
    
       
    });
   
       
                     $scope.my.showp=true;
                    $scope.my.myValuep=true;
                    
                    $scope.my.show=true;
                    $scope.my.myValue=true;
                    $scope.my.showpl=true;
                    $scope.my.myValuepl=true;
                    
                    $scope.my.showg=true;
                    $scope.my.myValueg=true;
                   
                    $scope.my.myValuef=true;
                    $scope.my.showf=true;
                   // $('#prog').show();
					setTimeout(function () {
                    
                    $scope.my.showe=false;
                    
					},1000);

       
    }
    else
    {
          $scope.my.show=true;
           $scope.my.myValue=true;
                   $scope.my.showp=true;
                    $scope.my.myValuep=true;
                    
                    $scope.my.showe=true;
                    $scope.my.myValuee=true;
                    $scope.my.showpl=true;
                    $scope.my.myValuepl=true;
                    
                    $scope.my.showg=true;
                    $scope.my.myValueg=true;
                   
                    $scope.my.myValuef=true;
                    $scope.my.showf=true;
    }
}
    // on event tab click ends

    //on place tab click
    $scope.funpl=function(value){
         $scope.my.showpl=false;
        if(typeof($scope.keyword)!="undefined"){
        
        $http.get("fb.php?keyword="+ $scope.keyword+"&type="+value+"&lat="+$scope.lat+"&long="+$scope.long)


    .then(function successCallback(response) {
//        $('#prog').hide();

        $scope.places = response.data.data;
        if(typeof(response.data.paging)!="undefined"){
        if(typeof(response.data.paging.next)!="undefined")
        { $scope.nextPage = response.data.paging.next; 
        $('.next').show();}
    else {
        $('.next').hide();
    }

    if(typeof(response.data.paging.previous)!="undefined")
    {
        $scope.previousPage = response.data.paging.previous;
        $('.previous').show();
    }
    else
    {
        $('.previous').hide();
    } 
}
else
{
    $('.previous').hide();
    $('.next').hide();
}

        }, function errorCallback(response) {
        console.log(response)
    
       
    });
    

       
                    $scope.my.showp=true;
                    $scope.my.myValuep=true;
                    
                    $scope.my.showe=true;
                    $scope.my.myValuee=true;
                    $scope.my.show=true;
                    $scope.my.myValue=true;
                    
                    $scope.my.showg=true;
                    $scope.my.myValueg=true;
                   
                    $scope.my.myValuef=true;
                    $scope.my.showf=true;
                 //   $('#prog').show();
					setTimeout(function () {
                     
                    $scope.my.showpl=false;
                    
                   
					},1000);
              
            }
            else
            {
                 $scope.my.showp=true;
                    $scope.my.myValuep=true;
                    
                    $scope.my.showe=true;
                    $scope.my.myValuee=true;
                    $scope.my.showpl=true;
                    $scope.my.myValuepl=true;
                    
                    $scope.my.showg=true;
                    $scope.my.myValueg=true;
                   
                    $scope.my.myValuef=true;
                    $scope.my.showf=true;
                    $scope.my.show=true;
                    $scope.my.myValue=true;
            }  

  
    }

    //on place tab click ends

    //on group tab click

    $scope.fung=function(value){

                    $scope.my.showg=false;
        if(typeof($scope.keyword)!="undefined"){
        $http.get("fb.php?keyword="+ $scope.keyword+"&type="+value)
    .then(function successCallback(response) {
      //  $('#prog').hide();

        $scope.groups = response.data.data;
if(typeof(response.data.paging)!="undefined"){
         if(typeof(response.data.paging.next)!="undefined")
        { $scope.nextPage = response.data.paging.next; 
        $('.next').show();}
    else {
        $('.next').hide();
    }

    if(typeof(response.data.paging.previous)!="undefined")
    {
        $scope.previousPage = response.data.paging.previous;
        $('.previous').show();
    }
    else
    {
        $('.previous').hide();
    }
}
else 
{
    $('.previous').hide();
    $('.next').hide();
}


        }, function errorCallback(response) {
        console.log(response)
    
       
    });
    
  
    
                    $scope.my.showp=true;
                    $scope.my.myValuep=true;
                    
                    $scope.my.showe=true;
                    $scope.my.myValuee=true;
                    $scope.my.showpl=true;
                    $scope.my.myValuepl=true;
                    
                    $scope.my.show=true;
                    $scope.my.myValue=true;
                   
                    $scope.my.myValuef=true;
                    $scope.my.showf=true;
                  //  $('#prog').show();
					setTimeout(function () {
                    
                    
                    $scope.my.showg=false;
                   
					},1000);
              
                }
                else
                {
                    $scope.my.showp=true;
                    $scope.my.myValuep=true;
                    
                    $scope.my.showe=true;
                    $scope.my.myValuee=true;
                    $scope.my.showpl=true;
                    $scope.my.myValuepl=true;
                    
                    $scope.my.showg=true;
                    $scope.my.myValueg=true;
                   
                    $scope.my.myValuef=true;
                    $scope.my.showf=true;
                    $scope.my.show=true;
                    $scope.my.myValue=true;
                }       
   
    }
 //on group tab click ends
 
    $scope.fun=function(value){

       
 $scope.my.showf=false;
                   
        $scope.u = [];
        if(localStorage.getItem("userfavorite")){
        $scope.u= JSON.parse(localStorage.getItem("userfavorite"));
        $scope.funuLength = $scope.u.length;
        }
       
    
                     $scope.my.showp=true;
                    $scope.my.myValuep=true;
                    
                    $scope.my.showe=true;
                    $scope.my.myValuee=true;
                    $scope.my.showpl=true;
                    $scope.my.myValuepl=true;
                    
                    $scope.my.showg=true;
                    $scope.my.myValueg=true;
                                     
                    $scope.my.show=true;
                    $scope.my.myValue=true;
                   
setTimeout(function () {
                    $scope.my.showf=false;
                   
                   
                }, 1000);

       
    }

    //on fav tab click ends

    $scope.clear=function(){
        $scope.keyword=null;
        $scope.required=false;
       
          $('#prog').hide();
                      $scope.my.showp=true;
                    $scope.my.myValuep=true;
                    
                    $scope.my.showe=true;
                    $scope.my.myValuee=true;
                    $scope.my.showpl=true;
                    $scope.my.myValuepl=true;
                    
                    $scope.my.showg=true;
                    $scope.my.myValueg=true;
                   
                    $scope.my.myValuef=true;
                    $scope.my.showf=true;
                    $scope.my.show=true;
                    $scope.my.myValue=true;
                   
 
     
    }
	
	// clear button ends
   
 // next button
 $scope.next=function(url,value)
        {
           $scope.nextTry = url;
            $http.get("fb.php",{params:{'param1':url}})
            .then(function successCallback(response){
                if(value == "Users") {
                $scope.user=response.data.data; 
                }
                else
                if(value == "Events")
                {
                    $scope.events=response.data.data;
                }
                else
                if(value=="Pages")
                {
                    $scope.pages=response.data.data;
                }
                else
                if(value=="Places")
                {
                    $scope.places=response.data.data;
                }
                else
                if(value=="Groups")
                {
                    $scope.groups=response.data.data;
                }

                
        if(typeof(response.data.paging)!="undefined")
            { 
                if(typeof(response.data.paging.next)!="undefined")
                    {$scope.nextPage = response.data.paging.next;
            $('.next').show();
             }
        else {
             $('.next').hide();
             }

             if(typeof(response.data.paging.previous)!="undefined")
             {
                 $scope.previousPage = response.data.paging.previous;
                 $('.previous').show();
             }
              else
              {
               $('.previous').hide();
               }
           }
           else
           {
            $('.next').hide();
            $('.previous').hide();

           }

            },function errorCallback(response){
                console.log(response)
           
        });
              
        }
        
        //next button end
		
        // previous button
		$scope.prev=function(url,value){
            $http.get("fb.php",{params:{'param1':url}})
            .then(function successCallback(response){
                if(value == "Users") {
                $scope.user=response.data.data; 
                }
                else
                if(value == "Events")
                {
                    $scope.events=response.data.data;
                }
                else
                if(value=="Pages")
                {
                    $scope.pages=response.data.data;
                }
                else
                if(value=="Places")
                {
                    $scope.places=response.data.data;
                }
                else
                if(value=="Groups")
                {
                    $scope.groups=response.data.data;
                }
                if(typeof(response.data.paging)!='undefined'){
                if(typeof(response.data.paging.next)!="undefined")
            { $scope.nextPage = response.data.paging.next; 
              $('.next').show();
          }
        else {
             $('.next').hide();
             }

             if(typeof(response.data.paging.previous)!="undefined")
             {
                 $scope.previousPage = response.data.paging.previous;
                   $('.previous').show();
             }
              else
              {
               $('.previous').hide();
               }
           }
           else
           {
            $('.previous').hide();
            $('.next').hide();
           }



            },function errorCallback(response){
                console.log(response)
            });
        }

        //previous button end

// user display section


  $scope.user_view_details=function(id){

 $scope.details_pic="";
    $scope.details_name="";
     $scope.postid="";
     $scope.value="";
    
     $scope.length=true;

 $scope.user_details_album=[];
      $scope.pages_details_album=[];
       $scope.events_details_album=[];
        $scope.groups_details_album=[];
         $scope.places_details_album=[];
          $scope.fav_details_album=[];
               $scope.user_details_post=[];
     $scope.pages_details_post=[];
     $scope.events_details_post=[];
     $scope.groups_details_post=[];
     $scope.places_details_post=[];
     $scope.fav_details_post=[];
     $scope.plength=true;
   
   
 setTimeout(function () {
  $http.get("fb.php", {params:{"uid":id}})
    .then(function successCallback(response) {
  
       
        $('#try').delay(2000).hide();

        $('#try1').delay(2000).hide();

        $('.panel').show();
        
    
        $scope.details_pic = "https://graph.facebook.com/v2.8/"+response.data.id+"/picture?access_token=EAAED0CT6escBAGjZCH9S4ZAvbvKGcBhPkVpZCy9ZB1TJxzkKCldIfTSRNprOVhfVOsym3j8gFMZBaKyijJBPlgOLuDZCulZCZCuFwMUjFUTFmPgvMkcrnsRC3qvZCNrhLt0mhQbpV0Uy13X2suswzKk1hexz0wa8acU4ZD";
            $scope.details_name = response.data.name;
            $scope.postid=response.data.id;
         $scope.value=response.data;


         if(response.data.hasOwnProperty('albums')){
        $scope.user_details_album = response.data.albums.data;
        $scope.length = response.data.hasOwnProperty('albums');
         }
            else
        {
            $scope.length=response.data.hasOwnProperty('albums');
        }
    
         if(response.data.hasOwnProperty('posts'))
        {
            $scope.plength = response.data.hasOwnProperty('posts');
            $scope.user_details_post = response.data.posts.data;
        }
        else
        {
            $scope.plength = response.data.hasOwnProperty('posts');
        }
      
       }, function errorCallback(response) {
        console.log(response)
       
    });
 }, 1000);

                    $scope.my.show=true;
                    $scope.my.myValue=false;

                   
                   $('.panel').hide();
                  
                  
                    $('#try').show();
                    $('#try1').show();
                   
     

     

  }
// user display section ends and pages display section begins

  $scope.pages_view_details=function(id){
   $scope.details_pic="";
    $scope.details_name="";
     $scope.postid="";
     $scope.value="";
     $scope.user_details_album=[];
      $scope.pages_details_album=[];
       $scope.events_details_album=[];
        $scope.groups_details_album=[];
         $scope.places_details_album=[];
          $scope.fav_details_album=[];
     $scope.length=true;
     $scope.user_details_post=[];
     $scope.pages_details_post=[];
     $scope.events_details_post=[];
     $scope.groups_details_post=[];
     $scope.places_details_post=[];
     $scope.fav_details_post=[];
     $scope.plength=true;
   
   
 setTimeout(function () {

     $http.get("fb.php", {params:{"uid":id}})
    .then(function successCallback(response) {

       
        $('#try2').delay(2000).hide();

        $('#try3').delay(2000).hide(); 
		

      $('.panels').show();
		
		
			
            $scope.details_pic = "https://graph.facebook.com/v2.8/"+response.data.id+"/picture?access_token=EAAED0CT6escBAGjZCH9S4ZAvbvKGcBhPkVpZCy9ZB1TJxzkKCldIfTSRNprOVhfVOsym3j8gFMZBaKyijJBPlgOLuDZCulZCZCuFwMUjFUTFmPgvMkcrnsRC3qvZCNrhLt0mhQbpV0Uy13X2suswzKk1hexz0wa8acU4ZD";
            $scope.details_name = response.data.name;
            $scope.postid=response.data.id;
            $scope.value = response.data;
            
            if(response.data.hasOwnProperty('albums')){
            $scope.pages_details_album = response.data.albums.data; 
            $scope.length= response.data.hasOwnProperty('albums');
        }
        else
        {
            $scope.length = response.data.hasOwnProperty('albums');
        }

if(response.data.hasOwnProperty('posts'))
       {
            $scope.pages_details_post = response.data.posts.data;
            $scope.plength = response.data.hasOwnProperty('posts');
       }
       else
       {
        $scope.plength = response.data.hasOwnProperty('posts');
       }
        
        

        }, function errorCallback(response) {
        console.log(response)
        
    });

   },1000);
   
                    $scope.my.showp=true;
                    $scope.my.myValuep=false;

                    $('.panels').hide();
                     $('#try2').show();

            $('#try3').show(); 


                   
                  
             

  }
 // pages display section ends and events display section begins

$scope.events_view_details=function(id){
    $scope.details_pic="";
    $scope.details_name="";
     $scope.postid="";
     $scope.value="";
     $scope.user_details_album=[];
      $scope.pages_details_album=[];
       $scope.events_details_album=[];
        $scope.groups_details_album=[];
         $scope.places_details_album=[];
          $scope.fav_details_album=[];
     $scope.length=true;
     $scope.user_details_post=[];
     $scope.pages_details_post=[];
     $scope.events_details_post=[];
     $scope.groups_details_post=[];
     $scope.places_details_post=[];
     $scope.fav_details_post=[];
     $scope.plength=true;
   
   
 setTimeout(function () {

    $http.get("fb.php", {params:{"eid":id}})
    .then(function successCallback(response) {
         
         $('#try4').delay(2000).hide();

        $('#try5').delay(2000).hide(); 

        $('.panel').show();

$scope.details_pic = "https://graph.facebook.com/v2.8/"+response.data.id+"/picture?access_token=EAAED0CT6escBAGjZCH9S4ZAvbvKGcBhPkVpZCy9ZB1TJxzkKCldIfTSRNprOVhfVOsym3j8gFMZBaKyijJBPlgOLuDZCulZCZCuFwMUjFUTFmPgvMkcrnsRC3qvZCNrhLt0mhQbpV0Uy13X2suswzKk1hexz0wa8acU4ZD";
            $scope.details_name = response.data.name;
           $scope.value = response.data;
           $scope.postid=response.data.id;
            if(response.data.hasOwnProperty('albums')){
            $scope.events_details_album = response.data.albums.data; 
            $scope.length = response.data.hasOwnProperty('albums');
        }
        else
        {
            $scope.length = response.data.hasOwnProperty('albums');
        }
            if(response.data.hasOwnProperty('posts')){
            $scope.events_details_post = response.data.posts.data;
            $scope.plength = response.data.hasOwnProperty('posts');
        }
        else 
        {
             $scope.plength=response.data.hasOwnProperty('posts');
        }


        }, function errorCallback(response) {
        console.log(response)
        
    });
},1000);
   
   
                    $scope.my.showe=true;
                    $scope.my.myValuee=false;
                
            $('.panel').hide();
            $('#try4').show();

            $('#try5').show(); 

        

  }
  
// events display section ends and places display section begins

  $scope.places_view_details=function(id){
    $scope.details_pic="";
    $scope.details_name="";
     $scope.postid="";
     $scope.value="";
     $scope.user_details_album=[];
      $scope.pages_details_album=[];
       $scope.events_details_album=[];
        $scope.groups_details_album=[];
         $scope.places_details_album=[];
          $scope.fav_details_album=[];
     $scope.length=true;
     $scope.user_details_post=[];
     $scope.pages_details_post=[];
     $scope.events_details_post=[];
     $scope.groups_details_post=[];
     $scope.places_details_post=[];
     $scope.fav_details_post=[];
     $scope.plength=true;

 setTimeout(function () {
   $http.get("fb.php", {params:{"uid":id}})
    .then(function successCallback(response) {

        $('#try6').delay(2000).hide();
        $('#try7').delay(2000).hide();
        $('.panel').show();

        $scope.details_pic = "https://graph.facebook.com/v2.8/"+response.data.id+"/picture?access_token=EAAED0CT6escBAGjZCH9S4ZAvbvKGcBhPkVpZCy9ZB1TJxzkKCldIfTSRNprOVhfVOsym3j8gFMZBaKyijJBPlgOLuDZCulZCZCuFwMUjFUTFmPgvMkcrnsRC3qvZCNrhLt0mhQbpV0Uy13X2suswzKk1hexz0wa8acU4ZD";
            $scope.details_name = response.data.name;
            $scope.postid=response.data.id;
           $scope.value = response.data;

           if(response.data.hasOwnProperty('albums'))
           {
            $scope.places_details_album = response.data.albums.data; 
            $scope.length = response.data.hasOwnProperty('albums');
        }
        else
        {
            $scope.length=response.data.hasOwnProperty('albums');
            }
            if(response.data.hasOwnProperty('posts')){            
            $scope.places_details_post = response.data.posts.data;
            $scope.plength = response.data.hasOwnProperty('posts');
        }
        else
        {
            $scope.plength = response.data.hasOwnProperty('posts');
        }
       


        }, function errorCallback(response) {
        console.log(response)
        
    });
},1000);
   
                    $scope.my.showpl=true;
                    $scope.my.myValuepl=false;
              $('.panel').hide();
              $('#try6').show();
              $('#try7').show();
  }
  
  // places display section ends and groups display section begins

$scope.groups_view_details=function(id){
    $scope.details_pic="";
    $scope.details_name="";
     $scope.postid="";
     $scope.value="";
     $scope.user_details_album=[];
      $scope.pages_details_album=[];
       $scope.events_details_album=[];
        $scope.groups_details_album=[];
         $scope.places_details_album=[];
          $scope.fav_details_album=[];
     $scope.length=true;
     $scope.user_details_post=[];
     $scope.pages_details_post=[];
     $scope.events_details_post=[];
     $scope.groups_details_post=[];
     $scope.places_details_post=[];
     $scope.fav_details_post=[];
     $scope.plength=true;
   
   
 setTimeout(function () {
   $http.get("fb.php", {params:{"uid":id}})
    .then(function successCallback(response) {

        $('#try8').delay(2000).hide();
        $('#try9').delay(2000).hide();
        $('.panel').show();
         $scope.details_pic = "https://graph.facebook.com/v2.8/"+response.data.id+"/picture?access_token=EAAED0CT6escBAGjZCH9S4ZAvbvKGcBhPkVpZCy9ZB1TJxzkKCldIfTSRNprOVhfVOsym3j8gFMZBaKyijJBPlgOLuDZCulZCZCuFwMUjFUTFmPgvMkcrnsRC3qvZCNrhLt0mhQbpV0Uy13X2suswzKk1hexz0wa8acU4ZD";
            $scope.details_name = response.data.name;
            $scope.postid=response.data.id;
           $scope.value = response.data;
           if(response.data.hasOwnProperty('albums')){
            $scope.groups_details_album = response.data.albums.data; 
            $scope.length = response.data.hasOwnProperty('albums');
        }
        else
        {
            $scope.length=response.data.hasOwnProperty('albums');
        }
            if(response.data.hasOwnProperty('posts')){
       
            $scope.groups_details_post = response.data.posts.data; 
            $scope.plength = response.data.hasOwnProperty('posts');
        }
        else
        {
            $scope.plength=response.data.hasOwnProperty('posts');
        }
            
        
        }, function errorCallback(response) {
        console.log(response)
        
    });
},1000);

   

                    $scope.my.showg=true;
                    $scope.my.myValueg=false;
                    $('.panel').hide();
                    $('#try8').show();
                    $('#try9').show();
       
              
  }
  
  // groups display section ends 
  
  // get photo for albums in details page

 $scope.getPhoto = function(id){

        var albumPhoto = "https://graph.facebook.com/v2.8/"+id+"/picture?access_token=EAAED0CT6escBAGjZCH9S4ZAvbvKGcBhPkVpZCy9ZB1TJxzkKCldIfTSRNprOVhfVOsym3j8gFMZBaKyijJBPlgOLuDZCulZCZCuFwMUjFUTFmPgvMkcrnsRC3qvZCNrhLt0mhQbpV0Uy13X2suswzKk1hexz0wa8acU4ZD";
    return albumPhoto;        
    }
	
	// get photo end
  // to convert date and time

  $scope.createdTime=function (createdTime) {
            var date = moment(createdTime).format('MMMM Do YYYY, h:mm:ss a');
            //$scope.time=date.tostring();

            return  date.toString() ;


        },

       // convert date time end 
      
  //back button click

  $scope.users_carousel_back=function()
  {

    $scope.my.show=false;
    $scope.my.myValue=true;
  }
  $scope.pages_carousel_back=function()
  {
    $scope.my.showp=false;
    $scope.my.myValuep=true;
  }
  $scope.events_carousel_back=function()
  {
    $scope.my.showe=false;
    $scope.my.myValuee=true;
  }
  $scope.places_carousel_back=function()
  {
    $scope.my.showpl=false;
    $scope.my.myValuepl=true;
  }
  $scope.groups_carousel_back=function()
  {
    $scope.my.showg=false;
    $scope.my.myValueg=true;
  }
  $scope.fav_carousel_back=function()
  {
    $scope.u = [];
        if(localStorage.getItem("userfavorite")){
        $scope.u= JSON.parse(localStorage.getItem("userfavorite"));
        $scope.funuLength = $scope.u.length;
        }
    $scope.my.showf=false;
    $scope.my.myValuef=true;
    
  }
  // back button click end

  //fb share
$scope.fb_post = function(){

 $http.get("fb.php", {params:{"postid" : $scope.postid}})
                .then(function(response) {
                $scope.posturl = response.data.picture.data.url;
                var picture=$scope.posturl;
                var postName=$scope.details_name;

    FB.init({
        appId: '1548523391832938',
        status : true,
        xfbml : true,
        version : 'v2.8'
              });



        FB.ui({

            app_id: '1548523391832938',
            method: 'feed',
            display: 'popup',
            link: window.location.href,
            picture: picture,
            name: postName,
            caption: 'FB SEARCH FROM USC CSCI571',
            }, function(response){
            if (response && !response.error_message)
            alert("Posted Successfully");
            else
            alert("Not Posted");
            });

                 });
                

              }

// fb share end

  
// by default fav start to display
		$scope.user_fav_star = 1;
		$scope.event_fav_star = 1;
		$scope.group_fav_star = 1;
		$scope.page_fav_star = 1;
        $scope.place_fav_star = 1;
        $scope.user_details_fav_star=1;
        $scope.pages_details_fav_star=1;
        $scope.events_details_fav_star=1;
        $scope.groups_details_fav_star=1;
        $scope.places_details_fav_star=1;
        $scope.fav_details_fav_star=1;

      


  // fav section
 
  
    var userfavorite= [];
    var pagefavorite= [];
    var eventfavorite= [];
    var placefavorite= [];
    var groupfavorite= [];
    var selectedUser = [];
    var pagefavorite= [];
    var selectedPage = [];
    var eventfavorite= [];
    var selectedEvent = [];
     var placetfavorite= [];
    var selectedPlace = [];
    var groupfavorite= [];
    var selectedGroup = [];
    
 
    
    var uselected = [];
     var pselected = [];
      var eselected = [];
       var plselected = [];
        var gselected = [];

    var userfav = [];
    var uFav = [];
    var pagefav = [];
    var pFav = [];
    var eventfav = [];
    var eFav = [];
     var placefav = [];
    var pFav = [];
     var groupfav = [];
    var gFav = [];
               
    var removedUser = [];
    var removedPage = [];
    var removedGroup = [];
    var removedEvent= [];
    var removedPlace = [];
    var allFav = [];
    
    $scope.other_favorite_stars = 1;
    $scope.details_fav = 1;

// fav button click user 

   $scope.user_fav=function (id) {
   
    var individualUser = $scope.getUser(id);
    individualUser.type = "Users";
    if(localStorage.getItem("userfavorite")){
    uselected = JSON.parse(localStorage.getItem("userfavorite"));
    }
    uselected.push(individualUser);

   
   localStorage.setItem("selectedUser",JSON.stringify(uselected)); 
   
    
    if ($scope.isFavorited('Users', id)) {
                $scope.removeFromFavorites('Users', id);
                individualUser.favButtonStyle = {
                    'background': 'none'
                };
               
            } else {
                
                $scope.addToFavorites('Users', id, individualUser);
                $scope.user_fav_star = $scope.user_fav_star + 1;
    
                individualUser.favButtonStyle = {
                    'background': 'yellow'
                };
                
            }
   
}
$scope.getUser= function(id)
{
    for (var i =0 ;i < $scope.user.length; i++)
    {
        if($scope.user[i].id === id)
        {
            return $scope.user[i];
        } 
    }
}

// fav button click page 
$scope.page_fav=function (id) {
   
    var individualUser = $scope.getPage(id);
    individualUser.type = "Pages";
    if(localStorage.getItem("userfavorite")){
    uselected = JSON.parse(localStorage.getItem("userfavorite")); }
    uselected.push(individualUser);

   localStorage.setItem("selectedUser",JSON.stringify(uselected)); 

    
    if ($scope.isFavorited('Pages', id)) {
                $scope.removeFromFavorites('Pages', id);
                individualUser.favButtonStyle = {
                    'background': 'none'
                };
                
            } else {
                
                $scope.addToFavorites('Pages', id, individualUser);
                $scope.page_fav_star = $scope.page_fav_star + 1;
                 
                individualUser.favButtonStyle = {
                    'background': 'yellow'
                };
                 
            }
   
}


$scope.getPage= function(id)
{
    for (var i =0 ;i < $scope.pages.length; i++)
    {
        if($scope.pages[i].id === id)
        {
            return $scope.pages[i];
        } 
    }
}

// fav button event
 $scope.event_fav=function (id) {
   
    var individualUser = $scope.getEvent(id);
    individualUser.type = "Events";
    if(localStorage.getItem("userfavorite")){
    uselected = JSON.parse(localStorage.getItem("userfavorite")); }
    uselected.push(individualUser);

   localStorage.setItem("selectedUser",JSON.stringify(uselected)); 

    
    if ($scope.isFavorited('Events', id)) {
                $scope.removeFromFavorites('Events', id);
                individualUser.favButtonStyle = {
                    'background': 'none'
                };
            } else {
                
                $scope.addToFavorites('Events', id, individualUser);
                 $scope.event_fav_star = $scope.event_fav_star + 1;
    
                individualUser.favButtonStyle = {
                    'background': 'yellow'
                };
                
            }
   
}
$scope.getEvent= function(id)
{
    for (var i =0 ;i < $scope.events.length; i++)
    {
        if($scope.events[i].id === id)
        {
            return $scope.events[i];
        } 
    }
}

//fav button places

$scope.place_fav=function (id) {
   
    var individualUser = $scope.getPlace(id);
    individualUser.type = "Places";
    if(localStorage.getItem("userfavorite")){
    uselected = JSON.parse(localStorage.getItem("userfavorite")); }
    uselected.push(individualUser);

   localStorage.setItem("selectedUser",JSON.stringify(uselected)); 

    
    if ($scope.isFavorited('Places', id)) {
                $scope.removeFromFavorites('Places', id);
                individualUser.favButtonStyle = {
                    'background': 'none'
                };
            } else {
                
                $scope.addToFavorites('Places', id, individualUser);
                 $scope.place_fav_star =  $scope.place_fav_star + 1;;
                individualUser.favButtonStyle = {
                    'background': 'yellow'
                };
                
            }
   
}
$scope.getPlace= function(id)
{
    for (var i =0 ;i < $scope.places.length; i++)
    {
        if($scope.places[i].id === id)
        {
            return $scope.places[i];
        } 
    }
}

//fav button groups

$scope.group_fav=function (id) {
   
    var individualUser = $scope.getGroup(id);
    individualUser.type = "Groups";
    if(localStorage.getItem("userfavorite")){
    uselected = JSON.parse(localStorage.getItem("userfavorite"));}
    uselected.push(individualUser);

   localStorage.setItem("selectedUser",JSON.stringify(uselected)); 

    
    if ($scope.isFavorited('Groups', id)) {
                $scope.removeFromFavorites('Groups', id);
                individualUser.favButtonStyle = {
                    'background': 'none'
                };
            } else {
                
                $scope.addToFavorites('Groups', id, individualUser);
                  $scope.group_fav_star = $scope.group_fav_star + 1;
       
       
                individualUser.favButtonStyle = {
                    'background': 'yellow'
                };
                
            }
   
}
$scope.getGroup= function(id)
{
    for (var i =0 ;i < $scope.groups.length; i++)
    {
        if($scope.groups[i].id === id)
        {
            return $scope.groups[i];
        } 
    }
}
// view detials in fav

$scope.fav_view_details = function(type,favid){
    $scope.details_pic="";
    $scope.details_name="";
     $scope.postid="";
     $scope.value="";
     $scope.user_details_album=[];
      $scope.pages_details_album=[];
       $scope.events_details_album=[];
        $scope.groups_details_album=[];
         $scope.places_details_album=[];
          $scope.fav_details_album=[];
     $scope.length=true;
     $scope.user_details_post=[];
     $scope.pages_details_post=[];
     $scope.events_details_post=[];
     $scope.groups_details_post=[];
     $scope.places_details_post=[];
     $scope.fav_details_post=[];
     $scope.plength=true;
setTimeout(function () {
if(type != 'Events'){
         $http.get("fb.php", {params:{"uid":favid}})
    .then(function successCallback(response) {

        $('#try10').delay(2000).hide();
        $('#try11').delay(2000).hide();
        $('.panel').show();
        
        $scope.details_pic = "https://graph.facebook.com/v2.8/"+response.data.id+"/picture?access_token=EAAED0CT6escBAGjZCH9S4ZAvbvKGcBhPkVpZCy9ZB1TJxzkKCldIfTSRNprOVhfVOsym3j8gFMZBaKyijJBPlgOLuDZCulZCZCuFwMUjFUTFmPgvMkcrnsRC3qvZCNrhLt0mhQbpV0Uy13X2suswzKk1hexz0wa8acU4ZD";
            $scope.details_name = response.data.name;
            $scope.postid=response.data.id;
         $scope.value=response.data;

         if(response.data.hasOwnProperty('albums')){
        $scope.fav_details_album = response.data.albums.data;
        $scope.length = response.data.hasOwnProperty('albums');
         }
            else
        {
            $scope.length=response.data.hasOwnProperty('albums');
        }
    
         if(response.data.hasOwnProperty('posts'))
        {
            $scope.plength = response.data.hasOwnProperty('posts');
            $scope.fav_details_post = response.data.posts.data;
        }
        else
        {
            $scope.plength = response.data.hasOwnProperty('posts');
        }
       }, function errorCallback(response) {
        console.log(response)
       
    });
}

if(type == 'Events'){
         $http.get("fb.php", {params:{"eid":favid}})
    .then(function successCallback(response) {

        $('#try10').delay(2000).hide();
        $('#try11').delay(2000).hide();
        $('.panel').show();
        
        $scope.details_pic = "https://graph.facebook.com/v2.8/"+response.data.id+"/picture?access_token=EAAED0CT6escBAGjZCH9S4ZAvbvKGcBhPkVpZCy9ZB1TJxzkKCldIfTSRNprOVhfVOsym3j8gFMZBaKyijJBPlgOLuDZCulZCZCuFwMUjFUTFmPgvMkcrnsRC3qvZCNrhLt0mhQbpV0Uy13X2suswzKk1hexz0wa8acU4ZD";
            $scope.details_name = response.data.name;
            $scope.postid=response.data.id;
         $scope.value=response.data;

         if(response.data.hasOwnProperty('albums')){
        $scope.fav_details_album = response.data.albums.data;
        $scope.length = response.data.hasOwnProperty('albums');
         }
            else
        {
            $scope.length=response.data.hasOwnProperty('albums');
        }
    
         if(response.data.hasOwnProperty('posts'))
        {
            $scope.plength = response.data.hasOwnProperty('posts');
            $scope.fav_details_post = response.data.posts.data;
        }
        else
        {
            $scope.plength = response.data.hasOwnProperty('posts');
        }
       }, function errorCallback(response) {
        console.log(response)
       
    });
}

},1000);
    $scope.my.showf=true;
    $scope.my.myValuef=false;

        $('.panel').hide();
     $('#try10').show();
     $('#try11').show();
   

       
                   
                
        
}

$scope.fav_details_fav = function(id,type){


    if($scope.isFavorited("fav",id)){
        
         $scope.removeFromFavorites('fav', id);
                
                
    }
    else {
	 $http.get("fb.php", {params:{"eid":id}})
    .then(function successCallback(response) {

	var individual = response.data;
    individual.type = type;
    if(localStorage.getItem("userfavorite")){
    uselected = JSON.parse(localStorage.getItem("userfavorite"));}
    uselected.push(individual);

   localStorage.setItem("selectedUser",JSON.stringify(uselected)); 

    
    if ($scope.isFavorited(individual.type, id)) {
                $scope.removeFromFavorites(individual.type, id);
                individual.favButtonStyle = {
                    'background': 'none'
                };
            } else {
                
                $scope.addToFavorites(individual.type, id, individual);
                     
                individual.favButtonStyle = {
                    'background': 'yellow'
                };
                
            }
                   
	   
	   
       }, function errorCallback(response) {
        console.log(response)
		
		
       
    });
      
	   
               
         }
}


// check if already fav
 $scope.isFavorited = function (type, id) {


       if(localStorage.getItem("userfavorite")){
       
        switch (type) {
            case 'Users':
            userfav = JSON.parse(localStorage.getItem("userfavorite"));
                for (var i = 0; i < userfav.length; i++) {
                    if (userfav[i].id === id)
                        return true;
                }
                return false;
                break;

                case 'Pages':
                if(localStorage.getItem('userfavorite')){
                pagefav = JSON.parse(localStorage.getItem("userfavorite"));
                for (var j = 0; j < pagefav.length; j++) {
                    if (pagefav[j].id === id)
                        return true;
                   }
                }
                return false;
                break;

                case 'Events':
                if(localStorage.getItem('userfavorite')){
                eventfav = JSON.parse(localStorage.getItem("userfavorite"));
                for (var k = 0; k < eventfav.length; k++) {
                    if (eventfav[k].id === id)
                        return true;
                    }
                }
                return false;
                break;

                case 'Places':
                if(localStorage.getItem('userfavorite')){
                placefav = JSON.parse(localStorage.getItem("userfavorite"));
                for (var p = 0; p < placefav.length; p++) {
                    if (placefav[p].id === id)
                        return true;
                    }
                }
                return false;
                break;

                case 'Groups':
                if(localStorage.getItem('userfavorite')){
                groupfav = JSON.parse(localStorage.getItem("userfavorite"));
                for (var g = 0; g < groupfav.length; g++) {
                    if (groupfav[g].id === id)
                        return true;
                    }
                }
                return false;
                break;

                case 'fav':
                if(localStorage.getItem('userfavorite')){
                groupfav = JSON.parse(localStorage.getItem("userfavorite"));
                for (var g = 0; g < groupfav.length; g++) {
                    if (groupfav[g].id === id)
                        return true;
                    }
                }
                return false;
                break;

            
            default:
                
                return false;
        }
    }
}

    
    $scope.addToFavorites = function (entity, id, item) {

       switch (entity) {
                case 'Users':
  
                    
                    var fav = localStorage.getItem("selectedUser");
                    
                    localStorage.setItem("userfavorite", fav);

                    userfavorite.type = "User";
                    break;


                    case 'Pages':

                    var fav = localStorage.getItem("selectedUser");
  
                    localStorage.setItem("userfavorite", fav);

                    userfavorite.type = "Page";
                    break;

                    case 'Events':
  
                    
                    var fav = localStorage.getItem("selectedUser");
                    
                    localStorage.setItem("userfavorite", fav);
                    userfavorite.type = "Event";
                    break;

                    case 'Places':
  
                    
                    var fav = localStorage.getItem("selectedUser");
                    
                    localStorage.setItem("userfavorite", fav);
                    userfavorite.type = "Places";
                    break;

                    case 'Groups':
  
                     
                    var fav = localStorage.getItem("selectedUser");
                    
                    localStorage.setItem("userfavorite", fav);
                    userfavorite.type = "Groups";
                    break;


                  
                default:
                    return false;
            }
        
        $scope.other_favorite_stars++;
    };
    $scope.removeFromFavorites = function (entity, id) {
        switch (entity) {
            case 'Users':
            if(localStorage.getItem("userfavorite")){
                removedUser = JSON.parse(localStorage.getItem("userfavorite"));

                for (var i=0;i<removedUser.length;i++){

                    if(removedUser[i].id === id){
                
                        removedUser.splice(i,1);
                        localStorage.removeItem("userfavorite");
                        localStorage.setItem("userfavorite",JSON.stringify(removedUser));
                        localStorage.setItem("selectedUser",JSON.stringify(removedUser));

                    return removedUser.id !== id;
                }
                
            }
        }
                
                break;

                 case 'Pages':
                 if(localStorage.getItem("userfavorite")) {

                removedUser = JSON.parse(localStorage.getItem("userfavorite"));

                for (var i=0;i<removedUser.length;i++){

                    if(removedUser[i].id === id){
                
                        removedUser.splice(i,1);

                        localStorage.removeItem("userfavorite");
                        localStorage.setItem("userfavorite",JSON.stringify(removedUser));
                        localStorage.setItem("selectedUser",JSON.stringify(removedUser));

                    return removedUser.id !== id;
                }
                
                }
            
        }
                
                break;

                 case 'Events':
                 if(localStorage.getItem("userfavorite")) {

                removedUser = JSON.parse(localStorage.getItem("userfavorite"));

                for (var i=0;i<removedUser.length;i++){

                    if(removedUser[i].id === id){
                
                        removedUser.splice(i,1);

                        localStorage.removeItem("userfavorite");
                        localStorage.setItem("userfavorite",JSON.stringify(removedUser));
                        localStorage.setItem("selectedUser",JSON.stringify(removedUser));

                    return removedUser.id !== id;
                }
                
                }
            
        }
                
                break;

                 case 'Places':
                 if(localStorage.getItem("userfavorite")) {

                removedUser = JSON.parse(localStorage.getItem("userfavorite"));

                for (var i=0;i<removedUser.length;i++){

                    if(removedUser[i].id === id){
                
                        removedUser.splice(i,1);

                        localStorage.removeItem("userfavorite");
                        localStorage.setItem("userfavorite",JSON.stringify(removedUser));
                        localStorage.setItem("selectedUser",JSON.stringify(removedUser));

                    return removedUser.id !== id;
                }
                
                }
            
        }
                
                break;

                 case 'Groups':
                 if(localStorage.getItem("userfavorite")) {

                removedUser = JSON.parse(localStorage.getItem("userfavorite"));

                for (var i=0;i<removedUser.length;i++){

                    if(removedUser[i].id === id){
                
                        removedUser.splice(i,1);

                        localStorage.removeItem("userfavorite");
                        localStorage.setItem("userfavorite",JSON.stringify(removedUser));
                        localStorage.setItem("selectedUser",JSON.stringify(removedUser));

                    return removedUser.id !== id;
                }
                
                }
            
        }
                
                break;
            
            default:

 
                 if(localStorage.getItem("userfavorite")) {

                removedUser = JSON.parse(localStorage.getItem("userfavorite"));

                for (var i=0;i<removedUser.length;i++){

                    if(removedUser[i].id === id){
                
                        removedUser.splice(i,1);

                        localStorage.removeItem("userfavorite");
                        localStorage.setItem("userfavorite",JSON.stringify(removedUser));
                        localStorage.setItem("selectedUser",JSON.stringify(removedUser));
                        
                        $scope.u = JSON.parse(localStorage.getItem("userfavorite"));

                        
                    return removedUser.id !== id;
                }
                
                }
            
        }
                
             
         return false;
        }
        $scope.other_favorite_stars++;
    };

});


  

