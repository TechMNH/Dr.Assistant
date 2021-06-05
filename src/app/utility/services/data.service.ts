import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { AdminProfile } from "src/app/models/admin.model";
import { UserTypes } from "src/app/models/common.model";
import { DoctorProfile } from "src/app/models/doctor.model";
import { GuestProfile } from "src/app/models/guest.model";
import { PatientProfile } from "src/app/models/patient.model";

export type AllProfile = { doc?: DoctorProfile, pat?: PatientProfile, guest?: GuestProfile, admin?: AdminProfile };
export type AnyProfile = DoctorProfile | AdminProfile | PatientProfile | GuestProfile;
export type AnyButGuestProfile = DoctorProfile | AdminProfile | PatientProfile;

@Injectable({
    providedIn: 'root'
})

export class DataService {

    private userTypeBS: BehaviorSubject<UserTypes> = new BehaviorSubject(null);
    private readonly userTypeOB: Observable<UserTypes> = this.userTypeBS.asObservable();
    private doctorBS: BehaviorSubject<DoctorProfile> = new BehaviorSubject(null);
    private readonly doctorOB: Observable<DoctorProfile> = this.doctorBS.asObservable();
    private adminBS: BehaviorSubject<AdminProfile> = new BehaviorSubject(null);
    private readonly adminOB: Observable<AdminProfile> = this.adminBS.asObservable();
    private patientBS: BehaviorSubject<PatientProfile> = new BehaviorSubject(null);
    private readonly patientOB: Observable<PatientProfile> = this.patientBS.asObservable();
    private guestBS: BehaviorSubject<GuestProfile> = new BehaviorSubject(null);
    private readonly guestOB: Observable<GuestProfile> = this.guestBS.asObservable();

    set userType(userType: UserTypes) {
        this.userTypeBS.next(userType);
    }

    get userType(): UserTypes {
        return this.userTypeBS.value;
    };

    get userTypeAsObservable(): Observable<UserTypes> {
        return this.userTypeOB;
    }

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

    get anyProfile(): Observable<AnyProfile> {
        return combineLatest([
            this.adminProfileAsObservable,
            this.doctorProfileAsObservable,
            this.patientProfileAsObservable,
            this.guestProfileAsObservable
        ]).pipe(map(([adminProfile, doctorProfile, patientProfile, guestProfile]) => {
            if (adminProfile && this.userType == 'admin')
                return adminProfile
            else if (doctorProfile && this.userType == 'doc')
                return doctorProfile
            else if (patientProfile && this.userType == 'pat')
                return patientProfile
            else if (guestProfile && this.userType == 'guest')
                return guestProfile
            return null
        }));
    }

    get resetProfile(): void {
        this.adminProfile = null;
        this.doctorProfile = null;
        this.patientProfile = null;
        this.guestProfile = null;
        return null;
    }
}