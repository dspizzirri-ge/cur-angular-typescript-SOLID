class Triangle {

    private base: number;
    private altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    public getArea(): number {
        return (this.base * this.altura) / 2;
    }
}

class Impresor {

    public imprimirHTML(resultado: number): String {
        return "<h1>Resultado:</h1><p>" + resultado + "</p>";
    }
}

const triangulo = new Triangle(2, 3);
console.log(triangulo.getArea());
const impresor = new Impresor();
console.log(impresor.imprimirHTML(triangulo.getArea()));