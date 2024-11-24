const buildnowggBtn = document.getElementById("buildnowgg-button");
const gamesBtn = document.getElementById("games-button");
const githubBtn = document.getElementById("github-button");
const themeToggleBtn = document.getElementById("theme-toggle");
const lightIcon = document.getElementById("theme-toggle-light-icon");
const darkIcon = document.getElementById("theme-toggle-dark-icon");

function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
        lightIcon.classList.add("hidden");
        darkIcon.classList.remove("hidden");
    } else {
        lightIcon.classList.remove("hidden");
        darkIcon.classList.add("hidden");
    }
    localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    setTheme(savedTheme);
} else {
    setTheme("dark");
}

buildnowggBtn.addEventListener("click", () => {
    const url = "/BuildNowGG";
    window.open(url, "_blank").focus();
});

gamesBtn.addEventListener("click", () => {
    const url = "/games/";
    window.open(url, "_blank").focus();
});

githubBtn.addEventListener("click", () => {
    const url = "https://github.com/cloudirector/";
    window.open(url, "_blank").focus();
});

themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
});
