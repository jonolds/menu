import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {TeasComponent} from './teas/teas.component';
import {TeaDetailComponent} from './tea-detail/tea-detail.component';

const routes: Routes = [
	{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
	{path: 'dashboard', component: DashboardComponent},
	{path: 'detail/:id', component: TeaDetailComponent},
	{path: 'teas', component: TeasComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
