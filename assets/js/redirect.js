document.addEventListener("DOMContentLoaded", function(event) {
    var language = window.navigator.userLanguage || window.navigator.language;
    if (language === "de" || language === "de-DE") {
        window.location.replace("/de/");
    } else if (language === "fr" || language === "fr-FR") {
        window.location.replace("/fr/");
    } else {
        window.location.replace("/en/");
    }
});