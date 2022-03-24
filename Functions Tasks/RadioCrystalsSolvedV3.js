function solve(input) {

    let targetThickness = input[0];

    for (let chunkIndex = 1; chunkIndex < input.length; chunkIndex++) {
        let currentChunkThickness = input[chunkIndex];
        let cutsCount = 0; let lapsCount = 0; let grindsCount = 0; let etchesCount = 0;
 
        console.log(`Processing chunk ${currentChunkThickness} microns`);
 
        while (currentChunkThickness != targetThickness) { //? изтъняване
            if (currentChunkThickness / 4 >= targetThickness - 1) {
                currentChunkThickness /= 4;
                cutsCount++;
 
                if (currentChunkThickness / 4 < targetThickness - 1) {
                    console.log(`Cut x${cutsCount}`);
                    console.log('Transporting and washing');
                    currentChunkThickness = Math.floor(currentChunkThickness);
                }
            } else if (currentChunkThickness * 0.8 >= targetThickness - 1) {
                currentChunkThickness *= 0.8;
                lapsCount++;
 
                if (currentChunkThickness * 0.8 < targetThickness - 1) {
                    console.log(`Lap x${lapsCount}`);
                    console.log('Transporting and washing');
                    currentChunkThickness = Math.floor(currentChunkThickness);
                }
            } else if (currentChunkThickness - 20 >= targetThickness - 1) {
                currentChunkThickness -= 20;
                grindsCount++;
 
                if (currentChunkThickness - 20 < targetThickness - 1) {
                    console.log(`Grind x${grindsCount}`);
                    console.log('Transporting and washing');
                    currentChunkThickness = Math.floor(currentChunkThickness);
                }
            } else if (currentChunkThickness - 2 >= targetThickness - 1) {
                currentChunkThickness -= 2;
                etchesCount++;
 
                if (currentChunkThickness - 2 < targetThickness - 1) {
                    console.log(`Etch x${etchesCount}`);
                    console.log('Transporting and washing');
                    currentChunkThickness = Math.floor(currentChunkThickness);
                }
            }
 
            if (targetThickness - currentChunkThickness == 1) {
                currentChunkThickness++;
                console.log('X-ray x1');
                break;
            }
        }
 
        console.log(`Finished crystal ${targetThickness} microns`);
    }
}
solve ( [1375, 50000]);