int CalculateWordScore(string word)
{
        // Function to calculate the numeric value of a single letter
        int LetterValue(char letter)
        {
            letter = char.ToLower(letter); // Convert letter to lowercase for case-insensitivity
            return letter >= 'a' && letter <= 'z' ? letter - 'a' + 1 : -1;
        }

        int score = 0;
        foreach (char c in word)
        {
            int charValue = LetterValue(c);
            if (charValue == -1)
                return -1; // If any character is not an alphabet, return -1
            score += charValue;
        }

        return score;
}