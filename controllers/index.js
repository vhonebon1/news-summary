window.onload = function() {
  makeApiRequest()
  var newController = new NewsController(listForFirstPage)
  newController.addStoryToPage()
}
