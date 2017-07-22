function testHasNewsStory(){
  var news = new NewsStory("Edward Snowden: the whistleblower behind the NSA surveillance revelations", "Some story about Edward Snowden");
  assert.isTrue(news.storyContent === "Some story about Edward Snowden")
}

testHasNewsStory();

function testHasNewsHeadline(){
  var news = new NewsStory("Edward Snowden: the whistleblower behind the NSA surveillance revelations", "Some story about Edward Snowden");
  assert.isTrue(news.headline === "Edward Snowden: the whistleblower behind the NSA surveillance revelations")
}

testHasNewsHeadline();

function testStartsWithNullId(){
  var news = new NewsStory("Edward Snowden: the whistleblower behind the NSA surveillance revelations", "Some story about Edward Snowden");
  assert.isTrue(news.id === null)
}

testStartsWithNullId();

function testGetHeadlineWorks(){
  var news = new NewsStory("Edward Snowden: the whistleblower behind the NSA surveillance revelations", "Some story about Edward Snowden");
  assert.isTrue(news.getHeadline() === "Edward Snowden: the whistleblower behind the NSA surveillance revelations")
}

testGetHeadlineWorks();

function testGetStoryWorks(){
  var news = new NewsStory("Edward Snowden: the whistleblower behind the NSA surveillance revelations", "Some story about Edward Snowden");
  assert.isTrue(news.getStory() === "Some story about Edward Snowden")
}

testGetStoryWorks();

function testGetIdWorks(){
  var news = new NewsStory("Edward Snowden: the whistleblower behind the NSA surveillance revelations", "Some story about Edward Snowden");
  assert.isTrue(news.getId() === null)
}

testGetIdWorks();
