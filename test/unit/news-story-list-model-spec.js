
function testStartsWithEmptyArray(){
   var list = new NewsStoryList()
   assert.isTrue(list.stories.length === 0)
}

testStartsWithEmptyArray();

function testPushToStories() {
  var list = new NewsStoryList()
  var newsStory = new NewsStory("test headline", "test content")
  list.pushToStories(newsStory);
  assert.isTrue(list.stories.length === 1);
  assert.isTrue(list.stories[0].id === 0);
};

testPushToStories();

function testGetHeadlines() {
  var list = new NewsStoryList()
  var newsStory = new NewsStory("first headline", "first content")
  var newsStory2 = new NewsStory("second headline", "second content")
  list.pushToStories(newsStory);
  list.pushToStories(newsStory2);
  console.log(list.getHeadlines())
  assert.isTrue(list.getHeadlines() === "first headlinesecond headline");
  assert.isTrue(list.stories[0].id === 0);
};

testGetHeadlines();

function testGetHeadlines() {
  var list = new NewsStoryList()
  var newsStory = new NewsStory("first headline", "first content")
  var newsStory2 = new NewsStory("second headline", "second content")
  list.pushToStories(newsStory);
  list.pushToStories(newsStory2);
  assert.isTrue(list.getHeadlines() === "first headlinesecond headline");
};

testGetHeadlines();

function testStoryContents() {
  var list = new NewsStoryList()
  var newsStory = new NewsStory("first headline", "first content")
  var newsStory2 = new NewsStory("second headline", "second content")
  list.pushToStories(newsStory);
  list.pushToStories(newsStory2);
  assert.isTrue(list.getStoryContents() === "first contentsecond content");
};

testGetHeadlines();
