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

if (window.location.href.startsWith("/de/") || language === "de" || language === "de-DE") {
    frueNavLogoHeading.href = "/de/";
    frueNavLogoHeading.innerHTML = `
            <img src="../assets/imgs/frue-logo.png" alt="FRUE Projekt Logo">
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
} else if (window.location.href.startsWith("/fr/") || language === "fr" || language === "fr-FR") {
    frueNavLogoHeading.href = "/fr/";
    frueNavLogoHeading.innerHTML = `
            <img src="../assets/imgs/frue-logo.png" alt="Logo du projet FRUE">
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
} else {
    frueNavLogoHeading.href = "/en/";
    frueNavLogoHeading.innerHTML = `
            <img src="../assets/imgs/frue-logo.png" alt="FRUE Project Logo">
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
}