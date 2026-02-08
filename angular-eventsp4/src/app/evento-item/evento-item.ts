import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { CurrencyPipe, DatePipe, TitleCasePipe, CommonModule } from '@angular/common';
import { EventoService } from '../services/evento';

@Component({
  selector: 'app-evento-item',
  standalone: true,
  imports: [CommonModule, DatePipe, CurrencyPipe, TitleCasePipe],
  templateUrl: './evento-item.html',
})
export class EventoItem {
  @Input() evento!: IEvent;
  @Output() deleteEv = new EventEmitter<string>();

  constructor(private eventoService: EventoService) {}

  deleteEvento() {
    this.eventoService.deleteEvento(this.evento.id!).subscribe(() => {
      this.deleteEv.emit(this.evento.id!);
    });
  }
}