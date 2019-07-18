class Rectangulo {

    private ancho: number;
    private alto: number;

    constructor(ancho: number, alto: number) {
        this.ancho = ancho;
        this.alto = alto;
    }

    public getArea(): number {
        return this.alto * this.ancho;
    }
}

class Cuadrado extends Rectangulo {

    constructor(ancho: number, alto: number) {
        super(ancho, alto);
    }
}

const rectangulo = new Rectangulo(2, 3);
console.log("Rectangulo: ", rectangulo.getArea());
const cuadrado = new Cuadrado(2, 3);
console.log("Cuadrado: ", cuadrado.getArea());