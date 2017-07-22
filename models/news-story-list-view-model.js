(function(exports) {
  function NewsStoryListView(newsStoryList) {
    this.newsStoryList = newsStoryList;
  };

  NewsStoryListView.prototype.convertToHtml = function() {
    if (this.newsStoryList.getHeadlines().length >= 1) {
      return this._addInnerHtmlTags();
    };
  }

  NewsStoryListView.prototype._addInnerHtmlTags = function() {
    var storiesHtml = []
    this.newsStoryList.getStories().map(function(story){
      storiesHtml.push(_addTagsForOneStory(story))
    });
    return storiesHtml;
  }

  function _addTagsForOneStory(note) {
    return "<div><a href=" + note.getHeadline() + "</a></div><br>"
  };

  exports.NewsStoryListView = NewsStoryListView;
})(this);
