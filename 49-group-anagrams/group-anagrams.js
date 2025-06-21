/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {


    const map = new Map();
    for(const str of strs){
        const sorted = str.split('').sort().join('')


        if(!map.has(sorted)){
            map.set(sorted, [])
        }

        map.get(sorted).push(str);
    }

    return Array.from(map.values())
    
};