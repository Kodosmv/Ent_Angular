import { Component } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { CurrencyPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventFilterPipe } from '../pipes/event-filter-pipe';

@Component({
  selector: 'app-events-show',
  imports: [CurrencyPipe, DatePipe, TitleCasePipe, FormsModule, EventFilterPipe],
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
  events: IEvent[] = [
    {
      title: 'foto uno',
      image: 'img1.jpg',
      date: '2004-05-08',
      description: 'noseque',
      price: 21,
    },
    {
      title: 'Prueba dos',
      image: 'img2.jpg',
      date: '2009-05-08',
      description: 'siiii',
      price: 5,
    },
  ];
  newEvent: IEvent = { title: '',
    description: '', 
    image: '', price: 0,
    date: ''
  };
  addEvent() {
    this.events.push(this.newEvent);
    this.newEvent = {
      title: '',
      description: '', 
      image: '',
      price: 0,
      date: ''
    };
  }
  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; } const reader: FileReader = new FileReader(); reader.readAsDataURL(fileInput.files[0]); reader.addEventListener('loadend', e => {
    this.newEvent.image = reader.result as string;
    });
  }
}
