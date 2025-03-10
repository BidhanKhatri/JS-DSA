//create a function to find whether two strings are anagram or not
// -> Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// -> like "listen" and "silent" are anagram of each other.

const isAnagram = (str1, str2) => {
  const firstString = str1.split("").sort().join();
  const secondString = str2.split("").sort().join();

  if (firstString === secondString) {
    console.log(`${str1} and ${str2} are anagram`);
  } else {
    console.log(`${str1} and ${str2} are not anagram`);
  }
};

isAnagram("listen", "silent");
