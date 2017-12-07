document.getElementById('issueInputForm').addEventListener('submit', saveIssue);  

function saveIssue(e) {
  
  // lets retreive the values from the form. 
    
  var issueAddy = document.getElementById('appointmentAddress').value;
  var issueDesc = document.getElementById('issueDescInput').value;
  var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
  var issueId = chance.guid();   // crazy global unit identifer that JP put me on. figured maybe i would need this but not sure. (each card will have a unique number id)
  var issueStatus = 'Open';
  var issueNumber = document.getElementById('issueAssignedToInputNumber').value;
  var issueNotes = document.getElementById('issueAccess').value;

  // put the issue form values into an object. 

  var issue = {
    address: issueAddy, 
    id: issueId,
    description: issueDesc,  
    assignedTo: issueAssignedTo,
    status: issueStatus,
    number: issueNumber,
    notes: issueNotes
    
  }
  
  // insert the object into local storage 
  // 1st check to see IF there is already something in local storage. .getItem 'issues' should retreive them
  // if null push object above into an empty array. 
  // stringify issues . so setItem to creat a JSON object then store into issues object in local storage. 
  
  // else if we already have something in local storage , we need to , insert our new object in a slightly differetn way. 
  // 1st we need to retrieve everything which is in local storage at the moment. So JSON.parse. 
  // Then requesting from local storage the issues object

  if (localStorage.getItem('issues') == null) {
    var issues = [];   
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issues));
    
    console.log(issues)
    
  } else {
    var issues = JSON.parse(localStorage.getItem('issues'));
    issues.push(issue); // extending the array, one more element is put in. 
    localStorage.setItem('issues', JSON.stringify(issues));   
  }

  document.getElementById('issueInputForm').reset();  // reset the input elements

  fetchIssues();  /* now with a new element inserted into local storage , we need to call fetch 
                     issues again so that the list out put is re-generated and the new element 
                     is included into the list out put aswell . */ 

  e.preventDefault();  // prevents the form from submitting. 
}



function deleteIssue(id) {
  var issues = JSON.parse(localStorage.getItem('issues'));  // retreive from local storage 
  for (var i = 0; i < issues.length; i++) {                 // iterate over all of the items in the object. 
    if (issues[i].id == id) {
      issues.splice(i, 1);                                  // splice the element out of the array, removed from the array. 
    }
  }

  localStorage.setItem('issues', JSON.stringify(issues));   // then we write it back to local storage

  fetchIssues();                                            // update the list output
}

// should be used to fetch the list of issues and used as a data store (local storage)
// we can call this function multiple times. 
// fetching issue items from local storage. 

function fetchIssues() {
  var issues = JSON.parse(localStorage.getItem('issues'));
  var issuesListe = document.getElementById('issuesList');  // retreive refference from div section from the index.html 

  issuesList.innerHTML = '';   // intitialize the content. make sure its empty. (empty string the inner html)

  /* 
  bring in a loop and iterate over the issue items which are in the issues
  object. and for each of the issue item, inside of that array we need to 
  generate the html code. Which is needed to , to produce the output we want to have, 
  and that output needs to be aaded to the html property of issues list.
  and thats the way we are generating the dynamic / prepared list output for html creation. 
  */

  for (var i = 0; i < issues.length; i++) { 
      
    var address = issues[i].address;
    var id = issues[i].id;
    var desc = issues[i].description;
    var assignedTo = issues[i].assignedTo;
    var status = issues[i].status;
    var number = issues[i].number;
    var notes = issues[i].notes;
    
    
    // Generate the HTMl output for the elements from above. 

    issuesList.innerHTML +=   '<div class="well">'+
                              '<h4>' + desc + '</h4>'+
                              '<h4>' + address + '</h4>'+                              
                              '<h4>' + assignedTo + '</h4>'+
                              '<h4>' + number + '</h4>'+
                              '<h4>' + notes + '</h4>'+
                              '<a href="#" onclick="deleteIssue(\''+id+'\')" class="btn btn-danger" style="width:100%;">Delete</a>'+
                              '</div>';                                                        
  }
}

