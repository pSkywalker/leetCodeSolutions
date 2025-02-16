function searchMatrix(matrix: number[][], target: number): boolean {
    for( let x = 0; x < matrix.length; x++ ){ 
        if( matrix[x][0] <= target && matrix[x][matrix[x].length-1] >= target ){
            for( let y = 0; y < matrix[x].length; y++ ) {
                if( matrix[x][y] === target ){
                    return true;
                } 
            }
        }
    }
    return false; 
};
