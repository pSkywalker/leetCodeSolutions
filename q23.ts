class LinkedListMerger{ 
    public listNodes: ListNode[];
    public allNodesNull : boolean = true;
    public whileClause : any[];

    public sortedArray : number[]//{ value : number, listNodeIndex: number}[];

    public sortedLlHead : ListNode;

    constructor( listNodes : ListNode[] ){ 
        this.listNodes = listNodes;
        this.sortedArray = [];
        this.whileClause = [];
    }

    public merge() : ListNode | null { 
        if( this.checkIfAllNodesNull() ) { 
            return null;
        }

        while( this.generateWhileClause() ){ 
            //console.log( this.listNodes );
            this.getValue_SetNextValue(
                this.findNextSmallestValue() 
            )
        }

        this.sortedLlHead = this.returnNewListNode();

        return this.sortedLlHead;
    }

    public checkIfAllNodesNull() : boolean { 
        for( let x = 0 ; x < this.listNodes.length; x++ ){ 
            if( this.listNodes[x] != null ){ 
                this.allNodesNull = false;
                x = this.listNodes.length;
            }
        }
        return this.allNodesNull;
    }
    public generateWhileClause() : boolean { 
       for( let x = 0; x < this.listNodes.length; x++ ){ 
        if( 
            ( ( this.listNodes[x] != null ) ? this.listNodes[x].next : null )  != null
            ||
            ( ( this.listNodes[x] != null ) ? this.listNodes[x].val : null )  != null
        ) { 
            //console.log( this.listNodes );
            return true
        }
       } 

        return false;
    }
    public generateWhileClauseArray() : void{ 
       this.whileClause = [];
       for( let x = 0; x < this.listNodes.length; x++ ){ 
        this.whileClause.push( ( ( this.listNodes[x] != null ) ? this.listNodes[x].next : null ) );
        this.whileClause.push( ( ( this.listNodes[x] != null ) ? this.listNodes[x].val : null ) );
       }
    }    
    public findNextSmallestValue() { 
        let tempArray  : { value : number, listNodeIndex: number}[] =  [];
        for( let x = 0; x < this.listNodes.length; x++ ){ 
           // console.log( this.listNodes[x] );
            if( this.listNodes[x] ){
                tempArray.push( { value: this.listNodes[x].val, listNodeIndex: x });
            }
        }
        //console.log(tempArray.sort( (a, b) => { return a.value - b.value } )[0])
        return tempArray.sort( (a, b) => { return a.value - b.value } )[0];    
        
        
    }
    
    public getValue_SetNextValue(x): void{ 
        this.sortedArray.push( x.value );
        this.listNodes[x.listNodeIndex] = this.listNodes[x.listNodeIndex].next;
    }
    
    public returnNewListNode() : ListNode{ 
        let ll = new ListNode();
        this.sortedLlHead = ll;
        for( let x = 0; x < this.sortedArray.length; x++ ){ 
            ll.val = this.sortedArray[x]//.value;
            if( x != this.sortedArray.length -1 ){ 
                ll.next = new ListNode();
                ll = ll.next;
            }
            else{ 
                ll.next = null;
                ll = ll.next;
            }
        }
        return this.sortedLlHead;
    }
}

function checkIfAllNodesNull(list: ListNode[]) : boolean { 
        let allNodesNull = true;
        for( let x = 0 ; x < list.length; x++ ){ 
            if( list[x] != null ){ 
                allNodesNull = false;
                x = list.length;
            }
        }
        return allNodesNull;
}

function generateWhileClause(listNodes: ListNode[]) : boolean { 
       for( let x = 0; x < listNodes.length; x++ ){ 
        if( 
            ( ( listNodes[x] != null ) ? listNodes[x].next : null )  != null
            ||
            ( ( listNodes[x] != null ) ? listNodes[x].val : null )  != null
        ) { 
            //console.log( this.listNodes );
            return true
        }
       } 

        return false;
    }

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    
    //let llm = new LinkedListMerger( lists );
    //return llm.merge();
    if( checkIfAllNodesNull(lists) ){ 
        return null;
    }
    

    let merged = new ListNode();
    let ll = merged;
    while( generateWhileClause(lists) ){ 
        let lowestNumber : { value:number, listNodeIndex: number } = {value : Number.MAX_VALUE, listNodeIndex:0};
        for( let x = 0; x < lists.length; x++ ){
            if( lists[x] && lowestNumber.value > lists[x].val ){ 
                lowestNumber = { value : lists[x].val , listNodeIndex : x};
            }
        }
        lists[lowestNumber.listNodeIndex] = lists[lowestNumber.listNodeIndex].next;

        merged.val = lowestNumber.value;
        if( generateWhileClause(lists) ){
            merged.next = new ListNode();
            merged = merged.next;
        }
    }

    return ll;
};
