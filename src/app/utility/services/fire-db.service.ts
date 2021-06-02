import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AdminProfile } from "src/app/models/admin.model";
import { UserTypes } from "src/app/models/common.model";
import { DoctorProfile } from "src/app/models/doctor.model";
import { GuestProfile } from "src/app/models/guest.model";
import { PatientProfile } from "src/app/models/patient.model";

@Injectable()
export class FireDatabase {
    constructor(
        private db: AngularFirestore
    ) { }

    public getUser(userId: string, type: UserTypes): Observable<AdminProfile | DoctorProfile | PatientProfile | GuestProfile> {
        return this.db.collection(type).doc(`${type}-${userId}`).get().pipe(map(snapshot => {
            return snapshot.data() as AdminProfile | PatientProfile | GuestProfile | DoctorProfile;
        }));
    }

    public createNewUser(user: AdminProfile | DoctorProfile | PatientProfile): Promise<void> {
        return this.db
            .collection(user.identificationDetails.uid.type)
            .doc(`${user.identificationDetails.uid.type}-${user.identificationDetails.uid.id}`)
            .set(JSON.parse(JSON.stringify(user)));
    }

    public createNewGuestUser(user: GuestProfile): Promise<void> {
        return this.db
            .collection(user.uid.type)
            .doc(`${user.uid.type}-${user.uid.id}`)
            .set(JSON.parse(JSON.stringify(user)));
    }
}