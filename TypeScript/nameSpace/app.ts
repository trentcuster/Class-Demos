///<reference path="utilityFunctions.ts"/> //node does not understand triple slash reference

let fee = Utility.Fees.calculateLateFee(365);
console.log(`Fee: ${fee}`);