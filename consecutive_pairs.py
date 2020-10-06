"""
In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3. 
--the last digit has no pair, so we ignore.

Algorithm Analysis

Take the size of the input to be n, then the running time is O(n)

"""

def pairs(arr):
    count = 0

    for index in range(1, len(arr), 2):
        if abs(arr[index] - arr[index-1]) == 1:
            count += 1

    return count
