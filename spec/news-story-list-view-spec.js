(function() {

  function testViewStartsWithNewsStoryList() {
    story = new NewsStory("Alarming Headline", "Alarming text")
    list = new NewsStoryList(story);
    list.pushToStories(story)
    view = new NewsStoryListView(list)
    assert.isTrue(view.newsStoryList === list);
  };

  testViewStartsWithNewsStoryList();

  function testConvertToHTML() {
    assert.isEquals(view.convertToHtml(), "<ol><li><div><a href=\"#stories/0\">Alarming Headline</a></div></li></ol>")
  }

  testConvertToHTML();

})();
