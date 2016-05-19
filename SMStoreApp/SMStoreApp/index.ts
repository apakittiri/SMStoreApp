/// <reference path="ts/globalize.d.ts" />
/// <reference path="ts/jquery.d.ts" />
/// <reference path="ts/knockout.d.ts" />
/// <reference path="ts/dx.all.d.ts" />
/// <reference path="index.d.ts" />

interface External { Notify(arg: string): any; }

module SMStoreApp {
    $(function() {
        // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
        // DevExpress.devices.current({ platform: "generic" });

        $(document).on("deviceready", function () {
            navigator["splashscreen"].hide();
            if (window["devextremeaddon"]) {
                window["devextremeaddon"].setup();
            }
            $(document).on("backbutton", function () {
                DevExpress.processHardwareBackButton();
            });
        });

        function onNavigatingBack(e) {
            if (e.isHardwareButton && !SMStoreApp.app.canBack()) {
                e.cancel = true;
                exitApp();
            }
        }

        function exitApp() {
            switch (DevExpress.devices.real().platform) {
                case "android":
                    navigator["app"].exitApp();
                    break;
                case "win":
                    window.external.Notify("DevExpress.ExitApp");
                    break;
            }
        }

        app = new DevExpress.framework.html.HtmlApplication({
            namespace: SMStoreApp,
            navigation: config.navigation,
            layoutSet: DevExpress.framework.html.layoutSets[config.layoutSet],
            commandMapping: config.commandMapping
        });
        app.router.register(":view/:id", { view: "home", id: undefined });
        SMStoreApp.app.on("navigatingBack", onNavigatingBack);
        app.navigate();
    });
}