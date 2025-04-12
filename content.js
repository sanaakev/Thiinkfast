
const corrections = {
  "definately": "definitely",
  "recieve": "receive",
  "adress": "address",
  "teh": "the",
};

function checkAndCorrectInput(input) {
  let words = input.value.split(" ");
  let correctedWords = words.map(word => corrections[word] || word);
  input.value = correctedWords.join(" ");
}

document.addEventListener("input", event => {
  const active = document.activeElement;
  if (active && (active.tagName === "TEXTAREA" || active.tagName === "INPUT")) {
    clearTimeout(active._thiinkfastTimeout);
    active._thiinkfastTimeout = setTimeout(() => {
      checkAndCorrectInput(active);
    }, 1000);
  }
});
