class Folder{ 
    public name: string;
    public index: number;
    public last: boolean;
    constructor( name : string, index: number){ 
        this.name = name;
        this.index = index;
    }

    public prepare(){ 
        return '/'+this.name;
    }
}

class FolderBuilder{ 
    public stringPath : string;
    public path : string;
    public folders : Folder[];
    
    constructor( path: string ){
        this.stringPath = path;
        this.folders = [];
        this.path = '';
    }

    public createFolders(){
        
        let stringArray = this.stringPath.split('');
        stringArray[stringArray.length] = '/'
        //console.log( stringArray );
        let char = '/';
        let previous = 0;
        let currentFolderName = '';
        stringArray.map(( value , index )=>{
            if( index != previous && char != value ){
                //console.log( value );
                currentFolderName += value;
            } 
            else{ 
                if( currentFolderName != '' ) {
                    if( currentFolderName === '..' ) {
                        this.folders.splice( this.folders.length-1,1 );
                    } 
                    else if( currentFolderName === '.' ){ 

                    }
                    else{
                        this.folders.push( new Folder( currentFolderName, index ) );
                    }
                    currentFolderName = '';
                }
                //console.log( previous , index );
                previous = index;
            } 
        });
        console.log(this.folders);
        let removeFolders = [];
          
    }

    public createFolderPath(){
        this.folders.sort( (a,b)=>{return a.index-b.index}).map((folder)=>{
            if( folder.name != '.' ) { 
                this.path+=folder.prepare()
            }
        });
        if( this.path === '' ){
            this.path = '/'; 
        }
    }
    public getPath(){ 
        return this.path;
    }
}

function simplifyPath(path: string): string {
    let builder = new FolderBuilder(path);
    builder.createFolders();
    builder.createFolderPath();
    return builder.getPath();
};


