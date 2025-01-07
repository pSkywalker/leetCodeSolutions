
class ZigZagMatrix{ 
    string : string;
    numbRows: number;
    currentChar : number = 0;
    currentArray : number = 0;
    previousZigZag: number;

    zigZag = [];

    zigZagString: string;

    constructor( string: string, numbRows: number ){ 
        this.string = string;
        this.numbRows = numbRows;

        for( let x = 0; x < numbRows; x++ ){ 
            this.zigZag.push([]);    
        }

        this.previousZigZag = this.numbRows - 2;
    }
    compileLetters() : void{ 
        if( this.numbRows > 1 ){ 
            this.zigZagString = this.zigZag.flat().join("").trim();
        }
    }
    addLetters(){ 
        if( this.numbRows === 1 ){ 
            this.zigZagString = this.string;
            console.log( this.zigZagString , this.string );
        }
        else{ 
            while( this.currentChar <= this.string.length - 1 ){
                
                for( let x = 0; x < this.numbRows; x++ ){ 
                    //console.log( this.currentArray, this.zigZag );
                    this.zigZag[ this.currentArray ].push( this.string[this.currentChar] );
                    this.currentArray++;
                    this.currentChar++;
                    //console.log( this.currentArray,this.zigZag );
                }
                this.currentArray--;
                for( let x = this.numbRows - 1; x > -1; x-- ){ 
                    //console.log( this.currentArray , this.previousZigZag );
                    if( x != this.previousZigZag || this.currentArray === 0 ) { 
                        //console.log( this.currentArray );
                        this.zigZag[ this.currentArray ].push( "" );
                        this.currentArray--; 
                    }
                    else{ 
                        if( this.string[this.currentChar] ) {
                            this.zigZag[ this.currentArray ].push( this.string[this.currentChar] );
                        }
                        this.currentChar++; 
                        this.previousZigZag--;
                        this.currentArray--;
                        //x = -1;
                    }
                    //this.currentArray--;
                    //this.previousZigZag--;
                    //console.log( this.zigZag );
                }
                this.currentArray = 0;
                this.previousZigZag = this.numbRows - 2;
            }
        }
    }

}

function convert(s: string, numRows: number): string {
    let zz = new ZigZagMatrix( s , numRows );
    zz.addLetters();
    zz.compileLetters();
    return zz.zigZagString;
};
