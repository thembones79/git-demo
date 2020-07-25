const returnOne = require("./main");

describe("ReturnOne test", () => {
  it("returns one", () => {
    expect(returnOne()).toEqual(1);
  });
});
