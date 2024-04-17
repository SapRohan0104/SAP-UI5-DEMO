sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.app.demoui5.controller.Home", {
            onInit: function () {

            },
            onCalculate: function () {
                // Get The Values
                const oView = this.getView(),
                    iFirstNumber = parseInt(oView.byId("idFirstNumber").getValue()),
                    iSecondNumber = parseInt(oView.byId("idSecondNumber").getValue());

                // Addition Of teh Values
                const iResult = iFirstNumber + iSecondNumber;
                // Print The Result
                alert(iResult)
            },
            onInitiateJsonModel: function () {
                const oPerson = {
                    details: {
                        name: "Rohan",
                        age: 50
                    },
                    salDetails: {
                        ctc: "1LPA"
                    }
                }

                const oPerson1 = {
                    details: {
                        name: "John",
                        age: 50
                    },
                    salDetails: {
                        ctc: "10LPA"
                    }
                }
                debugger;
                const oJsonModel = new JSONModel(oPerson);
                const oLocalModel = new JSONModel(oPerson1);
                this.getView().setModel(oJsonModel);
                this.getView().setModel(oLocalModel, "LocalModel");
                console.log(oJsonModel);
            }
        });
    });
