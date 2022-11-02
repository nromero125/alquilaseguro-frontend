export interface Properties {
    id:               number;
    owner_id:         number;
    broker_id:        number;
    tenant_id:        number;
    real_estate_id:   number;
    name:             string;
    payment_due_date: Date;
    description:      string;
    code:             string;
    address:          string;
    status:           number;
    monthly_payment:  string;
    created_at:       Date;
    updated_at:       Date;
    claims:           Claim[];
    broker:           Broker;
    owner:            Broker;
    tenant:           Tenant;
    payments:         Payment[];
  }

  export interface Broker {
    id:              number;
    real_estate_id?: number;
    user_id:         number;
    phone_number:    string;
    status:          boolean;
    identification:  string;
    firstname:       string;
    lastname:        string;
    address:         string;
    bank_name:       string;
    bank_account:    string;
    created_at:      Date;
    updated_at:      Date;
    deleted_at:      null;
}

export interface Claim {
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
    media:              any[];
}

export interface Payment {
    id:           number;
    payment_type: number;
    amount:       string;
    property_id:  number;
    paid_at:      Date;
    is_late:      number;
    status:       number;
    tenant_id:    number;
    created_at:   Date;
    updated_at:   Date;
    voucher_url:  null;
    media:        any[];
}

export interface Tenant {
    id:             number;
    user_id:        number;
    phone_number:   string;
    status:         number;
    identification: string;
    firstname:      string;
    lastname:       string;
    address:        string;
    bank_name:      string;
    bank_account:   string;
    created_at:     Date;
    updated_at:     Date;
}