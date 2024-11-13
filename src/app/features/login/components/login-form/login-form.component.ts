import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login.form.component.html' ,
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  isLoading = false;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  onLogin() {
    this.isLoading = true;

    // Simulación de autenticación (en una app real, harías una llamada HTTP aquí)
    setTimeout(() => {
      this.authService.login(); // Actualizar el estado de autenticación
      this.isLoading = false;
      this.router.navigate(['/home']); // Redirigir a home tras el login
    }, 1000);
  }
}
