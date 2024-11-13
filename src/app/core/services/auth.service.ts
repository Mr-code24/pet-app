import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  // Método para autenticar al usuario (llamado en el login)
  login(): void {
    this.isAuthenticated = true;
    localStorage.setItem('isAuthenticated', 'true');
  }

  // Método para cerrar sesión
  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('isAuthenticated');
  }

  // Método para verificar si el usuario está autenticado
  isLoggedIn(): boolean {
    return this.isAuthenticated || localStorage.getItem('isAuthenticated') === 'true';
  }
}
