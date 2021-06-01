import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AdminProfile } from "src/app/models/admin.model";
import { FireAuthService } from "./fire-auth.service";


@Injectable({
    providedIn: 'any'
})

export class FireDB {
    constructor(
        private db: AngularFirestore,
        private fireAuthService: FireAuthService
    ) { }

    public getUser() {
        return this.db.collection('user').get()
    }

    public createNewUser(user: AdminProfile) {
        const userRef = this.fireAuthService.SetUserData(user);
        console.log(userRef);
        return this.db.collection('user').add(userRef);
    }
}