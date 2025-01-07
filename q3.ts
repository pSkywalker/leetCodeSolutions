function lengthOfLongestSubstring(s: string): number {
    let highestValue = 0;
    let string = [];
    let startingValue = 0;
    let dontAdd = false;
    while(startingValue < s.length ){
        if( s.length == 1 ){ 
            return 1;
        }
        if(!dontAdd){ 
            string.push( s[startingValue] );
        }
        //console.log("-->", string, s);
        for( let x =( ( startingValue+1 > s.length ) ? s.length : startingValue + 1 ); x < s.length; x++ ){
            if( string.indexOf(s[x]) == -1 ){
                //console.log(">>>>", string); 
                string.push( s[x] );
                //console.log( s[x], string );
                dontAdd = true;
            }
            else{ 
                startingValue++; 
                if( string.length > highestValue ){ 
                    highestValue = string.length;
                }
                //console.log( string , string.length );
                string = [];
                x = s.length;
                dontAdd = false;
            }
        }
        if( startingValue+1 == s.length ){
            startingValue++
        } 
    }
    return highestValue;
};
