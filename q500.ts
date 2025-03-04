function findWords(words: string[]): string[] {
    let topRow = "qwertyuiop";
    let midddleRow = "asdfghjkl";
    let bottomRow = "zxcvbnm";
    
    let wordsArray: number[][] = [];

    words.map( (word) => {
        let chars = word.split('');
        let charRow =  [];
        chars.map( (char) => {
            let lowerCaseForm = char.toLowerCase();
            if( topRow.indexOf( lowerCaseForm ) != -1 ){ 
                charRow.push( 0 );
            }
            else if( midddleRow.indexOf( lowerCaseForm ) != -1 ){ 
                charRow.push( 1 );
            }
            else if( bottomRow.indexOf( lowerCaseForm ) != -1 ) {
                charRow.push( 2 );
            }
        });      
        wordsArray.push( charRow );  
    } );
    
    let wordArraySet = wordsArray.map(
        (word) => { 
            return [...new Set(word)]
        }).map( (word,index) => {
                if( word.length === 1 ){ 
                    return index 
                }
            }).filter( ( word ) => { return word != undefined } );
    let returnableArray = [];
    wordArraySet.map( ( word ) => { returnableArray.push( words[word] ); } );
    return returnableArray; 
    
};  
