function testViewInitialisesWithNewsfeed(){
  console.log('Test view has newsfeed:');
  var view = new View();
  assert.isConstructedFrom(view.newsfeed, Newsfeed);
}
testViewInitialisesWithNewsfeed();

function testViewShowsHeadlines(){
  console.log('Test view shows headlines:');
  var view = new View();
  var response = [{"response":{"results":[{"webTitle":"Todays Headline"}]}}]
  var html = "<ul><li><div>Todays Headline</div></li></ul>";
  view.newsfeed.addHeadlines(response);
  assert.isEqual(view.getHTML(), html);
}
testViewShowsHeadlines();
