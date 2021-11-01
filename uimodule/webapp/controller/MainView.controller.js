sap.ui.define([
  "com/te/portfolio/controller/BaseController",
  "sap/ui/model/json/JSONModel"

], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("com.te.portfolio.controller.MainView", {
      onInit: function() {
        let oModel = new JSONModel("../model/data.json");
        this.getView().setModel(oModel, "portfolio");
      }


    });
});