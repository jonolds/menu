import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TeaListComponent } from './tea-list/tea-list.component';
import { ComponentComponent } from './component/component.component';

@NgModule({
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		RouterModule.forRoot([
			{ path: '', component: TeaListComponent },
		])
	],
	declarations: [
		AppComponent,
		TopBarComponent,
		TeaListComponent,
		ComponentComponent
	],
	// entryComponents: [
	// 	TeaEntryComponent
	// ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
