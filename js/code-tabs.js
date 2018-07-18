

function showLastSelectedCodingLanguage() {
  // select the language persisting in the local storage
  const language = localStorage.getItem('lastSelectedCodingLanguage');

  if (language) {
    $('.' + language).tab('show') // Select tab by name
  }
}


function listenToCodingLanguageTabSelection() {
  $('.code-nav-tabs a').on('click', function (e) {
    e.preventDefault();

    // put the selected tab link classes in an array
    const selectedTabClassList = $(this).attr('class').split(" ");

    // find the last selected coding language (example node-language or curl-language)
    const lastSelectedCodingLanguage = selectedTabClassList.find(function (element) {
      return element.includes('language');
    });

    // Persist in local storage so we can pre-select around the site
    if (localStorage) {
      localStorage.setItem('lastSelectedCodingLanguage', lastSelectedCodingLanguage);
    }
  });
}

$(document).ready(function () {
  listenToCodingLanguageTabSelection();
  showLastSelectedCodingLanguage();
});