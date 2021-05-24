import { IdentificationDetails, Rating } from "./common.model";
import { DoctorIdentifier } from "./doctor.model";

export class AilmentDescription {
    symptoms: [string];
    descriptionLine1: string;
    descriptionLine2: string;
    descriptionLine3: string;
    descriptionLine4: string;
    descriptionLine5: string;
}

export class PatientAilmentDetails {
    date: Date;
    title: string;
    description: AilmentDescription;
}

export class PatientProfile {
    identificationDetails: IdentificationDetails;
    patientAilmentDetails: [PatientAilmentDetails];
    shareMedicalHistoryWithDoctor: boolean = true;
    shareHistoryNumberWithDoctor: number;
    favoriteDoctors: [DoctorIdentifier];
    rating: Rating;
    satisfactionRating: Rating;
    verifiedProfile: boolean;
}