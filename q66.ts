function plusOne(digits: number[]): number[] {    
    let a : any = BigInt(digits.join(''));
    a++;
    return a.toString().split('').map( (item) => { return parseInt( item )});
};
