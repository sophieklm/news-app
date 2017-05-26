function init() {

  getGuardianResponse();
  controller = new Controller();
  setTimeout(function() {
    controller.view.newsfeed.addHeadlines(guardianResponse);
    controller.populatePage(guardianResponse);
  },1000);

}

window.onload = init;
