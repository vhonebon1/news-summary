(function(exports) {
  function NewsController(newsStoryList) {
    this.newsStoryList = newsStoryList;
    this.newsStoryListView = new NewsStoryListView(this.newsStoryList);
  };

  NewsController.prototype.addStoryToPage = function() {
    news.innerHTML = this.newsStoryListView.convertToHtml();
  }

  exports.NewsController = NewsController;
})(this);
