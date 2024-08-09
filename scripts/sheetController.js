document.getElementById("sheetTrigger").addEventListener("click", () => {
  const sheet = document.getElementById("sheet");

  for (let i = -400; i <= 0; i += 5) {
    sheet.style.right = `${i}px`;
  }
});

document.getElementById("sheetClose").addEventListener("click", () => {
  const sheet = document.getElementById("sheet");

  for (let i = 0; i >= -400; i -= 2) {
    sheet.style.right = `${i}px`;
  }
});
