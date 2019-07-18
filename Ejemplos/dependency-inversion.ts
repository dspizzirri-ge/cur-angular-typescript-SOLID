class Persona {

    private nombre: String;
    private apellido: String;
    private edad: number;

    constructor(nombre: String, apellido: String, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

interface IPersistencia {
    guardar(object: Object): void;
}

class MySql implements IPersistencia {

    public guardar(persona: Persona) {
        console.log("Datos guardados en MySQL");
    }
}

class Oracle implements IPersistencia {

    public guardar(persona: Persona) {
        console.log("Datos guardados en Oracle");
    }
}

class ServicePerson {

    private persistencia: IPersistencia;

    constructor(persistencia: IPersistencia) {
        this.persistencia = persistencia;
    }

    public guardarPerson(persona: Persona) {
        this.persistencia.guardar(persona);
    }
}


const persona1 = new Persona("Damian", "Spizzirri", 28);
const persona2 = new Persona("Stella", "Spizzirri", 22);
const servicePersona1 = new ServicePerson(new MySql());
const servicePersona2 = new ServicePerson(new Oracle());
servicePersona1.guardarPerson(persona1);
servicePersona2.guardarPerson(persona2);