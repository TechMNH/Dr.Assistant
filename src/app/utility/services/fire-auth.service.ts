import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserTypes } from 'src/app/models/common.model';
import { AnyProfile, DataService } from './data.service';
import { FireDatabase } from './fire-db.service';

@Injectable({
  providedIn: 'root'
})

export class FireAuthService {
  loggedIn = false;

  constructor(
    private afs: AngularFirestore,   // Inject Firestore service
    private afAuth: AngularFireAuth, // Required for running services cannot be removed
    private router: Router,
    private dataService: DataService,
    private FireDatabase: FireDatabase // firebase database things
  ) { }

  // Sign in with email/password
  public BasicSignIn(email: string, password: string, type: UserTypes): Promise<AnyProfile> {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(data => {
          this.FireDatabase
            .getUser(data.user.uid, type)
            .subscribe(data => resolve(data as AnyProfile));
        })
        .catch(err => reject(err));
    });
  }

  // Sign up with email/password 
  public BasicSignUp(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  // 3rd party authentication
  private AuthUsingExternalApp(provider: firebase.auth.FacebookAuthProvider | firebase.auth.GoogleAuthProvider, type: 'popup' | 'redirect' = 'popup'): Promise<void> {
    if (type == 'redirect')
      return new Promise<any>((resolve, reject) => {
        firebase.auth().signInWithRedirect(provider);
        firebase
          .auth()
          .getRedirectResult()
          .then(res => resolve(res)).catch(err => reject(err))
      });
    else (type == 'popup')
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithRedirect(provider);
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => resolve(res)).catch(err => reject(err))
    });
  }

  // fb authentication
  public FacebookLogin(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.AuthUsingExternalApp(provider)
        .then(res => resolve(res)).catch(err => reject(err))
    })
  }

  // google authentication
  public GoogleLogin(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      this.AuthUsingExternalApp(provider)
        .then(res => resolve(res)).catch(err => reject(err))
    })
  }

  get isLoggedIn(): Observable<{ loggedIn: boolean, type: UserTypes }> {
    return this.dataService.anyProfile.pipe(map(profile => {
      if (profile) {
        const type: UserTypes = (profile['identificationDetails']) ? profile['identificationDetails']['uid']['type'] : null;
        const guestType: UserTypes = (profile['uid']) ? profile['uid']['type'] : null;
        return {
          loggedIn: true,
          type: type ? type : guestType
        }
      }
      else return { loggedIn: false, type: null }
    }));
  }

  // Sign out
  public SignOut(): Promise<void> {
    return firebase.auth().signOut().then(() => {
      this.dataService.resetProfile;
      this.router.navigateByUrl('/home');
    })
  }
}