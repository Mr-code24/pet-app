import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login-form',
  templateUrl: 'login.form.component.html' ,
})
export class LoginFormComponent {
  isLoading = false;
  loginForm: FormGroup;

  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router,
    private readonly _fb: FormBuilder,
    private readonly _snackBar: MatSnackBar

  ) {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // En tu componente de login
onSubmit() {
  this.isLoading = true;
  if (this.loginForm.valid) {
    const { email, password } = this.loginForm.value;

    // Llamamos al servicio de login
    this._authService.login(email, password).subscribe({
      next: (token) => {
        this.isLoading = false;
        this._authService.storeToken(token);  // Usamos el servicio para almacenar el token
        this._router.navigate(['/home']);
      },
      error: (error) => {
        this.isLoading = false;
        this._snackBar.open('Error al iniciar sesión. Inténtalo de nuevo.', 'Cerrar', {
          duration: 3000,
        });
      },
    });
  } else {
    this.loginForm.markAllAsTouched();
  }
}

  
}
