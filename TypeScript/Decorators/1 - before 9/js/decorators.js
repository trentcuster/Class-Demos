"use strict";
function sealed(name) {
    return function (target) {
        console.log("Sealing the constructor for " + name);
        Object.seal(target);
        Object.seal(target.prototype);
    };
}
exports.sealed = sealed;
function Logger(target) {
    var newConstructor = function () {
        console.log("Creating new instance");
        console.log(target);
    };
    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return newConstructor;
}
exports.Logger = Logger;
function Writable(isWritable) {
    return function (target, propertyKey, descriptor) {
        console.log("Setting " + propertyKey + " writable property to " + isWritable + ".");
        descriptor.writable = isWritable;
    };
}
exports.Writable = Writable;
//# sourceMappingURL=decorators.js.map