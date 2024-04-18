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
                const oPerson = {
                    employee: {
                        EmployeeName: "John Doe",
                        EmployeeAge: 40,
                        ContractStarted: new Date(),
                        Email: "john.doe@gmail.com"
                    }
                }
                const oJsonModel = new JSONModel(oPerson);
                this.getView().setModel(oJsonModel, "employeeModel");

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
            }
        });
    });
