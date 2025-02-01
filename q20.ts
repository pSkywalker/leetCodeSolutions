vabstract class Type { 
    public static isOpenOrClosed(sign: string): string[] { 
        if( 
            sign === "{"
            ||
            sign === "["
            ||
            sign === "("
        ){ 
            return [sign,"open"]
        }
        else { 
            return [sign, "closed"];
        }
    }
    public static isInverted( sign:string ){ 
        switch( sign ){ 
            case "]": 
                return "[";
            case ")": 
                return "("
            case "}": 
                return "{"
            default :
                return ""
        }
    }
}
class Set{ 
    type: string;
    startingChar : number;
    endingChar : number;
    constructor( type : string, startingChar: number, endingChar: number  ){ 
        this.type = type;
        this.startingChar = startingChar;
        this.endingChar = endingChar;
    }
}

class SetBuilder{ 
    sets : Set[];
    buildSet( s: string ){ 
        let currentOpen = s[0];
            for( let x = 0; x < s.length; x++ ){
                let _type = Type.isOpenOrClosed( s[x] );
                //console.log( _type, x );
                if( _type[1] == "open" ){ 
                    this.sets.push( new Set( _type[0], x, -1 ) );
                }
                //console.log( sets );
            }
            for( let x = 0; x < s.length; x++ ){ 
            let _type = Type.isOpenOrClosed( s[x] );
            if( _type[1] == "closed" ) {
                for(let y = 0; y < this.sets.length; y++){ 
                    //console.log( sets[y],sets[y].endingChar === -1 );
                    if( this.sets[y].type === Type.isInverted(_type[0]) && this.sets[y].endingChar === -1){ 
                        this.sets[y].endingChar = x;
                        y = this.sets.length;
                    }
                }
            }
        }
    }
}


function isValid(s: string): boolean {
    console.log(Type.isInverted(s[0]),Type.isInverted( s[0] ));
    if( s.length === 1 || Type.isInverted(s[0]) != "" ){ 
        return false;
    }
    let stringHasClosingTag = false;
    let char = [ s[0] ];
    for( let x = 1; x < s.length; x++ ){ 
        if( Type.isOpenOrClosed(s[x])[1] === "open" ){ 
            char.push( s[x] );
        }
        else {
            stringHasClosingTag = true;
            if( Type.isInverted(s[x]) != char[char.length-1]  ){ 
                return false;
            }
            else{ 
                char.splice( char.length-1, 1 );
            }
        }
    }
    return (stringHasClosingTag && char.length === 0) ? true : false;
};

