describe("HelloWorldController", function() {
  var controller;

  beforeEach(module("newsSummaryApp"));

  beforeEach(inject(function($controller) {
    controller = $controller("HelloWorldController");
  }));

  it("makes exposes a greeting of 'Hello, world'", function() {
    expect(controller.greeting).toEqual("Hello, world");
  });
});
