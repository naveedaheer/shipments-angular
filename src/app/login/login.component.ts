import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatButtonModule, ReactiveFormsModule, HttpClientModule, MatFormFieldModule, MatIconModule, MatCheckboxModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [AuthService]
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: boolean = false;
  hidePassword = true;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService,) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  submit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.authService.authenticate(email, password).subscribe(
        (isAuthenticated: boolean) => {
          if (isAuthenticated) {
            this.router.navigate(['/dashboard']);
          } else {
            this.loginError = true;
          }
        },
        error => {
          console.error('Something went wrong:', error);
        }
      );
    }
  }

}
