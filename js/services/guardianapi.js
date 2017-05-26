var guardianResponse = [];
var theUrl = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?';

function getGuardianResponse() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if(request.readyState === 4 && request.status === 200) {
    guardianResponse.push(JSON.parse(request.responseText));
      }
  };
  request.open('GET', theUrl);
  request.send(null);
  return guardianResponse;
}
