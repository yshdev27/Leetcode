function removeDuplicateLetters(s: string): string {

  const freq: Record<string, number> = {};
  const seen = new Set<string>();
  const stack: string[] = [];

  // Count frequency of each character
  for (const char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (const char of s) {
    freq[char]--;

    if (seen.has(char)) continue;

    // Maintain lexicographical order
    while (
      stack.length > 0 &&
      char < stack[stack.length - 1] &&
      freq[stack[stack.length - 1]] > 0
    ) {
      seen.delete(stack.pop()!);
    }

    stack.push(char);
    seen.add(char);
  }

  return stack.join('');
    
};