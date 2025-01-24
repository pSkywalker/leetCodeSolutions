class LetterMappingsToPhone{ 
    letters: string[][];

    letter : string;

    letterIndex: number;

    constructor(){ 
        this.letters = [[]];
        this.letter = "a";

        this.letterIndex = 0;        
    }

    build(){ 
        let currentPhoneNumberMapping = 0; 
        for( this.letterIndex = 0; this.letterIndex < 26; this.letterIndex++ ){ 
            //console.log(this.letterIndex);
            if( currentPhoneNumberMapping === 5  || currentPhoneNumberMapping === 7){ 
                this.buildCharToNumber( 4 );
            }
            else{ 
                this.buildCharToNumber( 3 );
            }
            currentPhoneNumberMapping++;
        }
    }

    nextChar(){ 
        this.letter = String.fromCharCode(this.letter.charCodeAt(0) + 1); 
    }

    buildCharToNumber( mappingSize : number ){ 
        let iterator = 0;
        let trio = [];
        while(iterator < mappingSize){
            trio.push( this.letter ); 
            this.nextChar();
            iterator++; 
        }
        this.letters.push( trio );
        this.letterIndex += iterator-1;
    }


}

class LetterGroup{ 
    phoneNumber: number;
    amountOfChars: number;
    currentComparableChar : number[];
    constructor( phoneNumber: number, amountOfChars: number ){ 
        this.phoneNumber = phoneNumber;
        this.amountOfChars = amountOfChars;
        this.currentComparableChar = [0];
    } 
    isCurrentComparableComplete(){ 
        if( this.currentComparableChar[0] <= this.amountOfChars ){ 
            return false;
        }
        return true;
    }
    returnChar(){ 
        return [ this.phoneNumber, this.currentComparableChar[0] ];
    }
    updateComparable(direction: string){
        if( direction == "+" ){ 
            this.currentComparableChar[0]++;
        }
        else { 
            this.currentComparableChar[0]--;
        }
        
    }

}

abstract class MapBasedWordCreator{ 
    public static createMappedPairs( map: string[][], key: string ) : string[]{ 
        if( key == "" ){ 
            return [];
        }
        let pair = [];
        if( key.length === 1 ){
            let mappedArray = map[ parseInt(key) - 1 ];
            console.log( mappedArray );
            for(let x = 0 ; x < map[ parseInt(key) - 1 ].length; x++ ){
                pair.push( map[ parseInt(key) - 1 ][x] );
            }
            return pair;
        }

        let keyArray =  key.split("") ;
        let arraysToGrabFrom = [];

        for( let x = 0; x < keyArray.length; x++ ){ 
            console.log( parseInt(keyArray[x]) -1 , map[parseInt(keyArray[x])-1].length, 76 ) ;
            arraysToGrabFrom.push( new LetterGroup( parseInt(keyArray[x]), map[parseInt(keyArray[x])-1].length - 1) );
        }
        console.log( arraysToGrabFrom, 63 )
        
        /*
        let iterators = [];
        for( let x = 0; x < key.length; x++ ){ 
            //console.log( map[parseInt(key[x])-1] , map[parseInt(key[x])-1].length );
            iterators.push( map[parseInt(key[x])-1].length -1 );
        } 
        console.log( iterators );
        */
        
        let base       = [];
        let comparable = [];
        for( let x =  0; x < arraysToGrabFrom.length; x++ ){ 
            base.push( arraysToGrabFrom[x].amountOfChars );
            comparable.push( arraysToGrabFrom[x].currentComparableChar );
        }
        
        console.log( base , comparable );      
/*
        console.log( arraysToGrabFrom );
        console.log( comparable );
        comparable[0][0]++;
        comparable[0][0]++;
        comparable[0][0]++;
        console.log( arraysToGrabFrom[0].isCurrentComparableComplete() );
        console.log( comparable );
*/
        
        let iterator = arraysToGrabFrom.length - 1 ;
        while( !arraysToGrabFrom[0].isCurrentComparableComplete() ){ 
            comparable[ iterator ][0] = 0;
            for( let x = 0; x <= base[ iterator ]; x++ ){ 
                console.log( comparable );
                comparable[ iterator ][0]++;
            }
            let updateable = MapBasedWordCreator.findComplete( base, comparable );
            //console.log( comparable );
            //console.log( updateable , 139);
            if( updateable != undefined ){ 
                comparable[ updateable ][0]++;
            }
            else{ 
                comparable[ 0 ][0]++;
            }
            //comparable[updateable][0]++;
        }
        

        /*
        let iterator = iterators.length - 1 ;

        let singlePair = "";
        for( let x = 0; x < comparable.length; x++ ){ 
            singlePair += map[arraysToGrabFrom[x].phoneNumber][comparable[x]];
            console.log( map[x+1][comparable[x]] );
        }
        pair.push( singlePair );
        while( iterators[0] != comparable[0] ){ 
            //console.log( comparable, iterator );
            comparable[ iterator ] = 0;
            
            //console.log( iterators[ iterators.length-1 ] );
            for( let x = 0; x < iterators[ iterators.length-1 ] ; x++ ){ 
                console.log( iterators , comparable, iterators[0] != comparable[0] , 99)
                comparable[ iterator ]++;  
                let singlePair = "";
                for( let x = 0; x < comparable.length; x++ ){ 
                    singlePair += map[arraysToGrabFrom[x].phoneNumber][comparable[x]];
                    console.log( map[arraysToGrabFrom[x].phoneNumber][comparable[x]]  , 110);
                }
                pair.push( singlePair );
                console.log( iterators , comparable, iterators[0] != comparable[0] , 99)
            }
            let updatable = MapBasedWordCreator.findComplete( iterators, comparable );
            
            comparable[ updatable ]++;
            singlePair = "";
            
            //console.log( iterators , comparable, iterators[0] != comparable[0] , 92) 
        }
        */
        console.log( pair );
        return pair;
    }

