function decodeString(s: string): string {

     const numStack: number[] = [];
  const strStack: string[] = [];
  let currentStr = '';
  let currentNum = 0;

  for (const char of s) {
    if (!isNaN(Number(char))) {
      // Build multi-digit numbers
      currentNum = currentNum * 10 + Number(char);
    } else if (char === '[') {
      // Push current state and reset
      numStack.push(currentNum);
      strStack.push(currentStr);
      currentNum = 0;
      currentStr = '';
    } else if (char === ']') {
      // Pop and repeat
      const repeatTimes = numStack.pop()!;
      const prevStr = strStack.pop()!;
      currentStr = prevStr + currentStr.repeat(repeatTimes);
    } else {
      // Regular character
      currentStr += char;
    }
  }

  return currentStr;
    
};