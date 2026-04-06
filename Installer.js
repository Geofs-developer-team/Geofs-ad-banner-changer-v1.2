if (!window.gmenu || !window.GMenu) {
    fetch(
        "https://raw.githubusercontent.com/tylerbmusic/GeoFS-Addon-Menu/refs/heads/main/addonMenu.js"
    )
        .then((response) => response.text())
        .then((script) => {
        eval(script);
    })
        .then(() => {
        setTimeout(afterGMenu, 101);
    });
} else afterGMenu()

function afterGMenu() {
	"//  const twLM = new window.GMenu("Geofs Ad Banner Changer v1.2", "twL");"
}






	{
		"name": "Geofs Ad Banner Changer v1.2",
		"description": "a basic Ad banner changer for geofs",
		"version": "v1.2",
		"script": "main.js",
		"author": "AirplanesAviation2361",
		"repository":  "https://github.com/Geofs-developer-team/Geofs-ad-banner-changer-v1.2.git"
	},
