document.addEventListener("mousemove", (e) => {
  const follower = document.getElementById("mouseFollower");
  follower.style.top = e.clientY - 15 + window.scrollY + "px";
  follower.style.left = e.clientX - 15 + "px";
});
document.addEventListener("click", (e) => {
  const follower = document.getElementById("mouseFollower");
  follower.style.backgroundColor = "var(--primary-color)";
  setTimeout(() => {
    follower.style.backgroundColor = "transparent";
  }, 200);
});
