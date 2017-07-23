(function() {
  firstStory = new NewsStory("Alarming Headline", "Alarming text")
  secondStory = new NewsStory("Calming Headline", "Calming text")
  list = new NewsStoryList();
  list.pushToStories(firstStory);
  list.pushToStories(secondStory);
  view = new NewsStoryListView(list)

  function testViewStartsWithNewsStoryList() {
    assert.isTrue(view.newsStoryList === list);
  };

  testViewStartsWithNewsStoryList();

  function testConvertToHTML() {
    assert.isEquals(view.convertToHtml(), "<ol><li><div><a href=\"#stories/0\">Alarming Headline</a></div></li><li><div><a href=\"#stories/1\">Calming Headline</a></div></li></ol>")
  }

  testConvertToHTML();


})();
