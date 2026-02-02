import { Injectable } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  
  getEventos(): IEvent[] {
    return [
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
  }

}
