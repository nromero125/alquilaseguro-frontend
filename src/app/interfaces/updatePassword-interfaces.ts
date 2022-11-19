export class UpdatePassword {
    current_password: string;
    password: string;
    password_confirmation: string;

    constructor() {
        this.current_password = ''
        this.password = ''
        this.password_confirmation = ''
    }

}
