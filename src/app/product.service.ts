// ======= product.service.ts =======
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

import {Tea} from './definitions/tea';
import {Signature} from './definitions/signature';
import {SIGNATURES} from './definitions/mock-signatures';
import {MessageService} from './message.service';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class ProductService {
	// private teasUrl = 'api/teas';  // URL to web api
	// private teasUrl = 'http://csce.uark.edu/\~jolds/teas.php';
	private teasUrl = './assets/teas.json';

	teas: Tea[];

	constructor(private http: HttpClient, private messageService: MessageService) { }

	getTeas(): Observable<Tea[]> {
		return this.http.get<Tea[]>(this.teasUrl).pipe(
			tap(_ => this.log('fetched teas')),
			catchError(this.handleError<Tea[]>('getTeas', []))
		);
	}

	fetchTeas(): Observable<Tea[]> {
		return this.http.get<Tea[]>(this.teasUrl).pipe(
			tap(_ => this.log('fetched teas')),
			catchError(this.handleError<Tea[]>('getTeas', []))
		);
	}

	getTea(id: number): Observable<Tea> {
		const url = `${this.teasUrl}/${id}`;
		console.log('product service: getTea(id)');
		console.log(url);
		return this.http.get<Tea>(url).pipe(
			tap(_ => this.log(`fetched tea id=${id}`)),
			catchError(this.handleError<Tea>(`getTea id=${id}`))
		);
	}

	/** PUT: update the hero on the server */
	updateTea(tea: Tea): Observable<any> {
		return this.http.put(this.teasUrl, tea, httpOptions).pipe(
			tap(_ => this.log(`updated tea id=${tea.id}`)),
			catchError(this.handleError<any>('updateTea'))
		);
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

	/** Handle Http operation that failed.
	 * Let the app continue.
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result */
	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead
			// TODO: better job of transforming error for user consumption
			this.log(`${operation} failed: ${error.message}`);
			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}

	/** Log a HeroService message with the MessageService */
	private log(message: string) {
		this.messageService.add(`ProductService: ${message}`);
	}
}
