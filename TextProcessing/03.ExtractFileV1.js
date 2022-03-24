function extractFile ( stringInput) {
 
    let inputArr = stringInput.split("\\");
    let lastLine = inputArr[inputArr.length-1];
    let lastElements = lastLine.split(".");
    // console.log(lastElements);
    let fileName = lastElements[0];
    let fileExtension = lastElements[1];
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);

}

extractFile('C:\\Internal\\training-internal\\Template.pptx');

console.log(`******`);

extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');