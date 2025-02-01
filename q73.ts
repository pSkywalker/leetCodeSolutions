function setZeroes(matrix: number[][]): void {
    let indexesOfZero = [];
    for( let x = 0; x < matrix.length; x++ ){ 
        for( let y = 0; y < matrix[x].length; y++ ){
            if( matrix[x][y] === 0 ){
                indexesOfZero.push( [ x, y ] );
            }
        }
    }
    for( let x =0; x < indexesOfZero.length; x++ ){ 
        console.log( indexesOfZero[x] );
        for( let y = 0; y < matrix[indexesOfZero[x][0]].length; y++  ){ 
            matrix[indexesOfZero[x][0]][y] = 0;
        }
    }
    for(let y = 0; y < matrix.length; y++ ){ 
        for( let z = 0; z < indexesOfZero.length; z++ ){ 
            matrix[y][indexesOfZero[z][1]] = 0;
        }
    }
    console.log(matrix);
};
