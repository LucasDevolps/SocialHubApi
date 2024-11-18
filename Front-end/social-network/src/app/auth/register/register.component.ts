import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [FormsModule], // Importação necessária
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: '',
  };

  register() {
    console.log('Registro enviado:', this.user);
    // Aqui você pode adicionar a lógica de registro, como chamar um serviço de API.
  }
}
