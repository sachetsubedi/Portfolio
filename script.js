document.getElementById("sheetClose").addEventListener("click", () => {
  document.getElementById("sheet").style.right = "-100vw";
  document.getElementById("sheet").style.display = "none";
});

document.getElementById("sheetTrigger").addEventListener("click", () => {
  document.getElementById("sheet").style.display = "block";
  document.getElementById("sheet").style.right = "0";
});
