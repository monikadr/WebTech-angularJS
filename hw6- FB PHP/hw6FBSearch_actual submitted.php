<html>
<head>
<style>
    table {
        border-collapse:collapse;
    }
</style>
    <title>Facebook search</title>
    <script language=JavaScript>
    function formValidator() {
       
       var blank = " ";
        var type_nonempty  = document.getElementById("type");
        var selectedValue = type_nonempty.options[type_nonempty.selectedIndex].value;
		
       

    }
    function clearValues() {
        //Clear the input form
         window.history.replaceState(null, null, window.location.pathname);
		if(document.getElementById("place").selected){
			userInput.location.value="";
			userInput.distance.value="";
		document.getElementById("location").style.display='none';
		}
        userInput.keyword.value="";
        document.getElementById("type").value="user";
       
        if(document.getElementById('outputTable').style.display !='none'){
		document.getElementById("outputTable").style.display='none';}
        
          if(document.getElementById('outputTable1').style.display !='none'){
        document.getElementById("outputTable1").style.display='none'; }
        
         if(document.getElementById('outputTableAlbums').style.display !='none'){
        document.getElementById("outputTableAlbums").style.display='none';}
        
         if(document.getElementById('outputTablePosts').style.display !='none'){
        document.getElementById("outputTablePosts").style.display='none';}
        
          if(document.getElementById('outputTablePicture').style.display !='none'){
        document.getElementById("outputTablePicture").style.display='none';}
		
        
        
    }
	
    function yesnoCheck() {
        if (document.getElementById("place").selected) {
            document.getElementById("location").style.display = "table-row";
        } else {
            document.getElementById("location").style.display = "none";
        }
    }

        function display()
        {
            if( document.getElementById("outputTableAlbums").style.display == 'none')
            {

                document.getElementById("outputTableAlbums").style.display = 'table';
            }
            else
            {
                 document.getElementById("outputTableAlbums").style.display = "none";
            }

             if(document.getElementById("outputTablePosts").style.display=='table')
            {
                document.getElementById("outputTablePosts").style.display='none';
            }
            
        }

        function displayPosts()
        {
            if( document.getElementById("outputTablePosts").style.display == 'none')
            {
                document.getElementById("outputTablePosts").style.display = 'table';
            }
            else
            {
                 document.getElementById("outputTablePosts").style.display = "none";
            }

            if(document.getElementById("outputTableAlbums").style.display =='table')
            {
                document.getElementById("outputTableAlbums").style.display='none';
            }

            
        }

        function displayPicture(album)
        {

           if( document.getElementById(album.id).style.display == "none")
            {
                document.getElementById(album.id).style.display = "table-row";
            }
            else
            {
                 document.getElementById(album.id).style.display = "none";
            }

        }
        function retain_value(key,type)
        {
             key.replace(/%20/g, " ");
            document.userInput.keyword.value = key;
           
            document.getElementById('type').value = type;
        }

          function retain_valueWithPlace(key,type,location,distance)
        {
            document.getElementById('type').value = type;
            if(document.getElementById('type').value="place")
            {
                document.getElementById("location").style.display='table-row';
            }
             key.replace(/%20/g, " ");
            document.userInput.keyword.value = key;
            document.userInput.location.value = location;
            document.userInput.distance.value = distance;
        }

        function image(it) {
   var w = window.open("","");
  w.document.writeln("<body bgcolor='#ffffff'>");
  w.document.writeln("<img src='" + it + "'>");
  w.document.writeln("<\/body>");
  w.document.close();
}

  function imageProfile(it) {
   var w = window.open("","");
  w.document.writeln("<body bgcolor='#ffffff'>");
  w.document.writeln("<img src='" + it + "'width=500px height=500px>");
  w.document.writeln("<\/body>");
  w.document.close();
}


           
    </script>
        <meta charset="UTF-8">
