import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TeaDetailComponent} from './tea-detail/tea-detail.component';
import {TeasComponent} from './teas/teas.component';
import {MessagesComponent} from './messages/messages.component';

import {AppRoutingModule} from './app-routing.module';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		DashboardComponent,
		TeasComponent,
		TeaDetailComponent,
		MessagesComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
