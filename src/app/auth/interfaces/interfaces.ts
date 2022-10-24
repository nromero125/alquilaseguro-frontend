export interface AuthResponce{
    token: string;
    user: User;
    ok?:boolean;
}

export interface User{
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    status: number;
    user_type: number;
    created_at:  string;
    updated_at:  string;
}

