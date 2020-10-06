# https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/python

# Running Time: O(n), where n is the number of digits in numstr

def narcissistic(number):
    numstr = str(number)
    power = len(numstr)
    _sum = sum([int(dstr) ** power for dstr in numstr])
    return _sum == number

