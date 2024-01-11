"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var myCar = /** @class */ (function () {
    function myCar() {
        this.fuel = "50%";
        this.open = true;
        this.freeSeats = 4;
        //   isNumber() {
        //     return this.freeSeats === 4 ? "default" : "changed";
        //   }
    }
    myCar.prototype.isOpen = function () {
        console.log(this.fuel);
        return this.open ? "open" : "close";
    };
    __decorate([
        checkAmountOfFuel
    ], myCar.prototype, "isOpen", null);
    myCar = __decorate([
        changeDoorStatus(false),
        changeFreeSeats(300)
    ], myCar);
    return myCar;
}());
function changeDoorStatus(status) {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.open = status;
                return _this;
            }
            return class_1;
        }(constructor));
    };
}
function changeFreeSeats(amount) {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_2, _super);
            function class_2() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.freeSeats = amount;
                return _this;
            }
            return class_2;
        }(constructor));
    };
}
// function closeCar<T extends { new (...args: any[]): {} }>(constructor: T) {
//   return class extends constructor {
//     open: boolean = false;
//     freeSeats: number = 10;
//   };
// }
var car = new myCar();
console.log(car.open);
console.log(car.freeSeats);
// console.log(car.isNumber());
function checkAmountOfFuel(target, propertyKey, descriptor) {
    var oldValue = descriptor.value;
    descriptor.value = function () {
        console.log(this);
        return oldValue.apply(this);
        // return this.open ? "open" : "close";
    };
}
console.log(car.isOpen());
console.log(checkAmountOfFuel);
