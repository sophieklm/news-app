function getResponse(method) {
  var newResponse = [];
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if(request.readyState === 4 && request.status === 200) {
      newResponse.push(JSON.parse(request.responseText));
      }
  };
  request.open('GET', method);
  request.send(null);
  return newResponse;
}

function getHeadlines() {
  return "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail"
}

function getSummary(id){
  var url = controller.newsfeed.getUrl(id);
  return "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + url
}
