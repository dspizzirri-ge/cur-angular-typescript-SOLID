var Triangle = /** @class */ (function () {
    function Triangle(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Triangle.prototype.getArea = function () {
        return (this.base * this.altura) / 2;
    };
    return Triangle;
}());
var Impresor = /** @class */ (function () {
    function Impresor() {
    }
    Impresor.prototype.imprimirHTML = function (resultado) {
        return "<h1>Resultado:</h1><p>" + resultado + "</p>";
    };
    return Impresor;
}());
var triangulo = new Triangle(2, 3);
console.log(triangulo.getArea());
var impresor = new Impresor();
console.log(impresor.imprimirHTML(triangulo.getArea()));
