// src/app/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';  // Asegúrate de tener un servicio AuthService

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly _router: Router,
    private readonly _authService: AuthService  // Usamos el AuthService para verificar la autenticación
  ) {}

  canActivate(): boolean {
    if (this._authService.isAuthenticated()) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
