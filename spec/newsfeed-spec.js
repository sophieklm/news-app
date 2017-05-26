function testNewsfeedHasHeadlines() {
  console.log('Test newsfeed has headlines:');
  var headline = "Todays Headline";
  var newsfeed = new Newsfeed();

  assert.isConstructedFrom(newsfeed, Newsfeed);
  //assert.isEqual(newsfeed.headlines, headline);
}
testNewsfeedHasHeadlines();
