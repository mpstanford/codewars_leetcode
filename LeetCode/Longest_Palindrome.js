var longestPalindrome = function(s) {
  var size = s.length;

  while (size > 0) {
    for (var start = 0; start <= s.length - size; start++) {
      var substring = s.substring(start, start + size);
      if (isPalindrome(substring)) {
        return substring;
      }
    }
    size--;
  }
};

var isPalindrome = function(string) {
  for (var i = 0; i < Math.ceil(string.length/2); i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
  // cleaner but higher time complexity: return string === string.split('').reverse().join('');
}