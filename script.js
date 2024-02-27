const btn = document.querySelector(".btn");
const cubeImage = document.querySelector(".cube-image");
const resultSection = document.querySelector(".result");

let counter = 0;
let clicks = 0;

// Funkce
const createParagraph = (paragraphContent, whereToAdd) => {
  const p = document.createElement("p");
  p.textContent = paragraphContent;
  whereToAdd.append(p);
};

btn.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  cubeImage.src = "img/" + randomNumber + ".jpg";
  counter = counter + randomNumber;

  resultSection.textContent = "";
  createParagraph(counter, resultSection);

  // Počet pokusů - počet kliknutí
  clicks = clicks + 1;
  console.log(clicks);

  // Hodnotíme stav hry - hrát dál, vítězství, prohra
  if (clicks < 5 && counter < 20) {
    createParagraph("Házejte dál", resultSection);
  } else if (clicks <= 5 && counter >= 20) {
    createParagraph("Vyhráli jste", resultSection);
    btn.style.visibility = "hidden";
  } else if (clicks >= 5 && counter <= 20) {
    createParagraph("Prohráli jste", resultSection);
    btn.style.visibility = "hidden";
  }
});
