import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromApp from '../store/app.reducers';
import * as AuthActions from '../auth/store/auth.actions';

@Injectable()
export class AuthService {
    constructor(private router: Router,
                private store: Store<fromApp.AppState>) {}

    signupUser(user: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(user, password)
        .then(
          (userData) => {
             this.store.dispatch(new AuthActions.Signup());
             firebase.auth().currentUser.getIdToken()
             .then(
             (token: string) => {
                 this.store.dispatch(new AuthActions.SetToken(token));
             });
          }
        )
        .catch(error => console.log(error));
    }

    signinUser(user: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(user, password)
        .then(response => {
            this.store.dispatch(new AuthActions.Signin());
            this.router.navigate(['/']);
            firebase.auth().currentUser.getIdToken()
                .then(
                  (token: string) => {
                    this.store.dispatch(new AuthActions.SetToken(token));
                  });
            })
        .catch(error => console.log(error));
    }
}
