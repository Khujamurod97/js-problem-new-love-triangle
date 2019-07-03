/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(arr = []) {
  let count = 0;
  for(let i = 1; i <= arr.length; i ++) {
      let s1 = arr[i - 1];
      let s2 = arr[s1 - 1];
      let s3 = arr[s2 - 1];
      if(s1 != s2 && s2 != s3 && s3 != s1 && s3 == i) count ++;
  }
  return count / 3;
};
