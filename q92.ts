class ListSwapper{ 
    public left : number;
    public right : number;
    public array : number[];
    constructor( left : number, right: number){ 
        this.array = [];
        this.left = --left;
        this.right = --right;
    }

    public swap(){ 
        if( this.left != this.right ){ 
            //console.log( this.array );
            let tmp = this.array[this.left];
            this.array[ this.left ] = this.array[this.right];
            this.array[this.right] = tmp;
            this.left++;
            this.right--;
        }
    }

    public buildNewArray(){ 
        while(this.left != this.right && this.right > this.left){ 
            this.swap();
        }
    }
    
    public parseFromLinkedList(ll: ListNode){ 
        while( ll != null ){
            this.array.push( ll.val );
            ll = ll.next;
        }
    }
    public returnLinkedList(){
        let ll = new ListNode();
        let llTwo = ll;
        for( let x = 0 ; x < this.array.length; x++ ){ 
            ll.val = this.array[x];
            if( x != this.array.length-1 ){ 
                ll.next = new ListNode();
                ll = ll.next;
            }
        }
        return llTwo;
    }
}

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if( head === null || head.next === null ) { return head };

    let swapper = new ListSwapper( left, right );
    swapper.parseFromLinkedList(head);
    swapper.buildNewArray();

    return swapper.returnLinkedList();   
};
	
