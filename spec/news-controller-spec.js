(function() {

  createOneTestStory()

  function testControllerAttributes() {

    assert.isNotNull(controller.newsStoryList)
    assert.isNotNull(controller.newsStoryListView)
  }

  testControllerAttributes();

  function testAddToPage() {

    var dummyElement = document.createElement("div");
    dummyElement.innerHTML = "the dummy text"
    controller.addNoteToPage(dummyElement);
    assert.isEquals(dummyElement.innerHTML, "<ol><li><div><a href=\"#stories/0\">Dogs are the best</a></div></li></ul>");
  };

  testAddToPage();
})();
