function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let mainArray = nums1.concat( nums2 );
    mainArray.sort( ( a,b ) => { return a - b } );

    if( mainArray.length % 2 === 0){ 
        return ( mainArray[( mainArray.length / 2 ) - 1] + mainArray[ mainArray.length / 2 ] ) / 2; 
    }
    else{ 
        let index = (mainArray.length / 2 + 0.5) - 1;
        return mainArray[ index ];
    }
};
