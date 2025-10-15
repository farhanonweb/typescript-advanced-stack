"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Geometry;
(function (Geometry) {
    Geometry.PI = 3.14;
    class Calc {
        area(width, height) {
            return width * height;
        }
    }
    Geometry.Calc = Calc;
    function calc_area(radius) {
        return Math.PI * radius * radius;
    }
    Geometry.calc_area = calc_area;
})(Geometry || (Geometry = {}));
console.log(Geometry.PI);
console.log(Geometry.calc_area(5));
const calc12 = new Geometry.Calc();
console.log(calc12.area(3, 4));
var Shape12;
(function (Shape12) {
    let Circle;
    (function (Circle) {
        Circle.PI = 3.14;
    })(Circle = Shape12.Circle || (Shape12.Circle = {}));
})(Shape12 || (Shape12 = {}));
console.log(Shape12.Circle.PI);
//# sourceMappingURL=namespaces_utils.js.map