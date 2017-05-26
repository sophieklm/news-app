function init() {

  getGuardianResponse();
  newsfeed = new Newsfeed();
  setTimeout(function() {
    newsfeed.addHeadlines(guardianResponse);
    newsfeed.getHeadlines();
  },1000);

}

window.onload = init;
