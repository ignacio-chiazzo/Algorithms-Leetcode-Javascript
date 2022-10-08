const {run} = require('lib');
const index = require('./index');

const runTests = (inorderTraversal) => {

  xit('normal case', ()=> {
    const tree = new Tree([1,null,2,3])
    const expected = [1,3,2];
    const actual = inorderTraversal(nums);
    expect(actual).toEqual(expected);
  });
};
run(index, runTests);
