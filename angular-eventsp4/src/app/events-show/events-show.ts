import { Component } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventFilterPipe } from '../pipes/event-filter-pipe';
import { EventoItem } from '../evento-item/evento-item';
import { EventoAdd } from '../evento-add/evento-add';
import { EventoService } from '../services/evento';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-events-show',
  imports: [FormsModule, EventFilterPipe, EventoItem, EventoAdd, CommonModule],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {
  orderPrice() {
    this.search = '';
    this.events = this.events.sort((a, b) => {
      return a.price - b.price;
    });
  }
  orderDate() {
    this.search = '';
    this.events = this.events.sort((a, b) => {
      const dA = new Date(a.date);
      const dB = new Date(b.date);
      return dA.getTime() - dB.getTime();
    });
  }
  search = '';
  events: IEvent[] = [];
  //? mirar si va
  events$: Observable<IEvent[]>;
  constructor(private eventoService: EventoService) {
    this.events$ = this.eventoService.getEventos();
  }

  deleteEvent(eventoBorrar: IEvent): void {
    this.events = this.events.filter((evento) => evento !== eventoBorrar);
  }
  /* addEvent(evento: IEvent): void {
    this.events = [...this.events, evento];
  } */
}
