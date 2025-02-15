class ArraySet { 
    public start: number;
    public end : number;

    constructor(array: number[]){ 
        this.start = array[0];
        this.end   = array[1];
    }
    public toArray() { 
        return [ this.start, this.end ];
    }
}

class SetBuilder{ 
    public intervals: ArraySet[] = [];
    
    constructor(array:number[]){ 
        this.intervals.push( new ArraySet( array ) );
    }

    public addIntervals( array : number[] ){ 
        this.intervals.push( new ArraySet( array ) );
    }
    
    addInterval( array: number[] ){ 
        if( this.intervals[this.intervals.length -1]&& this.intervals[this.intervals.length-1].start >= array[0] ){ 
            this.intervals[ this.intervals.length -1 ].start = array[0];
            array[0] = null;
         }
        if(  this.intervals[this.intervals.length -1]&&this.intervals[this.intervals.length-1].end >= array[0] ){
            if( this.intervals[this.intervals.length-1].end <= array[1] ){
                this.intervals[ this.intervals.length-1].end = array[1]
                array[1] = null;
            }
        }
        else{
            this.intervals.push( new ArraySet( array ) );
        }
    }
}

function insert(intervals: number[][], newInterval: number[]): number[][] {
    intervals.push( newInterval );
    intervals.sort( (a,b) => { return a[0] - b[0] } );
    console.log( intervals );
    let sb = new SetBuilder( intervals[0] );
    //intervals.map( item => { return sb.addIntervals(item) } );
    //console.log( sb.intervals );

    for(let x = 0; x < intervals.length; x++){
        if( x+1 < intervals.length){
            sb.addInterval( intervals[x+1] );
        }
    }
    
    let set = [];
    for(let x = 0; x < sb.intervals.length; x++ ){
        set.push( sb.intervals[x].toArray() );
    }
    return set;
};
	
