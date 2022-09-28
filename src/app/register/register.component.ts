import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public signupForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname: [''],
      email: [''],
      password: [''],
      mobile: [''],
      dateTime: new Date()

    })
  }
  valueGet() {
    localStorage.setItem('uname',this.signupForm.value.fullname);
    localStorage.setItem('uemail',this.signupForm.value.email);
    localStorage.setItem('upassword',this.signupForm.value.password);
    localStorage.setItem('umobile',this.signupForm.value.mobile);
  }

  // signUp() {
  //   this.http.post<any>("http://localhost:3000/signupUsers", this.signupForm.value)
  //     .subscribe(res => {
  //       // alert("Signup Successfully");
  //       localStorage.setItem('uname',this.signupForm.value.fullname);
  //       localStorage.setItem('uemail',this.signupForm.value.email);
  //       this.signupForm.reset();
        
  //     }, err => {
  //       alert("Something went wrong!")
  //     }
  //     )
  // }

}
