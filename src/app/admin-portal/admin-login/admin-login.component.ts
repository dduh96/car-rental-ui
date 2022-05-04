import { Component, OnInit } from '@angular/core';
import {Credentials} from "./credentials";
import {AuthService} from "../../api/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  public loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl(''),
  });
  public credentials:Credentials = {
    email:'',
    password:''
  }

  constructor(public dialogRef: MatDialogRef<AdminLoginComponent>, public authService:AuthService) { }

  ngOnInit(): void {
  }

  public login(){
    this.authService.loginAdmin({
      email:this.credentials.email,
      password:this.credentials.password
    }).subscribe(res => {
      if(res != undefined){
        sessionStorage.setItem('admin_token', res.token)
        this.dialogRef.close(true);
      }

    });

  }

}
