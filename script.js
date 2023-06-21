function palindrome(str) {
    let n = str.length;
    str = str.toLowerCase();
    let start = 0;
    let end = n - 1;
    while (start <= end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
module.exports = palindrome;