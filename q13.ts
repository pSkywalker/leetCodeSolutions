const RomanDictionary = new Map();
RomanDictionary.set( "M",1000 );
RomanDictionary.set( "D",500 );
RomanDictionary.set( "C",100 );
RomanDictionary.set( "L",50 );
RomanDictionary.set( "X",10 );
RomanDictionary.set( "V",5 );
RomanDictionary.set( "I", 1);

const romanArray = [ 'I', 'V', 'X', 'L', 'C', 'D', 'M' ];

class RomanNum{ 
    string : string;
    number: number;

    constructor( string: string){ 
        this.string = string;
        this.number = 0;
    }
    addRomanNum( string : string ){ 
        this.string += string;
    }
    convert(){
        for( let x = 0; x < this.string.length; x++ ){ 
            //console.log(this.string[x] < this.string[x+1], this.string[x] < this.string[x+1] );
            if( RomanDictionary.get( this.string[x] ) < RomanDictionary.get(  this.string[x+1] ) ){ 
                this.number =
                    RomanDictionary.get(  this.string[x+1] )
                    -
                    RomanDictionary.get( this.string[x] )
                ;
                x+=1;
            }
            else{ 
                this.number +=  RomanDictionary.get(this.string[x]), 31 ;
            }
            
            //this.number = RomanDictionary.get(this.string[x]);
        }
    }
}
class RomanToInteger{ 
    string: string;
    translatedNumber: number;
    stringRead : boolean;
    romanNums : RomanNum[];
    iterator : number;
    
    constructor( string : string ){ 
        this.string = string;
        this.translatedNumber = 0;
        this.romanNums = [];
    }

    readNumber(){ 
        this.iterator = 0;

        this.stringRead = false;
        while( this.iterator < this.string.length ){
            let rm = new RomanNum( this.string[this.iterator] ); 
            //console.log( rm  , 44);
            if( 
                romanArray.indexOf(this.string[this.iterator])
                <=
                romanArray.indexOf(this.string[this.iterator+1]) 
             ){ 
                this.readPair( rm );
                //if( this.stringRead ){ 
                //    iterator = this.string.length;
                //}
            }
            //console.log( this.iterator ); 
            //console.log( rm );
            this.iterator++; 
            rm.convert();
            this.romanNums.push( rm );
        }
        console.log( this.romanNums );
    }

    readPair(rm: RomanNum){ 
        let localIterator = this.iterator;
        while( localIterator < this.string.length ){
            if( 
                romanArray.indexOf(this.string[ localIterator ])
                <=
                romanArray.indexOf( this.string[ localIterator+1 ] )
             ){ 
               rm.addRomanNum( this.string[localIterator + 1] );
                this.iterator = localIterator + 1;
            }
            else{
                localIterator = this.string.length;
            }
            localIterator++;
        }

    }

    translateRomanToInt(){ 
        for( let x = 0; x < this.romanNums.length; x++ ){ 
            this.translatedNumber += this.romanNums[x].number;
        }
    }
}

function romanToInt(s: string): number {
    let rToI = new RomanToInteger( s );
    rToI.readNumber();
    rToI.translateRomanToInt();
    return rToI.translatedNumber; 
};
