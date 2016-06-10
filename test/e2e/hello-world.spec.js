describe("app says hello world on home page", function() {
  it("should say hello world in page", function() {
    browser.get('/');
    expect($("#hello-world").getText()).toEqual("Hello, world");
  });
});
