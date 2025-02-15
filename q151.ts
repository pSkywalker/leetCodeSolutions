function reverseWords(s: string): string {
    //return s.trim().split(' ').filter((word)=>{return word != ''}).reverse().join(' ');
    let s2 = '';
    let word = '';
    for( let x = s.length-1; x > -1; x-- ){
        if( s[x] != ' ' ){ 
            word += s[x];
        }
        if( x === 0 ){ 
            for( let y = word.length-1; y > -1; y-- ){
                s2+=word[y];
            }
         }
        else if( s[x-1] && s[x] == ' ' && s[x-1] != ' ' ){ 
            for( let y = word.length-1; y > -1; y-- ){
                s2+=word[y];
            }
            word = '';
            s2+=' ';
        }
    }
    //return (s2[0] === ' ') ? s2.slice(1,s2.length) : s2;
    return s2.trim();
};
