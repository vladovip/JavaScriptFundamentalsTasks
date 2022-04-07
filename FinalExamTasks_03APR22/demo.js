
let pattern2 = /[A-Z]+/g
      let isValid = pattern2.test(password)
    //   console.log(match);
      if (isValid !== true) {
        console.log("Password must consist at least one uppercase letter!");
      }