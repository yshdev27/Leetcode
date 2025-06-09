/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {


    let set = new Set(nums);

    return set.size !== nums.length;

    // let left =0;
    // let right = nums.length-1;

    // while(left<right){

    //     if(nums[left]===nums[right]){
    //         return true;
    //     }



    //     left++;
    //     right--;
    // }

    // return false;
    
    // for(let i =0; i<nums.length; i++){
    //     for(let j=i+1; j<nums.length; j++){
    //         if(nums[i]===nums[j]){
    //             return true;
    //         }
    //     }
    // }

    // return false;



};