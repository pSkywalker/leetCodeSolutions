class DuplcateRemover_LinkedList{
    public array: number[];
    public linkedList : ListNode;

    constructor() { 
        this.array = [];
    }    
    public addToArray( x : number ){ 
        if( !this.array.includes(x) ){ 
            this.array.push(x);
        }
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
        this.linkedList = rll;
    }
}
function deleteDuplicates(head: ListNode | null): ListNode | null {
    if( head === null || head.next === null ){ return head }

    let dr = new DuplcateRemover_LinkedList();
    
    while( head != null ){ 
        dr.addToArray(head.val);    
        head = head.next;
    }
    dr.createLinkedList();

    return dr.linkedList;
};
	
