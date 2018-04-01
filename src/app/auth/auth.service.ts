import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router) {}

    signupUser(user: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(user, password)
        .catch(error => console.log(error));
    }

    signinUser(user: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(user, password)
        .then(response => {
            this.router.navigate(['/']);
            firebase.auth().currentUser.getIdToken()
                .then((token: string) => this.token = token);
            })
        .catch(error => console.log(error));
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then((token: string) => this.token = token);
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }
}
