angular.module("newsSummaryApp")
  .controller("ArticleHeadlineController", ["$http", function($http) {
    var self = this;

    var WORLD_NEWS = "world?show-editors-picks=true&show-fields=body";
    var API_URL = "http://news-summary-api.herokuapp.com/guardian";
    var GUARDIAN_API_URL = "http://content.guardianapis.com/";

    $http({
      url: API_URL,
      params: { apiRequestUrl: GUARDIAN_API_URL + WORLD_NEWS }
    }).then(function(response) {
      console.log(response);
      // newsStory = new NewsStory(response.data.response.editorsPicks[0]['webTitle']['headline'], response.data.response.editorsPicks[0]['fields']['body'])
        headlinesArray = [response.data.response.editorsPicks[0]['webTitle'],
                          response.data.response.editorsPicks[1]['webTitle'],
                          response.data.response.editorsPicks[2]['webTitle'],
                          response.data.response.editorsPicks[3]['webTitle'],
                          response.data.response.editorsPicks[4]['webTitle'],
                          response.data.response.editorsPicks[5]['webTitle'],
                          response.data.response.editorsPicks[6]['webTitle'],
                          response.data.response.editorsPicks[7]['webTitle'],
                          response.data.response.editorsPicks[8]['webTitle'],
                          response.data.response.editorsPicks[9]['webTitle'],
                          response.data.response.editorsPicks[10]['webTitle'],
                          response.data.response.editorsPicks[11]['webTitle'],
                          response.data.response.editorsPicks[12]['webTitle'],
                          response.data.response.editorsPicks[13]['webTitle'],
                          response.data.response.editorsPicks[14]['webTitle']]
                        // var story = new NewsStory(response.data.response.editorsPicks[0]['webTitle'], response.data.response.editorsPicks[0]['fields']['body'])
                        // var list = new NewsStoryList();
                        // list.pushToStories(story)
                        // var view = new NewsStoryListView(list)
                        // console.log(view.convertToHtml())

        self.headlines = response.data.response.editorsPicks[0]['webTitle']
        
      // self.headlines = response.data.response.editorsPicks[0]['webTitle']
      // self.text = response.data.response.editorsPicks[0]['fields']['body'];
    });

    // this controller feels bloated...
  }]);
