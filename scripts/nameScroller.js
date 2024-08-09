const name = "SACHET SUBEDI";
const display = document.getElementById("scrollDisplay");

const displayNamme = (name) => {
  display.innerHTML = "";
  const splittedName = name.split("");
  splittedName.forEach((letter, index) => {
    setTimeout(() => {
      display.innerHTML += letter;
    }, 100 * index);
    if (index === splittedName.length - 1)
      setTimeout(() => displayNamme(name), 2000);
  });
};

displayNamme(name);
