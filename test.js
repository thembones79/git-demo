const returnTwo = require("./main");

describe("returnTwo test", () => {
  it("returns two", () => {
    expect(returnTwo()).toEqual(2);
  });
});
