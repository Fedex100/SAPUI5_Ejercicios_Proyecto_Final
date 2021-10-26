sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("com.te.proyectoFinal.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "com.te.proyectoFinal",
                    async: true,
                    manifest: true
                }
            });
        }
    });
});
