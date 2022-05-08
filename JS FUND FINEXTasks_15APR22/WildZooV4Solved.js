function wildZoo(input) {
    let obj = {};
  
    while (input[0] != "EndDay") {
      let [command, p1] = input.shift().split(": ");
      if (command == "Add") {
        let [name, needFood, area] = p1.split("-");
        needFood = Number(needFood);
        if (!obj.hasOwnProperty(name)) {
          obj[name] = {
            needFood: 0,
            area: "",
            objArr: { area, name },
          };
        }
        obj[name].needFood += needFood;
        obj[name].area = area;
        obj[name].objArea = area;
        obj[name].objArea = name;
      } else if (command == "Feed") {
        let [name, needFoods] = p1.split("-");
        needFoods = Number(needFoods);
        if (obj.hasOwnProperty(name)) {
          obj[name].needFood -= needFoods;
  
          if (obj[name].needFood <= 0) {
            console.log(`${name} was successfully fed`);
            delete obj[name];
          }
        }
      }
    }
  
    console.log("Animals:");
    let rezult = Object.entries(obj);
    for (let kvp of rezult) {
      console.log(`${kvp[0]} -> ${kvp[1].needFood}g`);
    }
    console.log(`Areas with hungry animals:`);
    let objs = {};
    for (let kvp of rezult) {
      let areas = kvp[1].area;
      let names = kvp[0];
      if (!objs.hasOwnProperty(areas)) {
        objs[areas] = [];
      }
      objs[areas].push(names);
    }
    let rezult1 = Object.entries(objs);
    for (let kvs of rezult1) {
      console.log(`${kvs[0]}: ${kvs[1].length}`);
    }
  }

  
  wildZoo([
    "Add: Adam-4500-ByTheCreek",
    "Add: Maya-7600-WaterfallArea",
    "Add: Maya-1230-WaterfallArea",
    "Feed: Jamie-2000",
    "EndDay",
  ]);
  
  console.log(`--------`);
  
  wildZoo([
    "Add: Jamie-600-WaterfallArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay",
  ]);
  
  console.log(`---------`);
  
  wildZoo([
    "Add: Bonie-3490-RiverArea",
    "Add: Sam-5430-DeepWoodsArea",
    "Add: Bonie-200-RiverArea",
    "Add: Maya-4560-ByTheCreek",
    "Feed: Maya-2390",
    "Feed: Bonie-3500",
    "Feed: Johny-3400",
    "Feed: Sam-5500",
    "EndDay",
  ]);
  