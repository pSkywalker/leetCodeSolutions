function productExceptSelf(nums: number[]): number[] {
    
    let productArray = [];
    let zeroIndexes = [];
    for( let x = 0; x < nums.length; x++ ){ 
        if( nums[x] === 0 ){
            zeroIndexes.push( x );
        }
    }
    if( zeroIndexes.length === nums.length ){ 
        for( let x = 0; x < nums.length; x++ ){ 
            productArray.push(0);
        }
        return productArray;
    }

    let index = 0;
    let total = nums.filter( ( num ) => { return num != 0 } ).reduce( (x,y)=> { 
        if( y != 0 ) { return x * y } 
        } ,
    1 )
    

    for( let x = 0; x < nums.length; x++ ){ 
        if( zeroIndexes.length > 0 && !zeroIndexes.includes(x) ) { 
            productArray.push( 0 );
        }
        else if( !zeroIndexes.includes(x)  ){ 
            productArray.push( total/nums[x] );
        }
        else{ 
            if( zeroIndexes.length > 1 ){
                productArray.push( 0 );
            }
            else{ 
                productArray.push( total );
            }
        }
    }

    return productArray;
};
