var isPalindrome = function(s) {
    const filterNonAlphabet = (str) => {
        return str.replace(/[^0-9a-zA-Z]/g, '');
    };

    s = s.trim();

    s = filterNonAlphabet(s);

    s = s.toLowerCase();

    let rev_s = s.split('').reverse().join('');

    return rev_s === s;
};

console.log(isPalindrome("race car"))