/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    let small = 0;

    for(letter of t){
        if(s[small] == letter){
            small++;
        }
    }

    return s.length == small
};