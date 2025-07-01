/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {

     const n = nums.length;
    k = k % n;

    const reverse = (start: number, end: number): void => {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    };

    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n - 1);
    
};