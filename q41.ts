function firstMissingPositive(nums: number[]): number {
    nums.sort( ( a, b ) => {return a-b} );
    if( nums.length === 1 ){ 
        if( nums[0] > 1 ){ 
            return 1;
        }
        else if( nums[0] < 0 ){
            return 1;
        }
    }
    nums = nums.filter( (num) => { return num>0 } )
    if( nums[0] > 1 ){ return 1; }
    
    for( let x = 0; x < nums.length; x++ ){
        console.log( nums[x+1] , nums[x] );
        if( nums[x+1] - nums[x] > 1 ){ 
            if( nums[x] + 1 > 0 ){
                return ++nums[x];
            }
        }
    } 
    return (nums[nums.length-1] + 1 > 0) ? ++nums[nums.length-1] : 1;
};
