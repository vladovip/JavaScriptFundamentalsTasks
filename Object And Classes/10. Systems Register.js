
function orderedRegister(array) {

    let newRegister = [];
    for (let i = 0; i < array.length; i++) {
        let elements = array[i].split(' | ');
        //console.log(elements);
        let categoryProducts = {
            systemName: elements[0],
            componentName: elements[1],
            subcomponentName: elements[2],
        };
        
        newRegister.push(categoryProducts);
    }


    newRegister.sort((a, b) => a.systemName.localeCompare(b.systemName));


    /*
   let currentLetter = '';
   for (const categoryProducts of newRegister) {
       if (categoryProducts.systemName.charAt(0).toUpperCase() === currentLetter){
           console.log(`${categoryProducts.systemName}: ||| ${categoryProducts.componentName}`)
       }else {
           currentLetter = categoryProducts.systemName.charAt(0).toUpperCase();
           console.log(currentLetter);
           console.log(`  ${categoryProducts.systemName}: ${categoryProducts.componentName}`);
 
       }
   } */

}

orderedRegister(
    [
        'SULS | Main Site | Home Page',
        'SULS | Main Site | Login Page',
        'SULS | Main Site | Register Page',
        'SULS | Judge Site | Login Page',
        'SULS | Judge Site | Submittion Page',
        'Lambda | CoreA | A23',
        'SULS | Digital Site | Login Page',
        'Lambda | CoreB | B24',
        'Lambda | CoreA | A24',
        'Lambda | CoreA | A25',
        'Lambda | CoreC | C4',
        'Indice | Session | Default Storage',
        'Indice | Session | Default Security',

    ]);
