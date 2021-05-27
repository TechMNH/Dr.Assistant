export class UniqueId {
    id: number;
    type: 'doc' | 'pat' | 'admin' | 'guest';
}

export class Address {
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    landmark: string;
    pinCode: number;
}

export class Password {
    password: string;
    reset: boolean = false;
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
    address: Address;
    phoneNumber: number;
    password: Password;
    privateProfile: boolean = false;
    photoId: string;
}