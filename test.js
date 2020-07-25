const returnOne = require("./main");

describe("ReturnFoobar test", () => {
  it("returns two", () => {
    expect(returnOne()).toEqual(2);
  });
});