</head>
<body>
<table align="center" border=2 width=50% >
    <tr><td style="
    background-color: #e9e9e9;" ><h1 style="margin-bottom: 0px;"><center><strong><i>Facebook Search</i></strong></center></h1>
    	<hr width=97% border=2>
    <form  name="userInput" method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>">
    <table>
        <tr>
            <td >Keyword: </td><td>
            <input type="text" name="keyword" required="true" oninvalid="this.setCustomValidity('Cannot be left blank')"  onchange = "try{setCustomValidity('')}catch(e){}" value="<?php if(isset($_POST['keyword'])) { echo htmlentities($_POST['keyword']);}?>"><br></td>

        </tr>
        
        <tr>
            <td >Type: </td><td>
            <select onchange="yesnoCheck()" name="type" id="type"  >
					
                    <option id="user" value="user" selected="true"  <?php echo (isset($_POST['type']) && ($_POST['type'] == 'user')?'selected="selected"':''); ?>>Users</option>
                    <option id="page" value="page" <?php echo (isset($_POST['type']) && ($_POST['type'] == 'page')?'selected="selected"':''); ?>>Pages</option>
                    <option id="event" value="event" <?php echo (isset($_POST['type']) && ($_POST['type'] == 'event')?'selected="selected"':''); ?>>Events</option>
					<option id="place" value="place" <?php echo (isset($_POST['type']) && ($_POST['type'] == 'place')?'selected="selected"':''); ?>>Places</option>
					<option id="group" value="group" <?php echo (isset($_POST['type']) && ($_POST['type'] == 'group')?'selected="selected"':''); ?>> Groups</option>
            </select><br></td>
            
            <td></td><td></td>
			</tr>
              <tr id = "location" style="display:none;">
			  <td  > Location: </td><td><input type="text" name="location" id="loc"  value= "<?php if(isset($_POST['location'])) { echo htmlentities($_POST['location']);}?>"></td>
			  <td  >Distance(meters): </td><td><input type="text" id="dist" name="distance"  value="<?php if(isset($_POST['distance'])) { echo htmlentities($_POST['distance']);}?>"></td>
			  </tr>
           <tr>
		   
                <td /></br></br><br>
                <td ><label> <input type="submit" name="Search" value="Search" onClick="formValidator()"></label>
                <label><input type="button" name="clear" value="Clear" onClick="clearValues()"></input></label></td>
        </tr>
           
      
        
    	</table>
    	</form>
