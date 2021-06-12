import { IdentificationDetails } from "./common.model";

export type AdminControls = 'full' | 'maintanance' | 'medical' | 'super-admin';

export class AdminProfile {
    identificationDetails: IdentificationDetails = new IdentificationDetails('admin');
    controlType: AdminControls = null;
    canRemoveData: boolean = false;
    canAddMedicine: boolean = false;
    canVerifyUsers: boolean = false;
}

export class SuperAdmin {
    identificationDetails: IdentificationDetails = new IdentificationDetails('super-admin');
}