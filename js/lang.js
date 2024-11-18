const translations = {};

// Charger les fichiers JSON des traductions
async function loadTranslations(lang) {
  const response = await fetch(`../locales/${lang}.json`);
  translations[lang] = await response.json();
}

// Mettre à jour les textes en fonction de la langue
function updateTexts(lang) {
  document.getElementById("title").textContent = translations[lang].title;
  document.getElementById("metaDescription").textContent = translations[lang].metaDescription;
  document.getElementById("ogTitle").textContent = translations[lang].ogTitle;

  document.getElementById("header-about").textContent = translations[lang].headerAbout;
  document.getElementById("header-work").textContent = translations[lang].headerWork;
  document.getElementById("header-contact").textContent = translations[lang].headerContact;
  document.getElementById("downloadCv").textContent = translations[lang].downloadCv;

  document.getElementById("heroTitle").textContent = translations[lang].heroTitle;
  document.getElementById("heroDescription").textContent = translations[lang].heroDescription;
  document.getElementById("location").textContent = translations[lang].location;
  document.getElementById("availableForWork").textContent = translations[lang].availableForWork;

  document.getElementById("aboutTitle").textContent = translations[lang].aboutTitle;
  document.getElementById("aboutDescriptionTitle").textContent = translations[lang].aboutDescriptionTitle;
  document.getElementById("aboutDescription").innerHTML = translations[lang].aboutDescription;

  document.getElementById("skillsTitle").textContent = translations[lang].skillsTitle;
  document.getElementById("skillsDescription").textContent = translations[lang].skillsDescription;

  document.getElementById("experienceTitle").textContent = translations[lang].experienceTitle;
  document.getElementById("experienceDescription").textContent = translations[lang].experienceDescription;
  document.getElementById("experienceLiebherr-title").textContent = translations[lang].experienceLiebherr.title;
  document.getElementById("experienceLiebherr-tasks-first").textContent = translations[lang].experienceLiebherr.tasks.first;
  document.getElementById("experienceLiebherr-tasks-second").textContent = translations[lang].experienceLiebherr.tasks.second;
  document.getElementById("experienceLiebherr-periode").textContent = translations[lang].experienceLiebherr.periode;
  document.getElementById("experienceSchool-title").textContent = translations[lang].experienceSchool.title;
  document.getElementById("experienceSchool-tasks-first").textContent = translations[lang].experienceSchool.tasks.first;
  document.getElementById("experienceSchool-tasks-second").textContent = translations[lang].experienceSchool.tasks.second;
  document.getElementById("experienceSchool-periode").textContent = translations[lang].experienceSchool.periode;

  document.getElementById("workTitle").textContent = translations[lang].workTitle;
  document.getElementById("workDescription").textContent = translations[lang].workDescription;
  document.getElementById("work1-title").textContent = translations[lang].work1.title;
  document.getElementById("work1-description").textContent = translations[lang].work1.description;
  document.getElementById("work2-title").textContent = translations[lang].work2.title;
  document.getElementById("work2-description").textContent = translations[lang].work2.description;
  document.getElementById("work3-title").textContent = translations[lang].work3.title;
  document.getElementById("work3-description").textContent = translations[lang].work3.description;



  document.getElementById("testimonialTitle").textContent = translations[lang].testimonialTitle;

  document.getElementById("contactTitle").textContent = translations[lang].contactTitle;
  document.getElementById("contactDescription").textContent = translations[lang].contactDescription;
  document.getElementById("contactLinks").textContent = translations[lang].contactLinks;

  document.getElementById("footerDescription").textContent = translations[lang].footerDescription;

}

function updateIcon(lang) {
  const icon = document.getElementById("language-toggle-icon");

  if (lang === 'fr') {
    icon.src = "assets/icons/Name=icon-fr-flag.svg";
    icon.alt = "French";
  } else {
    icon.src = "assets/icons/Name=icon-en-flag.svg";
    icon.alt = "English";
  }
}


// Fonction principale pour changer de langue
async function changeLanguage(lang) {
  if (!translations[lang]) {
    await loadTranslations(lang);
  }
  updateTexts(lang); // Mettre à jour les textes
  updateIcon(lang);
  document.documentElement.lang = lang; // Changer l'attribut `lang`
  localStorage.setItem('preferredLang', lang); // Sauvegarder la langue dans le stockage local
}

// Initialisation au chargement de la page
(async function initialize() {
  const savedLang = localStorage.getItem('preferredLang') || 'en';
  await changeLanguage(savedLang);

  const languageToggleBtn = document.getElementById('language-toggle');
  languageToggleBtn.addEventListener('click', () => {
    const newLang = document.documentElement.lang === 'en' ? 'fr' : 'en';
    changeLanguage(newLang);
  });
})();
