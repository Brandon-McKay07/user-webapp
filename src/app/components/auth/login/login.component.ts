import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

// userRef = new Formgroup({
// email: new Formcontrol(),
// password: new Formcontrol()
// });

  constructor(private router: Router){}

ngOnInit(): void {}

  goTo(url: any){
    this.router.navigateByUrl(url);
  }

  // signIn(){
  //   let user = this.userRef.value;
  // }


}


