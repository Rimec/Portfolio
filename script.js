document.addEventListener('DOMContentLoaded', function () {
  function updatePageLanguage(lang) {
    document.querySelectorAll('[data-lang="pt"]').forEach(el => {
      el.style.display = lang === 'pt' ? '' : 'none';
    });
    document.querySelectorAll('[data-lang="en"]').forEach(el => {
      el.style.display = lang === 'en' ? '' : 'none';
    });
    // Atualiza o texto do dropdown
    document.getElementById('dropdownLang').textContent = lang === 'pt' ? 'Idioma' : 'Language';
  }

  function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    updatePageLanguage(lang);
  }

  const savedLang = localStorage.getItem('lang') || 'pt';
  setLanguage(savedLang);

  document.querySelectorAll('.dropdown-item').forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      const lang = this.getAttribute('href').replace('?lang=', '');
      setLanguage(lang);
    });
  });
});