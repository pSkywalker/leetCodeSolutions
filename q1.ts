function twoSum(nums: number[], target: number): number[] {
    
        for( let x = 0; x < nums.length; x++ ){ 
            for( let y = x + 1; y < nums.length; y++ ){ 
                if( nums[x] + nums[y] === target ){ 
                    return [x,y];
                }
            }
        }
    
    return [0,0];

};

