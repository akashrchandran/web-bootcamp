searchInput = document.getElementById("searchInput");
const button = document.querySelector(".button");
const search = "Who is Akash R Chandran ?"

window.onload = async function () {
    searchInput.focus();
    timer = setInterval(function () {
        searchInput.value = search.substring(0, searchInput.value.length + 1);
        if (searchInput.value === search) {
          clearInterval(timer);
          button.classList.add("animate");
        }
    }, 150);
}

button.addEventListener("click", function () {
    window.location.href = `https://www.google.com/search?q=${search}`;
});
