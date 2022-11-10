export class BrokerUser {
    phone_number: string;
    firstname: string;
    lastname: string;
    identification: string;
    address: string;
    email: string;
    password: string;

    constructor() {
        this.phone_number = "";
        this.firstname = "";
        this.lastname = "";
        this.identification = "";
        this.address = "";
        this.email = "";
        this.password = "";
    }
}