abstract class Type { 
    public static isOpenOrClosed(sign: string): string[] { 
        if( 
            sign === "{"
            ||
            sign === "["
            ||
            sign === "("
        ){ 
            return [sign,"open"]
        }
        else { 
            return [sign, "closed"];
        }
    }
    public static isInverted( sign:string ){ 
        switch( sign ){ 
            case "]": 
                return "[";
            case ")": 
                return "("
            case "}": 
                return "{"
            default :
                return ""
        }
    }
    
    public static isValid(s: string): boolean {
        console.log(Type.isInverted(s[0]),Type.isInverted( s[0] ));
        if( s.length === 1 || Type.isInverted(s[0]) != "" ){ 
            return false;
        }
        let stringHasClosingTag = false;
        let char = [ s[0] ];
        for( let x = 1; x < s.length; x++ ){ 
            if( Type.isOpenOrClosed(s[x])[1] === "open" ){ 
                char.push( s[x] );
            }
            else {
                stringHasClosingTag = true;
                if( Type.isInverted(s[x]) != char[char.length-1]  ){ 
                    return false;
                }
                else{ 
                    char.splice( char.length-1, 1 );
                }
            }
        }
        return (stringHasClosingTag && char.length === 0) ? true : false;
    }
}

function genPermutations(n, curr, cnt, res) {

    // Base case: If the current permutation length equals 
    // the input string length, add it to the result
    if (curr.length === n) {
        res.push(curr);
        return;
    }

    // Iterate through each character in the frequency map
    for (let c in cnt) {
        if (cnt[c] === 0) 
            continue;

        // Include the character in the current permutation
        cnt[c]--;

        // Recur to build the next character in the permutation
        genPermutations(n, curr + c, cnt, res);

        // Backtrack: Restore the count
        cnt[c]++;
    }
}

// Function to find all unique permutations of the input string
function findPermutation(s) {

    // Array to store the result
    const res = []; 
    
    // Frequency map to count occurrences of each character
    const cnt = {};

    // Populate the frequency map with the characters of the input string
    for (const c of s) 
        cnt[c] = (cnt[c] || 0) + 1;

    // Generate permutations
    genPermutations(s.length, "", cnt, res);
    return res;
}



function generateParenthesis(n: number): string[] {
    
    let para = '';
    for( let x = 0 ; x < n; x++ ){
        para+='(';
    }
    for(let x = 0; x < n; x++){
        para+=')';
    }
    let perms =  findPermutation( para ) ;
   // perms = [ ... new Set(perms.map( (perm) => {
    //    return perm.join('')
    //})) ];
    return perms.filter( (perm) => { return Type.isValid( perm ) } );
};
