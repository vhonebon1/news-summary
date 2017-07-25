function makeApiRequest() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onload = function() {
    var jsonObject = JSON.parse(xmlHttp.response);
    var headlinesArray = _extractHeadlinesFromObject(jsonObject)
    _pushHeadlinesToNewsStory(headlinesArray);
  }
  xmlHttp.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world?show-editors-picks=true&show-fields=bodyText", false);
  xmlHttp.send(null);
}

function _extractHeadlinesFromObject(object) {
  var stories = object.response.editorsPicks
  return _createHeadlinesArray(stories);
}

function _createHeadlinesArray(storyObjects) {
  var headlines = []
  storyObjects.forEach(function(oneStory){
    headlines.push(oneStory.webTitle)
  });
  return headlines
}

function _addEachHeadlineToNote(array) {
  array.forEach(function(element) {
    storyForFirstPage = new NewsStory(element, "no content yet")
    listForFirstPage.pushToStories(storyForFirstPage)
  });
}

function _pushHeadlinesToNewsStory(array) {
  listForFirstPage = new NewsStoryList()
  _addEachHeadlineToNote(array);
  return listForFirstPage
}
