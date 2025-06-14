/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    let sentence = s.trim().split(" ");

    let lastIndex = sentence.length-1;

    return sentence[lastIndex].length;
    
};