

function phone(input){
    let text = input[0]
        let patern = /(?:\s|^)+359( |-)2\1\d{3}\1\d{4}\b/g;
    
    
        let match = patern.exec(text)
        let result = [];
    
        while(match != null){
    
            result.push(match[0].trim())
            match = patern.exec(text)
        }
    
        console.log(result.join(', '))
    }
    