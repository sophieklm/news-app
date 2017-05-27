var response = [{"response":{"results":[{"webTitle":"Todays Headline"}]}}]
var controller = new Controller(response);

function testControllerInitialisesWithView(){
  console.log('Test controller initialises with view:');
  assert.isConstructedFrom(controller.view, View);
}
testControllerInitialisesWithView();

function testControllerInitialisesWithNewsfeed(){
  console.log('Test controller initialises with newsfeed:');
  assert.isConstructedFrom(controller.newsfeed, Newsfeed);
}
testControllerInitialisesWithNewsfeed();

function testControllerPopulatesPage(){
  console.log('Test controller populates page:');
  var html = "<ul><li><div><a href='javascript:showSummary(0)'>Todays Headline</a></div></li></ul>";
  assert.isEqual(controller.view.getHTML(), html);
}
testControllerPopulatesPage();
