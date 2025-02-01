function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if( !head || ( n === 1 && head.next === null ) ) return null;
    if( head.next.next === null && n === 2) return new ListNode( head.next.val );
    if( head.next.next === null && n === 1) return new ListNode( head.val ); 
    if( n === 2 && head.next.next.next === null ){ return new ListNode( head.val, new ListNode( head.next.next.val ) ) }

    let ll = head;
    let startingHead = new ListNode();
    let startingTempHead = startingHead;
    let returnableHead = startingTempHead;
    let tempHead;
    let iterator = 0;
    let skip = null;
    while( head != null ){
        
        tempHead = head;
        let updatableHead = head;
        
        let isEnd = false;
        let currentIndex = 0;
        for( let x = 0; x <= n ; x++  ){ 
            currentIndex++;
            if( !updatableHead.next ){ 
                if( iterator === 0 ){ 
                    tempHead = tempHead.next.next;
                    isEnd = true;
                    skip = iterator;
                    break;
                }
                else{ 
                    tempHead.next = tempHead.next.next;
                    //console.log( tempHead );
                    //skip = iterator;
                    isEnd = true;
                    break;
                }
            }
            else{
                updatableHead = updatableHead.next;
            }
        }
        //console.log( iterator, skip, currentIndex );
        let lastNodeCreated = false;
        if( iterator === skip  && (iterator == 0 && skip == 0 && n == currentIndex) ) { 
            startingHead.val = head.next.val;
            startingHead.next = new ListNode();
            startingHead = startingHead.next;
            lastNodeCreated = true;
        }
        else{
            startingHead.val = head.val;
        }
        
        if( tempHead.next != null && !lastNodeCreated){ 
            startingHead.next = new ListNode();
            startingHead = startingHead.next;
        }

        head = head.next;

        if(isEnd){
            //console.log(returnableHead.next, tempHead );
            if( iterator != skip ) { 
                tempHead = tempHead.next;
            }

            //console.log( startingTempHead, 77 );

            while( startingTempHead != null){ 

                //console.log( startingTempHead );
                if( startingTempHead.next === null ){ 
                    if( tempHead ){
                        startingTempHead.val = tempHead.val;
                        
                        if( tempHead.next != null ) { 
                            startingTempHead.next = tempHead.next;
                        }
                    }
                    break;
                }
                startingTempHead = startingTempHead.next;
                //console.log( startingTempHead );
            }

            break; 
        }
        iterator++;
    }
    return returnableHead;
  

};
