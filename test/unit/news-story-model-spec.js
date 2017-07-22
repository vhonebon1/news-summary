(function() {

var news = new NewsStory("Some headline", "Some content");

function testHasNewsStory(){
  assert.isTrue(news.storyContent === "Some content")
}

testHasNewsStory();

function testHasNewsHeadline(){
  assert.isTrue(news.headline === "Some headline")
}

testHasNewsHeadline();

function testStartsWithNullId(){
  assert.isTrue(news.id === null)
}

testStartsWithNullId();

function testGetHeadlineWorks(){
  assert.isTrue(news.getHeadline() === "Some headline")
}

testGetHeadlineWorks();

function testGetStoryWorks(){
  assert.isTrue(news.getStory() === "Some content")
}

testGetStoryWorks();

function testGetIdWorks(){
  assert.isTrue(news.getId() === null)
}

testGetIdWorks();
})();
