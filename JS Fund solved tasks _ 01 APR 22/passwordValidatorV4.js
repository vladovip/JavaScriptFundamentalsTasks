function solve(input) {
    let password = input.shift()
   
    while (input[0] !== 'Complete') {
      let line = input.shift()
      let [command, par1, par2] = line.split(' ')
   
      if (command == 'Make') {
        let index = Number(par2)
        let letter = password[index]
        let lower = letter.toLowerCase()
        let upper = letter.toUpperCase()
        if (par1 == 'Upper') {
          password = password.replace(letter, upper)
          console.log(password);
        } else if (par1 == 'Lower') {
          password = password.replace(letter, lower)
          console.log(password);
        }
   
      } else if (command == 'Insert') {
        let index = par1
        if (password[index] !== undefined) {
          let left = password.slice(0, index)
          let right = password.slice(index)
          password = left + par2 + right
          console.log(password);
        }
      } else if (command == 'Replace') {
        let value = Number(par2)
        if (password.includes(par1)) {
          let charAscii = par1.charCodeAt()
          let sum = charAscii + value
          let newLetter = String.fromCharCode(sum)
          password = password.split(par1).join(newLetter)
          console.log(password);
        }
      } else if (command == 'Validation') {
        if (password.length < 8) {
          console.log(`Password must be at least 8 characters long!`);
        }
        let pattern = /\W/g
        if (pattern.exec(password) !== null) {
          console.log(`Password must consist only of letters, digits and _!`);
        }
        let pattern2 = /[A-Z]/
        if (pattern2.exec(password) == null) {
          console.log(`Password must consist at least one uppercase letter!`);
        }
        let pattern3 = /[a-z]/
        if (pattern2.exec(password) == null) {
          console.log(`Password must consist at least one lowercase letter!`);
        }
        let pattern4 = /\d/
        if (pattern2.exec(password) == null) {
          console.log(`Password must consist at least one digit!`);
        }
      }
    }
  }
   
  solve(['invalidpassword*',
    'Add 2 p',
    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete'])
 