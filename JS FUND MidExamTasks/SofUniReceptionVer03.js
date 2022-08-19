function sofUniReception (arrayOfEmplCapacity){
     let firstEmpl = Number(arrayOfEmplCapacity.shift());
     let secondEmpl = Number(arrayOfEmplCapacity.shift());
     let thirdEmpl = Number(arrayOfEmplCapacity.shift());
     let totalEficiency = firstEmpl + secondEmpl + thirdEmpl;
     let totalStudents = Number(arrayOfEmplCapacity.pop());
     let time = 0;

     while (totalStudents > 0 ) {
        time ++;
        if( time % 4 != 0){
            totalStudents -= totalEficiency;
        }
     }


    console.log(`Time needed: ${time}h.`);
}

sofUniReception (['5','6','4','20']);
sofUniReception (['1','2','3','45']);
sofUniReception (['3','2','5','0']);