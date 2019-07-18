var RelojInteligenteImpl = /** @class */ (function () {
    function RelojInteligenteImpl() {
    }
    RelojInteligenteImpl.prototype.getTime = function () {
        return new Date();
    };
    RelojInteligenteImpl.prototype.getEmailNotifications = function () {
        return "Tienes 2 emails";
    };
    return RelojInteligenteImpl;
}());
var RelojImpl = /** @class */ (function () {
    function RelojImpl() {
    }
    RelojImpl.prototype.getTime = function () {
        return new Date();
    };
    return RelojImpl;
}());
var relojInteligente = new RelojInteligenteImpl();
console.log("Inteligente: ", relojInteligente.getTime().toDateString());
var reloj = new RelojImpl();
console.log("Simple: ", reloj.getTime().toDateString());
