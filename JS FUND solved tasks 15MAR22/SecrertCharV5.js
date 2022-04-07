
function solve(input) {
    let text = input.shift()
    while (input[0] != `Reveal`) {
        let workingpart = input.shift()
        let parts = workingpart.split(`:|:`)
 
        if (parts[0] == `ChangeAll`) {
            text = text.split(parts[1]).join(parts[2])
            console.log(text)
        } else if (parts[0] == `Reverse`) {
            let index=text.indexOf(parts[1])
            if (index!=-1) {
                let reverse=parts[1].split(``).reverse().join(``)
                let left= text.slice(0,index)
                text=left+reverse
                console.log(text)
            } else {
                console.log(`error`)
            }
 
        } else if (parts[0] == `InsertSpace`) {
               let left= text.slice(0,Number(parts[1]))
               let right=text.slice(Number(parts[1]))
               text=left+` `+right
               console.log(text)
        }
 
    }
    console.log(`You have a new text message: ${text}`)
}