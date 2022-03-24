function solve (input){

let employees = {}
input.forEach (name => {employees [name] = name.length;});

for ( let name in employees){
    console.log(`Name: ${name} -- Personal Number: ${employees[name]}`)
}


    

}
solve ( [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );


/*Name: Silas Butler -- Personal Number: 12
Name: Adnaan Buckley -- Personal Number: 14
Name: Juan Peterson -- Personal Number: 13
Name: Brendan Villarreal -- Personal Number: 18*/
