/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    let mySet = new Set();

    for(num of nums){
        if(mySet.has(num)){
            mySet.delete(num)
        }else{
            mySet.add(num)
        }
    }

    let myArray = Array.from(mySet);
    return myArray[0];
    
};