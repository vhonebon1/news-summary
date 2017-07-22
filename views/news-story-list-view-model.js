(function(exports) {
  function NewsStoryListView(newsStoryList) {
    this.newsStoryList = newsStoryList;
  };

  NewsStoryListView.prototype.convertToHtml = function() {
    if (this._checkListLength()) {
      var result = this._addInnerHtmlTags();
      return _addClosingHtmlTags(result);
    };
  }

  NewsStoryListView.prototype._checkListLength = function() {
    return this.newsStoryList.getStories().length >= 1
  }

  NewsStoryListView.prototype._addInnerHtmlTags = function() {
    var storiesHtml = []
    this.newsStoryList.getStories().map(function(story){
      storiesHtml.push(_addTagsForOneNote(story))
    });
    return storiesHtml;
  }

  function _addTagsForOneNote(story) {
    return "<li><div><a href=\"#stories/" + story.getId() + "\">"+ story.getHeadline() + "</a></div></li>"
  };

  function _addClosingHtmlTags(htmlString) {
    return "<ol>" + htmlString.join("") + "</ol>"
  }

  exports.NewsStoryListView = NewsStoryListView;
})(this);
