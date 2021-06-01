import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { AdminProfile } from "src/app/models/admin.model";
import { DoctorProfile } from "src/app/models/doctor.model";
import { GuestProfile } from "src/app/models/guest.model";
import { PatientProfile } from "src/app/models/patient.model";

export type AllProfile = { doc?: DoctorProfile, pat?: PatientProfile, guest?: GuestProfile, admin?: AdminProfile };
export type AnyProfile = DoctorProfile | AdminProfile | PatientProfile | GuestProfile;

@Injectable({
    providedIn: 'any'
})

export class DataService {

    private doctorBS: BehaviorSubject<DoctorProfile> = new BehaviorSubject(null);
    private readonly doctorOB = this.doctorBS.asObservable();
    private adminBS: BehaviorSubject<AdminProfile> = new BehaviorSubject(null);
    private readonly adminOB = this.adminBS.asObservable();
    private patientBS: BehaviorSubject<PatientProfile> = new BehaviorSubject(null);
    private readonly patientOB = this.patientBS.asObservable();
    private guestBS: BehaviorSubject<GuestProfile> = new BehaviorSubject(null);
    private readonly guestOB = this.guestBS.asObservable();

    set doctorProfile(doctor: DoctorProfile) {
        this.doctorBS.next(doctor);
    }

    get doctorProfile(): DoctorProfile {
        return this.doctorBS.value;
    };

    get doctorProfileAsObservable(): Observable<DoctorProfile> {
        return this.doctorOB;
    };

    set patientProfile(patient: PatientProfile) {
        this.patientBS.next(patient);
    }

    get patientProfile(): PatientProfile {
        return this.patientBS.value;
    };

    get patientProfileAsObservable(): Observable<PatientProfile> {
        return this.patientOB;
    };

    set guestProfile(guest: GuestProfile) {
        this.guestBS.next(guest);
    }

    get guestProfile(): GuestProfile {
        return this.guestBS.value;
    };

    get guestProfileAsObservable(): Observable<GuestProfile> {
        return this.guestOB;
    };

    set adminProfile(admin: AdminProfile) {
        this.adminBS.next(admin);
    }

    get adminProfile(): AdminProfile {
        return this.adminBS.value;
    };

    get adminProfileAsObservable(): Observable<AdminProfile> {
        return this.adminOB;
    };

    get allProfile(): AllProfile {
        return Object.entries({
            'doc': this.doctorProfile,
            'pat': this.patientProfile,
            'guest': this.guestProfile,
            'admin': this.adminProfile
        }).reduce((a, [k, v]) => (v == null ? a : (a[k] = v, a)), {});
    }

    set resetProfile(data: null) {
        this.adminProfile = null;
        this.doctorProfile = null;
        this.patientProfile = null;
        this.guestProfile = null;
    }
}