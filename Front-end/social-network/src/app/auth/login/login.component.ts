import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [FormsModule], // Importa FormsModule para usar [(ngModel)]
})
export class LoginComponent {
  credentials = { email: '', password: '' };

  login() {
  }
}
