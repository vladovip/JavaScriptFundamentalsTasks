function destination(input) {
    let travelPoints = 0;
    let arr = [];
    let destinations = input.match(/(=|\/)([A-Z][A-Za-z]{2,})(\1)/gm);
   
    if (destinations != null) {
      for (let destinationx of destinations) {
        let dest = destinationx.slice(1, -1);
        arr.push(dest);
        for (let i = 0; i < dest.length; i++) {
          travelPoints += 1;
        }
      }
      console.log(`Destinations: ${arr.join(", ")}`);
      console.log(`Travel Points: ${travelPoints}`);
    } else {
      console.log(`Destinations:`);
      console.log(`Travel Points: 0`);
    }
  }
  destination("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
  destination("ThisIs some InvalidInput");