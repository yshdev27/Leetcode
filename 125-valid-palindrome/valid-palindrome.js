/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    let newString = s.toLowerCase().replace(/[^a-z0-9]/g,"")
    let left = 0;
    let right = newString.length-1;

    while (left<right){
        if(newString[left]!==newString[right]){
            return false;
        }

        left++;
        right--;
    }
    return true;
    
};