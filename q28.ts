function strStr(haystack: string, needle: string): number {
    let x= 0;
    while(true){
        if(haystack.includes(needle)){
            while(true){
                if( haystack.slice(x,x+needle.length) === needle){
                    return x;
                }
                x++;
            }
        }
        else {
            return -1;
        }
    }
    /*
    let hayStackArray = haystack.split("");
    //let needleArray = needle.split("");


    let val = hayStackArray.map((_, i) => { 
            { 
                if( hayStackArray.slice(i , i + needle.length).join('').includes(needle) ){
                    return i;
                }
            }
        }).sort((a,b)=>{return a-b})[0] ;
    return val != undefined ? val : -1;
    */
    /*
    for( let x = hayStackArray.indexOf(needleArray[0]); x < hayStackArray.length; x++ ) { 
        for( let y = x+1; y <= hayStackArray.length; y++) { 
        
            if( hayStackArray.slice(x,y).join("") === needleArray.join("") ){
                return x;
            }
        }
    }    
    return -1;*/
};

