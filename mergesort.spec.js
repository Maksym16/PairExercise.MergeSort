describe("Split Array function", function() {
  it("is able to split an array into two halves", function() {
    // your code here
    expect(split([3, 5, 2, 7])).toEqual([[3, 5], [2, 7]]);
  });

  it("is able to split an odd array into two halves", function() {
    // your code here
    expect(split([3, 5, 2, 7, 1])).toEqual([[3, 5], [2, 7, 1]]);
  });
});

describe("Merge function", function() {
  it("is able to merge two sorted arrays into one sorted array", function() {
    // test the merging algorithm
    expect(merge([[3, 5], [2, 7]])).toEqual([2, 3, 5, 7]);
  });
});

describe("Merge Sort function", function() {
  it("is able to sort an array", function() {
    // test the merging algorithm
    expect(mergeSort([38, 27, 43, 3, 9, 82, 10])).toEqual([
      3,
      9,
      10,
      27,
      38,
      43,
      82
    ]);
  });
});
