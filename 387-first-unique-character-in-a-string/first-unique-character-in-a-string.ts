function firstUniqChar(s: string): number {

     const charCounts = new Map<string, number>();

    // 1. First pass: Build the frequency map.
    // Iterate through the string to count occurrences of each character.
    for (const char of s) {
        const count = charCounts.get(char) || 0;
        charCounts.set(char, count + 1);
    }

    // 2. Second pass: Find the first unique character.
    // Iterate through the string again to check the counts.
    for (let i = 0; i < s.length; i++) {
        // If a character's count is 1, it's the first unique one.
        if (charCounts.get(s[i]) === 1) {
            return i; // Return its index immediately.
        }
    }

    // 3. If the loop completes, no unique character was found.
    return -1;
    
};