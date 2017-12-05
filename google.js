document.getElementById('issueInputForm').addEventListener('submit', saveNewIssue, initMap); 


function saveNewIssue(e){
  // lets retreive the values from the form. // convert the address to lat long 
  var issueAddyNew = document.getElementById('appointmentAddress').value;
  var issueDescNew = document.getElementById('issueDescInput').value;

  // console.log(issueDescNew)
  
  axios.get('https://maps.googleapis.com/maps/api/geocode/json', {  
    params:{
      address:issueAddyNew,
      key: 'AIzaSyDd_WKJE_x1xUVMrZsT6lXOsqua72m19HA'
    }  
  })  
  
  .then(function(response){      
    var convertedAddy = response.data.results[0].geometry.location;    
    // console.log(convertedAddy)            
    // put the issue form values into an object.     
    var issueNew = {      
      address: convertedAddy
      // time: issueDescNew
    }    
    // Put the object into storage
      localStorage.setItem('issueNew', JSON.stringify(issueNew));  
  })  
  .catch(function(error){   
    alert("put in correct addy");       
  });
}


// Retrieve the object from loal storage
 // var retrievedObject = localStorage.getItem('issueNew');
 
 var newTest = JSON.parse(localStorage.getItem('issueNew'));
 
 var locations = [];
 
 
 
 locations.push(newTest) 
 // console.log(locations)
 
function initMap(e){
  var options = {
    zoom: 13,
    center: {lat:40.7043, lng:-73.9213}
  }

// new map 
for (var i = 0; i < locations.length; i ++){

  var map = new google.maps.Map(document.getElementById('map'), options);  
    var marker = new google.maps.Marker({  
      position:locations[0].address ,
      map:map  
  
    })    

   }

}


 


   
  
 
   
 



  
