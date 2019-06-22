import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TeaListComponent } from './tea-list/tea-list.component';
import {MatTableModule} from '@angular/material';


@NgModule({
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		RouterModule.forRoot([
			{ path: '', component: TeaListComponent },
		]),
		MatTableModule,
	],
	declarations: [
		AppComponent,
		TopBarComponent,
		TeaListComponent
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
