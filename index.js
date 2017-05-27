function init() {

  var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail"
  var newResponse = []

  function getResponse(url, callback) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if(request.readyState === 4 && request.status === 200) {
        newResponse.push(JSON.parse(request.responseText));
        callback.call(newResponse);
        }
    };
    request.open('GET', url);
    request.send(null);
    return newResponse;
  }

  getResponse(url, function() {
    controller = new Controller(newResponse);
    controller.populatePage();
  });

}

window.onload = init;
