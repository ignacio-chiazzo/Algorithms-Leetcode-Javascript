// Leetcode 118

// Problem: https://leetcode.com/problems/pascals-triangle/

// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above
// Example 1:

// Input: numRows = 5

// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
/**

 * @param {number} numRows

 * @return {number[][]}

 */

var generate = function(numRows) {

    var result = [];

    

    if(numRows <= 0){

        return result;

    }

    

    for(var i = 0; i < numRows; i++){

        var cur = [];

        var pre = i > 0 ? result[i - 1] : [];

        

        for(var j = 0; j <= i; j++){

            if(j === 0){

                cur.push(1);    

            } else if(j === i){

                cur.push(1);

            } else {

                cur.push(pre[j] + pre[j-1]);

            }

        }

        

        result.push(cur);

    }

    

    return result;

};
