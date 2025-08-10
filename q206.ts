
   class ListNodeGeneric<T> {
      val: T
      next: ListNodeGeneric<T> | null
      constructor(val?: T, next?: ListNodeGeneric<T> | null) {
          this.val = (val===undefined ? null : val)
          this.next = (next===undefined ? null : next)
      }
  }

abstract class LinkedListGenericToListNode{
    public static returnListNodeNumber( head : ListNodeGeneric<number> ){ 
        let h = new ListNode();
        let rH = h;
        let tempHead = head;
        while( tempHead != null ){ 
            h.val = tempHead.val;
            if( tempHead.next != null ){ 
                h.next = new ListNode();
                h = h.next;
            }
            tempHead = tempHead.next;
        }
        return rH;   
    }
}

abstract class LinkedListToGenericLinkedList {
    public static returnListNumber ( head: ListNode ){ 
        let h = new ListNodeGeneric<number>();
        let rH = h;
        let tempHead = head;
        console.log( tempHead );
        while( tempHead != null ){ 
            h.val = tempHead.val;
            if( tempHead.next != null ){ 
                h.next = new ListNodeGeneric<number>();
                h = h.next;
            }
            tempHead = tempHead.next;
        }
        return rH;
    }
}

interface NodeHandle< NodeType >{ 
    nodeValue: NodeType;
    nextValue: ListNodeGeneric<NodeType>
}

class LinkedListReverser<NodeType> { 
    public array : Array<NodeHandle<NodeType>>;
    constructor() {
        this.array = [];
    }

    public addHeadValue( val: NodeType , nextNode: ListNodeGeneric<NodeType>): void {
        this.array.push( {nodeValue : val, nextValue: nextNode } );
    }
    public reverseLinkedList() : void{ 
        this.array.reverse();
    }

    public returnLinkedList( head : ListNodeGeneric<NodeType> ) : ListNodeGeneric<NodeType>{ 
        if( head.val != this.array[0].nodeValue ){ 
            head.val = this.array[0].nodeValue;
        }
        head.next = this.array[1].nextValue;
        for( let x = 0; x < this.array.length; x++ ){ 
            if( this.array[x+1] ){ 
                this.array[x].nextValue.next = this.array[x+1].nextValue;
            }
        }
        return head;
        
        /*
        let ll = new ListNodeGeneric<NodeType>();
        let returanbleLL = ll;
        for( let x = 0; x < this.array.length; x++ ){ 
            if( x != this.array.length-1 ){ 
                ll.val = this.array[x];
                ll.next = new ListNodeGeneric<NodeType>();
                ll = ll.next;
            }
            else{ 
                ll.val = this.array[x]
            }
        }
        return returanbleLL;
        */
        
    }
};



function reverseList(head: ListNode | null): ListNode | null {
    if( head === null || head.next === null ){ return head }
    let gll = LinkedListToGenericLinkedList.returnListNumber( head );
    let llReverser = new LinkedListReverser<number>();
    let tempHead = gll;
    while( tempHead != null ){ 
        llReverser.addHeadValue( tempHead.val, new ListNodeGeneric<number>( tempHead.val ));
        tempHead = tempHead.next;
    }
    llReverser.reverseLinkedList();
    return llReverser.returnLinkedList(gll);
};
