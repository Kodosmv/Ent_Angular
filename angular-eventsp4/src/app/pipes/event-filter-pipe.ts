import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';

@Pipe({
  name: 'eventFilter',
  standalone: true,
  pure: false 
})
export class EventFilterPipe implements PipeTransform {
  transform(events: IEvent[] | null, searchTerm: string): IEvent[] {
    if (!events) return [];
    if (!searchTerm || typeof searchTerm !== 'string' || searchTerm.trim() === '') {
      return events;
    }

    const term = searchTerm.toLowerCase().trim();
    return events.filter(e => 
      e.title.toLowerCase().includes(term) || 
      e.description.toLowerCase().includes(term)
    );
  }
}