function makeApiRequest() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
    var jsonObject = JSON.parse(xmlHttp.response);
    var stories = jsonObject.response.editorsPicks
    var headlines = []
    stories.forEach(function(thing){
      headlines.push(thing.webTitle)
    });
    console.log(headlines)
    pushHeadlinesToNewsStory(headlines);
  }
  xmlHttp.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world?show-editors-picks=true&show-fields=bodyText", true);
  xmlHttp.send(null);
}

function pushHeadlinesToNewsStory(array) {
  testArray = []
  array.forEach(function(element) {
    story = new NewsStory(element, "no content yet")
    testArray.push(story)
  });
  console.log(testArray)
}
