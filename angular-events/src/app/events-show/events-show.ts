import { Component } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';   

@Component({
  selector: 'app-events-show',
  imports: [],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
}) 
export class EventsShow {

  events: IEvent[] =[{
  title: 'Raro',
  image: '',
  date: '2004-05-08',
  description: 'noseque',
  price: 21,
  },
  {
  title: 'Nooo',
  image: '',
  date: '2009-05-08',
  description: 'siiii',
  price: 55,
  }
  ];
  ;
}
