import { IdentificationDetails } from "./common.model";

export class AdminProfile {
    identificationDetails: IdentificationDetails;
    controlType: 'full' | 'maintanance' | 'medical';
    canRemoveData: boolean = false;
    canAddMedicine: boolean = false;
    canVerifyUsers: boolean = false;
}

export class SuperAdmin {
    identificationDetails: IdentificationDetails;
    readonly type: string = 'superAdmin';
}