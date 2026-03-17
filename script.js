const langToggle = document.getElementById("lang-toggle");

const translations = {
  "ar": {
    "home":"الرئيسية",
    "store":"المتجر",
    "about":"من نحن",
    "partners":"شركاؤنا",
    "contact":"تواصل معنا",
    "welcome":"مرحبًا بك في متجر Shepoo العالمي",
    "slogan":"نسبة من أرباحنا لفقراء وكادحي الأرض",
    "footer":"© 2026 Shepoo Global",
    "about-text":"شركة Shepoo Global منصة تجارة إلكترونية تربط الأسواق العالمية وتدعم الإنسانية"
  },
  "en": {
    "home":"Home",
    "store":"Store",
    "about":"About",
    "partners":"Partners",
    "contact":"Contact",
    "welcome":"Welcome to Shepoo Global Store",
    "slogan":"A percentage of our profits for the poor and working people",
    "footer":"© 2026 Shepoo Global",
    "about-text":"Shepoo Global is an e-commerce platform connecting global markets and supporting humanitarian initiatives"
  }
};

let currentLang = "ar";

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  langToggle.textContent = currentLang === "ar" ? "English" : "عربي";
  updateText();
});

function updateText() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if(translations[currentLang][key]) el.textContent = translations[currentLang][key];
  });
}

updateText();
