import { Component, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { EventoService } from '../services/evento';
@Component({
  selector: 'app-evento-add',
  imports: [FormsModule],
  templateUrl: './evento-add.html',
  styleUrl: './evento-add.css',
})
export class EventoAdd {
  /* @Output() addEv = new EventEmitter<IEvent>(); */

  evento: IEvent = {
    title: '',
    image: '',
    date: '',
    description: '',
    price: 0,
  };
  evento$: Observable<IEvent>;
  constructor(private eventoService: EventoService) {
    /* this.evento$ = this.eventoService.addEvento(this.evento); */
  }
  addEvent(): void {
    /* this.addEv.emit(this.evento); */
    this.eventoService.addEvento(this.evento);
    this.evento = {
      title: '',
      image: '',
      date: '',
      description: '',
      price: 0,
    };
  }

  changeImage(input: HTMLInputElement): void {
    const file = input.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => (this.evento.image = reader.result as string);
    reader.readAsDataURL(file);
  }
}
