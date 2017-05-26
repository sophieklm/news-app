function testNewsfeedCanBeConstructed(){
  console.log('Test newsfeed can be constructed:');
  var newsfeed = new Newsfeed();
  assert.isConstructedFrom(newsfeed, Newsfeed);
}
testNewsfeedCanBeConstructed();

function testNewsfeedHasHeadlines() {
  console.log('Test newsfeed can contain headlines:');
  var newsfeed = new Newsfeed();
  assert.isArray(newsfeed.headlines);
}
testNewsfeedHasHeadlines();

function testNewsfeedGetsHeadlines() {
  console.log('Test newsfeed shows headlines:');
  var response = [{"response":{"results":[{"webTitle":"Todays Headline"}]}}]
  var newsfeed = new Newsfeed();
  newsfeed.addHeadlines(response);
  assert.isEqual(newsfeed.getHeadlines()[0].webTitle, "Todays Headline");
}
testNewsfeedGetsHeadlines();
