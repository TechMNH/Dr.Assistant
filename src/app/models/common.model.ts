export type UserTypes = 'doc' | 'pat' | 'admin' | 'guest';

export class UniqueId {
    id: number;
    type: UserTypes;
}

export class Address {
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    landmark: string;
    pinCode: number;
    city: string;
    state: string;
    country: string;
}

export class Password {
    password: string;
    resetRequired: boolean = false;
    compromised: boolean = false;
    strength: 'strong' | 'medium' | 'weak';
}

export class Rating {
    star1: number;
    star2: number;
    star3: number;
    star4: number;
    star5: number;
    averageStar: 1 | 2 | 3 | 4 | 5;
}

export class IdentificationDetails {
    uid: UniqueId;
    email: string;
    displayName: string;
    emailVerified: boolean;
    firstName: string;
    middleName: string;
    lastName: string;
    dob: Date;
    address: Address;
    phoneNumber: number;
    password: Password;
    privateProfile: boolean = false;
    photoId: string;
}