function testHasNewsStory(){
  var news = new News("Edward Snowden: the whistleblower behind the NSA surveillance revelations", "Some story about Edward Snowden");
  assert.isTrue(news.story === "Some story about Edward Snowden")
}

testHasNewsStory();

function testHasNewsHeadline(){
  var news = new News("Edward Snowden: the whistleblower behind the NSA surveillance revelations", "Some story about Edward Snowden");
  assert.isTrue(news.headline === "Edward Snowden: the whistleblower behind the NSA surveillance revelations")
}

testHasNewsHeadline();
