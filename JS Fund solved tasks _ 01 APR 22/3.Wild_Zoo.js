function solve(input) {
    let list = {};
    let areas = {}
    while (input[0] !== "EndDay") {
        let line = input.shift();
        let [command, params] = line.split(": ");
        let [name, par2, par3] = params.split("-");
        if (command == "Add") {
            par2 = Number(par2);
            if (!list.hasOwnProperty(name)) {
                list[name] = {
                    food: 0,
                    area: par3,
                };
                areas[name] = list[name].area
                areas[name] += 1

                areas[list[name].area] += 1;
                list[name].food += par2;
            } else {
                list[name].food += par2;
            }
        } else if (command == "Feed") {
            par2 = Number(par2);
            if (list.hasOwnProperty(name)) {
                list[name].food -= par2;
                if (list[name].food <= 0) {
                    delete list[name];
                    console.log(`${name} was successfully fed`);
                }
            }
        }
    }

    for (let name in list) {
        console.log(`${name} -> ${list[name].food}g`);
    }
}
solve(["Add: Jamie-600-WaterfallArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay"])
