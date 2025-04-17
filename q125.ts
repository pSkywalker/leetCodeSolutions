function isPalindrome(s: string): boolean {
    return s.split("").toString().toLowerCase().trim().replace("_", "").replace(" ", "").replace(/\W/g, '') === s.split("").reverse().toString().toLowerCase().trim().replace("_", "").replace(" ", "").replace(/\W/g, '');
};
