var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rectangulo = /** @class */ (function () {
    function Rectangulo(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    Rectangulo.prototype.getArea = function () {
        return this.alto * this.ancho;
    };
    return Rectangulo;
}());
var Cuadrado = /** @class */ (function (_super) {
    __extends(Cuadrado, _super);
    function Cuadrado(ancho, alto) {
        return _super.call(this, ancho, alto) || this;
    }
    return Cuadrado;
}(Rectangulo));
var rectangulo = new Rectangulo(2, 3);
console.log("Rectangulo: ", rectangulo.getArea());
var cuadrado = new Cuadrado(2, 3);
console.log("Cuadrado: ", cuadrado.getArea());
