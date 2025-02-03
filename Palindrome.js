const str = "loop";

const isPalindrome = (str) => {
  const reversedStr = str.split("").reverse().join("");
  if (str === reversedStr) {
    return true;
  }
  return false;
};

console.log(isPalindrome(str));
