import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { IEvent } from '../../interfaces/i-event'

@Component({
  selector: 'app-evento-item',
  imports: [DatePipe, CurrencyPipe, TitleCasePipe],
  templateUrl: './evento-item.html',
  styleUrl: './evento-item.css',
})
export class EventoItem {

  
  @Input() evento!: IEvent;
  @Output() deleteEv = new EventEmitter<void>();

  deleteEvento() {
    this.deleteEv.emit();
  }
  
}
