import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor() {}

  ngOnInit() {
    var config = {
      apiKey: "AIzaSyDsuxzYYf1AokKbNcdNeH-wC8O4MNo98uU",
      authDomain: "ng-recipe-book-211bc.firebaseapp.com",
      databaseURL: "https://ng-recipe-book-211bc.firebaseio.com",
      projectId: "ng-recipe-book-211bc",
      storageBucket: "ng-recipe-book-211bc.appspot.com",
      messagingSenderId: "409404404627"
    }
    firebase.initializeApp(config)  
  } 

}
