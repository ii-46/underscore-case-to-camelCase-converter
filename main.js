"use strict";

const btnConvert = document.querySelector("#convert-btn");
const textarea = document.querySelector("#underscorecase-text");
btnConvert.addEventListener("click", () => {
  convertText(textarea.value);
});

function convertText(inputText) {
  let resultList = document.querySelector("#result-list");
  let tackleList = document.querySelector("#tackle-list");
  if (!inputText || (!inputText.split("\n").length > 0) || !inputText.includes("_")) { 
    resultList.innerHTML = "type some \"<b>underscore_case</b>\" above";
    tackleList.innerHTML = "";
} else {
  const underscoreCase = inputText;
  const separate_line = underscoreCase.split("\n");
  const camelCase = [];
  const stickerTackle = [];
  let sticker = "";
  for (let i = 0; i < separate_line.length; i++) {
    let cleanText;
    if (separate_line[i].includes(" ")) {
      cleanText = separate_line[i].replaceAll(" ", "");
      cleanText = cleanText.split("_");
      cleanText = [cleanText[0].toLowerCase(), cleanText[1][0].toUpperCase() + cleanText[1].toLowerCase().slice(1, cleanText[1].length)
      ].join("");
      sticker += "✅";
      camelCase.push(cleanText);
      stickerTackle.push(sticker);
    } else {
     cleanText = separate_line[i].split("_");
     cleanText = [cleanText[0].toLowerCase(), cleanText[1][0].toUpperCase() + cleanText[1].toLowerCase().slice(1, cleanText[1].length)
    ].join("");
    sticker += "✅";
    camelCase.push(cleanText);
    stickerTackle.push(sticker);
  }
  }
   let lsResult = "";
   let lsTackle = "";
  for (let i = 0; i < camelCase.length; i++) {
   lsResult += `<li>${camelCase[i]}</li>`;
   lsTackle += `<li>${stickerTackle[i]}</li>`;
  }
  resultList.innerHTML = lsResult;
  tackleList.innerHTML = lsTackle;
}
}
