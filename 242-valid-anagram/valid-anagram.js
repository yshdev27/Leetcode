/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    string1= s.split("").sort().join("");
    string2= t.split("").sort().join("");
    return string1 === string2
};