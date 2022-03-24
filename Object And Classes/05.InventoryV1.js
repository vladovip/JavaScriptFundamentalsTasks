function inventory(inputArr) {
  let heroes = [];

  for (let element of inputArr) {
    let info = element.split(" / ");
    let heroName = info[0];
    // console.log(heroName);
    let level = info[1];
    // console.log(level);
    let items = info[2];
    // console.log(items);
    // console.log(heroName,level,items);

    let currentHero = {
      heroName,
      level,
      items,
    };
    heroes.push(currentHero);
  }
  heroes.sort((a, b) => a.level - b.level);

  for (let hero of heroes) {
    console.log(`Hero: ${hero.heroName}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  }

}

inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
