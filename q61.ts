class ArraySet{ 
    public arrays: any[][]; 
    public current : number[];
    public initialWidth : number;
    public dublicateFinder : any[];
    public currentShifter : number;

    public rotatesOverItself : boolean = false ;
    public arrayHandle: number[];

    constructor( array: number[],  ){
        this.arrays = [ [ array.join() ] ]; 
        this.current = array;
        this.initialWidth = array.length;
        this.dublicateFinder = [];

        this.currentShifter = this.initialWidth-1;

        
    }

    public rotate(k:number){
        for( let x = 0 ; x < k; x++ ){
            this.current.unshift( this.current[this.currentShifter] );
            this.current.splice( this.currentShifter+1 , 1);

            if( !this.dublicateFinder.includes( this.current.join() ) ){
                this.arrays.push( [ this.current.join() ] );
                this.dublicateFinder.push( this.current.join() );
            }
            else{ 
                x = k;
                this.rotatesOverItself = true;
            }
        }
        console.log( this.arrays,this.current.join() );

    }
    public returnFormatted(k){ 
        if( !this.rotatesOverItself ){
            this.arrayHandle = this.arrays[this.arrays.length-1][0].split(',');
            //console.log(this.arrayHandle, this.arrays[this.arrays.length-1] );
        }
        else{
            let rotation = 0;
            for( let x =0 ;x < k; x++ ) {
                if( rotation >= this.arrays.length-2 ){ 
                    rotation=0;
                }
                else{
                    rotation++;
                }
            }
            console.log(this.arrays , rotation );
            this.arrayHandle= this.arrays[rotation][0].split(',') ;
        }
    }
}


function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if( head === null || head.next === null || k === 0 ) return head; 

    let linkedArray = [];
    
    let updateableHead = head;
    while( updateableHead != null ){ 
        linkedArray.push( updateableHead.val.toString() );
        updateableHead = updateableHead.next;
    }
    console.log( linkedArray );
    let arraySet = new ArraySet( linkedArray );
    arraySet.rotate(k);
    arraySet.returnFormatted(k);
    console.log( arraySet );

    //console.log(arraySet);
    
    let ll = new ListNode();
    let returnableLL = ll;
    for(let x = 0; x < arraySet.arrayHandle.length; x++){ 
        ll.val = Number(arraySet.arrayHandle[x]);
        
        if( x !=  arraySet.arrayHandle.length-1 ){ 
            ll.next = new ListNode();
            ll = ll.next;
        }
    }
    
    
    return returnableLL;
};
