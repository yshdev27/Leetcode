function countHillValley(nums: number[]): number {

    let hillValleyCount = 0;
    
    // Step 1: Create a new array without consecutive duplicates.
    // This simplifies the problem by treating plateaus (e.g., [3, 3, 3]) as a single number.
    const uniqueConsecutive: number[] = [];
    if (nums.length > 0) {
        uniqueConsecutive.push(nums[0]);
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] !== nums[i - 1]) {
                uniqueConsecutive.push(nums[i]);
            }
        }
    }

    // Step 2: Iterate through the simplified array to find hills and valleys.
    // We only need to check elements from the second to the second-to-last,
    // as the endpoints can't be hills or valleys.
    for (let i = 1; i < uniqueConsecutive.length - 1; i++) {
        const leftNeighbor = uniqueConsecutive[i - 1];
        const currentElement = uniqueConsecutive[i];
        const rightNeighbor = uniqueConsecutive[i + 1];

        // Check for a hill: current element is greater than both neighbors.
        const isHill = leftNeighbor < currentElement && rightNeighbor < currentElement;

        // Check for a valley: current element is smaller than both neighbors.
        const isValley = leftNeighbor > currentElement && rightNeighbor > currentElement;

        if (isHill || isValley) {
            hillValleyCount++;
        }
    }

    return hillValleyCount;
    
};