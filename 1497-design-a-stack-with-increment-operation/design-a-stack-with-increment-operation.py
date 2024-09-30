class CustomStack:
    def __init__(self, maxSize: int):
        self.maxSize = maxSize
        self.stack = []
        self.d = {} # update via inc(), used by pop(). Now O(1) time.
        
    def push(self, x: int) -> None:
        if len(self.stack) < self.maxSize:
            self.stack.append(x)

    def pop(self) -> int:
        # Old solution:
        # print("pop", self.stack, self.d)
        # if len(self.stack) > 0:
        #     return self.stack.pop()
        # return -1
        if len(self.stack) == 0:
            return -1
        
        k = len(self.stack) - 1
        val = 0
        if k in self.d:
            val += self.d[k]
            self.d[k - 1] = self.d.get(k - 1, 0) + self.d[k]
            del self.d[k]

        return val + self.stack.pop()
        
    def increment(self, k: int, val: int) -> None:
        # Old Solution:
        # for i in range(min(k, len(self.stack))):
        #     self.stack[i] += val

        # Now O(1) time
        k = min(k, len(self.stack))
        self.d[k - 1] = self.d.get(k - 1, 0) + val

# Your CustomStack object will be instantiated and called as such:
# obj = CustomStack(maxSize)
# obj.push(x)
# param_2 = obj.pop()
# obj.increment(k,val)