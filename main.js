document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

function saveIssue(e) {
    
  var issueAddy = document.getElementById('appointmentAddress').value;
  var issueDesc = document.getElementById('issueDescInput').value;
  var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
  var issueId = chance.guid();
  var issueStatus = 'Open';
  var issueNumber = document.getElementById('issueAssignedToInputNumber').value;
  var issueNotes = document.getElementById('issueAccess').value;

  var issue = {
    address: issueAddy, 
    id: issueId,
    description: issueDesc,  
    assignedTo: issueAssignedTo,
    status: issueStatus,
    number: issueNumber,
    notes: issueNotes
    
  }

  if (localStorage.getItem('issues') == null) {
    var issues = [];
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issues));
  } else {
    var issues = JSON.parse(localStorage.getItem('issues'));
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issues));
  }

  document.getElementById('issueInputForm').reset();

  fetchIssues();

  e.preventDefault();
}



function deleteIssue(id) {
  var issues = JSON.parse(localStorage.getItem('issues'));
  for (var i = 0; i < issues.length; i++) {
    if (issues[i].id == id) {
      issues.splice(i, 1);
    }
  }

  localStorage.setItem('issues', JSON.stringify(issues));

  fetchIssues();
}

function fetchIssues() {
  var issues = JSON.parse(localStorage.getItem('issues'));
  var issuesListe = document.getElementById('issuesList');

  issuesList.innerHTML = '';

  for (var i = 0; i < issues.length; i++) {
    
    
    var address = issues[i].address;
    var id = issues[i].id;
    var desc = issues[i].description;
    var assignedTo = issues[i].assignedTo;
    var status = issues[i].status;
    var number = issues[i].number;
    var notes = issues[i].notes;

    issuesList.innerHTML +=   '<div class="well">'+
                              '<h4>' + desc + '</h4>'+
                              '<h4>' + address + '</h4>'+                              
                              '<h4>' + assignedTo + '</h4>'+
                              '<h4>' + number + '</h4>'+
                              '<h4>' + notes + '</h4>'+
                              '<a href="#" onclick="deleteIssue(\''+id+'\')" class="btn btn-danger">Delete</a>'+
                              '</div>';                                                        
  }
}

