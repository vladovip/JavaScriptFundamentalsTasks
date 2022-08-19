function biscuitFactory(input) {
  let buisciutsProducedPerDayWorker = input.shift();
  let countWorkersInFactory = input.shift();
  let numberOfCompetengBiscuits30days = input.shift();
  let days = 1;
  let totalMyProdcution = 0;

  while (days <= 30) {
    if (days % 3 !== 0) {
      totalMyProdcution += Math.floor(
        buisciutsProducedPerDayWorker * countWorkersInFactory
      );
    }
    if (days % 3 === 0) {
      totalMyProdcution += Math.floor(
        buisciutsProducedPerDayWorker * countWorkersInFactory * 0.75
      );
    }
    days++;
  }
  console.log(
    `You have produced ${totalMyProdcution} biscuits for the past month.`
  );

  let differenceBetweenFactories = totalMyProdcution - numberOfCompetengBiscuits30days;
  let percentage = 0;


  if (differenceBetweenFactories > 0) {
    percentage = (
      (differenceBetweenFactories / numberOfCompetengBiscuits30days) *100).toFixed(2);
      console.log(`You produce ${percentage} percent more biscuits.`);
  } 
  else if (differenceBetweenFactories < 0) {
    percentage = (((numberOfCompetengBiscuits30days-totalMyProdcution) / numberOfCompetengBiscuits30days) *100).toFixed(2);
    console.log(`You produce ${percentage} percent less biscuits.`);
  }
}

 biscuitFactory([78, 8, 16000]);
 biscuitFactory([65, 12, 26000]);
