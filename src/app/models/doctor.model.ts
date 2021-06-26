import { IdentificationDetails, Ratings, UniqueId } from "./common.model";

export class DoctorDegree {
    degreeName: string = null;
    degreeDescription?: string = null;
    serialNumber: string = null;
    issuingBody?: string = null;
    college: string = null;
    university: string = null;
    graduationYear: number = null;
    designation: string = null;
}

export class DoctorProfile {
    identificationDetails: IdentificationDetails = new IdentificationDetails('doc');
    degree: [DoctorDegree] = [new DoctorDegree()];
    yearsOfExperience: number = null;
    bio: string = null;
    consultationsGiven: number = null;
    rating: Ratings = new Ratings();
    consultationFees: number = null;
    verifiedProfile: boolean = false;
}

export class DoctorIdentifier {
    uid: UniqueId = new UniqueId('doc');
    doctorName: string = null;
}