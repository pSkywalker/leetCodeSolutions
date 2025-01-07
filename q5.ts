class Word {
    val: string;
    palindrom:boolean;
    size: number

    constructor( val: string ){
        this.val = val;
        this.size = val.length;
        //console.log(  val.split("").reverse().join("") , val )
    }
    checkPalindrom() : boolean { 
        this.palindrom = ( this.val.split("").reverse().join("") === this.val );
        //console.log( ( this.val.split("").reverse().join("") , this.val ) ); 
        return this.palindrom;
    }
}

class WordBuilder{ 
    string: string;
    startingIndex: number = 0;
    endingIndex: number = 0;

    current : string;

    words : Word[];
    
    constructor(string: string){ 
        this.string = string;
        this.current = this.string[0]
        this.words = [];
    }
    buildInlineWord(){ 
        this.endingIndex++;

        this.current = "";
        for( let x = this.startingIndex; x <= this.endingIndex-1; x++ ){ 
            this.current += this.string[x];
        }
        return this.current;
    }
    nextStartingWord(){ 
        this.current = "";
        this.startingIndex++;
        this.endingIndex = this.startingIndex + 1;
    }
    build() : Word[] { 
        for( let x = 0; x < this.string.length; x++  ){ 
            while( this.endingIndex < this.string.length  ){ 
                //console.log( this.endingIndex , this.string.length - 1) ; 
                let currWord = new Word ( this.buildInlineWord() );
                //console.log(currWord.checkPalindrom(), currWord,this.startingIndex ,this.endingIndex, this.string.length );
                if( currWord.checkPalindrom() ){
                    this.words.push( currWord );
                }
                
            }
            this.nextStartingWord();
        }
        return this.words;
    }

}


function longestPalindrome(s: string): string {

    let wb : WordBuilder = new WordBuilder(s);
    let wordArray : Word[] = wb.build();    

    //console.log( wordArray );
    let longestWord = wordArray.map( ( word ) => { if( word.palindrom ){ return word } } ).sort( (a,b)=> { return b.size - a.size } );
    //console.log( longestWord );
    return longestWord[0].val;


};

