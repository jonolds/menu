// ======= app.module.ts =======
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

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
		HttpClientModule,
		// HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
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
