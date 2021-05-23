module.exports = class Student {
    constructor(firstname, lastname, OIB, JMBAG, pbrstan) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.OIB = OIB;
        this.JMBAG = JMBAG;
        this.pbrstan = pbrstan;
    }

    toString() {
        return `Firstname: ${this.firstname} \nLastname: ${this.lastname} \nOIB: ${this.OIB} \nJMBAG: ${this.JMBAG} \nPbrstan: ${this.pbrstan}`;
    }
};