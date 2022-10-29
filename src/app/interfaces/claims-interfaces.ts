

export interface Claims {
    id:                 number;
    user_id:            number;
    property_id:        number;
    description:        string;
    status:             number;
    amount_to_claim:    string;
    created_at:         Date;
    updated_at:         Date;
    deleted_at:         null;
    first_evidence_url: null;
    user:               User;
    property:           Property;
    media:              any[];
}

export interface Property {
    id:               number;
    owner_id:         number;
    broker_id:        number;
    tenant_id:        number;
    real_estate_id:   number;
    name:             PropertyName;
    payment_due_date: Date;
    description:      Description;
    code:             string;
    address:          Address;
    status:           number;
    monthly_payment:  string;
    created_at:       Date;
    updated_at:       Date;
}

export enum Address {
    The84412AntoniaMountLebsackvilleIL190574017 = "84412 Antonia Mount\nLebsackville, IL 19057-4017",
}

export enum Description {
    EnimAutemTemporibusSunt = "Enim autem temporibus sunt.",
}

export enum PropertyName {
    Propiedad1 = "Propiedad 1",
}

export interface User {
    id:                number;
    name:              UserName;
    email:             Email;
    email_verified_at: Date;
    status:            boolean;
    user_type:         number;
    created_at:        Date;
    updated_at:        Date;
    deleted_at:        null;
}

export enum Email {
    TenantAlquilaseguroCOM = "tenant@alquilaseguro.com",
}

export enum UserName {
    MrJohnpaulStantonIII = "Mr. Johnpaul Stanton III",
}

export interface Link {
    url:    null | string;
    label:  string;
    active: boolean;
}
