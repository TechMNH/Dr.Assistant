import { IdentificationDetails } from "./common.model";

export type AdminControls = 'verify' | 'maintanance' | 'medical' | 'super-admin';

export class AdminProfile {
    identificationDetails: IdentificationDetails = new IdentificationDetails('admin');
    controlType: AdminControls = null;
    canRemoveData: boolean = false;
    canAddMedicine: boolean = false;
    canVerifyUsers: boolean = false;
}