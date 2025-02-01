function remove(nums, val) {
    let index = nums.indexOf(val); 
    if(index!= -1){
        nums.splice(index,1);
        remove(nums, val);
    }
    else{ 
        return;
    }
}

function removeElement(nums: number[], val: number): number {
    remove(nums, val);
    return nums.length;
    /*
    let sortedArray = nums.sort( (a,b)=> { return a-b } );
    let sortedArrayDownward = nums.sort( (a,b) => { return b-a } );
    let lastIndexOf = nums.length - sortedArrayDownward.indexOf( val );  
    let startingIndex = sortedArray.indexOf(val);
    //let endingIndex = sortedArray.lastIndexOf(val);

    if( startingIndex != -1 ){ 
        //console.log( sortedArray, typeof endingIndex );
        sortedArray.splice( startingIndex, endingIndex );
        return sortedArray.length;
    }
    else{ 
        return nums.length
    }*/
/*
    for( let x = 0 ; x < nums.length; x++ ) { 
        if( nums[x] === val ){ 
            nums.splice( x, 1 );
            x--;
        }
    }
        
    return nums.length;
*/
    //return 0;
};
