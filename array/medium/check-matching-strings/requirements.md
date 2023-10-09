A search engine tries to suggest words for probable misspelled words by word matching. Two strings a and b are said to be matching if a can be converted to b by applying the following operations any number of times.

Before starting the operations, choose an integer k > 1.

Two types of operations on string a are defined:
- Type 1: Select any index i (1 ≤ i < length(a)) and swap(a[i], a[i+1]).
- Type 2: Select a substring of length k where all characters are the same. Increase each character to its alphabetically next character, e.g. 'aa' → 'bb '. 
  - Note: A substring of 'z' cannot be incremented.
 

Given two arrays of strings words1 and words2 containing n strings each, determine if the strings words1[i] and words2[i] are matching. Return an array of n integers, where the ith integer is 1 if words1[i] and words2[i] are matching, and 0 otherwise.

**Note**: The operations are only applied only to words1[i]. 



## Example
Consider words1 = ["acbcdd", "abc","abcde"], words2 = ["abeded", "aab","ab"].

For i = 0, a = "acbcdd", b = "abeded". Consider k = 2 and 1-based indexing.

- Apply the 1st operation at index 2, then a = "abccdd".
- Apply 2nd operation at index 3 twice, then a = "abeedd".
- Apply 1st operation at index 4, then a = "abeded" which is equal to b.

The two strings are matching. 

For i = 1, a = "abc", b = "aab". It is impossible to convert a to b.

For i = 2, a = "abcde", b = "ab". It is impossible to convert a to b.


The final answer is [1, 0, 0].

         
## Function Description 
Complete the function checkMatchingStrings in the editor below.

checkMatchingStrings has the following parameters:
- string words1[n]: the first set of strings on which the operations are performed
- string words2[n]: the second set of strings, the target strings

 

## Returns
int[n]: the ith element is 1 if the strings words1[i] and words2[i] are matching strings, and 0 otherwise
 

## Constraints
- 1 ≤ n ≤ 100
- 1 ≤ length(words1[i]) ≤ 1000
- 1 ≤ length(words2[i]) ≤ 1000
- words1[i] and words2[i] consist of lowercase English characters only.