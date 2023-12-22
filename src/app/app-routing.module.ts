import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './shoping/items/items.component';

const routes: Routes = [
  // {path: '', redirectTo: "items"},
  {path:'', component: ItemsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
