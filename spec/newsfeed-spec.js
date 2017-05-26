function testNewsfeedCanBeConstructed(){
  console.log('Test newsfeed can be constructed:');
  var newsfeed = new Newsfeed();
  assert.isConstructedFrom(newsfeed, Newsfeed);
}
testNewsfeedCanBeConstructed();

function testNewsfeedHasHeadlines() {
  console.log('Test newsfeed has headlines:');
  var newsfeed = new Newsfeed();
  assert.isArray(newsfeed.headlines);
}
testNewsfeedHasHeadlines();

function testNewsfeedShowsHeadlines() {
  console.log('Test newsfeed shows headlines:');
  var headline = "Todays Headline";
  var newsfeed = new Newsfeed();
  assert.isEqual(newsfeed.headlines, headline);
}
testNewsfeedShowsHeadlines();
