import { UserService } from './../../../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userRef = new FormGroup({
    user: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    fullName: new FormControl(),
    street: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    country: new FormControl(),
    pincode: new FormControl(),
    contact: new FormControl(),
   
  })

constructor(private router: Router,public us:UserService){}

  ngOnInit(): void {

  }


  goTo(url:any){
    this.router.navigateByUrl(url);
  }

  signUp(){
    let user=this.userRef.value;
    // console.log(user);
    this.us.signUp(user).subscribe({
      next:(result:any)=>{
        alert(result)
      },
      error:(error:any)=>console.log(error),
      complete:()=>console.log("done!")
      
      
    })
    this.userRef.reset();
  }
}
