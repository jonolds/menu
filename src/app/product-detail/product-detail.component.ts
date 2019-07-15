// ======= product-detail.component.ts =======
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Tea} from '../definitions/tea';
import {Signature} from '../definitions/signature';
import {ProductService} from '../product.service';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
	tea: Tea;
	signature: Signature;

	constructor(private route: ActivatedRoute, private productService: ProductService, private location: Location) {}
	ngOnInit(): void { this.getProduct(); }

	getProduct(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		if (id >= 100 && id < 200) {
			this.productService.getTea(id).subscribe(tea => this.tea = tea);
		}
		if (id >= 200 && id < 300) {
			this.productService.getSignature(id).subscribe(signature => this.signature = signature);
		}
	}

	goBack(): void { this.location.back(); }
}
