function kthSmallest(matrix: number[][], k: number): number {
   return matrix.flat().sort( (a,b) => { return a-b } )[k-1];
};
