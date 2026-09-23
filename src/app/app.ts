import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Pantalla } from './pantalla/pantalla';
import { Login } from './login/login';
import { Portada } from './portada/portada';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pantalla, Login, Portada],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('Teresa');

  ngOnInit(): void {
    initFlowbite();
  }
}
