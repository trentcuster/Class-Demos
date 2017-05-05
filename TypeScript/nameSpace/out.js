var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            return daysLate * .25;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
})(Utility || (Utility = {}));
///<reference path="utilityFunctions.ts"/> //node does not understand triple slash reference
var fee = Utility.Fees.calculateLateFee(365);
console.log("Fee: " + fee);
//# sourceMappingURL=out.js.map