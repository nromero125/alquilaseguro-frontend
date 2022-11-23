export interface Claims {
    id:                 number;
    user_id:            number;
    property_id:        number;
    insurance_id:       number;
    description:        string;
    feedback:           string;
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
    policy_id:        number;
    name:             PropertyName;
    payment_due_date: Date;
    description:      Description;
    code:             string;
    address:          PropertyAddress;
    status:           number;
    monthly_payment:  string;
    created_at:       Date;
    updated_at:       Date;
}

export enum PropertyAddress {
    The7025SanfordFlatHarryportIL746650144 = "7025 Sanford Flat\nHarryport, IL 74665-0144",
}

export enum Description {
    AtBeataeRerumFugitLaboreRepellendus = "At beatae rerum fugit labore repellendus.",
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
    tenant:            Tenant;
    owner:             Owner;
}

export enum Email {
    TenantAlquilaseguroCOM = "tenant@alquilaseguro.com",
}

export enum UserName {
    EdwardoHermistonDVM = "Edwardo Hermiston DVM",
}

export interface Tenant {
    id:                  number;
    user_id:             number;
    phone_number:        PhoneNumber;
    status:              number;
    identification:      string;
    firstname:           Firstname;
    lastname:            Lastname;
    address:             TenantAddress;
    bank_name:           BankName;
    bank_account:        BankAccount;
    contract_start_date: null;
    contract_end_date:   null;
    created_at:          Date;
    updated_at:          Date;
}


export interface Owner {
    id:                  number;
    user_id:             number;
    phone_number:        PhoneNumber;
    status:              number;
    identification:      string;
    firstname:           Firstname;
    lastname:            Lastname;
    address:             TenantAddress;
    bank_name:           BankName;
    bank_account:        BankAccount;
    created_at:          Date;
    updated_at:          Date;
}

export enum TenantAddress {
    The6801BoscoExpresswayApt756PortCasimerID372107031 = "6801 Bosco Expressway Apt. 756\nPort Casimer, ID 37210-7031",
}

export enum BankAccount {
    The8284477515 = "828.447.7515",
}

export enum BankName {
    Llc = "LLC",
}

export enum Firstname {
    Inquilino1 = "Inquilino1",
}

export enum Lastname {
    Hodkiewicz = "Hodkiewicz",
}

export enum PhoneNumber {
    The16235197164 = "+1-623-519-7164",
}