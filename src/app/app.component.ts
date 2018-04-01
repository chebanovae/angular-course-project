import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {

    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAh0JGmOhcL_Cji-a3dZ0ffvCj5QZ6QPok",
    authDomain: "angular5-recipe-book-4b62b.firebaseapp.com",
    databaseURL: "https://angular5-recipe-book-4b62b.firebaseio.com",
    projectId: "angular5-recipe-book-4b62b",
    storageBucket: "angular5-recipe-book-4b62b.appspot.com",
    messagingSenderId: "908845165714"
  };
  firebase.initializeApp(config);

  }

}
