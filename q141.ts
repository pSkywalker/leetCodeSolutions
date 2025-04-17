class LinkedListCycleDetect { 
    public nodes : ListNode[] = [];
    public cycle : boolean = false;
    constructor( ll : ListNode ){ 
        while( ll != undefined ){
            if( this.nodes.includes(ll) ){
                ll = undefined;
                this.cycle = true;
            } 
            else{ 
                this.nodes.push( ll );
                ll = ll.next;
            }
        }
    }
    public isCycle () : boolean{ 
        return this.cycle;
    }
}

function hasCycle(head: ListNode | null): boolean { 
    if( head == undefined || head.next == undefined ){ return false }
    let llCycle = new LinkedListCycleDetect(head);

    return llCycle.isCycle();
};
