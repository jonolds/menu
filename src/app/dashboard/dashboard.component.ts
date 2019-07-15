// ======= dashboard.component.ts =======
import {Component, OnInit} from '@angular/core';
import {Tea} from '../definitions/tea';
import {ProductService} from '../product.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	teas: Tea[] = [];

	constructor(private productService: ProductService) { }
	ngOnInit() { this.getTeas();}

	getTeas(): void { this.productService.getTeas().subscribe(teas => this.teas = teas.slice(1, 5)); }
}
