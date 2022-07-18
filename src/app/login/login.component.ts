import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLoginClicked(formData: NgForm) {
    console.log(formData.value);
    const { username, password } = formData.value;
    if (username === 'test' && password === 'test') {
      this.router.navigate(['/employee']);
    }
  }
}
