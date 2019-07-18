interface IReloj {
    getTime(): Date;
}

interface IRelojInteligente extends IReloj {
    getEmailNotifications(): String;
}

class RelojInteligenteImpl implements IRelojInteligente {

    public getTime(): Date {
        return new Date();
    }

    public getEmailNotifications(): String {
        return "Tienes 2 emails";
    }
}

class RelojImpl implements IReloj {

    public getTime(): Date {
        return new Date();
    }
}

const relojInteligente = new RelojInteligenteImpl();
console.log("Inteligente: ", relojInteligente.getTime().toDateString())
const reloj = new RelojImpl();
console.log("Simple: ", reloj.getTime().toDateString())