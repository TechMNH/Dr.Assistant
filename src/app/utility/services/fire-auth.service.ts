import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';
import { AdminProfile } from 'src/app/models/admin.model';
import { UserTypes } from 'src/app/models/common.model';
import { GuestProfile } from 'src/app/models/guest.model';
import { PatientProfile } from 'src/app/models/patient.model';
import { DoctorProfile } from '../../models/doctor.model';
import { AllProfile, DataService } from './data.serice';

@Injectable({
  providedIn: 'root'
})

export class FireAuthService {
  loggedIn = false;

  constructor(
    private afs: AngularFirestore,   // Inject Firestore service
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone, // NgZone service to remove outside scope warning
    private dataService: DataService,
  ) { }

  // Sign in with email/password
  public BasicSignIn(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  // Sign up with email/password
  public BasicSignUp(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  private AuthUsingExternalApp(provider: firebase.auth.FacebookAuthProvider | firebase.auth.GoogleAuthProvider): Promise<void> {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithRedirect(provider);
      firebase
        .auth()
        // .signInWithPopup(provider)
        .getRedirectResult()
        .then(res => {
          resolve(res);
        }, err => {
          console.log(err);
          reject(err);
        })
    })
  }

  public FacebookLogin(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.AuthUsingExternalApp(provider).then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      })
    })
  }

  public GoogleLogin(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      this.AuthUsingExternalApp(provider).then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      })
    })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): { loggedIn: boolean, type: UserTypes } {
    const allProfile: AllProfile = this.dataService.allProfile
    if (Object.values(allProfile)[0]) {
      return {
        loggedIn: true,
        type: Object.keys(allProfile)[0] as UserTypes
      }
    } else {
      return {
        loggedIn: false,
        type: null
      }
    }
  }

  public SetUserData(user: DoctorProfile | PatientProfile | AdminProfile): AngularFirestoreDocument<DoctorProfile | PatientProfile | AdminProfile> {
    const userRef: AngularFirestoreDocument<DoctorProfile | PatientProfile | AdminProfile> = this.afs.doc(`users/${user.identificationDetails.uid.type}-${user.identificationDetails.uid.id}`);
    // const data = Object.assign({}, user);
    console.log(Object.create(user))
    userRef.set(Object.create(user), { merge: true });
    return userRef;
  }

  public SetGuestUserData(user: GuestProfile): AngularFirestoreDocument<GuestProfile> {
    const userRef: AngularFirestoreDocument<GuestProfile> = this.afs.doc(`users/${user.uid.type}/${user.uid.id}`);
    userRef.set(Object.assign({}, user), { merge: true });
    return userRef;
  }

  // Sign out
  public SignOut(): Promise<void> {
    return firebase.auth().signOut().then(() => {
      this.dataService.resetProfile = null;
      this.router.navigateByUrl('/home');
    })
  }
}