var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    return Persona;
}());
var MySql = /** @class */ (function () {
    function MySql() {
    }
    MySql.prototype.guardar = function (persona) {
        console.log("Datos guardados en MySQL");
    };
    return MySql;
}());
var Oracle = /** @class */ (function () {
    function Oracle() {
    }
    Oracle.prototype.guardar = function (persona) {
        console.log("Datos guardados en Oracle");
    };
    return Oracle;
}());
var ServicePerson = /** @class */ (function () {
    function ServicePerson(persistencia) {
        this.persistencia = persistencia;
    }
    ServicePerson.prototype.guardarPerson = function (persona) {
        this.persistencia.guardar(persona);
    };
    return ServicePerson;
}());
var persona1 = new Persona("Damian", "Spizzirri", 28);
var persona2 = new Persona("Stella", "Spizzirri", 22);
var servicePersona1 = new ServicePerson(new MySql());
var servicePersona2 = new ServicePerson(new Oracle());
servicePersona1.guardarPerson(persona1);
servicePersona2.guardarPerson(persona2);
