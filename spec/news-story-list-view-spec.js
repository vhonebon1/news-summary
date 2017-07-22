(function() {

  function testViewStartsWithNewsStoryList() {
    story = new NewsStory("Alarming Headline", "Alarming text")
    list = new NewsStoryList(story);
    view = new NewsStoryListView(list)
    list.pushToStories()
    assert.isTrue(view.newsStoryList === list);
  };

  testViewStartsWithNewsStoryList();

  function testAddToPage() {

    // mock adding headlines here

  }
  testAddToPage();

})();
