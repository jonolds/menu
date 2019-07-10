import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TeasComponent} from './teas/teas.component';
import {SignaturesComponent} from './signatures/signatures.component';

import {ProductDetailComponent} from './product-detail/product-detail.component';
import {MessagesComponent} from './messages/messages.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
	],
	declarations: [
		AppComponent,
		DashboardComponent,
		TeasComponent,
		ProductDetailComponent,
		MessagesComponent,
		SignaturesComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
