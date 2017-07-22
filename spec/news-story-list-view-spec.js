(function() {

  function testViewStartsWithNewsStoryList() {
    story = new NewsStory("Alarming Headline", "Alarming text")
    list = new NewsStoryList(story);
    view = new NewsStoryListView(list)
    list.pushToStories(story)
    assert.isTrue(view.newsStoryList === list);
  };

  testViewStartsWithNewsStoryList();

  // function testAddToPage() {
  //
  //   var dummyElement = document.createElement("div");
  //   dummyElement.innerHTML = "the dummy text"
  //   controller.addNoteToPage(dummyElement);
  //   assert.isEquals(dummyElement.innerHTML, "<ul><li><div><a href=\"#notes/0\">A new note</a></div></li></ul>");
  // };
  //
  // testAddToPage();

})();
