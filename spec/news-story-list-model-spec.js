(function() {

  var list = new NewsStoryList()
  var newsStory = new NewsStory("first headline", "first content")
  var newsStory2 = new NewsStory("second headline", "second content")
  list.pushToStories(newsStory);
  list.pushToStories(newsStory2);

  function testPushToStories() {
    assert.isTrue(list.stories.length === 2);
  };

  testPushToStories();

  function testGetHeadlines() {
    assert.isTrue(list.getHeadlines() === "first headlinesecond headline");
  };

  testGetHeadlines();

  function testGetHeadlines() {
    assert.isTrue(list.getHeadlines() === "first headlinesecond headline");
  };

  testGetHeadlines();

  function testStoryContents() {
    assert.isTrue(list.getStoryContents() === "first contentsecond content");
  };

  testGetHeadlines();
})();