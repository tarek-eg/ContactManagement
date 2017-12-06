import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
   templateUrl:'./app.component.html'
  // template: ` 
// <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
// <a class="navbar-brand" routerLink='/'>My HTTP App</a>
// <div class="collapse navbar-collapse" id="navbarCollapse">
//   <ul class="navbar-nav mr-auto">
//     <li class="nav-item active">
//       <ul><a routerLink="/users">Users</a></ul>
//     </li>
//   </ul>
//   <ul class="nav navbar-nav  navbar-right">
//     <li *ngIf="!isLoggedIn"><a routerLink="/login">Login</a></li>
//     <li *ngIf="isLoggedIn"><a (click)="logout()">Logout</a></li>
//   </ul>
// </div>
// </nav>
// <router-outlet></router-outlet>  
// `   
})
export class AppComponent implements OnInit{
  constructor(
  private router: Router,
  ){}


  ngOnInit(){
  }
  
   isloggedIn(){
  }
 
/**
 * Log the user out
 */
  logout(){
  }
}
