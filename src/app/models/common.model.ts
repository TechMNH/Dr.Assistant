export type UserTypes = 'doc' | 'pat' | 'admin' | 'super-admin' | 'guest';

export class UniqueId {
    constructor(type: UserTypes = 'pat') {
        this.type = type;
    }
    id: string = null;
    type: UserTypes = null;
}

export class Address {
    addressLine1: string = null;
    addressLine2: string = null;
    addressLine3: string = null;
    landmark: string = null;
    pinCode: number = null;
    city: string = null;
    state: string = null;
    country: string = null;
}

export type PasswordStrength = 'strong' | 'medium' | 'weak';

export class Password {
    password: string = null;
    resetRequired: boolean = false;
    compromised: boolean = false;
    strength: PasswordStrength = 'weak';
    lastChanged: Date = null;
}

export class Rating {
    star1: number = null;
    star2: number = null;
    star3: number = null;
    star4: number = null;
    star5: number = null;
    averageStar: 1 | 2 | 3 | 4 | 5 = null;
}

export class IdentificationDetails {
    constructor(type: UserTypes) {
        this.uid = new UniqueId(type)
    }
    uid: UniqueId = null;
    email: string = null;
    displayName: string = null;
    // username: string = null;
    emailVerified: boolean;
    firstName: string = null;
    middleName: string = null;
    lastName: string = null;
    dob: Date = null;
    address: Address = new Address();
    phoneNumber: number = null;
    password: Password = new Password();
    privateProfile: boolean = false;
    photoId: string = null;
}