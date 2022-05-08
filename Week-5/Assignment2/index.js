/**
 *
 * @desc: Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
 */
const vowelsCount = (str) => {
  const vowelsMap = new Map();
  for (const char of str) {
    const isVowel = "aeiou".includes(char.toLowerCase());
    if (isVowel) {
      const charCount = vowelsMap.get(char) || 0;
      vowelsMap.set(char, charCount + 1);
    }
  }
  return vowelsMap;
};

console.log(vowelsCount("ruhanui")); // Map(3) { 'u' => 2, 'a' => 1, 'i' => 1 }
