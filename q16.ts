function threeSumClosest(nums: number[], target: number): number {
    //let sumBuilder = new SumBuilder( );
    //console.log( sumBuilder.buildGroups( nums, target ) );
    //return sumBuilder.buildGroups( nums, target );  
        
        let indexes:number[] = [];
        let sum = 0; 
        let smallestSum = 0;
        let smallestDiffernce = Number.MAX_VALUE;
        for( let x = 0; x < nums.length; x++ ){ 
            indexes.push( x );
        }
        let start  = indexes[0]
        let ending = indexes[2];
        let middle = indexes[1];
        
        let stopLooping = false;
        while(start < indexes.length -2){ 
            while( middle < indexes.length-1 ){ 
                while( ending < indexes.length ){ 
         
                    sum = nums[start] + nums[middle] + nums[ending];
                    let currentDistance = 0;
                    if( target > sum ){ 
                        currentDistance = target - sum;
                    } 
                    else { 
                        currentDistance = sum - target;
                    }
                    if( currentDistance === 0 ){ 
                        return sum;
                    }
                    if( Math.abs(currentDistance) < smallestDiffernce){ 
                        this.finalSum = sum;
                        smallestDiffernce = Math.abs(currentDistance);
                    }
                    ending++
                    if( stopLooping) break;
                }
                middle++;
                ending = indexes[middle+1]
                if( stopLooping) break;
                //console.log( middle, ending );
            }
            start++;
            middle = start+1;
            ending = middle + 1;
            if( stopLooping) break;
        }
        return this.finalSum;
};









