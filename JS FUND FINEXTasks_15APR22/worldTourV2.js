function worldTour(arr) {
    let stops = arr.shift();
   
    for (let commands of arr) {
      let token = commands.split(":");
      let [comm, p1, p2] = token;
   
      if (comm === "Travel") {
        console.log(`Ready for world tour! Planned stops: ${stops}`);
      } else if (comm === "Add Stop") {
        if (stops[p1] !== undefined) {
          let start = stops.substring(0, p1);
          let end = stops.substring(p1);
          stops = start + p2 + end;
          console.log(stops);
        }
      } else if (comm === "Remove Stop") {
        //   if (p1 > p2) {
        //     let temp = p1;
        //     p1 = p2;
        //     p2 = temp;
        //   }
        p1 = Number(p1);
        p2 = Number(p2);
   
        if (
          p1 >= 0 &&
          p1 <= stops.length - 1 &&
          p2 >= 0 &&
          p2 <= stops.length - 1
        ) {
          // let start = stops.substring(0, Number(p1));
          // let end = stops.substring(Number(p2) + 1);
          // stops = start + end;
          let removed = stops.substring(p1, p2 + 1);
          stops = stops.replace(removed, "");
          console.log(stops);
        } else {
          console.log(stops);
        }
      } else if (comm === "Switch") {
        // if (stops.includes(p1)) {
        //   while (stops.includes(p1)) {
        //     stops = stops.replace(p1, p2);
        //   }
        //   console.log(stops);
        // }
        if (stops.includes(p1)) {
          stops = stops.replace(p1, p2);
          console.log(stops);
        } else {
          console.log(stops);
        }
      }
    }
  }