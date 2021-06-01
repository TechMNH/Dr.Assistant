import { IdentificationDetails, Rating } from "./common.model";
import { DoctorIdentifier } from "./doctor.model";

export class AilmentDescription {
    symptoms: [string] = null;
    descriptionLine1: string = null;
    descriptionLine2: string = null;
    descriptionLine3: string = null;
    descriptionLine4: string = null;
    descriptionLine5: string = null;
}

export class PatientAilmentDetails {
    date: Date = null;
    title: string = null;
    description: AilmentDescription = new AilmentDescription();
    patientRating: Rating = new Rating();
    doctorRating: Rating = new Rating();
}

export class PatientProfile {
    identificationDetails: IdentificationDetails = new IdentificationDetails();
    patientAilmentDetails: [PatientAilmentDetails] = [new PatientAilmentDetails()];
    shareMedicalHistoryWithDoctor: boolean = true;
    shareHistoryNumberWithDoctor: number = null;
    favoriteDoctors: [DoctorIdentifier] = [new DoctorIdentifier()];
    rating: Rating = new Rating();
    satisfactionRating: Rating = new Rating();
    verifiedProfile: boolean = false;
}