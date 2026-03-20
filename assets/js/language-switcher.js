// Language switcher - must run early to prevent content flash.

let getLang = () => {
  let lang = localStorage.getItem("lang");
  if (lang !== "en" && lang !== "ko") lang = "en";
  return lang;
};

let setLang = (lang) => {
  localStorage.setItem("lang", lang);
  document.documentElement.setAttribute("data-lang", lang);
};

let toggleLang = () => {
  setLang(getLang() === "en" ? "ko" : "en");
};

let initLang = () => {
  setLang(getLang());

  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("lang-toggle");
    if (btn) btn.addEventListener("click", toggleLang);
  });
};
