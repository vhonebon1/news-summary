(function(exports) {
  function NewsStory(headline, story){
    this.headline = headline
    this.storyContent = story;
    this.id = null
  };

  NewsStory.prototype.getHeadline = function() {
    return this.headline
  }

  NewsStory.prototype.getStory = function() {
    return this.storyContent
  }

  NewsStory.prototype.getId = function() {
    return this.id
  }

  exports.NewsStory = NewsStory;
})(this);
