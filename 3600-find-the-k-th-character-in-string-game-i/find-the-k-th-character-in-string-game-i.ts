function kthCharacter(k: number): string {

      let word = "a";

  while (word.length < k) {
    let next = "";
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      const nextChar = c === 'z' ? 'a' : String.fromCharCode(c.charCodeAt(0) + 1);
      next += nextChar;
    }
    word += next;
  }

  return word[k - 1];
    
};