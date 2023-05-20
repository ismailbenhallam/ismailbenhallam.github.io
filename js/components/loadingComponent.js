const LoadingComponent = function () {
    const loadingPage = document.createElement("div");
    loadingPage.id = "loadingPage";

    let logo = document.createElement("img");
    logo.src = "images/loader.png";
    logo.classList.add("rotating")
    loadingPage.appendChild(logo);

    loadingPage.style["position"] = "fixed";
    loadingPage.style["width"] = "100%";
    loadingPage.style["height"] = "100%";
    loadingPage.style["display"] = "flex";
    loadingPage.style["justifyContent"] = "center";
    loadingPage.style["alignItems"] = "center";
    loadingPage.style["top"] = "0";
    loadingPage.style["left"] = "0";
    loadingPage.style["text-align"] = "center";
    loadingPage.style["vertical-align"] = "middle";
    loadingPage.style["line-height"] = "90px";
    loadingPage.style["zIndex"] = "99";
    loadingPage.style["background-color"] = "white";
    document.body.appendChild(loadingPage);

    loadingPage.addEventListener('animationend', function() {
        loadingPage.remove();
    });

    window.addEventListener("load", () => {
        loadingPage.classList.add("fadeOut");
        document.getElementById("navbar-fixed").style.display = "flex"
    });
};

new LoadingComponent();