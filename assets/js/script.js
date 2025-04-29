let search = document.getElementById("search");
let searchbar = document.getElementById("searchbar");
let closes = document.getElementById("close");

search.addEventListener("click", function () {
  searchbar.style.display = "block";
});
closes.addEventListener("click", function () {
  searchbar.style.display = "none";
});