</td></tr></table>
<?php

    require_once __DIR__ . '/php-graph-sdk-5.0.0/src/Facebook/autoload.php';

	$fb = new Facebook\Facebook([
  'app_id' => '285667485186759',
  'app_secret' => '838ffd57a2b7b582a8f799d7d4e40549',
  'default_graph_version' => 'v2.8',
]);
    date_default_timezone_set('America/Los_Angeles');

	if((isset($_POST['Search'])) && ((trim($_POST['keyword']) !== "")) && (!empty($_POST['type'])))
	{ if(($_POST['type']=='place')  && (!empty($_POST['location'])))
		{ 
            echo "<script language=JavaScript>yesnoCheck();</script>";
			$gurl="https://maps.google.com/maps/api/geocode/xml?address=".$_POST['location']."&key= AIzaSyAIGpw0hPRwXV6V77yCL9-UOq0X3Fx_Iqg";
        	$xml_data=simplexml_load_file($gurl);
			if ($xml_data->status == "OK") {
				$latitude= (string) $xml_data->result->geometry->location->lat;
				$longitude= (string) $xml_data->result->geometry->location->lng;
                $keyword = preg_replace("/ /","%20",$_POST['keyword']);
			   if(!empty($_POST['distance'])){
                try {
                 $response = $fb->get("/search?q=".$keyword."&type=".$_POST['type']."&center=".$latitude.",".$longitude."&distance=".$_POST['distance']."&fields=id,name,picture.width(700).height(700),albums,posts&access_token=EAAED0CT6escBAGjZCH9S4ZAvbvKGcBhPkVpZCy9ZB1TJxzkKCldIfTSRNprOVhfVOsym3j8gFMZBaKyijJBPlgOLuDZCulZCZCuFwMUjFUTFmPgvMkcrnsRC3qvZCNrhLt0mhQbpV0Uy13X2suswzKk1hexz0wa8acU4ZD");
                    } catch(Facebook\Exceptions\FacebookResponseException $e) {
                 echo 'Graph returned an error: ' . $e->getMessage();
                     exit;
                } catch(Facebook\Exceptions\FacebookSDKException $e) {
                     echo 'Facebook SDK returned an error: ' . $e->getMessage();
                     exit;
                } 
              }
              else
              {
                try {
                 $response = $fb->get("/search?q=".$keyword."&type=".$_POST['type']."&center=".$latitude.",".$longitude."&fields=id,name,picture.width(700).height(700),albums,posts&access_token=EAAED0CT6escBAGjZCH9S4ZAvbvKGcBhPkVpZCy9ZB1TJxzkKCldIfTSRNprOVhfVOsym3j8gFMZBaKyijJBPlgOLuDZCulZCZCuFwMUjFUTFmPgvMkcrnsRC3qvZCNrhLt0mhQbpV0Uy13X2suswzKk1hexz0wa8acU4ZD");
                    } catch(Facebook\Exceptions\FacebookResponseException $e) {
                 echo 'Graph returned an error: ' . $e->getMessage();
                     exit;
                } catch(Facebook\Exceptions\FacebookSDKException $e) {
                     echo 'Facebook SDK returned an error: ' . $e->getMessage();
                     exit;
                }
              }
            }
            else if($xml_data->status == 'ZERO_RESULTS')
            {
               echo "<table id='outputTable' align= 'center' border=1 width='800px' > <br><tr><th>Invalid address</th><tr>";
               exit;
            }

		  }
      else 
      if(($_POST['type']=='place')  && (empty($_POST['location'])) && (!empty($_POST['distance'])))
      {
        echo "<script language=JavaScript>yesnoCheck();</script>";
         echo "<table id='outputTable' align= 'center' border=1 width='800px' > <br><tr><th>Distance specified without location or address</th><tr>";
               exit;
      }
          else if($_POST['type']=='event')
          {
            $keyword = preg_replace("/ /","%20",$_POST['keyword']);
                try {
                $response = $fb->get("/search?q=".$keyword."&type=".$_POST['type']."&fields=id,name,picture.width(700).height(700),place&access_token=EAAED0CT6escBAGjZCH9S4ZAvbvKGcBhPkVpZCy9ZB1TJxzkKCldIfTSRNprOVhfVOsym3j8gFMZBaKyijJBPlgOLuDZCulZCZCuFwMUjFUTFmPgvMkcrnsRC3qvZCNrhLt0mhQbpV0Uy13X2suswzKk1hexz0wa8acU4ZD");
                 } catch(Facebook\Exceptions\FacebookResponseException $e) {
                 echo 'Graph returned an error: ' . $e->getMessage();
                     exit;
                } catch(Facebook\Exceptions\FacebookSDKException $e) {
                     echo 'Facebook SDK returned an error: ' . $e->getMessage();
                     exit;
                }
          }
		  else
            { 
                $keyword = preg_replace("/ /","%20",$_POST['keyword']);
                 echo "<script language=JavaScript>yesnoCheck();</script>";
                try {
                $response = $fb->get("/search?q=".$keyword."&type=".$_POST['type']."&fields=id,name,picture.width(700).height(700),albums,posts&access_token=EAAED0CT6escBAGjZCH9S4ZAvbvKGcBhPkVpZCy9ZB1TJxzkKCldIfTSRNprOVhfVOsym3j8gFMZBaKyijJBPlgOLuDZCulZCZCuFwMUjFUTFmPgvMkcrnsRC3qvZCNrhLt0mhQbpV0Uy13X2suswzKk1hexz0wa8acU4ZD");
                 } catch(Facebook\Exceptions\FacebookResponseException $e) {
                 echo 'Graph returned an error: ' . $e->getMessage();
                     exit;
                } catch(Facebook\Exceptions\FacebookSDKException $e) {
                     echo 'Facebook SDK returned an error: ' . $e->getMessage();
                     exit;
                }
            }
             
              if($response != false)
                {
                    $facebook_json = $response->getGraphEdge();
				$length=count($facebook_json);
                if($facebook_json)
                {
                 if($length>"0")  {
                   
            echo "<br><table id='outputTable' align= 'center' border=1 width='800px' height='10%'>";
            echo "<tr><th colspan=2 align=left>Profile Photo</th>";
            echo "<th colspan=2 align=left>Name</th>";
            if($_POST['type']=='event')
            {
              echo "<th colspan=2 align=left>Place</th>";
            }
            else {
            echo "<th colspan=2 align=left>Details</th>"; }

				foreach ($facebook_json as $fb)
				{
                $profilePhoto =  $fb['picture'];                    
                $photo = (string) $profilePhoto['url'];
                echo "<tr><td colspan=2 align='left'><a href=".$photo." target = '_blank' onClick='imageProfile(this.href);return false'><img id='photo' src=".$photo." width=40px height=30px></a></td>";
             
                $fb_name = (string) $fb['name'];
                 echo "<td colspan=2 align='left'>".$fb_name."</td>";

                $id= (string)$fb['id'];
         
             if ($_POST['type']=='place')
             {
              echo "<td><a href=?id=".$id."&keyword=".$keyword."&type=".$_POST['type']."&location=".$_POST['location']."&distance=".$_POST['distance'].">Details</a></td></tr>";
            }
            else
                 if($_POST['type']=='event')
                {
                    if(isset($fb['place'])) {
                    $place = $fb['place'];
                    $place_Name = $place['name'];
                    }
                    else
                       $place_Name = "unknown";

                   echo "<td>".$place_Name."</td></tr>";
                }
            
            else
              {
                    echo "<td><a href=?id=".$id."&keyword=".$keyword."&type=".$_POST['type'].">Details</a></td></tr>";
                }
          }
          echo"</table>";
            }
             

            else {
                echo "<table id='outputTable' align= 'center' border=1 width='1000px' > <tr><th>No Record has been found!</th><tr>";   
                  
        }      
         }
          else
                { echo "<script language=JavaScript> alert('XML Error! Invalid address\\nPlease provide correct input\\n');</script>";
                }
        }
    } 

    if((isset($_GET['id']) && !isset($_POST["search"])))
    { 
        if($_GET['type']=="place")
        {
        echo "<script language=JavaScript>retain_valueWithPlace('".$_GET['keyword']."','".$_GET['type']."','".$_GET['location']."','".$_GET['distance']."')</script>";
        }
        else {
         echo "<script language=JavaScript>retain_value('".$_GET['keyword']."','".$_GET['type']."')</script>";
        }
        
            $details_URL =  $fb->get("/".$_GET['id']."?fields=albums.limit(5){name,photos.limit(2){name,picture}},posts.limit(5)&access_token=EAAED0CT6escBAGjZCH9S4ZAvbvKGcBhPkVpZCy9ZB1TJxzkKCldIfTSRNprOVhfVOsym3j8gFMZBaKyijJBPlgOLuDZCulZCZCuFwMUjFUTFmPgvMkcrnsRC3qvZCNrhLt0mhQbpV0Uy13X2suswzKk1hexz0wa8acU4ZD");

                    $details_content = $details_URL->getGraphNode();
                    if ($details_content != false)
                    {
                      if(isset($details_content['albums'])) 
                        {
                             
                            echo "</br></br><table id='outputTable' align='center' border=1 width='800px' style=background-color:#C0C0C0;><tr><th ><a href=# onclick='display()' style=color:blue>Albums</a></th></tr></table>";
                            echo "<table id='outputTableAlbums' align='center' border=1 width='800px'style=display:none; ></br>";
                            $albums = $details_content['albums'];
                            
                            foreach ($albums as $album)
                            {  
                                $albumName = $album['name'];
                                
                                
                                $encodedAlbumName = preg_replace("/ /", "_", $albumName);
                                $encodedAlbumName = preg_replace("/-/", "_", $encodedAlbumName);
                                $encodedAlbumName = preg_replace("/[^A-Za-z0-9\-]/", "_", $encodedAlbumName);

                                if(!isset($album['photos']))
                                {
                                    echo"<tr><td>".$albumName."</td></tr>";
                                }
                                else
                                {
                                   echo"<tr><td><a href=# onClick='displayPicture(".$encodedAlbumName.")' style=color:blue>".$albumName."</a></td></tr><tr id='".$encodedAlbumName."'style=display:none;><td >"; 
                                
                                foreach ($album['photos'] as $albumPhoto)
                                {
                                    $id1 =  $albumPhoto['id'];

                                     $href = $fb->get("/".$id1."/picture?access_token=EAAED0CT6escBAGjZCH9S4ZAvbvKGcBhPkVpZCy9ZB1TJxzkKCldIfTSRNprOVhfVOsym3j8gFMZBaKyijJBPlgOLuDZCulZCZCuFwMUjFUTFmPgvMkcrnsRC3qvZCNrhLt0mhQbpV0Uy13X2suswzKk1hexz0wa8acU4ZD");


                                     $href1 = $href->getHeaders();
                              
                                echo "<a href= ".$href1['Location']." target = '_blank' onClick='image(this.href);return false'><img style=margin-right:5px;height:80px;width:80px; src=".$albumPhoto['picture'].">";
                                
                                }
                                }
                            }
                            echo"</tr></td></table></br>";
                        }
                        else
                        {
                            echo  "</br></br><table id='outputTable' align='center' border=1 width='800px'><tr><th>No Albums has been found</th></tr></table></br></br></br>";
                        }
                       

                        if (isset($details_content['posts']))
                        {
                            echo "</br></br><table id='outputTable1' align='center' border=1 width='800px'style=background-color:#C0C0C0;><tr><th><a href=# onclick='displayPosts()' style=color:blue>Posts</a></th></tr></table>";
                             echo "<table id='outputTablePosts' align='center' border=1 width='800px' style=display:none; ><tr><th style=background-color:#e9e9e9; align='left'>Messages</th></tr></br>";
                             $Message_Count = 0;
                            
                           foreach ($details_content['posts'] as $post) 
                            {
                                if(isset($post['message']))
                                {
                                    $postMessage = $post['message']; 
                                    $Message_Count +=1;

                                }
                                else
                                {
                                    $postMessage ="";
                                }
                                if($postMessage!=""){
                                echo"<tr><td>".$postMessage."</td></tr>"; }

                            }
                                 if($Message_Count=="0")
                            {
                                echo "<tr><td>No Messages</td></tr>";
                            }
                           
                            echo"</table>";
                        }
                        else
                        {
                            echo "<table id='outputTable1' align='center' border=1 width='800px'><tr><th>No posts has been found</th></tr></table>";
                        }
                    }        
        } 

?>
    <noscript>
    </body>
</html>
