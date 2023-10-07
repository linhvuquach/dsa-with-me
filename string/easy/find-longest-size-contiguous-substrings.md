# Instructions
The given code snippet should return the length of the longest substring containing only '1'. However, the given code is not working as per the requirements. Your task is to resolve the bugs in the code.  

The function ReturnSubstringCount takes a binary string s. It returns the longest size of contiguous substring containing only ‘1’.

## Example:

Input: 11101110

Output: 3

Input: 110

Output: 2

For this test you’re usingC# SDK 3.1.300

Feel free to add comments in your code explaining your solution.

```c#
using System;
using System.Linq;

namespace TestTaker {
	public static class CustomCode {

	  public static int ReturnSubstringCount( string s ) {
		   var max = 0;
		   var count = 0;
		   for(var i=0; i<s.Length-1; i++)
		   {
			 if(s[i] == 49)
			 {
			   count++;
			 }
			 else
			 {
			   if(count > max)
				  max=count;
			 }
		   }

		return max;
	  }
	}
}
```