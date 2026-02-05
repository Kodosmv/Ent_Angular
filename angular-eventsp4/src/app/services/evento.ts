import { Injectable } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  private productsEndpoint = 'http://localhost:3000/eventos';
  constructor(private http: HttpClient) {}
  getEventos(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.productsEndpoint).pipe(
      catchError((resp: HttpErrorResponse) =>
        throwError(
          () =>
            new Error(
              ` Error obteniendo productos. Código de servidor: ${resp.status}.
              Mensaje: ${resp.message}`,
            ),
        ),
      ),
    );
  }
  addEvento( evento: IEvent): Observable<IEvent>{ 
    return this.http
      .post<IEvent>(this.productsEndpoint, evento)
      .pipe(
        catchError((resp: HttpErrorResponse)=>
        throwError(
          () =>
            new Error(
              `Error crear producto. Código de servidor: ${resp.status}. Mensaje:
              ${resp.message}`,
            ),
          ),
        ),
      );
  }
}
