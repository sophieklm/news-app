var response = [{"response":{"results":[{"webTitle":"Todays Headline"}]}}]
var newsfeed = new Newsfeed(response);
var view = new View(newsfeed);


function testViewInitialisesWithNewsfeed(){
  console.log('Test view has newsfeed:');
  assert.isConstructedFrom(view.newsfeed, Newsfeed);
}
testViewInitialisesWithNewsfeed();

function testViewShowsHeadlines(){
  console.log('Test view shows headlines:');
  var html = "<ul><li><div><a href='javascript:showSummary(0)'>Todays Headline</a></div></li></ul>";
  assert.isEqual(view.getHTML(), html);
}
testViewShowsHeadlines();
