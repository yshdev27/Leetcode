/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {

    let newWords = title.split(" ");
    let newTitle= newWords.map((word) => {
        if(word.length<3){
            return word.toLowerCase();

        }else{
            return word[0].toUpperCase()+word.slice(1).toLowerCase();
        }

    })

    return newTitle.join(" ")
    
};