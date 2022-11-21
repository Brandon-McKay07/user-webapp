import { Component } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


constructor(private router: Router){}

  ngOnInit(): void {

  }


  goTo(url:any){
    this.router.navigateByUrl(url);
  }
}
