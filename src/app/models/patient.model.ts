import { IdentificationDetails, Rating, Ratings } from "./common.model";
import { DoctorIdentifier } from "./doctor.model";

export type AilmentStatus = 'open' | 'closed';

export class AilmentDescription {
    symptoms: [string] = null;
    descriptionLine1: string = null;
    descriptionLine2: string = null;
    descriptionLine3: string = null;
    descriptionLine4: string = null;
    descriptionLine5: string = null;
}

export class PatientAilmentDetails {
    id: string = null;
    status: AilmentStatus = 'open';
    date: Date = new Date();
    title: string = null;
    description: AilmentDescription = new AilmentDescription();
    patientRating: Rating = new Rating();
    doctorRating: Rating = new Rating();
}

export class PatientProfile {
    identificationDetails: IdentificationDetails = new IdentificationDetails('pat');
    patientAilmentDetails: [PatientAilmentDetails] = [new PatientAilmentDetails()];
    shareMedicalHistoryWithDoctor: boolean = true;
    shareHistoryNumberWithDoctor: number = null;
    favoriteDoctors: [DoctorIdentifier] = [new DoctorIdentifier()];
    rating: Ratings = new Ratings();
    satisfactionRating: Ratings = new Ratings();
    verifiedProfile: boolean = false;
}