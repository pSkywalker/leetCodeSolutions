function moveZeroes(nums: number[]): void {
    let totalNums = nums.length;
    let iterator = 0;
    let index = 0;
    while( true ){
        if( totalNums > iterator ) { 
            if( nums[index] === 0 ){
                nums.splice( index, 1 );
                nums.push( 0 );
                index--;
            }                      
        }
        else{ 
            return;
        }
        iterator++;
        index++;
    }

};
