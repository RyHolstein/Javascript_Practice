





let spiralCreator = (rows) => {
    
    let current = 0;
    let rowLength = 10; 

    //for creating the spiral rows
    //decided to print inside of this function
    let createRow = (current) => {
        let str = ''
        for (var i = 0; i <= rowLength; i++) {
            i == current ? str += 'V' : str += '*'
        }  
        console.log(str)
        return str;  
    }

    for (let i = 0; i <= rows; i++) {
        createRow(current)
        current += 1;
        if ( current > rowLength ) { current = 0; }
    }

}


spiralCreator(50)






