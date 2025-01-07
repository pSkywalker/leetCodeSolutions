class CommonPrefix{ 
    prefix : string;
    
    letters;

    sortedArray : string[][];
    groupedLetters: string[][];
    constructor( strings: string[] ){ 
        this.sortedArray = strings.sort( ( x, y ) => { 
            return x.length - y.length;    
        }).map( (x) => { return x.split("") } );
        
        this.prefix = "";

        this.letters = [];
    }

    extractGroupedLetters(){ 
        let iterator = 0;
        let letterGroup = [];
        //console.log( this.sortedArray );
        while( iterator < this.sortedArray[0].length ){ 
            for( let x = 0; x < this.sortedArray.length; x++ ){ 
                //console.log( iterator, x);
                //if( this.sortedArray[iterator][x] ){ 
                    letterGroup.push( this.sortedArray[x][iterator] );
                //}
            }
            iterator++;
            this.letters.push( letterGroup );   
            letterGroup = [];
        }
        
        
        console.log( this.letters );
        
    }

    findPrefix(){ 
        for( let x = 0; x < this.letters.length; x++ ){ 
            if( this.letters[x].every( (index) => { return index == this.letters[x][0] } ) ) { 
                this.prefix += this.letters[x][0] ;
            }   
            else{ 
                x = this.letters.length;
            }
        }
        
    }

}; 



function longestCommonPrefix(strs: string[]): string {
    

    let prefixFinder = new CommonPrefix( strs );
    prefixFinder.extractGroupedLetters();
    prefixFinder.findPrefix();

    //console.log( prefixFinder.prefix );

    return prefixFinder.prefix;
};
