const returnOne = require("./main");

describe("ReturnTwo test", () => {
  it("returns two", () => {
    expect(returnOne()).toEqual(2);
  });
});
