function extractFile (stringInput) {
 
  let fileNameIndexStart = stringInput.lastIndexOf("\\") +1;
  let extensionStartIndex = stringInput.lastIndexOf(".") +1;
  let fileNameIndexEnd = extensionStartIndex - 1;
  let fileName = stringInput.substring(fileNameIndexStart,fileNameIndexEnd);
  let fileExtension = stringInput.substring(extensionStartIndex);
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${fileExtension}`);

}

extractFile('C:\\Internal\\training-internal\\Template.pptx');

console.log(`******`);

extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');