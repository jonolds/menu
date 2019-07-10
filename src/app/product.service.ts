import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {Tea} from './definitions/tea';
import {TEAS} from './definitions/mock-teas';
import {Signature} from './definitions/signature';
import {SIGNATURES} from './definitions/mock-signatures';

import {MessageService} from './message.service';

@Injectable({providedIn: 'root'})
export class ProductService {

	constructor(private messageService: MessageService) { }

	getTeas(): Observable<Tea[]> {
		// TODO: send the message _after_ fetching the teas
		this.messageService.add('ProductService: fetched teas');
		return of(TEAS);
	}

	getTea(id: number): Observable<Tea> {
		// TODO: send the message _after_ fetching the hero
		this.messageService.add(`ProductService: fetched tea id=${id}`);
		return of(TEAS.find(tea => tea.id === id));
	}

	getSignatures(): Observable<Signature[]> {
		// TODO: send the message _after_ fetching the signatures
		this.messageService.add('ProductService: fetched signatures');
		return of(SIGNATURES);
	}

	getSignature(id: number): Observable<Signature> {
		// TODO: send the message _after_ fetching the hero
		this.messageService.add(`ProductService: fetched signature id=${id}`);
		return of(SIGNATURES.find(signature => signature.id === id));
	}
}
