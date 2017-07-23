function createTwoTestStories() {
  firstStory = new NewsStory("Alarming Headline", "Alarming text")
  secondStory = new NewsStory("Calming Headline", "Calming text")
  list1 = new NewsStoryList();
  list1.pushToStories(firstStory);
  list1.pushToStories(secondStory);
}

function createOneTestStory() {
  story = new NewsStory("Dogs are the best", "Turns out dogs are the best")
  list1 = new NewsStoryList();
  list1.pushToStories(story);
  controller1 = new NewsController(list);
}

function delay() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();
