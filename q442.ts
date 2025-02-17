function findDuplicates(nums: number[]): number[] {
    return nums.sort( (a,b) => { return a-b } ).map( (num, index) => {
        if( nums[index-1] === num ){ return num }
    }).filter( num => { return num != undefined } );
};
