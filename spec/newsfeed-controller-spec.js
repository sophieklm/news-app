function testControllerInitialisesWithView(){
  console.log('Test view has newsfeed:');
  var controller = new Controller();
  assert.isConstructedFrom(controller.view, View);
}
testControllerInitialisesWithView();
