function singleNumber(nums: number[]): number {
    nums.sort( (a,b) => { return a-b } );

    let sets = [[]];
    nums.map( (num , x ) => { 
        if( sets[sets.length-1][0] != num ){
            sets.push([ num ]);
        }
        else{
            sets[sets.length-1].push( num );
        }
    });
    return sets.filter( (s) => { return s.length === 1 } )[0][0];

};
