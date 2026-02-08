import { Injectable } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  private eventsEndpoint = 'http://localhost:3000/eventos';

  constructor(private http: HttpClient) {}

  getEventos(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.eventsEndpoint).pipe(
      catchError((resp: HttpErrorResponse) =>
        throwError(() => new Error(`Error: ${resp.status}`))
      )
    );
  }

  addEvento(evento: IEvent): Observable<IEvent> {
    return this.http.post<IEvent>(this.eventsEndpoint, evento).pipe(
      catchError((resp: HttpErrorResponse) =>
        throwError(() => new Error(`Error: ${resp.status}`))
      )
    );
  }

  deleteEvento(id: string): Observable<void> {
    return this.http.delete<void>(`${this.eventsEndpoint}/${id}`).pipe(
      catchError((resp: HttpErrorResponse) =>
        throwError(() => new Error(`Error: ${resp.status}`))
      )
    );
  }
}