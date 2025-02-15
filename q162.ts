function findPeakElement(nums: number[]): number {
    if( nums.length === 1 ){ return 0 }
    let numsSet = nums.map( ( (num, index)  => { return [ index, num ] }) );
    return numsSet.sort( (a,b)=>{ return b[1] - a[1]  } )[0][0];
};
