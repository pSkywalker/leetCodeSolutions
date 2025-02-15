class ReOrderList{ 
    public array: any[];

    constructor(){ 
       this.array = [];
    }
    public getListFromLinkedList( linkedList: ListNode ){
        while( linkedList != null ){ 
            this.array.push( [linkedList.val, new ListNode(linkedList.val) ,linkedList.next ] );
            linkedList = linkedList.next;
        }
    }  
    public reOrder(){ 
        let index = 1;
        while( index < this.array.length ){
            this.array.splice(index ,0 ,this.array[this.array.length-1]);
            this.array.splice( this.array.length-1, 1 );
            index += 2;
        }
    }
    public updateListNode(head: ListNode){
        head.next = this.array[1][1];

        for( let x = 1; x < this.array.length; x++ ){
            if( this.array[x+1] ){
                this.array[x][1].next = this.array[x+1][1];
            }
        };
    }
}
 
function reorderList(head: ListNode | null): void {
    if(head == null || head.next == null) { return }

    let rol = new ReOrderList();
    rol.getListFromLinkedList(head);
    rol.reOrder();
    rol.updateListNode(head);

};
	
