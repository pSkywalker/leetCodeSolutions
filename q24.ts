function swapPairs(head: ListNode | null): ListNode | null {

    if( head === null ){ 
        return null;
    }
    if( !head.next ){ 
        return new ListNode( head.val );
    }

    let ll = new ListNode();
    let swapped = ll;

    while( head && head.next ){
        
        if( iter % 2 === 0 ) { 
            ll.val = head.next.val;
            ll.next = new ListNode( head.val );
            if( head.next.next /*&& head.next.next.val*/ ){
                ll.next.next = new ListNode();
                ll = ll.next.next;
            }
        }
        else{ 
            ll.val = head.next.val;
        }
        head = head.next;
    }    
    return swapped;
};
