import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  connecter(u,p){
   if(u==="Admin" && p==="P@ssWord"){
    this.route.navigate(['/verif']);
   }
    
  }
}
