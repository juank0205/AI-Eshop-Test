import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, User } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
  loginForm: FormGroup;
  errorMessage: string;

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.userService.login(username, password).subscribe((user: User[]) => {
        if (user.length != 0) {
          // Login successful, navigate to home page
          this.router.navigate(['/']);
        } else {
          // Login failed, display error message
          alert("Incorrect username or password")
        }
      }, (error) => {
        // Handle error from server
        alert("Incorrect username or password")
      });
    }
  }
}