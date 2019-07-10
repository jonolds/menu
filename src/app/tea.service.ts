import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {Tea} from './tea';
import {TEAS} from './mock-teas';
import {MessageService} from './message.service';

@Injectable({providedIn: 'root'})
export class TeaService {

	constructor(private messageService: MessageService) { }

	getTeas(): Observable<Tea[]> {
		// TODO: send the message _after_ fetching the teas
		this.messageService.add('TeaService: fetched teas');
		return of(TEAS);
	}

	getTea(id: number): Observable<Tea> {
		// TODO: send the message _after_ fetching the hero
		this.messageService.add(`TeaService: fetched tea id=${id}`);
		return of(TEAS.find(tea => tea.id === id));
	}
}
