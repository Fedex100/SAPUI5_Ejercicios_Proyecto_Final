sap.ui.define(
  [
    "com/te/proyectoFinal/controller/BaseController",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("com.te.proyectoFinal.controller.acttracker.Acttracker", {
      onInit: function () {
        let myActTrackerModel = new JSONModel("../model/acttracker.json");
        this.getView().setModel(myActTrackerModel, "acttracker");
        let myViewConfig = {
          table: true,
          calendar: false,
        };
        let myViewModel = new JSONModel(myViewConfig);
        this.getView().setModel(myViewModel, "view");
      },
      formatDate: function(input){
        return new Date(input);
      },
      formatState: function(input){
        let currentDate = new Date();
        let inputDate= new Date(input);
        if (inputDate < currentDate){
        return 'Success';
        } else if (inputDate > currentDate){
          return 'Warning';
        }else{
          return 'Error';
        }
      },


      handleMoreLinkPress: function(oEvent) {
			var oDate = oEvent.getParameter("date"),
				oSinglePlanningCalendar = this.getView().byId("SPC1");

			oSinglePlanningCalendar.setSelectedView(oSinglePlanningCalendar.getViews()[2]);

    }
    


    });
  }
);