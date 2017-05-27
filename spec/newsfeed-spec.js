var response = [{"response":{"results":[{"webTitle":"Todays Headline", "webUrl" : "url", "fields":[{"thumbnail" : "img.jpg"}]}]}}]
var newsfeed = new Newsfeed(response);

function testNewsfeedCanBeConstructed(){
  console.log('Test newsfeed can be constructed:');
  assert.isConstructedFrom(newsfeed, Newsfeed);
}
testNewsfeedCanBeConstructed();

function testNewsfeedHasHeadlines() {
  console.log('Test newsfeed can contain headlines:');
  assert.isArray(newsfeed.headlines);
}
testNewsfeedHasHeadlines();

function testNewsfeedGetsHeadlines() {
  console.log('Test newsfeed shows headlines:');
  assert.isEqual(newsfeed.getHeadlines()[0].webTitle, "Todays Headline");
}
testNewsfeedGetsHeadlines();


Newsfeed.prototype.getUrl = function(index){
  return this.headlines[index].webUrl;
};

function testNewsfeedGetsUrl() {
  console.log('Test newsfeed gets urls:');
  assert.isEqual(newsfeed.getUrl(0), "url");
}
testNewsfeedGetsUrl();
