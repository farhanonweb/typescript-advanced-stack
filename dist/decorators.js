"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
function Logger(constructor) {
    console.log(`Logging creation of class: ${constructor.name}`);
}
let People = class People {
    constructor(name) {
        this.name = name;
    }
};
People = __decorate([
    Logger
], People);
const p = new People('Diya');
function LogMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Method called: ${propertyKey}`);
        return originalMethod.apply(this, args);
    };
}
class CalcOp {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    LogMethod
], CalcOp.prototype, "add", null);
const calcOp = new CalcOp();
console.log(calcOp.add(5, 4));
function ReadOnly(target, propertyKey) {
    Object.defineProperty(target, propertyKey, {
        writable: false,
    });
}
class Cars {
    constructor() {
        this._brand = 'Tesla';
    }
    get brand() {
        return this._brand;
    }
    set brand(value) {
        this._brand = value;
    }
}
__decorate([
    ReadOnly
], Cars.prototype, "brand", null);
const myCars = new Cars();
myCars.brand = 'Tata';
console.log(myCars.brand);
function LogParameter(target, propertyKey, parameterIndex) {
    console.log(`Parameter in method ${propertyKey} at index ${parameterIndex}`);
}
class UserParam {
    createUser(name, age) {
        console.log(`User: ${name}, Age: ${age}`);
    }
}
__decorate([
    __param(0, LogParameter),
    __param(1, LogParameter)
], UserParam.prototype, "createUser", null);
const userParam = new UserParam();
userParam.createUser('Diya', 20);
function LogExecutionTime(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const end = performance.now();
        console.log(`Execution time for ${propertyKey}: ${end - start}ms`);
        return result;
    };
}
class MathOps {
    multiply(a, b) {
        return a * b;
    }
}
__decorate([
    LogExecutionTime
], MathOps.prototype, "multiply", null);
const mathOps = new MathOps();
console.log(mathOps.multiply(2, 5));
//# sourceMappingURL=decorators.js.map