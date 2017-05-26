function testControllerInitialisesWithView(){
  console.log('Test view has newsfeed:');
  var controller = new Controller();
  assert.isConstructedFrom(controller.view, View);
}
testControllerInitialisesWithView();

function testControllerPopulatesPage(){
  console.log('Test controller populates page:');
  var controller = new Controller();
  var response = [{"response":{"results":[{"webTitle":"Todays Headline"}]}}]
  controller.view.newsfeed.addHeadlines(response);
  var html = "<ul><li><div>Todays Headline</div></li></ul>";
  assert.isEqual(controller.view.getHTML(), html);
}
testControllerPopulatesPage();
