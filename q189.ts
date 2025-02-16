function rotate(nums: number[], k: number): void {
    let numsLength = nums.length;
    for( let x = 0; x < k ; x++ ){
        nums.unshift( nums[nums.length-1-x] );
    }
    nums.splice( numsLength, nums.length -1 );
};
