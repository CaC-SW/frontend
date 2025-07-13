import { CodingProblem } from '../types/coding'

// Mock data storage - in a real app, this would be a database or API
const codingProblems: CodingProblem[] = [
  {
    id: '1',
    title: 'Two Sum',
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
    difficulty: 'easy',
    tags: ['Array', 'Hash Table'],
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]'
      },
      {
        input: 'nums = [3,3], target = 6',
        output: '[0,1]'
      }
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.'
    ],
    testCases: [
      {
        input: '[2,7,11,15], 9',
        output: '[0,1]'
      },
      {
        input: '[3,2,4], 6',
        output: '[1,2]'
      },
      {
        input: '[3,3], 6',
        output: '[0,1]'
      }
    ],
    starterCode: {
      javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Your code here
};`,
      python: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Your code here
        pass`
    },
    acceptance: 49.5,
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    title: 'Reverse Integer',
    description: `Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).`,
    difficulty: 'medium',
    tags: ['Math'],
    examples: [
      {
        input: 'x = 123',
        output: '321'
      },
      {
        input: 'x = -123',
        output: '-321'
      },
      {
        input: 'x = 120',
        output: '21'
      }
    ],
    constraints: [
      '-2^31 <= x <= 2^31 - 1'
    ],
    testCases: [
      {
        input: '123',
        output: '321'
      },
      {
        input: '-123',
        output: '-321'
      },
      {
        input: '120',
        output: '21'
      },
      {
        input: '0',
        output: '0'
      }
    ],
    starterCode: {
      javascript: `/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // Your code here
};`,
      python: `class Solution:
    def reverse(self, x: int) -> int:
        # Your code here
        pass`
    },
    acceptance: 27.3,
    createdAt: '2024-01-02T00:00:00Z'
  },
  {
    id: '3',
    title: 'Valid Parentheses',
    description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.`,
    difficulty: 'easy',
    tags: ['String', 'Stack'],
    examples: [
      {
        input: 's = "()"',
        output: 'true'
      },
      {
        input: 's = "()[]{}"',
        output: 'true'
      },
      {
        input: 's = "(]"',
        output: 'false'
      }
    ],
    constraints: [
      '1 <= s.length <= 10^4',
      's consists of parentheses only \'()[]{}\''
    ],
    testCases: [
      {
        input: '"()"',
        output: 'true'
      },
      {
        input: '"()[]{}"',
        output: 'true'
      },
      {
        input: '"(]"',
        output: 'false'
      },
      {
        input: '"([)]"',
        output: 'false'
      },
      {
        input: '"{[]}"',
        output: 'true'
      }
    ],
    starterCode: {
      javascript: `/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Your code here
};`,
      python: `class Solution:
    def isValid(self, s: str) -> bool:
        # Your code here
        pass`
    },
    acceptance: 40.1,
    createdAt: '2024-01-03T00:00:00Z'
  },
  {
    id: '4',
    title: 'Merge Two Sorted Lists',
    description: `You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.`,
    difficulty: 'easy',
    tags: ['Linked List', 'Recursion'],
    examples: [
      {
        input: 'list1 = [1,2,4], list2 = [1,3,4]',
        output: '[1,1,2,3,4,4]'
      },
      {
        input: 'list1 = [], list2 = []',
        output: '[]'
      },
      {
        input: 'list1 = [], list2 = [0]',
        output: '[0]'
      }
    ],
    constraints: [
      'The number of nodes in both lists is in the range [0, 50]',
      '-100 <= Node.val <= 100',
      'Both list1 and list2 are sorted in non-decreasing order'
    ],
    testCases: [
      {
        input: '[1,2,4], [1,3,4]',
        output: '[1,1,2,3,4,4]'
      },
      {
        input: '[], []',
        output: '[]'
      },
      {
        input: '[], [0]',
        output: '[0]'
      }
    ],
    starterCode: {
      javascript: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Your code here
};`,
      python: `# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        # Your code here
        pass`
    },
    acceptance: 61.8,
    createdAt: '2024-01-04T00:00:00Z'
  },
  {
    id: '5',
    title: 'Maximum Subarray',
    description: `Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.`,
    difficulty: 'medium',
    tags: ['Array', 'Divide and Conquer', 'Dynamic Programming'],
    examples: [
      {
        input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
        output: '6',
        explanation: '[4,-1,2,1] has the largest sum = 6.'
      },
      {
        input: 'nums = [1]',
        output: '1'
      },
      {
        input: 'nums = [5,4,-1,7,8]',
        output: '23'
      }
    ],
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^4 <= nums[i] <= 10^4'
    ],
    testCases: [
      {
        input: '[-2,1,-3,4,-1,2,1,-5,4]',
        output: '6'
      },
      {
        input: '[1]',
        output: '1'
      },
      {
        input: '[5,4,-1,7,8]',
        output: '23'
      }
    ],
    starterCode: {
      javascript: `/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // Your code here
};`,
      python: `class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        # Your code here
        pass`
    },
    acceptance: 49.7,
    createdAt: '2024-01-05T00:00:00Z'
  }
]

export function getCodingProblems(): CodingProblem[] {
  return codingProblems
}

export function getCodingProblemById(id: string): CodingProblem | null {
  return codingProblems.find(problem => problem.id === id) || null
}

export function addCodingProblem(problem: CodingProblem): void {
  codingProblems.push(problem)
}

export function updateCodingProblem(id: string, updatedProblem: Partial<CodingProblem>): boolean {
  const index = codingProblems.findIndex(problem => problem.id === id)
  if (index !== -1) {
    codingProblems[index] = { ...codingProblems[index], ...updatedProblem }
    return true
  }
  return false
}

export function deleteCodingProblem(id: string): boolean {
  const index = codingProblems.findIndex(problem => problem.id === id)
  if (index !== -1) {
    codingProblems.splice(index, 1)
    return true
  }
  return false
}