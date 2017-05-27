function init() {

  var guardianResponse = getResponse(getHeadlines());
  setTimeout(function() {
    controller = new Controller(guardianResponse);
    controller.populatePage();
  },1500);
}

window.onload = init;
