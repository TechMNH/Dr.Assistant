import { Password, UniqueId } from "./common.model";
import { AilmentDescription } from "./patient.model";

export class GuestProfile {
    uid: UniqueId;
    fullName: string;
    email: string;
    phoneNumber: number;
    password: Password;
    ailment: AilmentDescription;
}