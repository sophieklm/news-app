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

function testNewsfeedShowsHeadlines() {
  console.log('Test newsfeed shows headlines:');
  var headline = "Todays Headline";
  var newsfeed = new Newsfeed();
  newsfeed.addHeadlines(headline);
  assert.isEqual(newsfeed.getHeadlines(), headline);
}
testNewsfeedShowsHeadlines();
