export interface AuthResponce {
    token: string;
    user: UserAuth;
    ok?: boolean;
}

export interface UserAuth {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    status: number;
    user_type: number;
    created_at: string;
    updated_at: string;
}

export class resetPasswordModel {
    email: string;
    token: string;
    password: string;
    password_confirmation: string;

    constructor() {
        this.email = '';
        this.token = '';
        this.password = '';
        this.password_confirmation = '';
    }
}

