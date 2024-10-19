import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';

  data: any[] = [];

  constructor(private clienteService: ClienteService) {

    this.clienteService.getData().subscribe({
      next: (resp) => {
        this.data = resp;
      }
    })
  }
}
