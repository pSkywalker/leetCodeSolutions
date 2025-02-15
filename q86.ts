class Sorter{
    public array: number[];
    public k :number;
    public high: number[];
    public low : number[];

    constructor( k:number ){
        this.array = [];
        this.low = [];
        this.high = [];
        this.k = k;
    }
    public sort(){ 
        this.array.map( numb => { 
            if( numb < this.k )  { this.low.push( numb ) }
            else{ this.high.push(numb) }
            return numb;
        })
    }

    public parseFromLinkedList(ll: ListNode){ 
        while( ll != null ){
            this.array.push( ll.val );
            ll = ll.next;
        }
    }
    public returnLinkedList(){
        let finalList = this.low.concat(this.high);
        let ll = new ListNode();
        let llTwo = ll;
        for( let x = 0 ; x < finalList.length; x++ ){ 
            ll.val = finalList[x];
            if( x != finalList.length-1 ){ 
                ll.next = new ListNode();
                ll = ll.next;
            }
        }
        return llTwo;
    }
}

function partition(head: ListNode | null, x: number): ListNode | null {
    if( head === null || head.next === null ){ return head } 

    let sorter = new Sorter(x);
    sorter.parseFromLinkedList(head);
    sorter.sort();
    return sorter.returnLinkedList();
};
	
