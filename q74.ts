function searchMatrix(matrix: number[][], target: number): boolean {
    if( matrix[0].length === 1 ){
        for( let x = 0; x < matrix.length; x++){
            if( matrix[x][0] === target ){
                return true;
            }
        }
        return false;
    }
    for( let x  = 0 ; x < matrix.length; x++ ){ 
        if( matrix[x][matrix[x].length-1] > target ){
            console.log('a');
            let iterator = matrix[x].length;
            while( iterator > -2 ){
                if( matrix[x][iterator] === target ){
                    return true
                }
                else if( iterator === -1 ){
                    if( x === matrix.length-1 ){
                        return false;
                    }
                }
                console.log( iterator );
                iterator--;
            }
        }
        else if( matrix[x][matrix[x].length-1] < target ){
            console.log('b');
            let iterator = matrix[x].length;
            while( iterator > -2 ){
                console.log( matrix[x][iterator] , target );
                if( matrix[x][iterator] === target ){
                    return true
                }
                else if( iterator === -1 ){
                    if( x === matrix.length - 1 ){
                        return false;
                    }
                }
                console.log(iterator);
                iterator--;
            }
        }
        else{ 
            console.log( 'asdf' );
            return true;
        }
    }
};
