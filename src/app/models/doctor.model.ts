import { IdentificationDetails, Rating, UniqueId } from "./common.model";

export class DoctorDegree {
    degreeName: string;
    degreeDescription?: string;
    serialNumber: string;
    issuingBody?: string;
    college: string;
    university: string;
    graduationYear: number;
    designation: string;
}

export class DoctorProfile {
    identificationDetails: IdentificationDetails;
    degree: [DoctorDegree];
    yearsOfExperience: number;
    bio: string;
    consultationsGiven: number;
    rating: Rating;
    consultationFees: number;
    verifiedProfile: boolean;
}

export class DoctorIdentifier {
    uid: UniqueId
    doctorName: string;
}