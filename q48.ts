function rotate(matrix: number[][]): void {
   let array = [];
    
    let backwards = matrix.length-1;
    let forwards = 0;
    while( backwards > -1 ){
        console.log( array );
        for( let y = 0; y < matrix.length; y++ ){
            //console.log( forwards );
            //console.log( matrix[backwards][y] );
            if( array[forwards] === undefined ){ array.push([]) }
            array[forwards].push(matrix[backwards][y]);
            forwards++;
        }
        backwards--;
        forwards = 0;
        //forwards++;
    }
    for( let x = 0; x < matrix.length; x++ ){
        for( let y = 0; y < matrix.length; y++ ){
            matrix[x][y] = array[x][y]
        }
    } 
};
