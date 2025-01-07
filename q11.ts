class Depth{ 
    x : number;
    y : number;
    constructor( x : number, y : number ){ 
        this.x = x;
        this.y = y;
    }
}

class DepthPair{ 
    a : Depth;
    b : Depth;
    area : number;
    constructor( a : Depth, b : Depth ){ 
        this.a = a;
        this.b = b;
        this.area = 0;
    }
}

class DepthBuiler{ 
    chart : number[];
    pairs : DepthPair[];
    constructor( chart : number[] ){ 
        this.chart = chart;
        this.pairs = [];
    }
    buildPairs(){ 
        let curr : number = 1;
        while( curr != this.chart.length + 1  ){ 
            for( let x = 0; x < this.chart.length; x++ ){ 
                if( curr != x+1 && curr -1 != x ){ 
                    this.pairs.push ( new DepthPair(
                            new Depth( curr, this.chart[curr - 1] ),
                            new Depth( x+1, this.chart[x] )
                        )
                    );
                }
            }
            curr++;
        }
    }
}



function maxArea(height: number[]): number {
    let db = new DepthBuiler( height );
    db.buildPairs();
    //console.log( db.pairs );
    return db.pairs.map( 
       (pair) => { 
            if( pair.b.y <= pair.a.y ){ 
                return pair.area = Math.abs( pair.b.y * (pair.a.x - pair.b.x > 0 ? pair.b.x - pair.a.x: pair.a.x - pair.b.x) );
            }
            else if( pair.a.y <= pair.b.y ){ 
                return pair.area = Math.abs( pair.a.y * (pair.a.x - pair.b.x > 0 ? pair.b.x - pair.a.x: pair.a.x - pair.b.x));
            }
        }).sort( ( a , b ) => { return b - a } )[0];
        //.sort( (a,b)=>{return b.area - a.area} );
    //console.log( areaArray );
    console.log( db.pairs );
};
