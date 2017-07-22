(function() {

  var list = new NewsStoryList()
  var story1 = new NewsStory("first headline", "first content")
  var story2 = new NewsStory("second headline", "second content")
  list.pushToStories(story1);
  list.pushToStories(story2);

  function testPushToStories() {
    assert.isTrue(list.stories.length === 2);
    assert.isTrue(list.stories[1].id === 1);
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