    public static findComplete( complete: number[], completing: number[][] ): number{ 
        for( let x = completing.length-2; x > -1; x-- ){
            console.log( complete[x] , completing[x][0])
            if( complete[x] != completing[x][0] ){ 
                if(x + 1 != completing.length -1 ){ 
                    for( let y = x+1; y < complete.length; y++ ){ 
                        completing[y][0] = 0
                    }
                }
                return x;
            }
            console.log(x , "x");
        }
        /*for( let x = completing.length-2; x > -1; x-- ){ 
            console.log( complete[x] , completing[x][0])
            if( complete[x] != completing[x][0] ){ 
                if(x + 1 != completing.length -1 ){ 
                    completing[x+1][0] = 0
                }
                console.log( x, "x" );
                return x;
            }
            else{ 
               return x - 1;
            }
        }
        */
    } 

}

function letterCombinations(digits: string): string[] {
    let lm = new LetterMappingsToPhone();
    lm.build();

    return MapBasedWordCreator.createMappedPairs( lm.letters, digits );
};

/*
        for( let x = 0 ; x < arraysToGrabFrom[0].length; x++ ){
            console.log( arraysToGrabFrom[0][x] );
            for( let y = 1; y < arraysToGrabFrom.length; y++ ){ 
                console.log( arraysToGrabFrom[y] )
                for( let z = 0; z < arraysToGrabFrom[y].length; z++ ){
                    if( key.length === 3 ){ 
                        let current = arraysToGrabFrom[0][x]+arraysToGrabFrom[y][z];
                        console.log( y, z, 86 );
                        
                        current+= arraysToGrabFrom[z+1][z]
                        
                        pair.push( current );
                    }
                    else if( key.length === 4 ){ 
                        let current = arraysToGrabFrom[0][x]+arraysToGrabFrom[y][z];
                    }
                    else{ 
                        pair.push( arraysToGrabFrom[0][x]+arraysToGrabFrom[y][z] );
                    }
                 }
            }
        }
        */

/*
let pairs : string[] = [];
        let keyArray =  key.split("") ;
        let amountOfRuns = 0;
        console.log( keyArray );
        if(keyArray.length > 0) { 
            console.log( map[ parseInt( keyArray[0] ) - 1  ] );
            for( let x = 0; x < map[ parseInt( keyArray[0] ) - 1  ].length; x++ ){
                let currentMapping = "";
                console.log( map[1][x] );
                //console.log( currentMapping );
                let iterator = 0;
                //console.log(map[keyArray[x]],  map[keyArray[x]].length );
                console.log( iterator , keyArray[x] );
                while( iterator < parseInt(keyArray[x]) ){
                    //console.log( x , x + 2 )
                    currentMapping += map[1][x] + map[parseInt( keyArray[x] ) - amountOfRuns ][iterator];
                    pairs.push( currentMapping );
                    currentMapping = "";
                    iterator++;
                }   
                amountOfRuns++;
            }
        }    
        console.log( pairs );
*/
