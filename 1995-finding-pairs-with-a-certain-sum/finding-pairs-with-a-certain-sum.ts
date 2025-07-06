class FindSumPairs {

    private nums1: number[];
    private nums2: number[];
    private freqMap: Map<number, number>;

    constructor(nums1: number[], nums2: number[]) {

        this.nums1 = nums1;
        this.nums2 = nums2;
        this.freqMap = new Map();

        for (let num of nums2) {
            this.freqMap.set(num, (this.freqMap.get(num) || 0) + 1);
        }
        
    }

    add(index: number, val: number): void {

        const oldVal = this.nums2[index];
        const newVal = oldVal + val;

        this.nums2[index] = newVal;

        this.freqMap.set(oldVal, this.freqMap.get(oldVal)! - 1);
        if (this.freqMap.get(oldVal) === 0) {
            this.freqMap.delete(oldVal);
        }

        this.freqMap.set(newVal, (this.freqMap.get(newVal) || 0) + 1);

    }

    count(tot: number): number {

        let result = 0;

        for (let num of this.nums1) {
            const complement = tot - num;
            if (this.freqMap.has(complement)) {
                result += this.freqMap.get(complement)!;
            }
        }

        return result;
        
    }
}

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */