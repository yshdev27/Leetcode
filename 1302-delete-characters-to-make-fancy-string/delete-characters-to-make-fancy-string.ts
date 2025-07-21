function makeFancyString(s: string): string {

     // Use an array to build the new string efficiently.
  const resultChars: string[] = [];

  // Iterate over each character of the input string.
  for (const char of s) {
    const len = resultChars.length;

    // The core condition: check if the last two characters in our result
    // are the same as the current character.
    if (len >= 2 && resultChars[len - 1] === char && resultChars[len - 2] === char) {
      // If adding this character would create a triplet, skip it.
      continue;
    } else {
      // Otherwise, it's safe to add the character.
      resultChars.push(char);
    }
  }

  // Join the characters in the array to form the final string.
  return resultChars.join('');
    
};