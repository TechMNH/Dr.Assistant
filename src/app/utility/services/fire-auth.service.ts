import { Injectable, NgZone } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { DoctorProfile } from '../../models/doctor.model';
import { PatientProfile } from 'src/app/models/patient.model';
import { AdminProfile } from 'src/app/models/admin.model';
import { GuestProfile } from 'src/app/models/guest.model';
import { UserTypes } from 'src/app/models/common.model';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class FireAuthService {
  loggedIn = false;

  constructor(
    private afs: AngularFirestore,   // Inject Firestore service
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone // NgZone service to remove outside scope warning
  ) { }

  // Sign in with email/password
  public BasicSignIn(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        this.router.navigateByUrl('dash');
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Sign up with email/password
  public BasicSignUp(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  private AuthUsingExternalApp(provider: firebase.auth.FacebookAuthProvider | firebase.auth.GoogleAuthProvider) {
    return new Promise<any>((resolve, reject) => {
      // firebase.auth().signInWithRedirect(provider);
      firebase
        .auth()
        .signInWithPopup(provider)
        // .getRedirectResult()
        .then(res => {
          resolve(res);
        }, err => {
          console.log(err);
          reject(err);
        })
    })
  }

  public FacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.AuthUsingExternalApp(provider).then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      })
    })
  }

  public GoogleLogin() {
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
    return {
      loggedIn: true,
      type: 'doc'
    }
  }

  SetUserData(user: DoctorProfile | PatientProfile | AdminProfile) {
    const userRef: AngularFirestoreDocument<DoctorProfile | PatientProfile | AdminProfile> = this.afs.doc(`users/${user.identificationDetails.uid.type}/${user.identificationDetails.uid.id}`);
    return userRef.set(user, { merge: true });
  }

  SetGuestUserData(user: GuestProfile) {
    const userRef: AngularFirestoreDocument<GuestProfile> = this.afs.doc(`users/${user.uid.type}/${user.uid.id}`);
    return userRef.set(user, { merge: true });
  }

  // Sign out
  SignOut() {
    return firebase.auth().signOut().then(() => {
      this.router.navigate(['sign-in']);
    })
  }
}