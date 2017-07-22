(function(exports){
  function NewsStoryList(){
    this.stories = [];
  };

  NewsStoryList.prototype.getStories = function() {
    return this.stories;
  };

  NewsStoryList.prototype.pushToStories = function(story) {
    this._createIndex(story)
    this.stories.push(story);
  };

  NewsStoryList.prototype._createIndex = function(story) {
    storyIndex = this.stories.length;
    story.id = storyIndex;
  }

  NewsStoryList.prototype.getHeadlines = function() {
    return this.stories.map(function(story) {
      return story.headline
    }).join("");
  };

  NewsStoryList.prototype.getStoryContents = function() {
    return this.stories.map(function(story) {
      return story.storyContent
    });
  };

  exports.NewsStoryList = NewsStoryList;
})(this);
