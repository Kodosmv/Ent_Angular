import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';

@Pipe({
  name: 'eventFilter',
})
export class EventFilterPipe implements PipeTransform {
  transform(events: IEvent[], searchTerm: string): IEvent[] {
    //const filter = searchTerm ? searchTerm.toLocaleLowerCase() : null;
    if (!events || !searchTerm) return events;
    searchTerm = searchTerm.toLocaleLowerCase();
    return events.filter((eve) => eve.title.toLocaleLowerCase().includes(searchTerm));
  }
}
