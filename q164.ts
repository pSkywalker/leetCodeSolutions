function maximumGap(nums: number[]): number {
    let largestDiff = 0
    nums.sort( (a,b) => { return a-b } ).map( ( num, index ) => {
        let diff = nums[index+1] - num;
        if( diff > largestDiff ){
            largestDiff = diff; 
        }    
    });
    return largestDiff;
};
