(function() {
  createTwoTestStories()

  function testPushToStories() {
    assert.isTrue(list1.stories.length === 2);
    assert.isTrue(list1.stories[1].id === 1);
  };

  testPushToStories();

  function testGetHeadlines() {
    assert.isTrue(list1.getHeadlines() === "Alarming HeadlineCalming Headline");
  };

  testGetHeadlines();

  function testStoryContents() {
    assert.isTrue(list1.getStoryContents() === "Alarming textCalming text");
  };

  testGetHeadlines();
})();
