function isAnagram(s: string, t: string): boolean {
    let total_s = []; 
    let total_t = [];
    for( let x = 0; x < s.length; x++ ){
        total_s.push(s.codePointAt(x)); 
    }
    for( let x = 0; x < t.length; x++ ){
        total_t.push(t.codePointAt(x));
    }

    total_s.sort( (a,b)=>{ return a-b } );
    total_t.sort( (a,b)=> { return a-b} )
    if( total_s.join('') === total_t.join('') ){ 
        return true;
    }
    return false;
};
