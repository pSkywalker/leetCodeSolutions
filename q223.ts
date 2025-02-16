
class RectangleMatrix { 
    public point1: {x: number, y: number};
    public point2: {x: number, y: number};
    public point3: {x: number, y: number};
    public point4: {x: number, y: number};

    public matrix;
    constructor( ax1?, ax2?, ay1?, ay2? ){ 
        if( ax1  != undefined ){  
            this.point1 = { x: ax1,y: ay2 } 
            this.point2 = { x: ax2,y:ay2 } 
            this.point3 = { x: ax1,y:ay1 } 
            this.point4 = { x: ax2,y:ay1 }
        }
        this.matrix = [];
    }

    public overLapConstructor( ax1,ax2, ay1,ay2 ){ 
        //console.log( ax1, ax2 , ay1 ,ay2 ); 
        this.point1 = { x: ax1, y: ay1 };
        this.point2 = { x : ax2 , y :ay1 };
        this.point3 = { x: ax1, y: ay2 };
        this.point4 = { x: ax1 , y: ay2  };
        //console.log( this.point1, this.point2, this.point3, this.point4 );
    }
    public getArea(){ 
        return ( this.point2.x-this.point1.x ) * ( this.point2.y-this.point4.y);
    }
    public buildMatrix(){ 
        for( let x = this.point1.y; x >= this.point3.y; x-- ){ 
            this.matrix.push( [] );
            for( let y = this.point3.x; y <= this.point4.x ; y++ ){ 
                this.matrix[ this.matrix.length -1 ].push( [x,y] );
            }
        }
    }
}

function computeArea(ax1: number, ay1: number, ax2: number, ay2: number, bx1: number, by1: number, bx2: number, by2: number): number {
    
    let r1 = new RectangleMatrix( ax1, ax2, ay1, ay2 );
    let r2 = new RectangleMatrix( bx1, bx2, by1, by2 );

    r1.buildMatrix();
    r2.buildMatrix();

    let overlapPoints = [];

    r1.matrix.map( (row) => {
        row.map( point => {

            r2.matrix.map( rowTwo => { 
                rowTwo.map( pointTwo => {
                    if( 
                        point[0] === pointTwo[0] 
                        &&
                        point[1] === pointTwo[1]
                    ){ 
                        overlapPoints.push( [point[1], point[0]] );
                    }
                } );
             })

        } )
    } )
    
    let rOverLap = new RectangleMatrix(  );
    if( overlapPoints.length > 0 ){ 
        rOverLap.overLapConstructor( 
            overlapPoints[0][0],
            overlapPoints[overlapPoints.length-1][0],
            overlapPoints[0][1],
            overlapPoints[overlapPoints.length-1][1],
        );
    }
    
    let overLapArea = ( overlapPoints.length > 0 ) ? rOverLap.getArea() : 0 ;
    

    return r1.getArea() + r2.getArea() - overLapArea;
};
