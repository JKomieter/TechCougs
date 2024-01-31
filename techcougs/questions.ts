export const my_questions = [
    {
      "id": "1",
      "title": "Two Sum",
      "description": "Given an array of integers, find two numbers that add up to a specific target.",
      "examples": [
        {
          "input": "[2, 7, 11, 15]",
          "output": "[0, 1]",
          "explanation": "2 + 7 = 9"
        },
        {
          "input": "[3, 2, 4]",
          "output": "[1, 2]",
          "explanation": "2 + 4 = 6"
        }
      ],
      "expected": "[1, 2]",
      "boilerplate": "def two_sum(nums: List[int], target: int) -> List[int]:\n    # Your code here\n    return []\n\nprint(two_sum([2, 7, 11, 15], 9))"
    },
    {
      "id": "6",
      "title": "Roman to Integer",
      "description": "Given a roman numeral, convert it to an integer.",
      "examples": [
        {
          "input": "III",
          "output": "3",
          "explanation": "III is 3."
        },
        {
          "input": "LVIII",
          "output": "58",
          "explanation": "LVIII is 58."
        }
      ],
      "expected": "58",
      "boilerplate": "def roman_to_int(s: str) -> int:\n    # Your code here\n    return 0\n\nprint(roman_to_int('LVIII'))"
    },
  {
    "id": "134",
    "title": "Can Make Palindrome",
    "description": "Given a string, determine if it can be rearranged to form a palindrome.",
    "examples": [
      {
        "input": "racecar",
        "output": "True",
        "explanation": "racecar is already a palindrome"
      },
      {
        "input": "abcba",
        "output": "True",
        "explanation": "abcba can be rearranged as abaca"
      }
    ],
    "expected": "True",
    "boilerplate": "def can_make_palindrome(s: str) -> bool:\n    # Your code here\n    return False\n\nprint(can_make_palindrome('racecar'))"
  },
  {
    "id": "11",
    "title": "Container With Most Water",
    "description": "Given a 2D array representing the heights of walls, find the container with the most water it can hold.",
    "examples": [
      {
        "input": "[[1, 1, 5, 4, 3]]",
        "output": "6",
        "explanation": "The container formed by wall heights 1, 5, 4, and 3 holds 6 water units."
      }
    ],
    "expected": "6",
    "boilerplate": "def max_area(height: List[int]) -> int:\n    # Your code here\n    return 0\n\nprint(max_area([1, 1, 5, 4, 3]))"
  },
  {
    "id": "206",
    "title": "Relative Sort Array",
    "description": "Given two integer arrays nums1 and nums2, sort nums1 such that the relative positions of the values in nums2 are preserved.",
    "examples": [
      {
        "input": "nums1: [2, 3, 1, 1, 4], nums2: [2, 1]",
        "output": "[1, 4, 2, 3]",
        "explanation": "The positions of 2 and 1 in nums2 are preserved in nums1."
      }
    ],
    "expected": "[1, 4, 2, 3]",
    "boilerplate": "def relative_sort_array(nums1: List[int], nums2: List[int]) -> List[int]:\n    # Your code here\n    return []\n\nprint(relative_sort_array([2, 3, 1, 1, 4], [2, 1]))"
  },
  {
    "id": "242",
    "title": "Valid Anagram",
    "description": "Given two strings, check if they are anagrams (contain the same letters in a different order).",
    "examples": [
      {
        "input": "{ s: anagram, t: nagaram }",
        "output": "True",
        "explanation": "Both strings have the same letters in different orders."
      },
      {
        "input": "{ s: rat, t: car }",
        "output": "False",
        "explanation": "The strings have different sets of letters."
      }
    ],
    "expected": "True",
    "boilerplate": "def is_anagram(s: str, t: str) -> bool:\n    # Your code here\n    return False\n\nprint(is_anagram('anagram', 'nagaram'))"
  },
  {
    "id": "344",
    "title": "Reverse String",
    "description": "Reverse a given string in-place.",
    "examples": [
      {
        "input": "hello",
        "output": "olleh",
        "explanation": "The reversed string is 'olleh'."
      }
    ],
    "expected": "olleh",
    "boilerplate": "def reverse_string(s: List[str]) -> None:\n    # Your code here\n    return None\n\ns = ['h', 'e', 'l', 'l', 'o']\nreverse_string(s)\nprint(s)"
  },
  {
    "id": "48",
    "title": "Rotate Image",
    "description": "Given a 2D matrix representing an image, rotate it clockwise by 90 degrees in-place.",
    "examples": [
      {
        "input": "[[1, 2, 3], [4, 5, 6], [7, 8, 9]]",
        "output": "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]"
      }
    ],
    "expected": "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]",
    "boilerplate": "def rotate_image(matrix: List[List[int]]) -> None:\n    # Your code here\n    return None\n\nmatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nrotate_image(matrix)\nprint(matrix)"
  },
  {
    "id": "3",
    "title": "Longest Substring Without Repeating Characters",
    "description": "Given a string, find the length of the longest substring without repeating characters.",
    "examples": [
      {
        "input": "abcabcbb",
        "output": "3",
        "explanation": "The longest substring is 'abc'"
      }
    ],
    "expected": "3",
    "boilerplate": "def length_of_longest_substring(s: str) -> int:\n    # Your code here\n    return 0\n\nprint(length_of_longest_substring('abcabcbb'))"
  },
  {
    "id": "162",
    "title": "Find Peak Element",
    "description": "Given a sorted array that is rotated at an unknown pivot point, find the peak element (the element greater than its neighbors).",
    "examples": [
      {
        "input": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]",
        "output": "19",
        "explanation": "The peak element is 19."
      }
    ],
    "expected": "19",
    "boilerplate": "def find_peak_element(nums: List[int]) -> int:\n    # Your code here\n    return 0\n\nprint(find_peak_element([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]))"
  },
  {
    "id": "104",
    "title": "Maximum Depth of Binary Tree",
    "description": "Given a binary tree, find its maximum depth.",
    "examples": [
      {
        "input": "[3, 9, 20, None, None, 15, 7]",
        "output": "3",
        "explanation": "The maximum depth is 3."
      }
    ],
    "expected": "3",
    "boilerplate": "def max_depth(root: TreeNode) -> int:\n    # Your code here\n    return 0\n\nroot = TreeNode(3)\nroot.left = TreeNode(9)\nroot.right = TreeNode(20)\nroot.right.right = TreeNode(7)\nroot.right.left = TreeNode(15)\nprint(max_depth(root))"
  },
  {
    "id": "48",
    "title": "Rotate Image",
    "description": "Given a 2D matrix representing an image, rotate it clockwise by 90 degrees in-place.",
    "examples": [
      {
        "input": "[[1, 2, 3], [4, 5, 6], [7, 8, 9]]",
        "output": "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]"
      }
    ],
    "boilerplate": "def rotate_image(matrix: List[List[int]]) -> None:\n    # Your code here\n    return None\n\nmatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nrotate_image(matrix)\nprint(matrix)"
  },
  {
    "id": "3",
    "title": "Longest Substring Without Repeating Characters",
    "description": "Given a string, find the length of the longest substring without repeating characters.",
    "examples": [
      {
        "input": "abcabcbb",
        "output": "3",
        "explanation": "The longest substring is \"abc\""
      }
    ],
    "boilerplate": "def length_of_longest_substring(s: str) -> int:\n    # Your code here\n    return 0\n\nprint(length_of_longest_substring('abcabcbb'))"
  },
  {
    "id": "162",
    "title": "Find Peak Element",
    "description": "Given a sorted array that is rotated at an unknown pivot point, find the peak element (the element greater than its neighbors).",
    "examples": [
      {
        "input": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]",
        "output": "19",
        "explanation": "The peak element is 19."
      }
    ],
    "boilerplate": "def find_peak_element(nums: List[int]) -> int:\n    # Your code here\n    return 0\n\nprint(find_peak_element([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]))"
  },
  {
    "id": "104",
    "title": "Maximum Depth of Binary Tree",
    "description": "Given a binary tree, find its maximum depth.",
    "examples": [
      {
        "input": "[3, 9, 20, None, None, 15, 7]",
        "output": "3",
        "explanation": "The maximum depth is 3."
      }
    ],
    "boilerplate": "def max_depth(root: TreeNode) -> int:\n    # Your code here\n    return 0\n\nroot = TreeNode(3)\nroot.left = TreeNode(9)\nroot.right = TreeNode(20)\nroot.right.right = TreeNode(7)\nroot.right.left = TreeNode(15)\nprint(max_depth(root))"
  },
  {
    "id": "733",
    "title": "Flood Fill",
    "description": "Given an image represented by an 2D array of colors, fill all pixels connected to a given pixel with a different color.",
    "examples": [
      {
        "input": "[[1, 1, 1], [1, 1, 0], [1, 0, 1]]",
        "target": "(1, 1)",
        "newColor": "2",
        "output": "[[2, 2, 2], [2, 2, 0], [2, 0, 1]]"
      }
    ],
    "boilerplate": "def flood_fill(image: List[List[int]], sr: int, sc: int, newColor: int) -> None:\n    # Your code here\n    return None\n\nimage = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]\nflood_fill(image, 1, 1, 2)\nprint(image)"
  },
  {
    "id": "155",
    "title": "Min Stack",
    "description": "Design a stack that supports pushing, popping, and retrieving the minimum element in constant time.",
    "examples": [
      {
        "operations": "['push', 5, 'push', 7, 'push', 2, 'min', 'pop', 'top', 'min']",
        "output": "[None, None, None, 2, None, 7, 2]"
      }
    ],
    "boilerplate": "class MinStack:\n    # Your code here\n\ndef main():\n    stack = MinStack()\n    operations = ['push', 5, 'push', 7, 'push', 2, 'min', 'pop', 'top', 'min']\n    for operation in operations:\n        if isinstance(operation, int):\n            stack.push(operation)\n        else:\n            if operation == 'pop':\n                stack.pop()\n            elif operation == 'top':\n                print(stack.top())\n            elif operation == 'min':\n                print(stack.get_min())\n\nif __name__ == '__main__':\n    main()"
  },
  {
    "id": "377",
    "title": "Combination Sum IV",
    "description": "Given an array of distinct integers and a target integer, return the number of ways to reach the target sum by adding up elements from the array.",
    "examples": [
      {
        "input": "{ nums: [1, 2, 3], target: 4 }",
        "output": "7"
      }
    ],
    "boilerplate": "def combination_sum_iv(nums: List[int], target: int) -> int:\n    # Your code here\n    return 0\n\nprint(combination_sum_iv([1, 2, 3], 4))"
  },
  {
    "id": "347",
    "title": "Top K Frequent Elements",
    "description": "Given an array of integers, return the top k most frequent elements.",
    "examples": [
      {
        "input": "{ nums: [1, 1, 1, 2, 2, 3], k: 2 }",
        "output": "[1, 2]"
      }
    ],
    "boilerplate": "def top_k_frequent(nums: List[int], k: int) -> List[int]:\n    # Your code here\n    return []\n\nprint(top_k_frequent([1, 1, 1, 2, 2, 3], 2))"
  }
]