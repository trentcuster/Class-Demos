"use strict";
function sealed(target) {
    console.log("Sealing the constructor.");
    Object.seal(target);
    Object.seal(target.prototype);
}
exports.sealed = sealed;
