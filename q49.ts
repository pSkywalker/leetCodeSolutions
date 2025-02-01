function permute(nums) {
        let result = [];
        if (nums.length === 0) return [];
        if (nums.length === 1) return [nums];
        for (let i = 0; i < nums.length; i++) {
            const currentNum = nums[i];
            const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
            const remainingNumsPermuted = permute(remainingNums);
        for (let j = 0; j < remainingNumsPermuted.length; j++) {
            const permutedArray =                                     [currentNum].concat(remainingNumsPermuted[j]);
            result.push(permutedArray);
            }
        }
        return result;
    }

function groupAnagrams(strs: string[]): string[][] {
    if( strs.length === 1 ){return [strs];}
    let foundArray = [];
    let returnableArray = [];
    let letterArray = [];
    for( let x = 97; x <= 127; x++ ){
        letterArray.push( x ); 
    }
    //let indexOfEmptyString = strs.indexOf('');
    let singleChars = [];
    strs.map( (str, index)=>{
        if( str.length < 2 || strs.indexOf( str ) != strs.lastIndexOf(str) ){
            let indexOfSingleChar = 0;
            let charPushed = false;
            singleChars.map( (char, index) =>{
                console.log( str , char[0] );
                if( str === char[0] ){ 
                    singleChars[index].push( str );
                    foundArray.push( index );
                    charPushed = true;
                }
            } );
            if( !charPushed ){
                singleChars.push( [str] );
            }
        }
    } )

    singleChars.map( (chars)=> { returnableArray.push( chars ) } );


    strs.map( (str, index)=> {
        let perms = permute( str )
        returnableArray.push([]);
            perms.map( (perm, permIndex) => {
                
                let joinedPerm = perm;
                if(perm.length > 1){
                    joinedPerm = perm.join('')
                }
               // console.log( returnableArray , joinedPerm, strs.indexOf( joinedPerm ) );
                if(joinedPerm.length > 1){
                    let foundIndex = strs.indexOf( joinedPerm );
                    if( foundIndex != -1 ){
                        //console.log(perm, foundArray.indexOf( foundIndex ));
                        if( foundArray.indexOf( foundIndex ) === -1 ){
                            foundArray.push( foundIndex );
                            let arrayJoinedPerm = perms[permIndex];
                            if( perms[permIndex].length > 1 ){
                                arrayJoinedPerm = perms[permIndex].join('')
                            }

                            if( returnableArray[ index ][0] ){
                                if( returnableArray[ index ][0].length === arrayJoinedPerm.length ){
                                    returnableArray[ index ].push(arrayJoinedPerm );        
                                }
                                else{
                                    if( returnableArray[index+1] ){
                                        returnableArray[index+1].push( arrayJoinedPerm );
                                    }
                                    else{
                                        returnableArray.push([]);
                                        returnableArray[index+1].push( arrayJoinedPerm );
                                    }
                                }
                            }
                            else{
                                                                                                            returnableArray[ index ].push(arrayJoinedPerm );        
                            }

                        }
                    }
                }
            } );
    });
    console.log( returnableArray );
    return returnableArray.filter((strArray)=> {return strArray.length > 0});
};
