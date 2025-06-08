/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {

    let r ="";
    for(let i=0; i<s.length; i++){
        let c=s.charCodeAt(i);

        if(c>64 && c<91) c +=32

        r += String.fromCharCode(c);
    }

    return r;
    
};