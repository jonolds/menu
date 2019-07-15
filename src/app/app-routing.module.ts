// ======= app-routing.module.ts =======
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {TeasComponent} from './teas/teas.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {SignaturesComponent} from './signatures/signatures.component';

const routes: Routes = [
	{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
	{path: 'dashboard', component: DashboardComponent},
	{path: 'product-detail/:id', component: ProductDetailComponent},
	{path: 'teas', component: TeasComponent},
	{path: 'signatures', component: SignaturesComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
