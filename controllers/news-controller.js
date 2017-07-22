(function(exports) {
  function NewsController(newsStoryList) {
    this.newsStoryList = newsStoryList;
    this.newsStoryListView = new NewsStoryListView(this.newsStoryList);
  };

  NewsController.prototype.httpGetAsync = function(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        callback(xmlHttp.responseText);
      }
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
  }
}

  NewsController.prototype.addStoryToPage = function(element) {
    element.innerHTML = this.newsStoryListView.convertToHtml();
  };

  exports.NewsController = NewsController;
})(this);
