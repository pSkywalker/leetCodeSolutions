class PermutationCreator{ 
    public array : number[];
    public numberArray : string;
    public lengthOfArray: number;
    public allPermutations //: number[][];
    public permut : number[][];

    constructor(array: number[]){ 
        this.array = array;
        this.numberArray = array.join('');
        
        this.lengthOfArray = array.length;
        this.allPermutations = [];
    }
    
    public permute(nums) {
        let result = [];
        if (nums.length === 0) return [];
        if (nums.length === 1) return [nums];
        for (let i = 0; i < nums.length; i++) {
            const currentNum = nums[i];
            const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
            const remainingNumsPermuted = this.permute(remainingNums);
        for (let j = 0; j < remainingNumsPermuted.length; j++) {
            const permutedArray =                                     [currentNum].concat(remainingNumsPermuted[j]);
            result.push(permutedArray);
            }
        }
        return result;
    }


    public extractPermutations(){ 
        let mainArray = [];
        for( let x = 0; x < this.permut.length; x++ ){
            let tempArray = [];
            for( let y =0; y < this.permut[x].length; y++ ){ 
                tempArray.push( this.array[this.permut[x][y]] );
            }
            mainArray.push( parseInt(tempArray.join('')) );
        }
        this.allPermutations = mainArray;
    }

    public getNextPermutation() { 
        this.allPermutations = this.permute( this.array );

        this.allPermutations = [... new Set(this.allPermutations.map( 
            (item) => {
                return item.join('')
            }).sort( (a,b)=>{ if(this.allPermutations[0]!='0'){ return parseInt(a) - parseInt(b)}} )) ];
            /*
            .filter( 
                (value, index, self) =>
                { 
                      return index===self.findIndex((t) => (
                        t === value
                      ));
                });
            */
        console.log( this.allPermutations );
        //return [];
        if(
            this.allPermutations.indexOf( this.numberArray ) + 1 < this.allPermutations.length 
        ) 
        {
         return this.allPermutations[this.allPermutations.indexOf( this.numberArray ) + 1].toString().split('').map(x => {return parseInt(x)} ) 
        }
        else{ 
         return this.allPermutations[0].toString().split('').map( x => { return parseInt(x) }) 
        }
    
    }
}

function nextPermutation(nums: number[]): void {
    if( nums.length === 1 ) { return } 
    if( nums.length === 2 ) { let x = nums[0]; nums[0] = nums[1]; nums[1] = x; return } 
    let pc = new PermutationCreator(nums);
    //pc.buildPermutations();
    //pc.extractPermutations();
    let permutation = pc.getNextPermutation();
    //console.log( permutation );
    for( let x = 0 ; x < permutation.length; x++){ 
        nums[x] = permutation[x];
    }
};
