function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if( list1 === null && list2 === null ){ 
        return null;

    } 

    let listArray = [];
    do{ 
        ( 
           ( (list1 != null) ? ( (list1.val != null) ? list1.val : Number.MAX_VALUE ) : Number.MAX_VALUE ) > ( (list2 != null ) ? ( ( list2.val != null) ? list2.val : Number.MAX_VALUE ) : Number.MAX_VALUE )    
        ) ? ( () => {
                listArray.push( list2.val );
                list2 = list2.next;
            } )() 
          :
            ( () => { 
                listArray.push( list1.val );
                list1 = list1.next;
            })() 
    }while(
       ( ( list1 != null ) ? list1.next : null ) != null
       ||
       ( ( list2 != null ) ? list2.next : null ) != null
       || 
       ( ( list1 != null ) ? list1.val : null ) != null
       ||
       ( ( list2 != null ) ? list2.val : null ) != null
    );

    console.log( listArray );

    let ll = new ListNode();
    let llHead = ll;
    for( let x = 0; x < listArray.length; x++ ){ 
        ll.val = listArray[x];
        if( x != listArray.length -1 ){ 
            ll.next = new ListNode();
            ll = ll.next;
        }
        else{ 
            ll.next = null;
            ll = ll.next;
        }
    }
    return llHead; 
};
