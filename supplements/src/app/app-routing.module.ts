import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageWishListComponent } from './pages/page-wish-list/page-wish-list.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'wishlist', component: PageWishListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
