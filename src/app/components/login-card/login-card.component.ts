import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css'],
})
export class LoginCardComponent {
  /* Evento para captar mudanças no valor do campo username e expor ao componente pai  */
  @Output() usernameChange = new EventEmitter<string>();

  /* Variável para guardar os valores digitados pelo o usuário */
  public loginFormData: {
    username: string;
    password: string;
  };

  constructor() {
    /* Inicializa o valor dos campos do formulário */
    this.loginFormData = {
      password: '',
      username: '',
    };
  }

  /* Função responsável por emitir o evento de mudança no valor do campo username */
  emitUsernameChange(newUsername: string) {
    this.usernameChange.emit(newUsername);
  }
}
