sap.ui.define([
  "com/te/proyectoFinal/controller/BaseController",
  "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("com.te.proyectoFinal.controller.countdown.Countdown", {
      onInit: function() {
         this.timer = {
          "days": 0,
          "hours":0,
          "minutes":0,
          "seconds":0
        }
        let myTilesModel = new JSONModel(this.timer);
        this.getView().setModel(myTilesModel, "timer");
        setInterval(this.calculateTime.bind(this),1000);
      },
      calculateTime: function() {
        let techedDate = new Date("Jun 21 2022");
        let currentDate = new Date();
        let diff = techedDate.getTime() - currentDate.getTime();
        this.timer.days = Math.floor(diff / ( 1000 * 60 * 60 * 24 ));
        this.timer.hours = Math.floor((diff % ( 1000 * 60 * 60 * 24 )) / ( 1000 * 60 * 60 ));
        this.timer.minutes = Math.floor((diff % ( 1000 * 60 * 60 ))/ ( 1000 * 60  ) );
        this.timer.seconds = Math.floor((diff % ( 1000 * 60  ))/ ( 1000  ) );
        this.getView().getModel("timer").setData(this.timer);
      }

    });
});