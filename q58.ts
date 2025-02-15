function lengthOfLastWord(s: string): number {
    let iterator = s.length-1;
    let charFound : { charsWentThrough: number, found: boolean } = 
    { charsWentThrough: 0, found: false };
    while( true ){
        //console.log( s.charCodeAt(iterator) );
        if( s.charCodeAt(iterator--) > 64 ){ charFound.found = true }
        else if( !charFound.found ){ charFound.charsWentThrough++; } 

        if( (s[iterator] === ' ') && charFound.found){
            //console.log( s.length-1 , iterator , charFound.charsWentThrough );
            return s.length-1 - iterator - charFound.charsWentThrough
        }
        if( iterator < 0 ){
            if(  s.charCodeAt(0) > 64 ){
                return s.trimEnd().length;
            }
            return
        }

    }
};
