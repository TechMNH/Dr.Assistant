import { IdentificationDetails } from "./common.model";

export type AdminControls = 'full' | 'maintanance' | 'medical';

export class AdminProfile {
    identificationDetails: IdentificationDetails;
    controlType: AdminControls;
    canRemoveData: boolean = false;
    canAddMedicine: boolean = false;
    canVerifyUsers: boolean = false;
}

export class SuperAdmin {
    identificationDetails: IdentificationDetails;
    static readonly type: string = 'superAdmin';
}