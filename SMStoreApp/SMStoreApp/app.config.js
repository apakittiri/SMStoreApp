// NOTE object below must be a valid JSON
window.SMStoreApp = $.extend(true, window.SMStoreApp, {
    "config": {
        "layoutSet": "navbar",
        "navigation": [
            {
                title: "Home",
                onExecute: "#home",
                icon: "home"
            },
            {
                title: "About",
                onExecute: "#about",
                icon: "info"
            }
        ]
    }
});