

// problem.. cant seem to call or retreive the values from the modal form in here. 


document.getElementById('issueInputForm').addEventListener('submit', saveNewIssue, initMap,); 


function saveNewIssue(e){
  
  // lets retreive the values from the form. 
  var issueAddyNew = document.getElementById('appointmentAddress').value;

  
  axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
  
    params:{
      address:issueAddyNew,
      key: 'AIzaSyDd_WKJE_x1xUVMrZsT6lXOsqua72m19HA'
  
    }
  
  })  
  
  .then(function(response){
    
    // logging in the full response
    
      console.log(response)
      
      console.log(response.data.results[0].geometry.location);
        
  })
  .catch(function(error){
    
    // log lat and long 
    
  });

  }
  

// convert input address field into a "formatted address".


// function geocode(){
  
  // var issueAddyForMap = document.getElementById('appointmentAddress').value; 

// cant seem to get the input field right from the submtion doc.....


// var location = " ";   // hard coded address;


// axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
// 
//   params:{
//     address:location,
//     key: 'AIzaSyDd_WKJE_x1xUVMrZsT6lXOsqua72m19HA'
// 
//   }
// 
// })  

// .then(function(response){
// 
//   // logging in the full response
// 
//     console.log(response)
// 
//     console.log(response.data.results[0].geometry.location);
// 
// 
// 
// 
// 
// })
// .catch(function(error){
// 
//   // log lat and long 
// 
// });
// 
// }







function initMap(e){
  
  var options = {
    
    zoom: 14,
    center: {lat:40.7043, lng:-73.9213}
    
  }
  
  var map = new google.maps.Map(document.getElementById('map'), options);
  

}

  
