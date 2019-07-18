var Circulo = /** @class */ (function () {
    function Circulo(radio) {
        this.radio = radio;
    }
    Circulo.prototype.getArea = function () {
        return this.radio * this.radio * Math.PI;
    };
    return Circulo;
}());
var Triangulo = /** @class */ (function () {
    function Triangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Triangulo.prototype.getArea = function () {
        return (this.base * this.altura) / 2;
    };
    return Triangulo;
}());
var figura1 = new Triangulo(2, 3);
var figura2 = new Circulo(2);
console.log(figura1.getArea());
console.log(figura2.getArea());
