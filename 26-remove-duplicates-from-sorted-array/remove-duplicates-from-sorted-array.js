/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let mySet = new Set(nums);
    let myArray = Array.from(mySet);

    for(let i=0; i<nums.length; i++){
        nums[i]=myArray[i];
    }

    return mySet.size;
    
};