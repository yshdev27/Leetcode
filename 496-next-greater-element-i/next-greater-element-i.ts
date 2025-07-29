function nextGreaterElement(nums1: number[], nums2: number[]): number[] {


 // Map to store {element -> nextGreaterElement}
  const nextGreaterMap = new Map<number, number>();
  
  // Stack to keep track of elements for which we seek a greater element
  const stack: number[] = [];

  // Iterate through nums2 to populate the map
  for (const num of nums2) {
    // While stack has elements and the current number is greater than the stack's top element
    while (stack.length > 0 && num > stack[stack.length - 1]) {
      // The current num is the next greater element for the stack's top element
      const top = stack.pop()!;
      nextGreaterMap.set(top, num);
    }
    // Push the current number onto the stack
    stack.push(num);
  }

  // Create the result by mapping through nums1
  const result = nums1.map(num => 
    // Get the value from the map, or default to -1 if not found
    nextGreaterMap.get(num) ?? -1
  );

  return result;
    
};