interface IFigura {
    getArea(): number;
}

class Circulo implements IFigura {
    private radio: number;

    constructor(radio: number) {
        this.radio = radio;
    }

    public getArea(): number {
        return this.radio * this.radio * Math.PI;
    }
}


class Triangulo implements IFigura {

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

const figura1: IFigura = new Triangulo(2, 3);
const figura2: IFigura = new Circulo(2);

console.log(figura1.getArea());
console.log(figura2.getArea());