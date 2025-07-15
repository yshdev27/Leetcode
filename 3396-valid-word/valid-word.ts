function isValid(word: string): boolean {
    
     if (word.length < 3) return false;

  const isValidChar = /^[a-zA-Z0-9]+$/;
  if (!isValidChar.test(word)) return false;

  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let hasVowel = false;
  let hasConsonant = false;

  for (const ch of word.toLowerCase()) {
    if (/[a-z]/.test(ch)) {
      if (vowels.has(ch)) {
        hasVowel = true;
      } else {
        hasConsonant = true;
      }
    }
  }

  return hasVowel && hasConsonant;
};