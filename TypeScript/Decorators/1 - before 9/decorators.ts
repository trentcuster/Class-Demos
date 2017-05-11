

export function sealed(name: string){
    return function(target: Function){
        console.log(`Sealing the constructor for ${name}`);
        Object.seal(target);
        Object.seal(target.prototype);
    }
}

export function Logger<TFunction extends Function>(target: TFunction): TFunction{
    let newConstructor: Function = function () {
        console.log(`Creating new instance`);
        console.log(target);

    };
    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return <TFunction>newConstructor;
}

export function Writable(isWritable: boolean){
    return function (target: Object,
                    propertyKey: String,
                    descriptor: PropertyDescriptor) {
        console.log(`Setting ${propertyKey} writable property to ${isWritable}.`);
        descriptor.writable = isWritable;
    }
}

