The Hobbies class contains a set of hobbyists and their respective hobbies. Implement the FindAllHobbyists function that takes a hobby and should return a List containing the names of the people (in any order) that enjoy the hobby.

For example, the following code should display the name 'Chad'.

Hobbies hobbies = new Hobbies();
hobbies.Add("Steve", "Fashion", "Piano", "Reading");
hobbies.Add("Patty", "Drama", "Magic", "Pets");
hobbies.Add("Chad", "Puzzles", "Pets", "Yoga");
        
hobbies.FindAllHobbyists("Yoga").ForEach(item => Console.WriteLine(item));

```c#
using System;
using System.Collections.Generic;

public class Hobbies
{
    private readonly Dictionary<string, string[]> hobbies = new Dictionary<string, string[]>();
    
    public void Add(string hobbyist, params string[] hobbies)
    {
        this.hobbies.Add(hobbyist, hobbies);
    }
    
    public List<string> FindAllHobbyists(string hobby)
    {
      
    }
    
    public static void Main(string[] args)
    {
        Hobbies hobbies = new Hobbies();
        hobbies.Add("Steve", "Fashion", "Piano", "Reading");
        hobbies.Add("Patty", "Drama", "Magic", "Pets");
        hobbies.Add("Chad", "Puzzles", "Pets", "Yoga");

        hobbies.FindAllHobbyists("Yoga").ForEach(item => Console.WriteLine(item));
    }
}
```