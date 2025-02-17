class DNASeq{ 
    public letters : Map< string, 0|1 >;
    public dups : string[];
    constructor( s : string ){ 
        this.letters = new Map();
        this.dups = [];
        let start = 0;
        
        while(start + 10 < s.length+1) { 
            let l = '';
            for( let x = start; x < start + 10; x++ ){
                l += s[x];
            }
            if( !this.letters.get( l ) ){ 
                this.letters.set( l, 1 );
            }
            else{
		if( this.dups.includes( l ) === false  ){ 
		    this.dups.push( l );
		}       
            }
            start++;
        }
    }
}
function findRepeatedDnaSequences(s: string): string[] {
    let dna = new DNASeq( s );
    return dna.dups;
}; 
