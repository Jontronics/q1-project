document.getElementById('issueInputForm').addEventListener('submit', saveNewIssue, initMap); 

let moreAddress = []

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
    moreAddress.push(convertedAddy)
    
    JSON.stringify(moreAddress)
    // console.log(moreAddress)

    
    // localStorage.getItem('moreAddress', JSON.stringify(moreAddress)); 
  
    var settingItem = localStorage.setItem('moreAddress', JSON.stringify(moreAddress))
    // console.log(settingItem)
    var storedAddress = localStorage.getItem('moreAddress')
    // console.log(storedAddress)
  
  })  
  .catch(function(error){   
    alert("put in correct addy");       
  });
  
}


// Retrieve the object from loal storage
 // var retrievedObject = localStorage.getItem('issueNew');
 var newTest = JSON.parse(localStorage.getItem('moreAddress'));
 
 
  
 console.log(newTest)
  
 function initMap(e){
   var options = {
     zoom: 13,
     center: {lat:40.7043, lng:-73.9213}
   }
   
   

 // new map 

 var map = new google.maps.Map(document.getElementById('map'), options);

 

 for (var i = 0; i < newTest.length; i ++){
     var marker = new google.maps.Marker({  
       position:newTest[i] , 
       map:map 
       
      
   
     })         

    }

 }


  
  
  
  
 
 // var newTest = JSON.parse(localStorage.getItem('issueNew'));
 // console.log(newTest)
 // var j = i;
 // var locations = [];
 // 
 // locations.push(newTest) 
 
 
 
 // for (var i = 0; i < locations.length; i++){
 // 
 //   if (i != j){
 // 
 //    locations[i] += newTest[i] 
 // 
 //   locations.push(newTest[i]) 
 // 
 //   }
 // 
 // }
 
 
 // console.log(locations)
 