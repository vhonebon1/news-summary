(function() {

  var news = new NewsStory("Some headline", "The first sentence. The second sentence.");

  function testHasNewsStory(){
    assert.isTrue(news.storyContent === "The first sentence. The second sentence.")
  }

  testHasNewsStory();

  function testHasNewsHeadline(){
    assert.isTrue(news.headline === "Some headline")
  }

  testHasNewsHeadline();

  function testStartsWithNullId(){
    assert.isTrue(news.id === null)
  }

  testStartsWithNullId();

  function testIdChangesOnPush(){
    var list = new NewsStoryList()
    list.pushToStories(news)
    assert.isTrue(news.id === 0)
  }

  testIdChangesOnPush();

  function testGetHeadlineWorks(){
    assert.isTrue(news.getHeadline() === "Some headline")
  }

  testGetHeadlineWorks();

  function testGetStoryWorks(){
    assert.isTrue(news.getStory() === "The first sentence. The second sentence.")
  }

  testGetStoryWorks();

  function testGetIdWorks(){
    assert.isTrue(news.getId() === 0)
  }

  testGetIdWorks();

  function testGetStorySummaryWorks(){
    assert.isTrue(news.getStorySummary() === "The first sentence.")
  }

  testGetStorySummaryWorks();
})();
