/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    let comparisonWord = strs[0];
    for(let i=1; i<strs.length; i++){
        while(strs[i].indexOf(comparisonWord) !==0){
            comparisonWord = comparisonWord.substring(0, comparisonWord.length-1)
        }
    }

    return comparisonWord;
    
};