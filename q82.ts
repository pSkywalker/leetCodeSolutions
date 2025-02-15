class DuplcateRemover{
    public array: number[];
    public linkedList: ListNode;

    constructor() { 
        this.array = [];
    }    
    public addToArray( x : number ){ 
        this.array.push(x);
    }
    public removeDuplicates(){
        let tempArray = this.array;
        this.array.map( (item, index)  => { 
            if( this.array[index+1] === item ){ 
                tempArray = tempArray.filter( item => {return item != this.array[index]} )
            }
        }) 
        this.array = tempArray;
    }
    public createLinkedList(){ 
        let ll = new ListNode();
        let rll = ll;
        for( let x = 0; x < this.array.length; x++){ 
            ll.val = this.array[x];
            if( x != this.array.length -1 ){ 
                ll.next = new ListNode();
                ll = ll.next;
            }
        }
        if( ll.val === 0 && ll.next === null && this.array.length === 0){ this.linkedList = null } 
        else { this.linkedList = rll } ;
    }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if( head === null || head.next === null ){ return head } 

    let dr = new DuplcateRemover();
    
    while( head != null ){ 
        dr.addToArray(
            head.val
        );
        head = head.next;
    }
    dr.removeDuplicates();
    dr.createLinkedList()

    return dr.linkedList;
};





	
