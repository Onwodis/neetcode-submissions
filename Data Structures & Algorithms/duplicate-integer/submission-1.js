class Solution {

    hasDuplicate(nums) {
        const seen = new Set()
        for (const num of nums){
          if(seen.has(num)){
            return true
          }
          seen.add(num)
        }
        return false
    }

}

const res = new Solution()
const test = [1,2,5,5,3,4,6]
console.log("the answer is "+ res.hasDuplicate(test))