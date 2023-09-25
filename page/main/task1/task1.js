const color = document.querySelector("#color");
const language = document.querySelector("#language");
const button = document.querySelector(".btn");
const title = document.querySelector("h1");
const colorLabel = document.querySelector(".color-label");
const languageLabel = document.querySelector(".language-label");

function applyColor(color) {
  document.body.style.backgroundColor = color;
}

function applyLanguage(language) {
  const translations = {
    en: {
      title: "Settings",
      colorLabel: "Color:",
      languageLabel: "Language:",
      button: "Save",
    },
    ru: {
      title: "Настройки",
      colorLabel: "Цвет:",
      languageLabel: "Язык:",
      button: "Сохранить",
    },
  };

  title.textContent = translations[language].title || "Settings";
  colorLabel.textContent = translations[language].colorLabel || "Color:";
  languageLabel.textContent =
    translations[language].languageLabel || "Language:";
  button.textContent = translations[language].button || "Save:";
}

button.addEventListener("click", () => {
  const selectedColor = color.value;
  const selectedLanguage = language.value;

  sessionStorage.setItem("selectedColor", selectedColor);
  sessionStorage.setItem("selectedLanguage", selectedLanguage);

  applyColor(selectedColor);
  applyLanguage(selectedLanguage);
});
