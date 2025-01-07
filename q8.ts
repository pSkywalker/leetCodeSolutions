class ATOI { 
    string: string;
    tempString : any;

    numberClinched: boolean;
    previousChar: number;
    currentChar: number;
    nextChar : number;

    sign : string;
    signChanged : boolean;

    numberRegex = /[0-9]/;

    constructor( string : string ){ 
        this.string = string.trim();
        this.tempString = "";
        this.previousChar = -1;
        this.currentChar = 0;
        this.nextChar = 1;
        this.sign = "+";
        this.signChanged = false;
    }

    readNumber(){
            if( 
                isNaN( parseInt( this.string[0]) )  
                && this.string[this.currentChar] != "-"
                && this.string[this.currentChar] != "+"
            ){ 
                this.tempString = "0";
                this.currentChar = this.string.length;
            } 
        while( this.currentChar < this.string.length ){ 
            //console.log( this.string[ this.currentChar ] );
            //console.log( this.string[this.currentChar] );
            //console.log( this.numberClinched ,  this.string[this.currentChar] === "-" , this.string[this.currentChar] === "+")
        /*
            if( this.string[(this.previousChar>-1)?this.previousChar:-1] && ( this.string[this.currentChar] === "-" || this.string[this.currentChar] === "+" ) ){ 
                this.tempString = "0";
                this.currentChar = this.string.length;
                break;
            }
        */
            if( 
                this.string[this.currentChar] === "-" && !this.numberClinched   
            ){ 
                if( ( isNaN(parseInt( this.string[this.previousChar] )) && isNaN( parseInt( this.string[this.nextChar] ) ) ) && this.nextChar < this.string.length  && !this.numberClinched){ 
                    this.tempString = "0";
                    this.currentChar = this.string.length;
                    break;
                }
                if( this.nextChar < this.string.length ){ 
                    if( isNaN(parseInt(this.string[ this.previousChar ])) != false ) {
                        this.sign = "-";
                    }
                }
                this.signChanged = true;
                if( this.string[ this.nextChar] == "+" ){ 
                    this.tempString = 0;
                    this.currentChar = this.string.length;
                    break;
                }
            }
            if( 
                this.string[this.currentChar] === "+"// && !this.numberClinched 
            ){ 
                console.log("__")
                if( ( isNaN(parseInt( this.string[this.previousChar] )) && isNaN( parseInt( this.string[this.nextChar] ) ) ) && this.nextChar < this.string.length && !this.numberClinched ){ 
                    this.tempString = "0";
                    this.currentChar = this.string.length;
                    break;
                }
                if( !this.signChanged ){
                    this.sign = "+";
                    if( this.string[ this.nextChar ] == "-" ){ 
                        this.tempString = 0;
                        this.currentChar = this.string.length;
                        break;
                    }
                }
            }
            /*isNaN(this.string[this.currentChar].match(this.numberRegex)[0]) */
            if( 
            (   isNaN( parseInt( this.string[this.currentChar] ) ) === true 
                && 
                isNaN( parseInt( this.string[this.previousChar] ) ) === false
            ) 
            ||
            (   isNaN( parseInt( this.string[this.currentChar] ) ) === false 
                && 
                isNaN( parseInt( this.string[this.previousChar] ) ) === true
            )
            ||
            isNaN( parseInt( this.string[this.currentChar] ) ) === false 
            ||
            this.numberClinched ){ 
                console.log( this.string[this.currentChar] , 161);
                //console.log(isNaN( parseInt( this.string[this.currentChar] ) ))
                if( isNaN( parseInt( this.string[this.currentChar] ) ) ){ 
                    console.log("++")
                    this.numberClinched === true;
                    this.currentChar = this.string.length; 
                }
                else{ 
                    this.tempString += this.string[this.currentChar];
                    //this.numberClinched =true;
                }
            }
            else{ 
                this.tempString = "0";
            }
            
            console.log( this.tempString , 236);
            this.updateCharManagement("+");
        }
        this.tempString = this.sign + this.tempString;
        this.updateCharManagement( "+" );
    }
    roundingCheck(){ 
        let largestNumber = (2 ** 31)-1;
        let smallestNumber = -(2**31);
        if( parseInt( this.tempString ) > largestNumber ){
            this.tempString = largestNumber
        }
        else if( parseInt( this.tempString ) < smallestNumber ){ 
            this.tempString = smallestNumber;
        }
    }
    spliceString(){ 
        
    }
    updateCharManagement(direction: string){ 
        if( direction == "+" ){ 
            this.previousChar++;
            this.currentChar++;
            this.nextChar++;
        }
        else if("="){ 
            this.previousChar = -1;
            this.currentChar = 0;
            this.nextChar = 1;
        }
        else { 
            this.previousChar--;
            this.currentChar--;
            this.nextChar--;
        }
    }

}


function myAtoi(s: string): number {
    

    let atoi = new ATOI( s );
    atoi.readNumber();
    atoi.roundingCheck();
    return parseInt( atoi.tempString ); 
};


