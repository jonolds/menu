// ======= signatures.component.ts =======
import {Component, OnInit} from '@angular/core';

import {Signature} from '../definitions/signature';
import {ProductService} from '../product.service';

@Component({
	selector: 'app-signatures',
	templateUrl: './signatures.component.html',
	styleUrls: ['./signatures.component.css']
})
export class SignaturesComponent implements OnInit {
	signatures: Signature[];

	constructor(private productService: ProductService) { }
	ngOnInit() { this.getSignatures(); }

	getSignatures(): void { this.productService.getSignatures().subscribe(signatures => this.signatures = signatures); }
}
