function searchInsert(nums: number[], target: number): number {

    if( nums[0] > target  ){ 
        return 0;
    }

    for( let x = 0 ; x < nums.length; x++ ){ 
        if( nums[x] === target ){ 
            return x;
        }
        if( nums[x] < target && nums[x+1] > target ){
            return x+1;
        }

        if( nums[x] < target && nums[x+1] === undefined ){
            return x+1;
         }
    }
};
