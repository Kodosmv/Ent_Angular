import { Component } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { EventoService } from '../services/evento';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evento-add',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './evento-add.html',
})
export class EventoAdd {
  evento: IEvent = { title: '', image: '', date: '', description: '', price: 0 };

  constructor(private eventoService: EventoService, private router: Router) {}

  addEvent():void {
    console.log('Enviando este objeto:', this.evento);
    this.eventoService.addEvento(this.evento).subscribe({
      next: () => this.router.navigate(['/eventos']),
      error: (e) => console.error("Error al guardar:", e)
    });
  }

  changeImage(input: HTMLInputElement): void {
    const file = input.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => this.evento.image = reader.result as string;
      reader.readAsDataURL(file);
    }
  }
}