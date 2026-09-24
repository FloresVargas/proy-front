import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  @Input()
  nombreCarrera: string = 'Sistemas';

  @Output()
  inicioDeSesion = new EventEmitter<boolean>();


  protected inicioDeSesionClicked() {
    console.log('Inicio deSesion clicked');
    this.inicioDeSesion.emit(true);
  }

}
