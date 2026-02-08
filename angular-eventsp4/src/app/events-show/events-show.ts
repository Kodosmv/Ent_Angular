import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { EventoService } from '../services/evento';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventFilterPipe } from '../pipes/event-filter-pipe';
import { EventoItem } from '../evento-item/evento-item'; // <--- MIRA SI ESTO ESTÁ BIEN
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-events-show',
  standalone: true,
  imports: [CommonModule, FormsModule, EventFilterPipe, EventoItem, RouterModule],
  templateUrl: './events-show.html',
})
export class EventsShow implements OnInit {
  events: IEvent[] = [];
  search: string = '';

  constructor(
    private eventoService: EventoService,
    private cd: ChangeDetectorRef  // ni idea de perq falla si no esta 
  ) {}

  ngOnInit(): void {
    this.cargarEventos();
  }

  cargarEventos() {
    this.eventoService.getEventos().subscribe({
      next: (data) => {
        console.log('Recibidos:', data);
        this.events = data; 
        this.search = '';
        this.cd.detectChanges();  
      },
      error: (err) => {
        console.error('Error al conectar con el servidor:', err);
      }
    });
  }

  deleteEvent(id: string): void {
    
    this.events = this.events.filter(e => e.id !== id);
  }

  orderPrice() {
    this.events = [...this.events.sort((a, b) => 
      a.price - b.price)];
  }

  orderDate() {
    this.events = [...this.events.sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime())];
  }
}