/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    
    let string = s.split('')


    let left = 0;
    let right = string.length-1;

    const vowels = new Set(['a', 'i', 'e', 'o', 'u', 'A', 'I', 'E', 'O', 'U'])

    // vowels.has(string[left])

    while(left<right){

        while(left<right && !vowels.has(string[left])){
            left++;
        }
         while(left<right && !vowels.has(string[right]) ){
            right--;
        }

        [string[left], string[right]] = [string[right], string[left]]



        left++;
        right--;
    }

    return string.join('');
};