"use strict";
var TransferStatus;
(function (TransferStatus) {
    TransferStatus["Pending"] = "pending";
    TransferStatus["Rejected"] = "rejected";
    TransferStatus["Completed"] = "completed";
})(TransferStatus || (TransferStatus = {}));
var ErrorMessages;
(function (ErrorMessages) {
    ErrorMessages["NotFound"] = "Not found: 404";
    ErrorMessages["NotEnoughSpace"] = "Not enough space: 507";
    ErrorMessages["Forbidden"] = "Forbidden: 403";
})(ErrorMessages || (ErrorMessages = {}));
// Класс должен имплементировать ITransfer и TransferError
class SingleFileTransfer {
    path = "";
    data = [];
    date;
    start;
    stop;
    message;
    checkTransferStatus(status) {
        if (status === "pending") {
            console.log("Wait a minute please");
        }
        else if (status === "completed") {
            console.log("Welkome");
        }
        else {
            console.log("Error");
        }
    }
    stopSendingData(current) {
        if (current === "Not found: 404") {
            console.log("404");
        }
        else if (current === "Not enough space: 507") {
            console.log("507");
        }
        else {
            console.log("403");
        }
    }
    makeError = () => {
        return `Status: ${TransferStatus.Rejected}, error message: ${ErrorMessages.Forbidden}`;
    };
}
