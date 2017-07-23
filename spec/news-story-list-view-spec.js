(function() {
  createTwoTestStories()
  view1 = new NewsStoryListView(list1)

  function testViewStartsWithNewsStoryList() {
    assert.isTrue(view1.newsStoryList === list1);
  };

  testViewStartsWithNewsStoryList();

  function testConvertToHTML() {
    assert.isEquals(view1.convertToHtml(), "<ol><li><div><a href=\"#stories/0\">Alarming Headline</a></div></li><li><div><a href=\"#stories/1\">Calming Headline</a></div></li></ol>")
  }

  testConvertToHTML();

})();
