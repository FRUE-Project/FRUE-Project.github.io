var language = window.navigator.userLanguage || window.navigator.language;
var frueNavLogoHeading = document.getElementById("frueNavLogoHeading");
var aboutFrueSidebarLink = document.getElementById("aboutFrueSidebarLink");
var frueWikiSidebarLink = document.getElementById("frueWikiSidebarLink");
var frueProjectsSidebarLink = document.getElementById("frueProjectsSidebarLink");
var fpkgProjectSidebarLink = document.getElementById("fpkgProjectSidebarLink");
var openFRUEProjectSidebarLink = document.getElementById("openFRUEProjectSidebarLink");
var homeNavBtn = document.getElementById("homeNavBtn");
var heading404Title = document.getElementById("content-title");
var description404Body = document.getElementById("content-description");
var docTitle = document.getElementsByTagName("title")[0];

if (window.location.href.startsWith("https://frue-project.github.io/de/") || language === "de" || language === "de-DE") {
    frueNavLogoHeading.href = "/de/";
    frueNavLogoHeading.innerHTML = `
            <img src="https://frue-project.github.io/assets/imgs/frue-logo.png" alt="FRUE Projekt Logo">
            FRUE Projekt
        `;

    aboutFrueSidebarLink.href = "/de/ueber";
    aboutFrueSidebarLink.innerHTML = "Über FRUE";

    frueWikiSidebarLink.href = "/de/wiki/";
    frueWikiSidebarLink.innerHTML = "Wiki";

    frueProjectsSidebarLink.href = "/de/projekte/";
    frueProjectsSidebarLink.innerHTML = "FRUE Projekte";

    fpkgProjectSidebarLink.href = "/de/projekte/fpkg";
    fpkgProjectSidebarLink.innerHTML = "&middot;&nbsp;fpkg";

    openFRUEProjectSidebarLink.href = "/de/projekte/openFRUE";
    openFRUEProjectSidebarLink.innerHTML = "&middot;&nbsp;openFRUE";

    homeNavBtn.href = "/de/";
    homeNavBtn.innerHTML = "Startseite";

    heading404Title.innerHTML = "404 &middot; Seite nicht gefunden";
    description404Body.innerHTML = "Die angeforderte Seite wurde nicht gefunden. Bitte überprüfen Sie die URL auf Tippfehler und versuchen Sie es erneut.";

    docTitle.innerHTML = "404 &middot; Seite nicht gefunden";
} else if (window.location.href.startsWith("https://frue-project.github.io/fr/") || language === "fr" || language === "fr-FR") {
    frueNavLogoHeading.href = "/fr/";
    frueNavLogoHeading.innerHTML = `
            <img src="https://frue-project.github.io/assets/imgs/frue-logo.png" alt="Logo du projet FRUE">
            Projet FRUE
        `;

    aboutFrueSidebarLink.href = "/fr/a-propos";
    aboutFrueSidebarLink.innerHTML = "À propos de FRUE";

    frueWikiSidebarLink.href = "/fr/wiki/";
    frueWikiSidebarLink.innerHTML = "Wiki";

    frueProjectsSidebarLink.href = "/fr/projets/";
    frueProjectsSidebarLink.innerHTML = "Projets FRUE";

    fpkgProjectSidebarLink.href = "/fr/projets/fpkg";
    fpkgProjectSidebarLink.innerHTML = "&middot;&nbsp;fpkg";

    openFRUEProjectSidebarLink.href = "/fr/projets/openFRUE";
    openFRUEProjectSidebarLink.innerHTML = "&middot;&nbsp;openFRUE";

    homeNavBtn.href = "/fr/";
    homeNavBtn.innerHTML = "Page d'accueil";

    heading404Title.innerHTML = "404 &middot; Page non trouvée";
    description404Body.innerHTML = "La page demandée n'a pas été trouvée. Veuillez vérifier l'URL pour les fautes de frappe et réessayer.";

    docTitle.innerHTML = "404 &middot; Page non trouvée";
} else {
    frueNavLogoHeading.href = "/en/";
    frueNavLogoHeading.innerHTML = `
            <img src="https://frue-project.github.io/assets/imgs/frue-logo.png" alt="FRUE Project Logo">
            FRUE Project
        `;

    aboutFrueSidebarLink.href = "/en/about";
    aboutFrueSidebarLink.innerHTML = "About FRUE";

    frueWikiSidebarLink.href = "/en/wiki/";
    frueWikiSidebarLink.innerHTML = "Wiki";

    frueProjectsSidebarLink.href = "/en/projects/";
    frueProjectsSidebarLink.innerHTML = "FRUE Projects";

    fpkgProjectSidebarLink.href = "/en/projects/fpkg";
    fpkgProjectSidebarLink.innerHTML = "&middot;&nbsp;fpkg";

    openFRUEProjectSidebarLink.href = "/en/projects/openFRUE";
    openFRUEProjectSidebarLink.innerHTML = "&middot;&nbsp;openFRUE";

    homeNavBtn.href = "/en/";
    homeNavBtn.innerHTML = "Home";

    heading404Title.innerHTML = "404 &middot; Page not found";
    description404Body.innerHTML = "The requested page was not found. Please check the URL for typos and try again.";

    docTitle.innerHTML = "404 &middot; Page not found";
}

if (window.location.href.startsWith("https://frue-project.github.io/wiki/") && (language === "de" || language === "de-DE")) {
    window.location.href = "https://frue-project.github.io/de/wiki/";
} else if (window.location.href.startsWith("https://frue-project.github.io/wiki/") && (language === "fr" || language === "fr-FR")) {
    window.location.href = "https://frue-project.github.io/fr/wiki/";
} else if (window.location.href.startsWith("https://frue-project.github.io/wiki/")) {
    window.location.href = "https://frue-project.github.io/en/wiki/";
}

if (window.location.href.startsWith("https://frue-project.github.io/wiki") && (language === "de" || language === "de-DE")) {
    window.location.href = "https://frue-project.github.io/de/wiki/";
} else if (window.location.href.startsWith("https://frue-project.github.io/wiki") && (language === "fr" || language === "fr-FR")) {
    window.location.href = "https://frue-project.github.io/fr/wiki/";
} else if (window.location.href.startsWith("https://frue-project.github.io/wiki")) {
    window.location.href = "https://frue-project.github.io/en/wiki/";
}