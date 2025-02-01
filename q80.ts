function removeDuplicates(nums: number[]): number {
    for( let x = 0;x < nums.length; x++ ){ 
        let start = nums.indexOf( nums[x] );
        let end   = nums.lastIndexOf( nums[x] );
        
        if( end-start > 1 ) { 
            for( let y = start+1; y < end; y++) {
                console.log(y); 
                nums.splice( y, 1 );
                end -= 1; 
                start-=1
            }
        }
    }
    return nums.length;
};
