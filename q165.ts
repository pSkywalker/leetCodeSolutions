

function compareVersion(version1: string, version2: string): number {
    let v1 = version1.split('.');
    let v2 = version2.split('.');
    v1 = v1.map( digit => { 
        return parseInt(digit).toString() 
    } );
    v2 = v2.map( digit => { 
        return parseInt(digit).toString() 
    } );

    if( v1.length > v2.length ){ 
        for( let x = v2.length-1; x < v1.length-1; x++){ 
            v2.push( "0" );
        } 
    }
    else if( v2.length > v1.length ){
        for( let x = v1.length; x < v2.length; x++ ) { 
            v1.push( "0" );
        }
    }

    for( let x = 0; x < v1.length; x++ ){
        if(parseInt(v1[x]) > parseInt(v2[x]) ) { return 1 }
        else if( parseInt(v1[x]) < parseInt(v2[x]) ) { return -1 }
    }
    return 0;
};
