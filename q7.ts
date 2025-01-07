function reverse(x: number): number {

    let reversed = "";
    if( x < 0 ){ 
        reversed+="-";
    }

    let temp = x.toString();
    temp.replace("-","");

    for( let y = temp.length - 1; y > -1; y--){ 
        reversed += temp[y];
    }

    let largestNumber = 2 ** 31;
    let smallestNumber = -(2 ** 31);

    let ri = parseInt( reversed );

    if( ri < smallestNumber || ri > largestNumber ){ 
        return 0;
    } 

    return ri;
};
