import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Pantalla } from './pantalla/pantalla';
import { Login } from './login/login';
import { Portada } from './portada/portada';
import { Carrera } from './carrera/carrera';
import { Estudiante } from './estudiante/estudiante';
import { Empresa } from './empresa/empresa';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pantalla, Login, Portada, Carrera, Estudiante, Empresa],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('Teresa');

  botonLoginSesionIniciadoVariable: boolean = false;

  ngOnInit(): void {
    initFlowbite();
  }

  inicioSesionLoginClicked(isInicioSesionClicked: boolean) {
    this.botonLoginSesionIniciadoVariable = isInicioSesionClicked;
  }
}
