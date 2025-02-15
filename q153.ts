function findMin(nums: number[]): number {
    //return nums.sort((a,b)=> {return a-b})[0];
    for( let x = 0 ; x < nums.length; x++ ){
        if( nums[x] > nums[x+1] ){
            return nums[ x + 1 ]
        }
    }
    return nums[0];
};
